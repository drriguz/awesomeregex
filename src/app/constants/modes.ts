import {Mode} from "../models/mode";

export const REGEX_MODES: Mode[] = [
  {type: 1, title: "Match mode"},
  {type: 2, title: "Find mode"},
  {type: 3, title: "Replace mode"},
];

export const MODE_IDS = {
  MATCH: 1,
  FIND: 2,
  REPLACE: 3,
};
