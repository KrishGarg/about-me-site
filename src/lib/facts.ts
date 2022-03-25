const facts: string[] = [
  "The first computer was invented in the United States in 1877.",
];

const getRandomFact = () => {
  return facts[Math.floor(Math.random() * facts.length)];
};

export { facts, getRandomFact };
