import type { NextApiRequest, NextApiResponse } from "next";

interface Ireply {
  id: number;
  name: string;
  userName: string;
  reply: string;
}

const result: Ireply[] = [
  {
    id: 0,
    name: "Vova ayande",
    userName: "@asiati2",
    reply: "Amazing Stuff bro...",
  },
  {
    id: 1,
    name: "John Nicko",
    userName: "@nicko",
    reply: "Loving your work bro!",
  },
  {
    id: 2,
    name: "Brendah Mayer",
    userName: "@brendah",
    reply: "OMG this is unreal!!!",
  },
  {
    id: 3,
    name: "Chavo",
    userName: "@chavo_real",
    reply: "I would like to join programming as well",
  },
  {
    id: 4,
    name: "Hamadi Kijicho",
    userName: "@hamadi",
    reply: "You should probably let people see this at a fee.",
  },
  {
    id: 5,
    name: "Bosibori",
    userName: "@bosibori",
    reply: "Are you a senior dev?",
  },
  {
    id: 6,
    name: "Danstan",
    userName: "@danstan",
    reply: "You studied in Moringa right?",
  },
  {
    id: 7,
    name: "Amanda",
    userName: "@amanda",
    reply: "Great stuff over heare chief...",
  },
  {
    id: 8,
    name: "Future King",
    userName: "@futureKing",
    reply: "Would like you to mentor me dawg.",
  }
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    data: result,
  });
}
