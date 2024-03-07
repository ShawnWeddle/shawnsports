import type { DriverCode24Type } from "./F1data24"

export const driverActivation2024: {[Key in DriverCode24Type]? : {teammateActive: boolean}} = {};

type ActiveDriversType = typeof driverActivation2024;

export const driverTeammates2024: {[Key in DriverCode24Type] : DriverCode24Type[]} = {
  ALB : ["SAR"],
  ALO : ["STR"],
  BOT : ["ZHO"],
  GAS : ["OCO"],
  HAM : ["RUS"],
  HUL : ["MAG"],
  LEC : ["SAI"],
  MAG : ["HUL"],
  NOR : ["PIA"],
  OCO : ["GAS"],
  PER : ["VER"],
  PIA : ["NOR"],
  RIC : ["TSU"],
  RUS : ["HAM"],
  SAI : ["LEC"],
  SAR : ["ALB"],
  STR : ["ALO"],
  TSU : ["RIC"],
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
