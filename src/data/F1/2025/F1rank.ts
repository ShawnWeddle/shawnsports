import { driverCodes2025, constructorNames2025, type DriverCode25Type, type ConstructorName25Type } from "./F1data";

type ActionType = "DRIVER_SWAP" | "TEAM_UP" | "TEAM_DOWN";


export const F1rank = () => {
  const driverOrder: { [Key in ConstructorName25Type] : [DriverCode25Type, DriverCode25Type]} = {
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
  const constructorOrder: ConstructorName25Type[] = [
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

  return {
    driverOrder,
    constructorOrder
  }
}