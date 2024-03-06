import type { DriverCode23Type } from "./F1data23"

export const driverActivation: {[Key in DriverCode23Type] : {active: boolean, teammateActive: boolean}} = {
  ALB : {active: false, teammateActive: false},
  ALO : {active: false, teammateActive: false},
  BOT : {active: false, teammateActive: false},
  DEV : {active: false, teammateActive: false},
  GAS : {active: false, teammateActive: false},
  HAM : {active: false, teammateActive: false},
  HUL : {active: false, teammateActive: false},
  LAW : {active: false, teammateActive: false},
  LEC : {active: false, teammateActive: false},
  MAG : {active: false, teammateActive: false},
  NOR : {active: false, teammateActive: false},
  OCO : {active: false, teammateActive: false},
  PER : {active: false, teammateActive: false},
  PIA : {active: false, teammateActive: false},
  RIC : {active: false, teammateActive: false},
  RUS : {active: false, teammateActive: false},
  SAI : {active: false, teammateActive: false},
  SAR : {active: false, teammateActive: false},
  STR : {active: false, teammateActive: false},
  TSU : {active: false, teammateActive: false},
  VER : {active: false, teammateActive: false},
  ZHO : {active: false, teammateActive: false},
}

type ActiveDriversType = typeof driverActivation;

export const driverTeammates: {[Key in DriverCode23Type] : DriverCode23Type[]} = {
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

export const handleActivate = (driver: DriverCode23Type, activeDrivers: ActiveDriversType) => {
  const newActiveDrivers = { ...activeDrivers };
  newActiveDrivers[driver].active = !newActiveDrivers[driver].active;

  const teamDrivers: DriverCode23Type[] = [driver, ...driverTeammates[driver]];

  teamDrivers.forEach((activeDriver) => {
    const teammateIsActive = [...driverTeammates[activeDriver]].map((otherDriver) => {
      return newActiveDrivers[otherDriver].active
    }).includes(true);
    newActiveDrivers[activeDriver].teammateActive = teammateIsActive;
  });
  return newActiveDrivers;
};