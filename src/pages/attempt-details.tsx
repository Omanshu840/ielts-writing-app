import { useParams } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { getAttemptById } from "@/lib/db/attempts";
import { useEffect, useState } from "react";
import type { Mistake, WritingAttempt } from "@/lib/types";
import { AddCorrection } from "@/components/add-correction";
import { formatString } from "@/lib/utils";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export function AttemptDetails() {
    const { attemptId } = useParams();
    const navigate = useNavigate();
    const [attempt, setAttempt] = useState<WritingAttempt | null>();
    const [loading, setLoading] = useState(true);
    const [selectedMistake, setSelectedMistake] = useState<Mistake | null>(
        null
    );
    const [popoverOpen, setPopoverOpen] = useState(false);

    useEffect(() => {
        const loadAttempt = async () => {
            if (!attemptId) return;
            setLoading(true);
            const data = await getAttemptById(attemptId);
            setAttempt(data);
            setLoading(false);
        };

        loadAttempt();
    }, [attemptId]);

    // Close popover when clicking outside
    useEffect(() => {
        const handleClickOutside = () => setPopoverOpen(false);
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!attempt) {
        return (
            <div className="text-center py-12">
                <h3 className="text-lg font-medium">Attempt not found</h3>
                <Button onClick={() => navigate(-1)} className="mt-4">
                    Go back
                </Button>
            </div>
        );
    }

    // Function to highlight mistakes in the original text
    const highlightMistakes = (text: string, mistakes: Mistake[]) => {
        if (!mistakes.some((m) => m.highlightedText)) return text;

        const parts = [];
        let lastIndex = 0;

        // Find all mistakes and their positions
        const mistakeSpans = mistakes
            .filter((m) => m.highlightedText)
            .map((m) => ({
                mistake: m,
                index: text.indexOf(m.highlightedText!),
            }))
            .filter((m) => m.index >= 0)
            .sort((a, b) => a.index - b.index);

        // Split the text into parts
        mistakeSpans.forEach(({ mistake, index }) => {
            const before = text.slice(lastIndex, index);
            if (before) parts.push(before);

            const highlighted = text.slice(
                index,
                index + mistake.highlightedText!.length
            );
            parts.push(
                <Popover
                    key={index}
                    open={popoverOpen && selectedMistake?.id === mistake.id}
                >
                    <PopoverTrigger asChild>
                        <span
                            className="bg-red-100 border-b-2 border-red-500 cursor-pointer hover:bg-red-200"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedMistake(mistake);
                                setPopoverOpen(true);
                            }}
                        >
                            {highlighted}
                        </span>
                    </PopoverTrigger>
                    <PopoverContent className="w-80" align="start">
                        <div className="space-y-2">
                            <h4 className="font-medium leading-none">
                                {mistake.type.replace("-", " ")} •{" "}
                                {mistake.severity}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                {mistake.description}
                            </p>
                            {mistake.originalLine && (
                                <div className="mt-2">
                                    <p className="text-xs font-medium text-muted-foreground">
                                        Original:
                                    </p>
                                    <p className="text-sm">
                                        {mistake.originalLine}
                                    </p>
                                </div>
                            )}
                            {mistake.fixedLine && (
                                <div className="mt-1">
                                    <p className="text-xs font-medium text-muted-foreground">
                                        Corrected:
                                    </p>
                                    <p className="text-sm">
                                        {mistake.fixedLine}
                                    </p>
                                </div>
                            )}
                        </div>
                    </PopoverContent>
                </Popover>
            );

            lastIndex = index + mistake.highlightedText!.length;
        });

        const remaining = text.slice(lastIndex);
        if (remaining) parts.push(remaining);

        return parts.length > 0 ? parts : text;
    };

    return (
        <div className="space-y-6 w-full">
            <Button
                variant="outline"
                onClick={() => navigate(-1)}
                className="w-full sm:w-auto"
            >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to attempts
            </Button>

            <Card>
                <CardHeader>
                    <CardTitle>Question</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="whitespace-pre-line">{attempt.question}</p>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle>Your Attempt</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Alert
                            variant="destructive"
                            className="whitespace-pre-line"
                        >
                            <AlertDescription className="block">
                                {highlightMistakes(
                                    attempt.original,
                                    attempt.mistakes
                                )}
                            </AlertDescription>
                        </Alert>
                        <div className="mt-4 text-sm text-muted-foreground">
                            {attempt.wordCount} words • {attempt.timeSpent}{" "}
                            minutes
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle>Improved Version</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Alert className="whitespace-pre-line bg-muted">
                            <AlertDescription>
                                {attempt.improved}
                            </AlertDescription>
                        </Alert>
                        <div className="mt-4 text-sm text-muted-foreground">
                            Band Score:{" "}
                            <Badge variant="secondary">
                                {attempt.bandScore}
                            </Badge>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Feedback & Mistakes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="p-4 bg-muted rounded-md">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: formatString(attempt.feedback),
                            }}
                        />
                    </div>

                    <Separator />

                    <h3 className="font-medium">
                        Identified Mistakes ({attempt.mistakes.length})
                    </h3>
                    <div className="space-y-4">
                        {attempt.mistakes.map((mistake) => (
                            <Collapsible
                                key={mistake.id}
                                className="border rounded-lg overflow-hidden"
                            >
                                <CollapsibleTrigger className="w-full p-4 hover:bg-muted/50 transition-colors flex justify-between items-center">
                                    <div className="flex items-center space-x-3">
                                        <Badge
                                            variant="outline"
                                            className={cn(
                                                "font-medium capitalize",
                                                mistake.type === "grammar" ?
                                                    "bg-amber-100 text-amber-800 border-amber-300" : "",
                                                mistake.type === "vocabulary" ?
                                                    "bg-blue-100 text-blue-800 border-blue-300" : "",
                                                mistake.type === "coherence" ?
                                                    "bg-purple-100 text-purple-800 border-purple-300" : "",
                                                mistake.type ===
                                                    "task-achievement" ?
                                                    "bg-green-100 text-green-800 border-green-300": ""
                                            )}
                                        >
                                            {mistake.type.replace("-", " ")}
                                        </Badge>
                                        <div>
                                            <h4 className="font-medium text-left">
                                                {mistake.description}
                                            </h4>
                                            <p className="text-sm text-muted-foreground">
                                                Severity: {mistake.severity}
                                            </p>
                                        </div>
                                    </div>
                                    <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
                                </CollapsibleTrigger>

                                <CollapsibleContent className="p-4 pt-0 space-y-3">
                                    {mistake.originalLine && (
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground mb-1">
                                                Original Line
                                            </p>
                                            <div className="p-3 bg-red-50 rounded border-l-4 border-red-400">
                                                <p>{mistake.originalLine}</p>
                                            </div>
                                        </div>
                                    )}

                                    {mistake.fixedLine && (
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground mb-1">
                                                Corrected Line
                                            </p>
                                            <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
                                                <p>{mistake.fixedLine}</p>
                                            </div>
                                        </div>
                                    )}
                                </CollapsibleContent>
                            </Collapsible>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <AddCorrection attempt={attempt} />
        </div>
    );
}

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}
