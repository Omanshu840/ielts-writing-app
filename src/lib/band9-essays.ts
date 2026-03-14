export interface Highlight {
  text: string
  type: 'vocabulary' | 'phrase' | 'grammar' | 'structure'
  explanation: string
  example?: string
}

export interface Band9Essay {
  id: string
  question: string
  answer: string
  analysis: string
  taskType: 'task1' | 'task2'
  topic?: string
  wordCount?: number
  highlights?: Highlight[]
}

export const band9Essays: Band9Essay[] = [
    {
  "id": "task2-1",
  "taskType": "task2",
  "question": "Some people think that the government is wasting money on the arts and that this money could be better spent elsewhere. To what extent do you agree with this view?",
  "answer": "Art has long been a cornerstone of human civilization, reflecting culture, history, and emotion. In modern times, however, some critics argue that allocating public funds to the arts is a misuse of taxpayer money, especially when other pressing issues demand attention. While I acknowledge the importance of prioritizing basic needs, I firmly believe that government investment in the arts is not only justified but essential for societal growth and well-being.\n\nOne compelling reason to support public funding for the arts is its role in preserving cultural identity. Government-sponsored programs in visual arts, music, and theater serve as a means to protect and promote a nation's heritage. For instance, traditional dance forms in India and indigenous crafts in Latin America are kept alive through state-backed initiatives, allowing younger generations to remain connected to their roots. Without such support, many of these traditions might fade into obscurity.\n\nMoreover, the arts contribute significantly to both mental health and the economy. Public exposure to artistic expression has been shown to reduce stress and foster creativity, particularly among youth. In addition, sectors like film, music, and design create thousands of jobs and stimulate local economies. For example, the UK’s creative industries generated over £100 billion in 2019, proving that art is not just cultural capital, but economic as well.\n\nIn conclusion, although there are valid arguments for redirecting public funds to more immediate social needs, investing in the arts is neither wasteful nor secondary. Governments should continue to fund the arts as they enrich national identity, promote mental well-being, and bolster economic development. Rather than viewing the arts as a luxury, societies must recognize them as a vital thread in the fabric of progress.",
  "analysis": "This essay demonstrates a Band 9 performance by presenting a clear, well-developed argument with rich examples and precise language. The structure is cohesive, with seamless transitions and varied sentence forms. Vocabulary is sophisticated yet natural, and grammar is used flexibly with excellent control throughout.",
  "highlights": [
    {
      "text": "cornerstone of human civilization",
      "type": "phrase",
      "explanation": "A metaphor that powerfully establishes the foundational role of art.",
      "example": "Freedom of speech is the cornerstone of any democratic society."
    },
    {
      "text": "allocating public funds",
      "type": "vocabulary",
      "explanation": "Formal vocabulary used to describe government spending decisions.",
      "example": "Allocating public funds for education remains a top priority."
    },
    {
      "text": "misuse of taxpayer money",
      "type": "phrase",
      "explanation": "Common expression in debates about government spending.",
      "example": "Building luxury offices may be considered a misuse of taxpayer money."
    },
    {
      "text": "pressing issues demand attention",
      "type": "structure",
      "explanation": "Combines an adjective and verb structure to emphasize urgency.",
      "example": "Pressing climate issues demand global cooperation."
    },
    {
      "text": "essential for societal growth and well-being",
      "type": "vocabulary",
      "explanation": "Precise and high-level vocabulary that captures broad impact.",
      "example": "Access to clean water is essential for societal growth and well-being."
    },
    {
      "text": "preserving cultural identity",
      "type": "vocabulary",
      "explanation": "Academic collocation frequently used in cultural and social topics.",
      "example": "Language plays a key role in preserving cultural identity."
    },
    {
      "text": "kept alive through state-backed initiatives",
      "type": "structure",
      "explanation": "Effective passive voice construction highlighting external support.",
      "example": "Rare wildlife species are kept alive through conservation efforts."
    },
    {
      "text": "connected to their roots",
      "type": "phrase",
      "explanation": "An idiomatic expression for maintaining cultural ties.",
      "example": "Festivals help people stay connected to their roots."
    },
    {
      "text": "fade into obscurity",
      "type": "phrase",
      "explanation": "A vivid way to express something becoming forgotten.",
      "example": "Old traditions are in danger of fading into obscurity."
    },
    {
      "text": "reduce stress and foster creativity",
      "type": "vocabulary",
      "explanation": "Useful pair of benefits often associated with the arts or mindfulness.",
      "example": "Painting can reduce stress and foster creativity in children."
    },
    {
      "text": "stimulate local economies",
      "type": "vocabulary",
      "explanation": "Economics-related collocation, shows financial impact.",
      "example": "Tourism can stimulate local economies in rural areas."
    },
    {
      "text": "generated over £100 billion",
      "type": "vocabulary",
      "explanation": "Use of quantitative data to strengthen argument.",
      "example": "The IT industry generated over $300 billion last year."
    },
    {
      "text": "not just cultural capital, but economic as well",
      "type": "structure",
      "explanation": "Parallel structure to compare two types of value.",
      "example": "Education is not just a personal benefit, but a national asset as well."
    },
    {
      "text": "valid arguments for redirecting public funds",
      "type": "phrase",
      "explanation": "Shows balance by acknowledging the opposing view.",
      "example": "There are valid arguments for increasing defense budgets."
    },
    {
      "text": "neither wasteful nor secondary",
      "type": "grammar",
      "explanation": "Use of correlative conjunction 'neither...nor' to refute criticism.",
      "example": "The project is neither risky nor unprofitable."
    },
    {
      "text": "vital thread in the fabric of progress",
      "type": "phrase",
      "explanation": "A metaphorical expression illustrating the importance of the arts.",
      "example": "Education is a vital thread in the fabric of any nation's progress."
    },
    {
      "text": "Rather than viewing the arts as a luxury",
      "type": "grammar",
      "explanation": "Complex sentence with contrasting clause using 'rather than'.",
      "example": "Rather than punishing children, we should focus on understanding them."
    }
  ]
    },
    {
  "id": "task2-2",
  "taskType": "task2",
  "question": "Many people think that museums and galleries should only show work from local artists rather than work from other countries. Do you agree?",
  "answer": "Museums and galleries play a crucial role in preserving and showcasing human creativity and history. While some believe that these institutions should exclusively exhibit artwork from local artists, others argue for a more global representation. I firmly believe that museums and galleries should feature both local and international works, as this not only enriches cultural understanding but also inspires artistic growth.\n\nExhibiting international artwork fosters cross-cultural awareness and global appreciation. When visitors are exposed to creative works from different countries, they gain insight into foreign cultures, histories, and values. For instance, an exhibit of Japanese ukiyo-e prints or African tribal masks in a European museum offers viewers a chance to connect with traditions they may never otherwise encounter. Such exposure helps dismantle stereotypes and promotes a more tolerant and informed society.\n\nFurthermore, showcasing international works alongside local art encourages innovation and inspiration among native artists. Local creators can draw influence from various styles, techniques, and philosophies, leading to fresh interpretations and hybrid forms of expression. For example, the works of Indian modernists like M.F. Husain were deeply enriched by their exposure to Western art movements such as Cubism and Expressionism. This exchange of ideas fuels creative diversity and ensures that the artistic community continues to evolve.\n\nIn conclusion, while celebrating local talent is undeniably important, restricting museums and galleries to domestic art alone limits cultural exchange and artistic progress. Governments and curators should strive to maintain a balanced representation, allowing people to appreciate both their roots and the broader spectrum of global creativity. In an increasingly interconnected world, embracing international art is not only relevant but essential.",
  "analysis": "This essay demonstrates an excellent response to the question with a clear and nuanced position. Ideas are well developed, supported with specific examples, and logically sequenced. The vocabulary is rich and precise, the grammar is controlled and varied, and cohesive devices are used effortlessly. The conclusion offers a powerful call to action, completing a well-balanced argument.",
  "highlights": [
    {
      "text": "play a crucial role in preserving and showcasing",
      "type": "phrase",
      "explanation": "An effective formal phrase to describe important institutional functions.",
      "example": "Schools play a crucial role in preserving ethical values and showcasing academic growth."
    },
    {
      "text": "exclusively exhibit artwork",
      "type": "vocabulary",
      "explanation": "Advanced collocation for restricting display to a certain group.",
      "example": "The gallery plans to exclusively exhibit female photographers this year."
    },
    {
      "text": "enriches cultural understanding",
      "type": "vocabulary",
      "explanation": "Strong verb-noun collocation to describe intellectual benefit.",
      "example": "Traveling abroad enriches cultural understanding and empathy."
    },
    {
      "text": "fosters cross-cultural awareness",
      "type": "vocabulary",
      "explanation": "A precise phrase to explain global exposure and understanding.",
      "example": "Studying international literature fosters cross-cultural awareness among students."
    },
    {
      "text": "gain insight into foreign cultures",
      "type": "phrase",
      "explanation": "Useful expression to talk about deeper learning and appreciation.",
      "example": "Volunteering abroad helps one gain insight into foreign cultures."
    },
    {
      "text": "connect with traditions they may never otherwise encounter",
      "type": "structure",
      "explanation": "A conditional clause that introduces rare exposure through an opportunity.",
      "example": "Online platforms allow rural students to connect with ideas they may never otherwise encounter."
    },
    {
      "text": "helps dismantle stereotypes",
      "type": "vocabulary",
      "explanation": "Powerful verb-noun combination to indicate breaking down bias.",
      "example": "Cross-cultural friendships help dismantle harmful stereotypes."
    },
    {
      "text": "showcasing international works alongside local art",
      "type": "structure",
      "explanation": "Balanced structure emphasizing inclusion of both groups.",
      "example": "Showcasing traditional techniques alongside digital methods creates a comprehensive exhibit."
    },
    {
      "text": "draw influence from various styles",
      "type": "phrase",
      "explanation": "Describes artistic or intellectual inspiration with flexibility.",
      "example": "Modern chefs draw influence from both classical and fusion cuisines."
    },
    {
      "text": "leading to fresh interpretations and hybrid forms of expression",
      "type": "structure",
      "explanation": "Progressive structure showing outcomes of mixing ideas.",
      "example": "The blending of genres leads to fresh interpretations and hybrid storytelling techniques."
    },
    {
      "text": "deeply enriched by their exposure to",
      "type": "vocabulary",
      "explanation": "Useful phrase to describe transformative learning or influence.",
      "example": "Her music was deeply enriched by her exposure to folk traditions."
    },
    {
      "text": "exchange of ideas fuels creative diversity",
      "type": "phrase",
      "explanation": "Metaphorical phrase showing cause and effect in innovation.",
      "example": "Global conferences ensure that the exchange of ideas fuels creative diversity."
    },
    {
      "text": "while celebrating local talent is undeniably important",
      "type": "grammar",
      "explanation": "Complex sentence opening with concessive clause.",
      "example": "While online education is undeniably important, classroom interaction remains crucial."
    },
    {
      "text": "limits cultural exchange and artistic progress",
      "type": "phrase",
      "explanation": "Concise phrasing showing negative outcomes of exclusivity.",
      "example": "Strict censorship limits cultural exchange and artistic innovation."
    },
    {
      "text": "appreciate both their roots and the broader spectrum of global creativity",
      "type": "structure",
      "explanation": "Balanced parallel structure expressing dual appreciation.",
      "example": "Students should learn to appreciate both traditional values and modern perspectives."
    },
    {
      "text": "embracing international art is not only relevant but essential",
      "type": "grammar",
      "explanation": "Strong conclusion using correlative conjunction 'not only... but also'.",
      "example": "Learning a second language is not only useful but essential in today’s global world."
    }
  ]
}

]