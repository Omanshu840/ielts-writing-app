import type { WritingAttempt } from './types'

export const attempts: WritingAttempt[] = [
  {
    id: '1',
    taskType: 'task1',
    question: 'The chart below shows the percentage of households in owned and rented accommodation in England and Wales between 1918 and 2011. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    original: `The chart show the households in owned and rented in England and Wales from 1918 to 2011. Owned houses increased while rented decreased. In 1918 rented was more but in 2011 owned was more.`,
    improved: `The chart illustrates the proportion of households in owned versus rented accommodation in England and Wales from 1918 to 2011. Overall, home ownership increased significantly while renting declined over this period. In 1918, approximately 75% of households rented their accommodation, compared to just 25% that owned their homes. By 2011, this situation had reversed completely, with nearly 70% owning their homes and only about 30% renting.`,
    feedback: `The improved version provides more precise vocabulary ("illustrates", "proportion"), clearer comparisons with specific percentages, and better overall structure with an introductory overview sentence.`,
    mistakes: [
      {
        id: '1-1',
        type: 'grammar',
        description: 'Subject-verb agreement error ("chart show" should be "chart shows")',
        severity: 'medium',
        highlightedText: 'show'
      },
      {
        id: '1-2',
        type: 'vocabulary',
        description: 'Imprecise vocabulary ("Owned houses increased" could be more specific)',
        severity: 'low',
        highlightedText: 'Owned houses increased'
      },
      {
        id: '1-3',
        type: 'task-achievement',
        description: 'Missing key details and specific data points',
        severity: 'high'
      }
    ],
    date: '2023-05-15',
    bandScore: 5.5,
    wordCount: 45,
    timeSpent: 15
  },
  {
    id: '2',
    taskType: 'task2',
    question: 'Some people believe that unpaid community service should be a compulsory part of high school programmes (for example working for a charity, improving the neighborhood or teaching sports to younger children). To what extent do you agree or disagree?',
    original: `I agree that students should do community service because it is good for them. They can learn new skills and help people. It will make them better persons. Also it looks good on CV.`,
    improved: `I strongly agree that unpaid community service should be mandatory in high school programmes for several compelling reasons. Firstly, such initiatives foster civic responsibility and empathy in young individuals. By engaging in charitable work or mentoring younger children, students develop interpersonal skills and gain valuable life experiences that cannot be acquired in traditional classroom settings. Furthermore, these activities enhance college applications and future employment prospects by demonstrating well-rounded character and initiative. Ultimately, compulsory community service benefits both individuals and society as a whole.`,
    feedback: `The improved version presents a clearer position ("strongly agree"), develops arguments more thoroughly with specific examples, and uses more academic vocabulary.`,
    mistakes: [
      {
        id: '2-1',
        type: 'coherence',
        description: 'Lacks clear paragraph structure and linking words',
        severity: 'medium'
      },
      {
        id: '2-2',
        type: 'vocabulary',
        description: 'Basic vocabulary ("good", "persons") could be more sophisticated',
        severity: 'low',
        highlightedText: 'good for them'
      },
      {
        id: '2-3',
        type: 'task-achievement',
        description: 'Arguments need more development and support',
        severity: 'high'
      }
    ],
    date: '2023-06-20',
    bandScore: 6.0,
    wordCount: 52,
    timeSpent: 25
  }
]