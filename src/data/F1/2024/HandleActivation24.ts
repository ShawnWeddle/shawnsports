import type { DriverCode24Type } from "./F1data24"

export const driverActivation2024: {[Key in DriverCode24Type]? : {teammateActive: boolean}} = {};

type ActiveDriversType = typeof driverActivation2024;

export const driverTeammates2024: {[Key in DriverCode24Type] : DriverCode24Type[]} = {
  ALB : ["COL", "SAR"],
  ALO : ["STR"],
  BEA : ["HUL", "MAG", "LEC", "SAI"],
  BOT : ["ZHO"],
  COL : ["ALB", "SAR"],
  GAS : ["OCO"],
  HAM : ["RUS"],
  HUL : ["BEA", "MAG"],
  LAW : ["RIC", "TSU"],
  LEC : ["BEA", "SAI"],
  MAG : ["BEA", "HUL"],
  NOR : ["PIA"],
  OCO : ["GAS"],
  PER : ["VER"],
  PIA : ["NOR"],
  RIC : ["LAW", "TSU"],
  RUS : ["HAM"],
  SAI : ["BEA", "LEC"],
  SAR : ["ALB", "COL"],
  STR : ["ALO"],
  TSU : ["LAW", "RIC"],
  VER : ["PER"],
  ZHO : ["BOT"],
}

export const handleActivate2024 = (driver: DriverCode24Type, activeDrivers: ActiveDriversType) => {
  const newActiveDrivers = { ...activeDrivers };
  const newActiveDriver = newActiveDrivers[driver];
  if(!newActiveDriver){
    newActiveDrivers[driver] = {teammateActive: false};
  } else {
    delete newActiveDrivers[driver];
  }

  const teamDrivers: DriverCode24Type[] = [driver, ...driverTeammates2024[driver]];

  teamDrivers.forEach((activeDriver) => {
    const teammateIsActive = [...driverTeammates2024[activeDriver]].map((otherDriver) => {
      const activeOtherDriver =  newActiveDrivers[otherDriver];
      if(activeOtherDriver){
        return true;
      }
    }).includes(true);
    const newActiveDriver2 = newActiveDrivers[activeDriver];
    if(newActiveDriver2){
      newActiveDriver2.teammateActive = teammateIsActive;
    }
  });
  return newActiveDrivers;
};
