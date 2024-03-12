import { type NFLTeamType } from "./NFLdata";

export type NFLPickType = {
  pickNum: number;
  nativeTeam: NFLTeamType;
  round: number;
  local: number;
  value: number;
  tradedTeam?: NFLTeamType;
  compensatory?: true;
};

export type NFLActivePickType = {
  active: boolean;
  pickNum: number;
  nativeTeam: NFLTeamType;
  round: number;
  local: number;
  value: number;
  tradedTeam?: NFLTeamType;
  compensatory?: true;
};

export const NFLpickOrderByRound: NFLPickType[][] = [
  [
  {
    pickNum: 1,
    nativeTeam: "CAR",
    round: 1,
    local: 1,
    value: 1000,
    tradedTeam: "CHI"
  },
  {
    pickNum: 2,
    nativeTeam: "WAS",
    round: 1,
    local: 2,
    value: 717
  },
  {
    pickNum: 3,
    nativeTeam: "NWE",
    round: 1,
    local: 3,
    value: 514
  },
  {
    pickNum: 4,
    nativeTeam: "ARI",
    round: 1,
    local: 4,
    value: 491
  },
  {
    pickNum: 5,
    nativeTeam: "LAC",
    round: 1,
    local: 5,
    value: 468
  },
  {
    pickNum: 6,
    nativeTeam: "NYG",
    round: 1,
    local: 6,
    value: 446
  },
  {
    pickNum: 7,
    nativeTeam: "TEN",
    round: 1,
    local: 7,
    value: 426
  },
  {
    pickNum: 8,
    nativeTeam: "ATL",
    round: 1,
    local: 8,
    value: 406
  },
  {
    pickNum: 9,
    nativeTeam: "CHI",
    round: 1,
    local: 9,
    value: 387
  },
  {
    pickNum: 10,
    nativeTeam: "NYJ",
    round: 1,
    local: 10,
    value: 369
  },
  {
    pickNum: 11,
    nativeTeam: "MIN",
    round: 1,
    local: 11,
    value: 358
  },
  {
    pickNum: 12,
    nativeTeam: "DEN",
    round: 1,
    local: 12,
    value: 347
  },
  {
    pickNum: 13,
    nativeTeam: "LVR",
    round: 1,
    local: 13,
    value: 336
  },
  {
    pickNum: 14,
    nativeTeam: "NOR",
    round: 1,
    local: 14,
    value: 325
  },
  {
    pickNum: 15,
    nativeTeam: "IND",
    round: 1,
    local: 15,
    value: 315
  },
  {
    pickNum: 16,
    nativeTeam: "SEA",
    round: 1,
    local: 16,
    value: 305
  },
  {
    pickNum: 17,
    nativeTeam: "JAX",
    round: 1,
    local: 17,
    value: 296
  },
  {
    pickNum: 18,
    nativeTeam: "CIN",
    round: 1,
    local: 18,
    value: 287
  },
  {
    pickNum: 19,
    nativeTeam: "LAR",
    round: 1,
    local: 19,
    value: 278
  },
  {
    pickNum: 20,
    nativeTeam: "PIT",
    round: 1,
    local: 20,
    value: 269
  },
  {
    pickNum: 21,
    nativeTeam: "MIA",
    round: 1,
    local: 21,
    value: 261
  },
  {
    pickNum: 22,
    nativeTeam: "PHI",
    round: 1,
    local: 22,
    value: 253
  },
  {
    pickNum: 23,
    nativeTeam: "CLE",
    round: 1,
    local: 23,
    value: 245,
    tradedTeam: "HOU"
  },
  {
    pickNum: 24,
    nativeTeam: "DAL",
    round: 1,
    local: 24,
    value: 237
  },
  {
    pickNum: 25,
    nativeTeam: "GNB",
    round: 1,
    local: 25,
    value: 230
  },
  {
    pickNum: 26,
    nativeTeam: "TAM",
    round: 1,
    local: 26,
    value: 223
  },
  {
    pickNum: 27,
    nativeTeam: "HOU",
    round: 1,
    local: 27,
    value: 216,
    tradedTeam: "ARI"
  },
  {
    pickNum: 28,
    nativeTeam: "BUF",
    round: 1,
    local: 28,
    value: 209
  },
  {
    pickNum: 29,
    nativeTeam: "DET",
    round: 1,
    local: 29,
    value: 202
  },
  {
    pickNum: 30,
    nativeTeam: "BAL",
    round: 1,
    local: 30,
    value: 196
  },
  {
    pickNum: 31,
    nativeTeam: "SFO",
    round: 1,
    local: 31,
    value: 190
  },
  {
    pickNum: 32,
    nativeTeam: "KAN",
    round: 1,
    local: 32,
    value: 184
  },
],[
  {
    pickNum: 33,
    nativeTeam: "CAR",
    round: 2,
    local: 1,
    value: 180
  },
  {
    pickNum: 34,
    nativeTeam: "NWE",
    round: 2,
    local: 2,
    value: 175
  },
  {
    pickNum: 35,
    nativeTeam: "ARI",
    round: 2,
    local: 3,
    value: 170
  },
  {
    pickNum: 36,
    nativeTeam: "WAS",
    round: 2,
    local: 4,
    value: 166
  },
  {
    pickNum: 37,
    nativeTeam: "LAC",
    round: 2,
    local: 5,
    value: 162
  },
  {
    pickNum: 38,
    nativeTeam: "TEN",
    round: 2,
    local: 6,
    value: 157
  },
  {
    pickNum: 39,
    nativeTeam: "NYG",
    round: 2,
    local: 7,
    value: 153,
    tradedTeam: "CAR",
  },
  {
    pickNum: 40,
    nativeTeam: "CHI",
    round: 2,
    local: 8,
    value: 149,
    tradedTeam: "WAS"
  },
  {
    pickNum: 41,
    nativeTeam: "NYJ",
    round: 2,
    local: 9,
    value: 146,
    tradedTeam: "GNB"
  },
  {
    pickNum: 42,
    nativeTeam: "MIN",
    round: 2,
    local: 10,
    value: 142
  },
  {
    pickNum: 43,
    nativeTeam: "ATL",
    round: 2,
    local: 11,
    value: 138
  },
  {
    pickNum: 44,
    nativeTeam: "LVR",
    round: 2,
    local: 12,
    value: 135
  },
  {
    pickNum: 45,
    nativeTeam: "DEN",
    round: 2,
    local: 13,
    value: 131,
    tradedTeam: "NOR"
  },
  {
    pickNum: 46,
    nativeTeam: "IND",
    round: 2,
    local: 14,
    value: 128
  },
  {
    pickNum: 47,
    nativeTeam: "SEA",
    round: 2,
    local: 15,
    value: 124,
    tradedTeam: "NYG"
  },
  {
    pickNum: 48,
    nativeTeam: "JAX",
    round: 2,
    local: 16,
    value: 121
  },
  {
    pickNum: 49,
    nativeTeam: "CIN",
    round: 2,
    local: 17,
    value: 118
  },
  {
    pickNum: 50,
    nativeTeam: "NOR",
    round: 2,
    local: 18,
    value: 115,
    tradedTeam: "PHI"
  },
  {
    pickNum: 51,
    nativeTeam: "PIT",
    round: 2,
    local: 19,
    value: 112
  },
  {
    pickNum: 52,
    nativeTeam: "LAR",
    round: 2,
    local: 20,
    value: 109
  },
  {
    pickNum: 53,
    nativeTeam: "PHI",
    round: 2,
    local: 21,
    value: 106
  },
  {
    pickNum: 54,
    nativeTeam: "CLE",
    round: 2,
    local: 22,
    value: 104
  },
  {
    pickNum: 55,
    nativeTeam: "MIA",
    round: 2,
    local: 23,
    value: 101
  },
  {
    pickNum: 56,
    nativeTeam: "DAL",
    round: 2,
    local: 24,
    value: 98
  },
  {
    pickNum: 57,
    nativeTeam: "TAM",
    round: 2,
    local: 25,
    value: 96
  },
  {
    pickNum: 58,
    nativeTeam: "GNB",
    round: 2,
    local: 26,
    value: 93
  },
  {
    pickNum: 59,
    nativeTeam: "HOU",
    round: 2,
    local: 27,
    value: 91
  },
  {
    pickNum: 60,
    nativeTeam: "BUF",
    round: 2,
    local: 28,
    value: 88
  },
  {
    pickNum: 61,
    nativeTeam: "DET",
    round: 2,
    local: 29,
    value: 86
  },
  {
    pickNum: 62,
    nativeTeam: "BAL",
    round: 2,
    local: 30,
    value: 84
  },
  {
    pickNum: 63,
    nativeTeam: "SFO",
    round: 2,
    local: 31,
    value: 82
  },
  {
    pickNum: 64,
    nativeTeam: "KAN",
    round: 2,
    local: 32,
    value: 80
  },
],[
  {
    pickNum: 65,
    nativeTeam: "CAR",
    round: 3,
    local: 1,
    value: 78
  },
  {
    pickNum: 66,
    nativeTeam: "ARI",
    round: 3,
    local: 2,
    value: 76
  },
  {
    pickNum: 67,
    nativeTeam: "WAS",
    round: 3,
    local: 3,
    value: 75
  },
  {
    pickNum: 68,
    nativeTeam: "NWE",
    round: 3,
    local: 4,
    value: 73
  },
  {
    pickNum: 69,
    nativeTeam: "LAC",
    round: 3,
    local: 5,
    value: 71
  },
  {
    pickNum: 70,
    nativeTeam: "NYG",
    round: 3,
    local: 6,
    value: 70
  },
  {
    pickNum: 71,
    nativeTeam: "TEN",
    round: 3,
    local: 7,
    value: 68,
    tradedTeam: "ARI"
  },
  {
    pickNum: 72,
    nativeTeam: "NYJ",
    round: 3,
    local: 8,
    value: 67
  },
  {
    pickNum: 73,
    nativeTeam: "MIN",
    round: 3,
    local: 9,
    value: 65,
    tradedTeam: "DET"
  },
  {
    pickNum: 74,
    nativeTeam: "ATL",
    round: 3,
    local: 10,
    value: 64
  },
  {
    pickNum: 75,
    nativeTeam: "CHI",
    round: 3,
    local: 11,
    value: 63
  },
  {
    pickNum: 76,
    nativeTeam: "DEN",
    round: 3,
    local: 12,
    value: 61
  },
  {
    pickNum: 77,
    nativeTeam: "LVR",
    round: 3,
    local: 13,
    value: 60
  },
  {
    pickNum: 78,
    nativeTeam: "SEA",
    round: 3,
    local: 14,
    value: 59
  },
  {
    pickNum: 79,
    nativeTeam: "JAX",
    round: 3,
    local: 15,
    value: 57,
    tradedTeam: "ATL"
  },
  {
    pickNum: 80,
    nativeTeam: "CIN",
    round: 3,
    local: 16,
    value: 56
  },
  {
    pickNum: 81,
    nativeTeam: "NOR",
    round: 3,
    local: 17,
    value: 55,
    tradedTeam: "SEA"
  },
  {
    pickNum: 82,
    nativeTeam: "IND",
    round: 3,
    local: 18,
    value: 54
  },
  {
    pickNum: 83,
    nativeTeam: "LAR",
    round: 3,
    local: 19,
    value: 52
  },
  {
    pickNum: 84,
    nativeTeam: "PIT",
    round: 3,
    local: 20,
    value: 51
  },
  {
    pickNum: 85,
    nativeTeam: "CLE",
    round: 3,
    local: 21,
    value: 50
  },
  {
    pickNum: 86,
    nativeTeam: "PHI",
    round: 3,
    local: 22,
    value: 49,
    tradedTeam: "HOU"
  },
  {
    pickNum: 87,
    nativeTeam: "DAL",
    round: 3,
    local: 23,
    value: 48
  },
  {
    pickNum: 88,
    nativeTeam: "GNB",
    round: 3,
    local: 24,
    value: 47
  },
  {
    pickNum: 89,
    nativeTeam: "TAM",
    round: 3,
    local: 25,
    value: 46
  },
  {
    pickNum: 90,
    nativeTeam: "HOU",
    round: 3,
    local: 26,
    value: 45,
    tradedTeam: "ARI"
  },
  {
    pickNum: 91,
    nativeTeam: "BUF",
    round: 3,
    local: 27,
    value: 44,
    tradedTeam: "GNB"
  },
  {
    pickNum: 92,
    nativeTeam: "DET",
    round: 3,
    local: 28,
    value: 43,
    tradedTeam: "TAM",
  },
  {
    pickNum: 93,
    nativeTeam: "BAL",
    round: 3,
    local: 29,
    value: 42
  },
  {
    pickNum: 94,
    nativeTeam: "SFO",
    round: 3,
    local: 30,
    value: 41
  },
  {
    pickNum: 95,
    nativeTeam: "KAN",
    round: 3,
    local: 31,
    value: 40
  },
  {
    pickNum: 96,
    nativeTeam: "JAX",
    round: 3,
    local: 32,
    value: 39,
    compensatory: true
  },
  {
    pickNum: 97,
    nativeTeam: "CIN",
    round: 3,
    local: 33,
    value: 39,
    compensatory: true
  },
  {
    pickNum: 98,
    nativeTeam: "PHI",
    round: 3,
    local: 34,
    value: 38,
    compensatory: true
  },
  {
    pickNum: 99,
    nativeTeam: "LAR",
    round: 3,
    local: 35,
    value: 37,
    compensatory: true
  },
  {
    pickNum: 100,
    nativeTeam: "SFO",
    round: 3,
    local: 36,
    value: 36,
    compensatory: true,
    tradedTeam: "WAS"
  },
],[
  {
    pickNum: 101,
    nativeTeam: "CAR",
    round: 4,
    local: 1,
    value: 35
  },
  {
    pickNum: 102,
    nativeTeam: "WAS",
    round: 4,
    local: 2,
    value: 34
  },
  {
    pickNum: 103,
    nativeTeam: "NWE",
    round: 4,
    local: 3,
    value: 34
  },
  {
    pickNum: 104,
    nativeTeam: "ARI",
    round: 4,
    local: 4,
    value: 33
  },
  {
    pickNum: 105,
    nativeTeam: "LAC",
    round: 4,
    local: 5,
    value: 32
  },
  {
    pickNum: 106,
    nativeTeam: "TEN",
    round: 4,
    local: 6,
    value: 32
  },
  {
    pickNum: 107,
    nativeTeam: "NYG",
    round: 4,
    local: 7,
    value: 31
  },
  {
    pickNum: 108,
    nativeTeam: "MIN",
    round: 4,
    local: 8,
    value: 30
  },
  {
    pickNum: 109,
    nativeTeam: "ATL",
    round: 4,
    local: 9,
    value: 30
  },
  {
    pickNum: 110,
    nativeTeam: "CHI",
    round: 4,
    local: 10,
    value: 29
  },
  {
    pickNum: 111,
    nativeTeam: "NYJ",
    round: 4,
    local: 11,
    value: 28
  },
  {
    pickNum: 112,
    nativeTeam: "LVR",
    round: 4,
    local: 12,
    value: 28
  },
  {
    pickNum: 113,
    nativeTeam: "DEN",
    round: 4,
    local: 13,
    value: 27,
    tradedTeam: "NYJ"
  },
  {
    pickNum: 114,
    nativeTeam: "JAX",
    round: 4,
    local: 14,
    value: 26
  },
  {
    pickNum: 115,
    nativeTeam: "CIN",
    round: 4,
    local: 15,
    value: 26
  },
  {
    pickNum: 116,
    nativeTeam: "NOR",
    round: 4,
    local: 16,
    value: 25,
    tradedTeam: "JAX"
  },
  {
    pickNum: 117,
    nativeTeam: "IND",
    round: 4,
    local: 17,
    value: 25
  },
  {
    pickNum: 118,
    nativeTeam: "SEA",
    round: 4,
    local: 18,
    value: 24
  },
  {
    pickNum: 119,
    nativeTeam: "PIT",
    round: 4,
    local: 19,
    value: 24
  },
  {
    pickNum: 120,
    nativeTeam: "LAR",
    round: 4,
    local: 20,
    value: 23,
    tradedTeam: "PIT"
  },
  {
    pickNum: 121,
    nativeTeam: "MIA",
    round: 4,
    local: 21,
    value: 23,
    tradedTeam: "DEN"
  },
  {
    pickNum: 122,
    nativeTeam: "PHI",
    round: 4,
    local: 22,
    value: 22,
    tradedTeam: "CHI"
  },
  {
    pickNum: 123,
    nativeTeam: "CLE",
    round: 4,
    local: 23,
    value: 21,
    tradedTeam: "HOU"
  },
  {
    pickNum: 124,
    nativeTeam: "DAL",
    round: 4,
    local: 24,
    value: 21,
    tradedTeam: "SFO"
  },
  {
    pickNum: 125,
    nativeTeam: "TAM",
    round: 4,
    local: 25,
    value: 20
  },
  {
    pickNum: 126,
    nativeTeam: "GNB",
    round: 4,
    local: 26,
    value: 20
  },
  {
    pickNum: 127,
    nativeTeam: "HOU",
    round: 4,
    local: 27,
    value: 19
  },
  {
    pickNum: 128,
    nativeTeam: "BUF",
    round: 4,
    local: 28,
    value: 19
  },
  {
    pickNum: 129,
    nativeTeam: "DET",
    round: 4,
    local: 29,
    value: 18,
    tradedTeam: "MIN"
  },
  {
    pickNum: 130,
    nativeTeam: "BAL",
    round: 4,
    local: 30,
    value: 18
  },
  {
    pickNum: 131,
    nativeTeam: "SFO",
    round: 4,
    local: 31,
    value: 18
  },
  {
    pickNum: 132,
    nativeTeam: "KAN",
    round: 4,
    local: 32,
    value: 17
  },
  {
    pickNum: 133,
    nativeTeam: "SFO",
    round: 4,
    local: 33,
    value: 17,
    compensatory: true
  },
  {
    pickNum: 134,
    nativeTeam: "BUF",
    round: 4,
    local: 34,
    value: 17,
    compensatory: true
  },
  {
    pickNum: 135,
    nativeTeam: "BAL",
    round: 4,
    local: 35,
    value: 17,
    compensatory: true
  },
],[
  {
    pickNum: 136,
    nativeTeam: "CAR",
    round: 5,
    local: 1,
    value: 16,
    tradedTeam: "DEN"
  },
  {
    pickNum: 137,
    nativeTeam: "NWE",
    round: 5,
    local: 2,
    value: 16
  },
  {
    pickNum: 138,
    nativeTeam: "ARI",
    round: 5,
    local: 3,
    value: 16
  },
  {
    pickNum: 139,
    nativeTeam: "WAS",
    round: 5,
    local: 4,
    value: 15
  },
  {
    pickNum: 140,
    nativeTeam: "LAC",
    round: 5,
    local: 5,
    value: 15
  },
  {
    pickNum: 141,
    nativeTeam: "NYG",
    round: 5,
    local: 6,
    value: 14
  },
  {
    pickNum: 142,
    nativeTeam: "TEN",
    round: 5,
    local: 7,
    value: 14,
    tradedTeam: "CAR"
  },
  {
    pickNum: 143,
    nativeTeam: "ATL",
    round: 5,
    local: 8,
    value: 14
  },
  {
    pickNum: 144,
    nativeTeam: "CHI",
    round: 5,
    local: 9,
    value: 13,
    tradedTeam: "BUF",
  },
  {
    pickNum: 145,
    nativeTeam: "NYJ",
    round: 5,
    local: 10,
    value: 13,
    tradedTeam: "DEN"
  },
  {
    pickNum: 146,
    nativeTeam: "MIN",
    round: 5,
    local: 11,
    value: 13,
    tradedTeam: "TEN"
  },
  {
    pickNum: 147,
    nativeTeam: "DEN",
    round: 5,
    local: 12,
    value: 13
  },
  {
    pickNum: 148,
    nativeTeam: "LVR",
    round: 5,
    local: 13,
    value: 12
  },
  {
    pickNum: 149,
    nativeTeam: "CIN",
    round: 5,
    local: 14,
    value: 12
  },
  {
    pickNum: 150,
    nativeTeam: "NOR",
    round: 5,
    local: 15,
    value: 12
  },
  {
    pickNum: 151,
    nativeTeam: "IND",
    round: 5,
    local: 16,
    value: 12
  },
  {
    pickNum: 152,
    nativeTeam: "SEA",
    round: 5,
    local: 17,
    value: 12
  },
  {
    pickNum: 153,
    nativeTeam: "JAX",
    round: 5,
    local: 18,
    value: 11
  },
  {
    pickNum: 154,
    nativeTeam: "LAR",
    round: 5,
    local: 19,
    value: 11
  },
  {
    pickNum: 155,
    nativeTeam: "PIT",
    round: 5,
    local: 20,
    value: 11,
    tradedTeam: "LAR"
  },
  {
    pickNum: 156,
    nativeTeam: "PHI",
    round: 5,
    local: 21,
    value: 11,
    tradedTeam: "CLE"
  },
  {
    pickNum: 157,
    nativeTeam: "CLE",
    round: 5,
    local: 22,
    value: 10,
    tradedTeam: "MIN"
  },
  {
    pickNum: 158,
    nativeTeam: "MIA",
    round: 5,
    local: 23,
    value: 10
  },
  {
    pickNum: 159,
    nativeTeam: "DAL",
    round: 5,
    local: 24,
    value: 10,
    tradedTeam: "KAN"
  },
  {
    pickNum: 160,
    nativeTeam: "GNB",
    round: 5,
    local: 25,
    value: 10,
    tradedTeam: "BUF"
  },
  {
    pickNum: 161,
    nativeTeam: "TAM",
    round: 5,
    local: 26,
    value: 9,
    tradedTeam: "PHI"
  },
  {
    pickNum: 162,
    nativeTeam: "HOU",
    round: 5,
    local: 27,
    value: 9,
    tradedTeam: "ARI"
  },
  {
    pickNum: 163,
    nativeTeam: "BUF",
    round: 5,
    local: 28,
    value: 9
  },
  {
    pickNum: 164,
    nativeTeam: "DET",
    round: 5,
    local: 29,
    value: 9
  },
  {
    pickNum: 165,
    nativeTeam: "BAL",
    round: 5,
    local: 30,
    value: 9
  },
  {
    pickNum: 166,
    nativeTeam: "SFO",
    round: 5,
    local: 31,
    value: 8,
    tradedTeam: "CAR"
  },
  {
    pickNum: 167,
    nativeTeam: "KAN",
    round: 5,
    local: 32,
    value: 8,
    tradedTeam: "MIN"
  },
  {
    pickNum: 168,
    nativeTeam: "NOR",
    round: 5,
    local: 33,
    value: 8,
    compensatory: true
  },
  {
    pickNum: 169,
    nativeTeam: "GNB",
    round: 5,
    local: 34,
    value: 8,
    compensatory: true
  },
  {
    pickNum: 170,
    nativeTeam: "NOR",
    round: 5,
    local: 35,
    value: 8,
    compensatory: true
  },
  {
    pickNum: 171,
    nativeTeam: "PHI",
    round: 5,
    local: 36,
    value: 8,
    compensatory: true
  },
  {
    pickNum: 172,
    nativeTeam: "PHI",
    round: 5,
    local: 37,
    value: 7,
    compensatory: true
  },
  {
    pickNum: 173,
    nativeTeam: "KAN",
    round: 5,
    local: 38,
    value: 7,
    compensatory: true
  },
  {
    pickNum: 174,
    nativeTeam: "DAL",
    round: 5,
    local: 39,
    value: 7,
    compensatory: true
  },
  {
    pickNum: 175,
    nativeTeam: "NOR",
    round: 5,
    local: 40,
    value: 7,
    compensatory: true
  },
  {
    pickNum: 176,
    nativeTeam: "SFO",
    round: 5,
    local: 41,
    value: 7,
    compensatory: true
  },
],[
  {
    pickNum: 177,
    nativeTeam: "CAR",
    round: 6,
    local: 1,
    value: 7,
    tradedTeam: "MIN"
  },
  {
    pickNum: 178,
    nativeTeam: "ARI",
    round: 6,
    local: 2,
    value: 6,
    tradedTeam: "CAR"
  },
  {
    pickNum: 179,
    nativeTeam: "WAS",
    round: 6,
    local: 3,
    value: 6
  },
  {
    pickNum: 180,
    nativeTeam: "NWE",
    round: 6,
    local: 4,
    value: 6
  },
  {
    pickNum: 181,
    nativeTeam: "LAC",
    round: 6,
    local: 5,
    value: 6
  },
  {
    pickNum: 182,
    nativeTeam: "TEN",
    round: 6,
    local: 6,
    value: 6
  },
  {
    pickNum: 183,
    nativeTeam: "NYG",
    round: 6,
    local: 7,
    value: 6
  },
  {
    pickNum: 184,
    nativeTeam: "CHI",
    round: 6,
    local: 8,
    value: 6,
    tradedTeam: "MIA"
  },
  {
    pickNum: 185,
    nativeTeam: "NYJ",
    round: 6,
    local: 9,
    value: 6
  },
  {
    pickNum: 186,
    nativeTeam: "MIN",
    round: 6,
    local: 10,
    value: 5,
    tradedTeam: "ARI"
  },
  {
    pickNum: 187,
    nativeTeam: "ATL",
    round: 6,
    local: 11,
    value: 5,
    tradedTeam: "PHI"
  },
  {
    pickNum: 188,
    nativeTeam: "LVR",
    round: 6,
    local: 12,
    value: 5,
    tradedTeam: "MIN"
  },
  {
    pickNum: 189,
    nativeTeam: "DEN",
    round: 6,
    local: 13,
    value: 5,
    tradedTeam: "LAR"
  },
  {
    pickNum: 190,
    nativeTeam: "NOR",
    round: 6,
    local: 14,
    value: 5
  },
  {
    pickNum: 191,
    nativeTeam: "IND",
    round: 6,
    local: 15,
    value: 5
  },
  {
    pickNum: 192,
    nativeTeam: "SEA",
    round: 6,
    local: 16,
    value: 5
  },
  {
    pickNum: 193,
    nativeTeam: "JAX",
    round: 6,
    local: 17,
    value: 5,
    tradedTeam: "NWE",
  },
  {
    pickNum: 194,
    nativeTeam: "CIN",
    round: 6,
    local: 18,
    value: 5
  },
  {
    pickNum: 195,
    nativeTeam: "PIT",
    round: 6,
    local: 19,
    value: 4
  },
  {
    pickNum: 196,
    nativeTeam: "LAR",
    round: 6,
    local: 20,
    value: 4,
    tradedTeam: "BUF"
  },
  {
    pickNum: 197,
    nativeTeam: "CLE",
    round: 6,
    local: 21,
    value: 4,
    tradedTeam: "ATL"
  },
  {
    pickNum: 198,
    nativeTeam: "MIA",
    round: 6,
    local: 22,
    value: 4
  },
  {
    pickNum: 199,
    nativeTeam: "PHI",
    round: 6,
    local: 23,
    value: 4,
    tradedTeam: "NOR"
  },
  {
    pickNum: 200,
    nativeTeam: "DAL",
    round: 6,
    local: 24,
    value: 4,
    tradedTeam: "BUF"
  },
  {
    pickNum: 201,
    nativeTeam: "TAM",
    round: 6,
    local: 25,
    value: 4,
    tradedTeam: "DET",
  },
  {
    pickNum: 202,
    nativeTeam: "GNB",
    round: 6,
    local: 26,
    value: 4
  },
  {
    pickNum: 203,
    nativeTeam: "HOU",
    round: 6,
    local: 27,
    value: 4,
    tradedTeam: "CLE"
  },
  {
    pickNum: 204,
    nativeTeam: "BUF",
    round: 6,
    local: 28,
    value: 4
  },
  {
    pickNum: 205,
    nativeTeam: "DET",
    round: 6,
    local: 29,
    value: 4
  },
  {
    pickNum: 206,
    nativeTeam: "BAL",
    round: 6,
    local: 30,
    value: 4,
    tradedTeam: "CLE"
  },
  {
    pickNum: 207,
    nativeTeam: "SFO",
    round: 6,
    local: 31,
    value: 3,
    tradedTeam: "DEN",
  },
  {
    pickNum: 208,
    nativeTeam: "KAN",
    round: 6,
    local: 32,
    value: 3,
    tradedTeam: "LVR"
  },
  {
    pickNum: 209,
    nativeTeam: "LAR",
    round: 6,
    local: 33,
    value: 3,
    compensatory: true
  },
  {
    pickNum: 210,
    nativeTeam: "PHI",
    round: 6,
    local: 34,
    value: 3,
    compensatory: true
  },
  {
    pickNum: 211,
    nativeTeam: "SFO",
    round: 6,
    local: 35,
    value: 3,
    compensatory: true
  },
  {
    pickNum: 212,
    nativeTeam: "JAX",
    round: 6,
    local: 36,
    value: 3,
    compensatory: true
  },
  {
    pickNum: 213,
    nativeTeam: "LAR",
    round: 6,
    local: 37,
    value: 3,
    compensatory: true
  },
  {
    pickNum: 214,
    nativeTeam: "CIN",
    round: 6,
    local: 38,
    value: 3,
    compensatory: true
  },
  {
    pickNum: 215,
    nativeTeam: "SFO",
    round: 6,
    local: 39,
    value: 3,
    compensatory: true
  },
  {
    pickNum: 216,
    nativeTeam: "DAL",
    round: 6,
    local: 40,
    value: 3,
    compensatory: true
  },
  {
    pickNum: 217,
    nativeTeam: "LAR",
    round: 6,
    local: 41,
    value: 3,
    compensatory: true
  },
  {
    pickNum: 218,
    nativeTeam: "NYJ",
    round: 6,
    local: 42,
    value: 3,
    compensatory: true
  },
  {
    pickNum: 219,
    nativeTeam: "GNB",
    round: 6,
    local: 43,
    value: 3,
    compensatory: true
  },
  {
    pickNum: 220,
    nativeTeam: "TAM",
    round: 6,
    local: 44,
    value: 3,
    compensatory: true
  },
],[
  {
    pickNum: 221,
    nativeTeam: "CAR",
    round: 7,
    local: 1,
    value: 3,
    tradedTeam: "TEN"
  },
  {
    pickNum: 222,
    nativeTeam: "WAS",
    round: 7,
    local: 2,
    value: 2
  },
  {
    pickNum: 223,
    nativeTeam: "NWE",
    round: 7,
    local: 3,
    value: 2,
    tradedTeam: "LVR"
  },
  {
    pickNum: 224,
    nativeTeam: "ARI",
    round: 7,
    local: 4,
    value: 2
  },
  {
    pickNum: 225,
    nativeTeam: "LAC",
    round: 7,
    local: 5,
    value: 2
  },
  {
    pickNum: 226,
    nativeTeam: "NYG",
    round: 7,
    local: 6,
    value: 2,
    tradedTeam: "ARI"
  },
  {
    pickNum: 227,
    nativeTeam: "TEN",
    round: 7,
    local: 7,
    value: 2,
    tradedTeam: "LVR"
  },
  {
    pickNum: 228,
    nativeTeam: "NYJ",
    round: 7,
    local: 8,
    value: 2,
    tradedTeam: "BAL"
  },
  {
    pickNum: 229,
    nativeTeam: "MIN",
    round: 7,
    local: 9,
    value: 2,
    tradedTeam: "LVR"
  },
  {
    pickNum: 230,
    nativeTeam: "ATL",
    round: 7,
    local: 10,
    value: 2,
    tradedTeam: "CLE"
  },
  {
    pickNum: 231,
    nativeTeam: "CHI",
    round: 7,
    local: 11,
    value: 2,
    tradedTeam: "NWE"
  },
  {
    pickNum: 232,
    nativeTeam: "DEN",
    round: 7,
    local: 12,
    value: 2,
    tradedTeam: "NOR"
  },
  {
    pickNum: 233,
    nativeTeam: "LVR",
    round: 7,
    local: 13,
    value: 2,
    tradedTeam: "DAL"
  },
  {
    pickNum: 234,
    nativeTeam: "IND",
    round: 7,
    local: 14,
    value: 2
  },
  {
    pickNum: 235,
    nativeTeam: "SEA",
    round: 7,
    local: 15,
    value: 2
  },
  {
    pickNum: 236,
    nativeTeam: "JAX",
    round: 7,
    local: 16,
    value: 2
  },
  {
    pickNum: 237,
    nativeTeam: "CIN",
    round: 7,
    local: 17,
    value: 2
  },
  {
    pickNum: 238,
    nativeTeam: "NOR",
    round: 7,
    local: 18,
    value: 2,
    tradedTeam: "HOU"
  },
  {
    pickNum: 239,
    nativeTeam: "LAR",
    round: 7,
    local: 19,
    value: 2,
    tradedTeam: "NOR",
  },
  {
    pickNum: 240,
    nativeTeam: "PIT",
    round: 7,
    local: 20,
    value: 2
  },
  {
    pickNum: 241,
    nativeTeam: "MIA",
    round: 7,
    local: 21,
    value: 2
  },
  {
    pickNum: 242,
    nativeTeam: "PHI",
    round: 7,
    local: 22,
    value: 2,
    tradedTeam: "TEN"
  },
  {
    pickNum: 243,
    nativeTeam: "CLE",
    round: 7,
    local: 23,
    value: 2,
    tradedTeam: "ARI"
  },
  {
    pickNum: 244,
    nativeTeam: "DAL",
    round: 7,
    local: 24,
    value: 2
  },
  {
    pickNum: 245,
    nativeTeam: "GNB",
    round: 7,
    local: 25,
    value: 1
  },
  {
    pickNum: 246,
    nativeTeam: "TAM",
    round: 7,
    local: 26,
    value: 1
  },
  {
    pickNum: 247,
    nativeTeam: "HOU",
    round: 7,
    local: 27,
    value: 1
  },
  {
    pickNum: 248,
    nativeTeam: "BUF",
    round: 7,
    local: 28,
    value: 1
  },
  {
    pickNum: 249,
    nativeTeam: "DET",
    round: 7,
    local: 29,
    value: 1
  },
  {
    pickNum: 250,
    nativeTeam: "BAL",
    round: 7,
    local: 30,
    value: 1
  },
  {
    pickNum: 251,
    nativeTeam: "SFO",
    round: 7,
    local: 31,
    value: 1
  },
  {
    pickNum: 252,
    nativeTeam: "KAN",
    round: 7,
    local: 32,
    value: 1,
    tradedTeam: "HOU"
  },
  {
    pickNum: 253,
    nativeTeam: "LAC",
    round: 7,
    local: 33,
    value: 1,
    compensatory: true
  },
  {
    pickNum: 254,
    nativeTeam: "LAR",
    round: 7,
    local: 34,
    value: 1,
    compensatory: true
  },
  {
    pickNum: 255,
    nativeTeam: "GNB",
    round: 7,
    local: 35,
    value: 1,
    compensatory: true
  },
  {
    pickNum: 256,
    nativeTeam: "NYJ",
    round: 7,
    local: 36,
    value: 1,
    compensatory: true
  },
  {
    pickNum: 257,
    nativeTeam: "NYJ",
    round: 7,
    local: 37,
    value: 1,
    compensatory: true
  }
]
]