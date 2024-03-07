import type { DriverCode23Type } from "./F1data23"

export const driverActivation2023: {[Key in DriverCode23Type]? : {teammateActive: boolean}} = {};

type ActiveDriversType = typeof driverActivation2023;

export const driverTeammates2023: {[Key in DriverCode23Type] : DriverCode23Type[]} = {
  ALB : ["SAR"],
  ALO : ["STR"],
  BOT : ["ZHO"],
  DEV : ["LAW", "RIC", "TSU"],
  GAS : ["OCO"],
  HAM : ["RUS"],
  HUL : ["MAG"],
  LAW : ["DEV", "RIC", "TSU"],
  LEC : ["SAI"],
  MAG : ["HUL"],
  NOR : ["PIA"],
  OCO : ["GAS"],
  PER : ["VER"],
  PIA : ["NOR"],
  RIC : ["DEV", "LAW", "TSU"],
  RUS : ["HAM"],
  SAI : ["LEC"],
  SAR : ["ALB"],
  STR : ["ALO"],
  TSU : ["DEV", "LAW", "RIC"],
  VER : ["PER"],
  ZHO : ["BOT"],
}

export const handleActivate2023 = (driver: DriverCode23Type, activeDrivers: ActiveDriversType) => {
  const newActiveDrivers = { ...activeDrivers };
  const newActiveDriver = newActiveDrivers[driver];
  if(!newActiveDriver){
    newActiveDrivers[driver] = {teammateActive: false};
  } else {
    delete newActiveDrivers[driver];
  }

  const teamDrivers: DriverCode23Type[] = [driver, ...driverTeammates2023[driver]];

  teamDrivers.forEach((activeDriver) => {
    const teammateIsActive = [...driverTeammates2023[activeDriver]].map((otherDriver) => {
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