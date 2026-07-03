import type { StyleBookType } from "./StyleBook";

export type TeamInfoRankType = {
  code: string;
  style: StyleBookType;
  text: {
    long: string;
    short: string;
  };
};