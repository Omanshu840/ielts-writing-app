import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AttemptCard } from "@/components/attempt-card";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getAttempts } from "@/lib/db/attempts";
import type { WritingAttempt } from "@/lib/types";

export function Home() {
    const navigate = useNavigate();
    const [task1Attempts, setTask1Attempts] = useState<WritingAttempt[]>([]);
    const [task2Attempts, setTask2Attempts] = useState<WritingAttempt[]>([]);

    useEffect(() => {
        const loadAttempts = async () => {
            const attempts = await getAttempts();
            setTask1Attempts(attempts.filter((a) => a.taskType === "task1"));
            setTask2Attempts(attempts.filter((a) => a.taskType === "task2"));
        };

        loadAttempts();
    }, []);

    return (
        <div className="space-y-6">
			<div className="flex gap-4">
            <Button
                onClick={() => navigate("/attempt-essay/task1")}
                className="w-full sm:w-auto"
            >
                Practice Task 1
            </Button>
            <Button
                onClick={() => navigate("/attempt-essay/task2")}
                className="w-full sm:w-auto"
                variant="secondary"
            >
                Practice Task 2
            </Button>
			</div>
            <Tabs defaultValue="task1" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="task1">Task 1</TabsTrigger>
                    <TabsTrigger value="task2">Task 2</TabsTrigger>
                </TabsList>

                <TabsContent value="task1">
                    <div className="grid gap-4">
                        {task1Attempts.length > 0 ? (
                            task1Attempts.map((attempt) => (
                                <Link
                                    to={`/attempt/${attempt.id}`}
                                    key={attempt.id}
                                >
                                    <AttemptCard attempt={attempt} />
                                </Link>
                            ))
                        ) : (
                            <div className="text-center py-12 text-muted-foreground">
                                No Task 1 attempts yet
                            </div>
                        )}
                    </div>
                </TabsContent>

                <TabsContent value="task2">
                    <div className="grid gap-4">
                        {task2Attempts.length > 0 ? (
                            task2Attempts.map((attempt) => (
                                <Link
                                    to={`/attempt/${attempt.id}`}
                                    key={attempt.id}
                                >
                                    <AttemptCard attempt={attempt} />
                                </Link>
                            ))
                        ) : (
                            <div className="text-center py-12 text-muted-foreground">
                                No Task 2 attempts yet
                            </div>
                        )}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
