import { type NFLTeamType } from "./NFLdata";

export type NFLPickType = {
  pickNum: number;
  nativeTeam: NFLTeamType | "XQJ";
  round: number;
  value:number;
  tradedTeam?: NFLTeamType;
  compensatory?: true;
};

const NFLpickOrder: NFLPickType[] = [
  {
      "pickNum": 1,
      "nativeTeam": "CAR",
      "round": 1,
      "value": 1000
  },
  {
      "pickNum": 2,
      "nativeTeam": "WAS",
      "round": 1,
      "value": 717
  },
  {
      "pickNum": 3,
      "nativeTeam": "NWE",
      "round": 1,
      "value": 514
  },
  {
      "pickNum": 4,
      "nativeTeam": "ARI",
      "round": 1,
      "value": 491
  },
  {
      "pickNum": 5,
      "nativeTeam": "LAC",
      "round": 1,
      "value": 468
  },
  {
      "pickNum": 6,
      "nativeTeam": "NYG",
      "round": 1,
      "value": 446
  },
  {
      "pickNum": 7,
      "nativeTeam": "TEN",
      "round": 1,
      "value": 426
  },
  {
      "pickNum": 8,
      "nativeTeam": "ATL",
      "round": 1,
      "value": 406
  },
  {
      "pickNum": 9,
      "nativeTeam": "CHI",
      "round": 1,
      "value": 387
  },
  {
      "pickNum": 10,
      "nativeTeam": "NYJ",
      "round": 1,
      "value": 369
  },
  {
      "pickNum": 11,
      "nativeTeam": "MIN",
      "round": 1,
      "value": 358
  },
  {
      "pickNum": 12,
      "nativeTeam": "DEN",
      "round": 1,
      "value": 347
  },
  {
      "pickNum": 13,
      "nativeTeam": "LVR",
      "round": 1,
      "value": 336
  },
  {
      "pickNum": 14,
      "nativeTeam": "NOR",
      "round": 1,
      "value": 325
  },
  {
      "pickNum": 15,
      "nativeTeam": "IND",
      "round": 1,
      "value": 315
  },
  {
      "pickNum": 16,
      "nativeTeam": "SEA",
      "round": 1,
      "value": 305
  },
  {
      "pickNum": 17,
      "nativeTeam": "JAX",
      "round": 1,
      "value": 296
  },
  {
      "pickNum": 18,
      "nativeTeam": "CIN",
      "round": 1,
      "value": 287
  },
  {
      "pickNum": 19,
      "nativeTeam": "LAR",
      "round": 1,
      "value": 278
  },
  {
      "pickNum": 20,
      "nativeTeam": "PIT",
      "round": 1,
      "value": 269
  },
  {
      "pickNum": 21,
      "nativeTeam": "MIA",
      "round": 1,
      "value": 261
  },
  {
      "pickNum": 22,
      "nativeTeam": "PHI",
      "round": 1,
      "value": 253
  },
  {
      "pickNum": 23,
      "nativeTeam": "CLE",
      "round": 1,
      "value": 245
  },
  {
      "pickNum": 24,
      "nativeTeam": "DAL",
      "round": 1,
      "value": 237
  },
  {
      "pickNum": 25,
      "nativeTeam": "GNB",
      "round": 1,
      "value": 230
  },
  {
      "pickNum": 26,
      "nativeTeam": "TAM",
      "round": 1,
      "value": 223
  },
  {
      "pickNum": 27,
      "nativeTeam": "HOU",
      "round": 1,
      "value": 216
  },
  {
      "pickNum": 28,
      "nativeTeam": "BUF",
      "round": 1,
      "value": 209
  },
  {
      "pickNum": 29,
      "nativeTeam": "DET",
      "round": 1,
      "value": 202
  },
  {
      "pickNum": 30,
      "nativeTeam": "BAL",
      "round": 1,
      "value": 196
  },
  {
      "pickNum": 31,
      "nativeTeam": "SFO",
      "round": 1,
      "value": 190
  },
  {
      "pickNum": 32,
      "nativeTeam": "KAN",
      "round": 1,
      "value": 184
  },
  {
      "pickNum": 33,
      "nativeTeam": "CAR",
      "round": 2,
      "value": 180
  },
  {
      "pickNum": 34,
      "nativeTeam": "NWE",
      "round": 2,
      "value": 175
  },
  {
      "pickNum": 35,
      "nativeTeam": "ARI",
      "round": 2,
      "value": 170
  },
  {
      "pickNum": 36,
      "nativeTeam": "WAS",
      "round": 2,
      "value": 166
  },
  {
      "pickNum": 37,
      "nativeTeam": "LAC",
      "round": 2,
      "value": 162
  },
  {
      "pickNum": 38,
      "nativeTeam": "TEN",
      "round": 2,
      "value": 157
  },
  {
      "pickNum": 39,
      "nativeTeam": "NYG",
      "round": 2,
      "value": 153
  },
  {
      "pickNum": 40,
      "nativeTeam": "CHI",
      "round": 2,
      "value": 149
  },
  {
      "pickNum": 41,
      "nativeTeam": "NYJ",
      "round": 2,
      "value": 146
  },
  {
      "pickNum": 42,
      "nativeTeam": "MIN",
      "round": 2,
      "value": 142
  },
  {
      "pickNum": 43,
      "nativeTeam": "ATL",
      "round": 2,
      "value": 138
  },
  {
      "pickNum": 44,
      "nativeTeam": "LVR",
      "round": 2,
      "value": 135
  },
  {
      "pickNum": 45,
      "nativeTeam": "DEN",
      "round": 2,
      "value": 131
  },
  {
      "pickNum": 46,
      "nativeTeam": "IND",
      "round": 2,
      "value": 128
  },
  {
      "pickNum": 47,
      "nativeTeam": "SEA",
      "round": 2,
      "value": 124
  },
  {
      "pickNum": 48,
      "nativeTeam": "JAX",
      "round": 2,
      "value": 121
  },
  {
      "pickNum": 49,
      "nativeTeam": "CIN",
      "round": 2,
      "value": 118
  },
  {
      "pickNum": 50,
      "nativeTeam": "NOR",
      "round": 2,
      "value": 115
  },
  {
      "pickNum": 51,
      "nativeTeam": "PIT",
      "round": 2,
      "value": 112
  },
  {
      "pickNum": 52,
      "nativeTeam": "LAR",
      "round": 2,
      "value": 109
  },
  {
      "pickNum": 53,
      "nativeTeam": "PHI",
      "round": 2,
      "value": 106
  },
  {
      "pickNum": 54,
      "nativeTeam": "CLE",
      "round": 2,
      "value": 104
  },
  {
      "pickNum": 55,
      "nativeTeam": "MIA",
      "round": 2,
      "value": 101
  },
  {
      "pickNum": 56,
      "nativeTeam": "DAL",
      "round": 2,
      "value": 98
  },
  {
      "pickNum": 57,
      "nativeTeam": "TAM",
      "round": 2,
      "value": 96
  },
  {
      "pickNum": 58,
      "nativeTeam": "GNB",
      "round": 2,
      "value": 93
  },
  {
      "pickNum": 59,
      "nativeTeam": "HOU",
      "round": 2,
      "value": 91
  },
  {
      "pickNum": 60,
      "nativeTeam": "BUF",
      "round": 2,
      "value": 88
  },
  {
      "pickNum": 61,
      "nativeTeam": "DET",
      "round": 2,
      "value": 86
  },
  {
      "pickNum": 62,
      "nativeTeam": "BAL",
      "round": 2,
      "value": 84
  },
  {
      "pickNum": 63,
      "nativeTeam": "SFO",
      "round": 2,
      "value": 82
  },
  {
      "pickNum": 64,
      "nativeTeam": "KAN",
      "round": 2,
      "value": 80
  },
  {
      "pickNum": 65,
      "nativeTeam": "CAR",
      "round": 3,
      "value": 78
  },
  {
      "pickNum": 66,
      "nativeTeam": "ARI",
      "round": 3,
      "value": 76
  },
  {
      "pickNum": 67,
      "nativeTeam": "WAS",
      "round": 3,
      "value": 75
  },
  {
      "pickNum": 68,
      "nativeTeam": "NWE",
      "round": 3,
      "value": 73
  },
  {
      "pickNum": 69,
      "nativeTeam": "LAC",
      "round": 3,
      "value": 71
  },
  {
      "pickNum": 70,
      "nativeTeam": "NYG",
      "round": 3,
      "value": 70
  },
  {
      "pickNum": 71,
      "nativeTeam": "TEN",
      "round": 3,
      "value": 68
  },
  {
      "pickNum": 72,
      "nativeTeam": "NYJ",
      "round": 3,
      "value": 67
  },
  {
      "pickNum": 73,
      "nativeTeam": "MIN",
      "round": 3,
      "value": 65
  },
  {
      "pickNum": 74,
      "nativeTeam": "ATL",
      "round": 3,
      "value": 64
  },
  {
      "pickNum": 75,
      "nativeTeam": "CHI",
      "round": 3,
      "value": 63
  },
  {
      "pickNum": 76,
      "nativeTeam": "DEN",
      "round": 3,
      "value": 61
  },
  {
      "pickNum": 77,
      "nativeTeam": "LVR",
      "round": 3,
      "value": 60
  },
  {
      "pickNum": 78,
      "nativeTeam": "SEA",
      "round": 3,
      "value": 59
  },
  {
      "pickNum": 79,
      "nativeTeam": "JAX",
      "round": 3,
      "value": 57
  },
  {
      "pickNum": 80,
      "nativeTeam": "CIN",
      "round": 3,
      "value": 56
  },
  {
      "pickNum": 81,
      "nativeTeam": "NOR",
      "round": 3,
      "value": 55
  },
  {
      "pickNum": 82,
      "nativeTeam": "IND",
      "round": 3,
      "value": 54
  },
  {
      "pickNum": 83,
      "nativeTeam": "LAR",
      "round": 3,
      "value": 52
  },
  {
      "pickNum": 84,
      "nativeTeam": "PIT",
      "round": 3,
      "value": 51
  },
  {
      "pickNum": 85,
      "nativeTeam": "CLE",
      "round": 3,
      "value": 50
  },
  {
      "pickNum": 86,
      "nativeTeam": "PHI",
      "round": 3,
      "value": 49
  },
  {
      "pickNum": 87,
      "nativeTeam": "DAL",
      "round": 3,
      "value": 48
  },
  {
      "pickNum": 88,
      "nativeTeam": "GNB",
      "round": 3,
      "value": 47
  },
  {
      "pickNum": 89,
      "nativeTeam": "TAM",
      "round": 3,
      "value": 46
  },
  {
      "pickNum": 90,
      "nativeTeam": "HOU",
      "round": 3,
      "value": 45
  },
  {
      "pickNum": 91,
      "nativeTeam": "BUF",
      "round": 3,
      "value": 44
  },
  {
      "pickNum": 92,
      "nativeTeam": "DET",
      "round": 3,
      "value": 43
  },
  {
      "pickNum": 93,
      "nativeTeam": "BAL",
      "round": 3,
      "value": 42
  },
  {
      "pickNum": 94,
      "nativeTeam": "SFO",
      "round": 3,
      "value": 41
  },
  {
      "pickNum": 95,
      "nativeTeam": "KAN",
      "round": 3,
      "value": 40
  },
  {
      "pickNum": 96,
      "nativeTeam": "JAX",
      "round": 3,
      "value": 39
  },
  {
      "pickNum": 97,
      "nativeTeam": "PHI",
      "round": 3,
      "value": 39
  },
  {
      "pickNum": 98,
      "nativeTeam": "SFO",
      "round": 3,
      "value": 38
  },
  {
      "pickNum": 99,
      "nativeTeam": "BUF",
      "round": 3,
      "value": 37
  },
  {
      "pickNum": 100,
      "nativeTeam": "SFO",
      "round": 3,
      "value": 36
  },
  {
      "pickNum": 101,
      "nativeTeam": "LAR",
      "round": 3,
      "value": 35
  },
  {
      "pickNum": 102,
      "nativeTeam": "CAR",
      "round": 4,
      "value": 34
  },
  {
      "pickNum": 103,
      "nativeTeam": "WAS",
      "round": 4,
      "value": 34
  },
  {
      "pickNum": 104,
      "nativeTeam": "NWE",
      "round": 4,
      "value": 33
  },
  {
      "pickNum": 105,
      "nativeTeam": "ARI",
      "round": 4,
      "value": 32
  },
  {
      "pickNum": 106,
      "nativeTeam": "LAC",
      "round": 4,
      "value": 32
  },
  {
      "pickNum": 107,
      "nativeTeam": "TEN",
      "round": 4,
      "value": 31
  },
  {
      "pickNum": 108,
      "nativeTeam": "NYG",
      "round": 4,
      "value": 30
  },
  {
      "pickNum": 109,
      "nativeTeam": "MIN",
      "round": 4,
      "value": 30
  },
  {
      "pickNum": 110,
      "nativeTeam": "ATL",
      "round": 4,
      "value": 29
  },
  {
      "pickNum": 111,
      "nativeTeam": "CHI",
      "round": 4,
      "value": 28
  },
  {
      "pickNum": 112,
      "nativeTeam": "NYJ",
      "round": 4,
      "value": 28
  },
  {
      "pickNum": 113,
      "nativeTeam": "LVR",
      "round": 4,
      "value": 27
  },
  {
      "pickNum": 114,
      "nativeTeam": "DEN",
      "round": 4,
      "value": 26
  },
  {
      "pickNum": 115,
      "nativeTeam": "JAX",
      "round": 4,
      "value": 26
  },
  {
      "pickNum": 116,
      "nativeTeam": "CIN",
      "round": 4,
      "value": 25
  },
  {
      "pickNum": 117,
      "nativeTeam": "NOR",
      "round": 4,
      "value": 25
  },
  {
      "pickNum": 118,
      "nativeTeam": "IND",
      "round": 4,
      "value": 24
  },
  {
      "pickNum": 119,
      "nativeTeam": "SEA",
      "round": 4,
      "value": 24
  },
  {
      "pickNum": 120,
      "nativeTeam": "PIT",
      "round": 4,
      "value": 23
  },
  {
      "pickNum": 121,
      "nativeTeam": "LAR",
      "round": 4,
      "value": 23
  },
  {
      "pickNum": 122,
      "nativeTeam": "MIA",
      "round": 4,
      "value": 22
  },
  {
      "pickNum": 123,
      "nativeTeam": "PHI",
      "round": 4,
      "value": 21
  },
  {
      "pickNum": 124,
      "nativeTeam": "CLE",
      "round": 4,
      "value": 21
  },
  {
      "pickNum": 125,
      "nativeTeam": "DAL",
      "round": 4,
      "value": 20
  },
  {
      "pickNum": 126,
      "nativeTeam": "TAM",
      "round": 4,
      "value": 20
  },
  {
      "pickNum": 127,
      "nativeTeam": "GNB",
      "round": 4,
      "value": 19
  },
  {
      "pickNum": 128,
      "nativeTeam": "HOU",
      "round": 4,
      "value": 19
  },
  {
      "pickNum": 129,
      "nativeTeam": "BUF",
      "round": 4,
      "value": 18
  },
  {
      "pickNum": 130,
      "nativeTeam": "DET",
      "round": 4,
      "value": 18
  },
  {
      "pickNum": 131,
      "nativeTeam": "BAL",
      "round": 4,
      "value": 18
  },
  {
      "pickNum": 132,
      "nativeTeam": "SFO",
      "round": 4,
      "value": 17
  },
  {
      "pickNum": 133,
      "nativeTeam": "KAN",
      "round": 4,
      "value": 17
  },
  {
      "pickNum": 134,
      "nativeTeam": "BAL",
      "round": 4,
      "value": 17
  },
  {
      "pickNum": 135,
      "nativeTeam": "CAR",
      "round": 5,
      "value": 17
  },
  {
      "pickNum": 136,
      "nativeTeam": "NWE",
      "round": 5,
      "value": 16
  },
  {
      "pickNum": 137,
      "nativeTeam": "ARI",
      "round": 5,
      "value": 16
  },
  {
      "pickNum": 138,
      "nativeTeam": "WAS",
      "round": 5,
      "value": 16
  },
  {
      "pickNum": 139,
      "nativeTeam": "LAC",
      "round": 5,
      "value": 15
  },
  {
      "pickNum": 140,
      "nativeTeam": "NYG",
      "round": 5,
      "value": 15
  },
  {
      "pickNum": 141,
      "nativeTeam": "TEN",
      "round": 5,
      "value": 14
  },
  {
      "pickNum": 142,
      "nativeTeam": "ATL",
      "round": 5,
      "value": 14
  },
  {
      "pickNum": 143,
      "nativeTeam": "CHI",
      "round": 5,
      "value": 14
  },
  {
      "pickNum": 144,
      "nativeTeam": "NYJ",
      "round": 5,
      "value": 13
  },
  {
      "pickNum": 145,
      "nativeTeam": "MIN",
      "round": 5,
      "value": 13
  },
  {
      "pickNum": 146,
      "nativeTeam": "DEN",
      "round": 5,
      "value": 13
  },
  {
      "pickNum": 147,
      "nativeTeam": "LVR",
      "round": 5,
      "value": 13
  },
  {
      "pickNum": 148,
      "nativeTeam": "CIN",
      "round": 5,
      "value": 12
  },
  {
      "pickNum": 149,
      "nativeTeam": "NOR",
      "round": 5,
      "value": 12
  },
  {
      "pickNum": 150,
      "nativeTeam": "IND",
      "round": 5,
      "value": 12
  },
  {
      "pickNum": 151,
      "nativeTeam": "SEA",
      "round": 5,
      "value": 12
  },
  {
      "pickNum": 152,
      "nativeTeam": "JAX",
      "round": 5,
      "value": 12
  },
  {
      "pickNum": 153,
      "nativeTeam": "LAR",
      "round": 5,
      "value": 11
  },
  {
      "pickNum": 154,
      "nativeTeam": "PIT",
      "round": 5,
      "value": 11
  },
  {
      "pickNum": 155,
      "nativeTeam": "PHI",
      "round": 5,
      "value": 11
  },
  {
      "pickNum": 156,
      "nativeTeam": "CLE",
      "round": 5,
      "value": 11
  },
  {
      "pickNum": 157,
      "nativeTeam": "MIA",
      "round": 5,
      "value": 10
  },
  {
      "pickNum": 158,
      "nativeTeam": "DAL",
      "round": 5,
      "value": 10
  },
  {
      "pickNum": 159,
      "nativeTeam": "GNB",
      "round": 5,
      "value": 10
  },
  {
      "pickNum": 160,
      "nativeTeam": "TAM",
      "round": 5,
      "value": 10
  },
  {
      "pickNum": 161,
      "nativeTeam": "HOU",
      "round": 5,
      "value": 9
  },
  {
      "pickNum": 162,
      "nativeTeam": "BUF",
      "round": 5,
      "value": 9
  },
  {
      "pickNum": 163,
      "nativeTeam": "DET",
      "round": 5,
      "value": 9
  },
  {
      "pickNum": 164,
      "nativeTeam": "BAL",
      "round": 5,
      "value": 9
  },
  {
      "pickNum": 165,
      "nativeTeam": "SFO",
      "round": 5,
      "value": 9
  },
  {
      "pickNum": 166,
      "nativeTeam": "KAN",
      "round": 5,
      "value": 8
  },
  {
      "pickNum": 167,
      "nativeTeam": "NOR",
      "round": 5,
      "value": 8
  },
  {
      "pickNum": 168,
      "nativeTeam": "GNB",
      "round": 5,
      "value": 8
  },
  {
      "pickNum": 169,
      "nativeTeam": "NOR",
      "round": 5,
      "value": 8
  },
  {
      "pickNum": 170,
      "nativeTeam": "PHI",
      "round": 5,
      "value": 8
  },
  {
      "pickNum": 171,
      "nativeTeam": "PHI",
      "round": 5,
      "value": 8
  },
  {
      "pickNum": 172,
      "nativeTeam": "KAN",
      "round": 5,
      "value": 7
  },
  {
      "pickNum": 173,
      "nativeTeam": "DAL",
      "round": 5,
      "value": 7
  },
  {
      "pickNum": 174,
      "nativeTeam": "NOR",
      "round": 5,
      "value": 7
  },
  {
      "pickNum": 175,
      "nativeTeam": "CIN",
      "round": 5,
      "value": 7
  },
  {
      "pickNum": 176,
      "nativeTeam": "SFO",
      "round": 5,
      "value": 7
  },
  {
      "pickNum": 177,
      "nativeTeam": "LAR",
      "round": 5,
      "value": 7
  },
  {
      "pickNum": 178,
      "nativeTeam": "PHI",
      "round": 5,
      "value": 6
  },
  {
      "pickNum": 179,
      "nativeTeam": "CAR",
      "round": 6,
      "value": 6
  },
  {
      "pickNum": 180,
      "nativeTeam": "ARI",
      "round": 6,
      "value": 6
  },
  {
      "pickNum": 181,
      "nativeTeam": "WAS",
      "round": 6,
      "value": 6
  },
  {
      "pickNum": 182,
      "nativeTeam": "NWE",
      "round": 6,
      "value": 6
  },
  {
      "pickNum": 183,
      "nativeTeam": "LAC",
      "round": 6,
      "value": 6
  },
  {
      "pickNum": 184,
      "nativeTeam": "TEN",
      "round": 6,
      "value": 6
  },
  {
      "pickNum": 185,
      "nativeTeam": "NYG",
      "round": 6,
      "value": 6
  },
  {
      "pickNum": 186,
      "nativeTeam": "CHI",
      "round": 6,
      "value": 5
  },
  {
      "pickNum": 187,
      "nativeTeam": "NYJ",
      "round": 6,
      "value": 5
  },
  {
      "pickNum": 188,
      "nativeTeam": "MIN",
      "round": 6,
      "value": 5
  },
  {
      "pickNum": 189,
      "nativeTeam": "ATL",
      "round": 6,
      "value": 5
  },
  {
      "pickNum": 190,
      "nativeTeam": "LVR",
      "round": 6,
      "value": 5
  },
  {
      "pickNum": 191,
      "nativeTeam": "DEN",
      "round": 6,
      "value": 5
  },
  {
      "pickNum": 192,
      "nativeTeam": "NOR",
      "round": 6,
      "value": 5
  },
  {
      "pickNum": 193,
      "nativeTeam": "IND",
      "round": 6,
      "value": 5
  },
  {
      "pickNum": 194,
      "nativeTeam": "SEA",
      "round": 6,
      "value": 5
  },
  {
      "pickNum": 195,
      "nativeTeam": "JAX",
      "round": 6,
      "value": 4
  },
  {
      "pickNum": 196,
      "nativeTeam": "CIN",
      "round": 6,
      "value": 4
  },
  {
      "pickNum": 197,
      "nativeTeam": "PIT",
      "round": 6,
      "value": 4
  },
  {
      "pickNum": 198,
      "nativeTeam": "LAR",
      "round": 6,
      "value": 4
  },
  {
      "pickNum": 199,
      "nativeTeam": "CLE",
      "round": 6,
      "value": 4
  },
  {
      "pickNum": 200,
      "nativeTeam": "MIA",
      "round": 6,
      "value": 4
  },
  {
      "pickNum": 201,
      "nativeTeam": "PHI",
      "round": 6,
      "value": 4
  },
  {
      "pickNum": 202,
      "nativeTeam": "DAL",
      "round": 6,
      "value": 4
  },
  {
      "pickNum": 203,
      "nativeTeam": "TAM",
      "round": 6,
      "value": 4
  },
  {
      "pickNum": 204,
      "nativeTeam": "GNB",
      "round": 6,
      "value": 4
  },
  {
      "pickNum": 205,
      "nativeTeam": "HOU",
      "round": 6,
      "value": 4
  },
  {
      "pickNum": 206,
      "nativeTeam": "BUF",
      "round": 6,
      "value": 4
  },
  {
      "pickNum": 207,
      "nativeTeam": "DET",
      "round": 6,
      "value": 3
  },
  {
      "pickNum": 208,
      "nativeTeam": "BAL",
      "round": 6,
      "value": 3
  },
  {
      "pickNum": 209,
      "nativeTeam": "SFO",
      "round": 6,
      "value": 3
  },
  {
      "pickNum": 210,
      "nativeTeam": "KAN",
      "round": 6,
      "value": 3
  },
  {
      "pickNum": 211,
      "nativeTeam": "JAX",
      "round": 6,
      "value": 3
  },
  {
      "pickNum": 212,
      "nativeTeam": "LAR",
      "round": 6,
      "value": 3
  },
  {
      "pickNum": 213,
      "nativeTeam": "DAL",
      "round": 6,
      "value": 3
  },
  {
      "pickNum": 214,
      "nativeTeam": "SFO",
      "round": 6,
      "value": 3
  },
  {
      "pickNum": 215,
      "nativeTeam": "SFO",
      "round": 6,
      "value": 3
  },
  {
      "pickNum": 216,
      "nativeTeam": "GNB",
      "round": 6,
      "value": 3
  },
  {
      "pickNum": 217,
      "nativeTeam": "LAR",
      "round": 6,
      "value": 3
  },
  {
      "pickNum": 218,
      "nativeTeam": "LAR",
      "round": 6,
      "value": 3
  },
  {
      "pickNum": 219,
      "nativeTeam": "CAR",
      "round": 7,
      "value": 3
  },
  {
      "pickNum": 220,
      "nativeTeam": "WAS",
      "round": 7,
      "value": 3
  },
  {
      "pickNum": 221,
      "nativeTeam": "NWE",
      "round": 7,
      "value": 3
  },
  {
      "pickNum": 222,
      "nativeTeam": "ARI",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 223,
      "nativeTeam": "LAC",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 224,
      "nativeTeam": "NYG",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 225,
      "nativeTeam": "TEN",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 226,
      "nativeTeam": "NYJ",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 227,
      "nativeTeam": "MIN",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 228,
      "nativeTeam": "ATL",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 229,
      "nativeTeam": "CHI",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 230,
      "nativeTeam": "DEN",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 231,
      "nativeTeam": "LVR",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 232,
      "nativeTeam": "IND",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 233,
      "nativeTeam": "SEA",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 234,
      "nativeTeam": "JAX",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 235,
      "nativeTeam": "CIN",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 236,
      "nativeTeam": "NOR",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 237,
      "nativeTeam": "LAR",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 238,
      "nativeTeam": "PIT",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 239,
      "nativeTeam": "MIA",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 240,
      "nativeTeam": "PHI",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 241,
      "nativeTeam": "CLE",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 242,
      "nativeTeam": "DAL",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 243,
      "nativeTeam": "GNB",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 244,
      "nativeTeam": "TAM",
      "round": 7,
      "value": 2
  },
  {
      "pickNum": 245,
      "nativeTeam": "HOU",
      "round": 7,
      "value": 1
  },
  {
      "pickNum": 246,
      "nativeTeam": "BUF",
      "round": 7,
      "value": 1
  },
  {
      "pickNum": 247,
      "nativeTeam": "DET",
      "round": 7,
      "value": 1
  },
  {
      "pickNum": 248,
      "nativeTeam": "BAL",
      "round": 7,
      "value": 1
  },
  {
      "pickNum": 249,
      "nativeTeam": "SFO",
      "round": 7,
      "value": 1
  },
  {
      "pickNum": 250,
      "nativeTeam": "KAN",
      "round": 7,
      "value": 1
  },
  {
      "pickNum": 251,
      "nativeTeam": "GNB",
      "round": 7,
      "value": 1
  },
  {
      "pickNum": 252,
      "nativeTeam": "CIN",
      "round": 7,
      "value": 1
  },
  {
      "pickNum": 253,
      "nativeTeam": "NYJ",
      "round": 7,
      "value": 1
  },
  {
      "pickNum": 254,
      "nativeTeam": "NYJ",
      "round": 7,
      "value": 1
  },
  {
      "pickNum": 255,
      "nativeTeam": "TAM",
      "round": 7,
      "value": 1
  },
  {
      "pickNum": 256,
      "nativeTeam": "LAC",
      "round": 7,
      "value": 1
  },
  {
      "pickNum": 257,
      "nativeTeam": "NYJ",
      "round": 7,
      "value": 1
  }
];