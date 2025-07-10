import type { Correction }  from "./types";

export const corrections: Correction[] = [
  {
    id: "1",
    original: "Nowadays, many people is using smartphones.",
    corrected: "Nowadays, many people are using smartphones.",
    explanation: "The subject 'people' is plural, so it requires the plural verb 'are' instead of the singular 'is'.",
    mistakes: [
      {
        id: "1-1",
        type: "grammar",
        description: "Subject-verb agreement error",
        severity: "medium"
      }
    ],
    date: "2023-05-15",
    bandScore: 5.5
  },
  {
    id: "2",
    original: "The government should invest on education.",
    corrected: "The government should invest in education.",
    explanation: "The correct preposition to use with 'invest' is 'in', not 'on'.",
    mistakes: [
      {
        id: "2-1",
        type: "vocabulary",
        description: "Incorrect preposition",
        severity: "low"
      }
    ],
    date: "2023-06-20",
    bandScore: 6.0
  },
  {
    id: "3",
    original: "In conclusion, this is a big problem and we need to solve it.",
    corrected: "In conclusion, this is a significant issue that requires immediate attention and collaborative solutions.",
    explanation: "The corrected version uses more academic vocabulary and expands on the solution for better task achievement.",
    mistakes: [
      {
        id: "3-1",
        type: "vocabulary",
        description: "Basic vocabulary",
        severity: "medium"
      },
      {
        id: "3-2",
        type: "task-achievement",
        description: "Underdeveloped idea",
        severity: "high"
      }
    ],
    date: "2023-07-10",
    bandScore: 6.5
  }
];