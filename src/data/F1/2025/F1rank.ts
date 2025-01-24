import { driverCodes2025, constructorNames2025, type DriverCode25Type, type ConstructorName25Type } from "./F1data";

type ActionType = "DRIVER_SWAP" | "TEAM_UP" | "TEAM_DOWN" | "NO_ACTION";

export type DriverOrderType = { [Key in ConstructorName25Type] : [DriverCode25Type, DriverCode25Type]};
export type ConstructorOrderType = ConstructorName25Type[];

export const initDriverOrder: DriverOrderType = {
  Alpine: ["GAS", "DOO"],
  "Aston Martin": ["ALO", "STR"],
  Haas: ["OCO", "BEA"],
  Ferrari: ["LEC", "HAM"],
  McLaren: ["NOR","PIA"],
  Mercedes: ["RUS", "ANT"],
  RB: ["TSU", "HAD"],
  "Red Bull": ["VER", "LAW"],
  Sauber: ["HUL", "BOR"],
  Williams: ["SAI", "ALB"],
};

export const initConstructorOrder: ConstructorOrderType = [
  "McLaren",
  "Ferrari",
  "Red Bull",
  "Mercedes",
  "Aston Martin",
  "Alpine",
  "Haas",
  "RB",
  "Williams",
  "Sauber",
];

export const F1rank = (order: { constructorOrder: ConstructorOrderType, driverOrder: DriverOrderType}, options: {action: ActionType, team: ConstructorName25Type},) => {
  const { driverOrder, constructorOrder} = order;
  const { action, team } = options;

  if(action === "DRIVER_SWAP"){
    [driverOrder[team][0], driverOrder[team][1]] = [driverOrder[team][1], driverOrder[team][0]];
  }

  if(action === "TEAM_UP"){
    const cr = [...constructorOrder].indexOf(team);
    if(cr > 0){
      const thisTeam = constructorOrder[cr];
      const highTeam = constructorOrder[cr-1];
      if(thisTeam && highTeam){
        constructorOrder[cr-1] = thisTeam;
        constructorOrder[cr] = highTeam;
      }
    }
  }

  if(action === "TEAM_DOWN"){
    const cr = [...constructorOrder].indexOf(team);
    if(cr > -1 && cr < 9){
      const thisTeam = constructorOrder[cr];
      const lowTeam = constructorOrder[cr+1];
      if(thisTeam && lowTeam){
        constructorOrder[cr+1] = thisTeam;
        constructorOrder[cr] = lowTeam;
      }
    }
  }

  return {
    driverOrder,
    constructorOrder,
  }
}