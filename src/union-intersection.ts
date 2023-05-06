type NoobDev = {
  name: string;
};

type JuniorDev = NoobDev & {
  name: string;
  expertise: string;
  expereience: number;
};

type NextLvlDev = JuniorDev & {
  leaderShipExperience: number;
  level: 'junior' | 'mid' | 'senior';
};

const newDev: NoobDev | JuniorDev = {
  name: "arfan",
  expertise: "javascript",
  expereience: 1,
};

const nextDev: NextLvlDev = {
  name: "Next",
  expereience: 2,
  expertise: "Typescript",
  leaderShipExperience: 1,
  level: 'senior'
};
