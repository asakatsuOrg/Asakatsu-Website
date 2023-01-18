import { BiUserCircle } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { GiStairsGoal } from "react-icons/gi";

export const INFORMATION1 = [
  {
    id: 1,
    detail:
      "AsaKatsu is a Japanese term for waking up a little early to do something productive, in line with a goal. For example; read 4 books per month, do 100 days challenge, etc.",
  },
  {
    id: 2,
    detail:
      "In this website, everyone who will commit will have to do a thing or two every morning and log the progress here.",
  },
  {
    id: 3,
    detail:
      "We have to write our goals in order to reach them one by one, Why not using the website?",
  },
];

export const INFORMATION2 = [
  {
    id: 1,
    detail:
      "You are going to have your own profile which You can add your links and set your profile to be private.",
    icon: BiUserCircle,
  },
  {
    id: 2,
    detail:
      "All user's information (name, links) will be displayed here. You can set your profile to be private so that no one can see it.",
    icon: MdDashboard,
  },
  {
    id: 3,
    detail:
      "You will be able to add your goals which needs the following details:",
    list: [
      "goal",
      "step to achieve your goal",
      "target date",
      "achievement after reading your goal",
    ],
    icon: IoIosAddCircle,
  },
  {
    id: 4,
    detail: "You can see, edit and remove your goals",
    icon: GiStairsGoal,
  },
];
