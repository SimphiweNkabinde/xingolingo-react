const lesson1 = {
  title: "Your First Lesson",
  questions: [
    {
      title: "Pick the correct meaning",
      description: "What does 'Molo' mean?",
      example: "Molo Bhuti!",
      options: [
        { value: "Hello", correct: true, feedback: "Correct! Well Done." },
        { value: "Goodbye", feedback: "Not quite" },
        { value: "Goodnight", feedback: "Not quite" },
      ],
    },
    {
      title: "Pick the respectful response",
      description: "",
      example: "A man says: 'Molo, sisi/bhuti. Unjani?'",
      options: [
        {
          value: "Ndiphilile enkosi. Wena unjani?",
          correct: true,
          feedback: "Siyavuya!",
        },
        {
          value: "Ndiphilile, wena?",
          feedback: "Not quite",
        },
      ],
    },
  ],
};

export const lessons = [lesson1];
