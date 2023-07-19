import { TeamNameEnum, YearEnum } from "../NBApickData";
import type { PickCodeType } from "../NBApickData";

export const pickCodeSeparator = ( PickCode: PickCodeType) => {
  const team = TeamNameEnum.parse(PickCode.split("-")[0]);
  const year = YearEnum.parse(PickCode.split("-")[1]);
  return {PCteam: team, PCyear: year}
}