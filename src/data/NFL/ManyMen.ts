import { type AllNFLTeamType } from "./NFLdata"

type ManType = {
  name: string,
  birthDate: string,
  wins: GameType[],
  losses: GameType[],
}

type GameType = {
  year: number,
  team: AllNFLTeamType,
}

export const manyMen: ManType[] = [
    {
        "name": "Herb Adderley",
        "birthDate": "6/8/1939",
        "wins": [
            {
                "year": 1966,
                "team": "GNB"
            },
            {
                "year": 1967,
                "team": "GNB"
            },
            {
                "year": 1971,
                "team": "DAL"
            }
        ],
        "losses": [
            {
                "year": 1970,
                "team": "DAL"
            }
        ]
    },
    {
        "name": "Lee Roy Caffey",
        "birthDate": "6/3/1941",
        "wins": [
            {
                "year": 1966,
                "team": "GNB"
            },
            {
                "year": 1967,
                "team": "GNB"
            },
            {
                "year": 1971,
                "team": "DAL"
            }
        ],
        "losses": []
    },
    {
        "name": "Bill Curry",
        "birthDate": "10/21/1942",
        "wins": [
            {
                "year": 1966,
                "team": "GNB"
            },
            {
                "year": 1970,
                "team": "BCS"
            }
        ],
        "losses": [
            {
                "year": 1968,
                "team": "BCS"
            }
        ]
    },
    {
        "name": "Carroll Dale",
        "birthDate": "4/24/1938",
        "wins": [
            {
                "year": 1966,
                "team": "GNB"
            },
            {
                "year": 1967,
                "team": "GNB"
            }
        ],
        "losses": [
            {
                "year": 1973,
                "team": "MIN"
            }
        ]
    },
    {
        "name": "Marv Fleming",
        "birthDate": "1/2/1942",
        "wins": [
            {
                "year": 1966,
                "team": "GNB"
            },
            {
                "year": 1967,
                "team": "GNB"
            },
            {
                "year": 1972,
                "team": "MIA"
            },
            {
                "year": 1973,
                "team": "MIA"
            }
        ],
        "losses": [
            {
                "year": 1971,
                "team": "MIA"
            }
        ]
    },
    {
        "name": "Forrest Gregg",
        "birthDate": "10/18/1933",
        "wins": [
            {
                "year": 1966,
                "team": "GNB"
            },
            {
                "year": 1967,
                "team": "GNB"
            },
            {
                "year": 1971,
                "team": "DAL"
            }
        ],
        "losses": []
    },
    {
        "name": "Verlon Biggs",
        "birthDate": "3/16/1943",
        "wins": [
            {
                "year": 1968,
                "team": "NYJ"
            }
        ],
        "losses": [
            {
                "year": 1972,
                "team": "WRS"
            }
        ]
    },
    {
        "name": "Jim Turner",
        "birthDate": "3/28/1941",
        "wins": [
            {
                "year": 1968,
                "team": "NYJ"
            }
        ],
        "losses": [
            {
                "year": 1977,
                "team": "DEN"
            }
        ]
    },
    {
        "name": "Gloster Richardson",
        "birthDate": "7/18/1942",
        "wins": [
            {
                "year": 1969,
                "team": "KAN"
            },
            {
                "year": 1971,
                "team": "DAL"
            }
        ],
        "losses": []
    },
    {
        "name": "Ted Hendricks",
        "birthDate": "11/1/1947",
        "wins": [
            {
                "year": 1970,
                "team": "BCS"
            },
            {
                "year": 1976,
                "team": "OAK"
            },
            {
                "year": 1980,
                "team": "OAK"
            },
            {
                "year": 1983,
                "team": "OAK"
            }
        ],
        "losses": []
    },
    {
        "name": "Roy Jefferson",
        "birthDate": "11/9/1943",
        "wins": [
            {
                "year": 1970,
                "team": "BCS"
            }
        ],
        "losses": [
            {
                "year": 1972,
                "team": "WRS"
            }
        ]
    },
    {
        "name": "Earl Morrall",
        "birthDate": "5/17/1934",
        "wins": [
            {
                "year": 1970,
                "team": "BCS"
            },
            {
                "year": 1972,
                "team": "MIA"
            },
            {
                "year": 1973,
                "team": "MIA"
            }
        ],
        "losses": [
            {
                "year": 1968,
                "team": "BCS"
            }
        ]
    },
    {
        "name": "John Williams",
        "birthDate": "10/27/1945",
        "wins": [
            {
                "year": 1970,
                "team": "BCS"
            }
        ],
        "losses": [
            {
                "year": 1968,
                "team": "BCS"
            },
            {
                "year": 1979,
                "team": "LAR"
            }
        ]
    },
    {
        "name": "Craig Morton",
        "birthDate": "2/5/1943",
        "wins": [
            {
                "year": 1971,
                "team": "DAL"
            }
        ],
        "losses": [
            {
                "year": 1970,
                "team": "DAL"
            },
            {
                "year": 1977,
                "team": "DEN"
            }
        ]
    },
    {
        "name": "Hubert Ginn",
        "birthDate": "1/4/1947",
        "wins": [
            {
                "year": 1972,
                "team": "MIA"
            },
            {
                "year": 1973,
                "team": "MIA"
            },
            {
                "year": 1976,
                "team": "OAK"
            }
        ],
        "losses": [
            {
                "year": 1971,
                "team": "MIA"
            }
        ]
    },
    {
        "name": "Jim Kiick",
        "birthDate": "8/9/1946",
        "wins": [
            {
                "year": 1972,
                "team": "MIA"
            },
            {
                "year": 1973,
                "team": "MIA"
            }
        ],
        "losses": [
            {
                "year": 1971,
                "team": "MIA"
            },
            {
                "year": 1977,
                "team": "DEN"
            }
        ]
    },
    {
        "name": "Jim Mandich",
        "birthDate": "7/30/1948",
        "wins": [
            {
                "year": 1972,
                "team": "MIA"
            },
            {
                "year": 1973,
                "team": "MIA"
            },
            {
                "year": 1978,
                "team": "PIT"
            }
        ],
        "losses": [
            {
                "year": 1971,
                "team": "MIA"
            }
        ]
    },
    {
        "name": "Gordon Gravelle",
        "birthDate": "6/12/1949",
        "wins": [
            {
                "year": 1974,
                "team": "PIT"
            },
            {
                "year": 1975,
                "team": "PIT"
            }
        ],
        "losses": [
            {
                "year": 1979,
                "team": "LAR"
            }
        ]
    },
    {
        "name": "Preston Pearson",
        "birthDate": "1/17/1945",
        "wins": [
            {
                "year": 1974,
                "team": "PIT"
            },
            {
                "year": 1977,
                "team": "DAL"
            }
        ],
        "losses": [
            {
                "year": 1968,
                "team": "BCS"
            },
            {
                "year": 1975,
                "team": "DAL"
            },
            {
                "year": 1978,
                "team": "DAL"
            }
        ]
    },
    {
        "name": "Andy Frederick",
        "birthDate": "7/25/1954",
        "wins": [
            {
                "year": 1977,
                "team": "DAL"
            },
            {
                "year": 1985,
                "team": "CHI"
            }
        ],
        "losses": [
            {
                "year": 1978,
                "team": "DAL"
            }
        ]
    },
    {
        "name": "Dave Stalls",
        "birthDate": "9/19/1955",
        "wins": [
            {
                "year": 1977,
                "team": "DAL"
            },
            {
                "year": 1983,
                "team": "OAK"
            }
        ],
        "losses": [
            {
                "year": 1978,
                "team": "DAL"
            }
        ]
    },
    {
        "name": "Matt Bahr",
        "birthDate": "7/6/1956",
        "wins": [
            {
                "year": 1979,
                "team": "PIT"
            },
            {
                "year": 1981,
                "team": "SFO"
            },
            {
                "year": 1990,
                "team": "NYG"
            }
        ],
        "losses": []
    },
    {
        "name": "Greg Hawthorne",
        "birthDate": "9/5/1956",
        "wins": [
            {
                "year": 1979,
                "team": "PIT"
            }
        ],
        "losses": [
            {
                "year": 1985,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Matt Millen",
        "birthDate": "3/12/1958",
        "wins": [
            {
                "year": 1980,
                "team": "OAK"
            },
            {
                "year": 1983,
                "team": "OAK"
            },
            {
                "year": 1989,
                "team": "SFO"
            },
            {
                "year": 1991,
                "team": "WRS"
            }
        ],
        "losses": []
    },
    {
        "name": "Dwayne O'Steen",
        "birthDate": "12/20/1954",
        "wins": [
            {
                "year": 1980,
                "team": "OAK"
            }
        ],
        "losses": [
            {
                "year": 1979,
                "team": "LAR"
            }
        ]
    },
    {
        "name": "Derrick Ramsey",
        "birthDate": "12/23/1956",
        "wins": [
            {
                "year": 1980,
                "team": "OAK"
            },
            {
                "year": 1983,
                "team": "OAK"
            }
        ],
        "losses": [
            {
                "year": 1985,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Greg Westbrooks",
        "birthDate": "2/24/1953",
        "wins": [
            {
                "year": 1980,
                "team": "OAK"
            }
        ],
        "losses": [
            {
                "year": 1979,
                "team": "LAR"
            }
        ]
    },
    {
        "name": "John Ayers",
        "birthDate": "4/14/1953",
        "wins": [
            {
                "year": 1981,
                "team": "SFO"
            },
            {
                "year": 1984,
                "team": "SFO"
            }
        ],
        "losses": [
            {
                "year": 1987,
                "team": "DEN"
            }
        ]
    },
    {
        "name": "Archie Reese",
        "birthDate": "2/4/1956",
        "wins": [
            {
                "year": 1981,
                "team": "SFO"
            },
            {
                "year": 1983,
                "team": "OAK"
            }
        ],
        "losses": []
    },
    {
        "name": "Jack Reynolds",
        "birthDate": "11/22/1947",
        "wins": [
            {
                "year": 1981,
                "team": "SFO"
            },
            {
                "year": 1984,
                "team": "SFO"
            }
        ],
        "losses": [
            {
                "year": 1979,
                "team": "LAR"
            }
        ]
    },
    {
        "name": "Charle Young",
        "birthDate": "2/5/1951",
        "wins": [
            {
                "year": 1981,
                "team": "SFO"
            }
        ],
        "losses": [
            {
                "year": 1979,
                "team": "LAR"
            }
        ]
    },
    {
        "name": "Lyle Alzado",
        "birthDate": "4/3/1949",
        "wins": [
            {
                "year": 1983,
                "team": "OAK"
            }
        ],
        "losses": [
            {
                "year": 1977,
                "team": "DEN"
            }
        ]
    },
    {
        "name": "Kenny Hill",
        "birthDate": "7/25/1958",
        "wins": [
            {
                "year": 1983,
                "team": "OAK"
            },
            {
                "year": 1986,
                "team": "NYG"
            }
        ],
        "losses": []
    },
    {
        "name": "Matt Cavanaugh",
        "birthDate": "10/27/1956",
        "wins": [
            {
                "year": 1984,
                "team": "SFO"
            },
            {
                "year": 1990,
                "team": "NYG"
            }
        ],
        "losses": []
    },
    {
        "name": "Tom Orosz",
        "birthDate": "9/26/1959",
        "wins": [
            {
                "year": 1984,
                "team": "SFO"
            }
        ],
        "losses": [
            {
                "year": 1982,
                "team": "MIA"
            }
        ]
    },
    {
        "name": "Max Runager",
        "birthDate": "3/24/1956",
        "wins": [
            {
                "year": 1984,
                "team": "SFO"
            },
            {
                "year": 1988,
                "team": "SFO"
            }
        ],
        "losses": [
            {
                "year": 1980,
                "team": "PHI"
            }
        ]
    },
    {
        "name": "Wendell Tyler",
        "birthDate": "5/20/1955",
        "wins": [
            {
                "year": 1984,
                "team": "SFO"
            }
        ],
        "losses": [
            {
                "year": 1979,
                "team": "LAR"
            }
        ]
    },
    {
        "name": "Richard Dent",
        "birthDate": "12/13/1960",
        "wins": [
            {
                "year": 1985,
                "team": "CHI"
            },
            {
                "year": 1994,
                "team": "SFO"
            }
        ],
        "losses": []
    },
    {
        "name": "Dave Duerson",
        "birthDate": "11/28/1960",
        "wins": [
            {
                "year": 1985,
                "team": "CHI"
            },
            {
                "year": 1990,
                "team": "NYG"
            }
        ],
        "losses": []
    },
    {
        "name": "Stefan Humphries",
        "birthDate": "1/20/1962",
        "wins": [
            {
                "year": 1985,
                "team": "CHI"
            }
        ],
        "losses": [
            {
                "year": 1987,
                "team": "DEN"
            }
        ]
    },
    {
        "name": "Wilber Marshall",
        "birthDate": "4/18/1962",
        "wins": [
            {
                "year": 1985,
                "team": "CHI"
            },
            {
                "year": 1991,
                "team": "WRS"
            }
        ],
        "losses": []
    },
    {
        "name": "Jim McMahon",
        "birthDate": "8/21/1959",
        "wins": [
            {
                "year": 1985,
                "team": "CHI"
            },
            {
                "year": 1996,
                "team": "GNB"
            }
        ],
        "losses": []
    },
    {
        "name": "Mike Richardson",
        "birthDate": "5/23/1961",
        "wins": [
            {
                "year": 1985,
                "team": "CHI"
            },
            {
                "year": 1989,
                "team": "SFO"
            }
        ],
        "losses": []
    },
    {
        "name": "Mike Tomczak",
        "birthDate": "10/23/1962",
        "wins": [
            {
                "year": 1985,
                "team": "CHI"
            }
        ],
        "losses": [
            {
                "year": 1995,
                "team": "PIT"
            }
        ]
    },
    {
        "name": "Henry Waechter",
        "birthDate": "2/13/1959",
        "wins": [
            {
                "year": 1985,
                "team": "CHI"
            },
            {
                "year": 1987,
                "team": "WRS"
            }
        ],
        "losses": []
    },
    {
        "name": "Jim Burt",
        "birthDate": "6/7/1959",
        "wins": [
            {
                "year": 1986,
                "team": "NYG"
            },
            {
                "year": 1989,
                "team": "SFO"
            }
        ],
        "losses": []
    },
    {
        "name": "Mark Collins",
        "birthDate": "1/16/1964",
        "wins": [
            {
                "year": 1986,
                "team": "NYG"
            },
            {
                "year": 1990,
                "team": "NYG"
            }
        ],
        "losses": [
            {
                "year": 1997,
                "team": "GNB"
            }
        ]
    },
    {
        "name": "Bart Oates",
        "birthDate": "12/16/1958",
        "wins": [
            {
                "year": 1986,
                "team": "NYG"
            },
            {
                "year": 1990,
                "team": "NYG"
            },
            {
                "year": 1994,
                "team": "SFO"
            }
        ],
        "losses": []
    },
    {
        "name": "Elvis Patterson",
        "birthDate": "10/21/1960",
        "wins": [
            {
                "year": 1986,
                "team": "NYG"
            },
            {
                "year": 1993,
                "team": "DAL"
            }
        ],
        "losses": []
    },
    {
        "name": "William Roberts",
        "birthDate": "8/5/1962",
        "wins": [
            {
                "year": 1986,
                "team": "NYG"
            },
            {
                "year": 1990,
                "team": "NYG"
            }
        ],
        "losses": [
            {
                "year": 1996,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Jeff Rutledge",
        "birthDate": "1/22/1957",
        "wins": [
            {
                "year": 1986,
                "team": "NYG"
            },
            {
                "year": 1991,
                "team": "WRS"
            }
        ],
        "losses": [
            {
                "year": 1979,
                "team": "LAR"
            }
        ]
    },
    {
        "name": "David Jones",
        "birthDate": "10/25/1961",
        "wins": [
            {
                "year": 1987,
                "team": "WRS"
            }
        ],
        "losses": [
            {
                "year": 1987,
                "team": "DEN"
            }
        ]
    },
    {
        "name": "Charles Mann",
        "birthDate": "4/12/1961",
        "wins": [
            {
                "year": 1987,
                "team": "WRS"
            },
            {
                "year": 1991,
                "team": "WRS"
            },
            {
                "year": 1994,
                "team": "SFO"
            }
        ],
        "losses": [
            {
                "year": 1983,
                "team": "WRS"
            }
        ]
    },
    {
        "name": "Jack Weil",
        "birthDate": "3/16/1962",
        "wins": [
            {
                "year": 1987,
                "team": "WRS"
            }
        ],
        "losses": [
            {
                "year": 1986,
                "team": "DEN"
            }
        ]
    },
    {
        "name": "Charles Haley",
        "birthDate": "1/6/1964",
        "wins": [
            {
                "year": 1988,
                "team": "SFO"
            },
            {
                "year": 1989,
                "team": "SFO"
            },
            {
                "year": 1992,
                "team": "DAL"
            },
            {
                "year": 1993,
                "team": "DAL"
            },
            {
                "year": 1995,
                "team": "DAL"
            }
        ],
        "losses": []
    },
    {
        "name": "Tim McKyer",
        "birthDate": "9/5/1963",
        "wins": [
            {
                "year": 1988,
                "team": "SFO"
            },
            {
                "year": 1989,
                "team": "SFO"
            },
            {
                "year": 1997,
                "team": "DEN"
            }
        ],
        "losses": []
    },
    {
        "name": "Jerry Rice",
        "birthDate": "10/13/1962",
        "wins": [
            {
                "year": 1988,
                "team": "SFO"
            },
            {
                "year": 1989,
                "team": "SFO"
            },
            {
                "year": 1994,
                "team": "SFO"
            }
        ],
        "losses": [
            {
                "year": 2002,
                "team": "OAK"
            }
        ]
    },
    {
        "name": "Bill Romanowski",
        "birthDate": "4/2/1966",
        "wins": [
            {
                "year": 1988,
                "team": "SFO"
            },
            {
                "year": 1989,
                "team": "SFO"
            },
            {
                "year": 1997,
                "team": "DEN"
            },
            {
                "year": 1998,
                "team": "DEN"
            }
        ],
        "losses": [
            {
                "year": 2002,
                "team": "OAK"
            }
        ]
    },
    {
        "name": "Steve Bono",
        "birthDate": "5/11/1962",
        "wins": [
            {
                "year": 1989,
                "team": "SFO"
            }
        ],
        "losses": [
            {
                "year": 1997,
                "team": "GNB"
            }
        ]
    },
    {
        "name": "Steve Hendrickson",
        "birthDate": "8/30/1966",
        "wins": [
            {
                "year": 1989,
                "team": "SFO"
            }
        ],
        "losses": [
            {
                "year": 1994,
                "team": "SDC"
            }
        ]
    },
    {
        "name": "Bobby Abrams",
        "birthDate": "4/12/1967",
        "wins": [
            {
                "year": 1990,
                "team": "NYG"
            },
            {
                "year": 1992,
                "team": "DAL"
            },
            {
                "year": 1993,
                "team": "DAL"
            }
        ],
        "losses": []
    },
    {
        "name": "Bob Kratch",
        "birthDate": "1/6/1966",
        "wins": [
            {
                "year": 1990,
                "team": "NYG"
            }
        ],
        "losses": [
            {
                "year": 1996,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Larry McGrew",
        "birthDate": "7/23/1957",
        "wins": [
            {
                "year": 1990,
                "team": "NYG"
            }
        ],
        "losses": [
            {
                "year": 1985,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Dave Meggett",
        "birthDate": "4/30/1966",
        "wins": [
            {
                "year": 1990,
                "team": "NYG"
            }
        ],
        "losses": [
            {
                "year": 1996,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Jason Buck",
        "birthDate": "7/27/1963",
        "wins": [
            {
                "year": 1991,
                "team": "WRS"
            }
        ],
        "losses": [
            {
                "year": 1988,
                "team": "CIN"
            }
        ]
    },
    {
        "name": "Alvoid Mays",
        "birthDate": "7/10/1966",
        "wins": [
            {
                "year": 1991,
                "team": "WRS"
            }
        ],
        "losses": [
            {
                "year": 1995,
                "team": "PIT"
            }
        ]
    },
    {
        "name": "Mark Schlereth",
        "birthDate": "1/25/1966",
        "wins": [
            {
                "year": 1991,
                "team": "WRS"
            },
            {
                "year": 1997,
                "team": "DEN"
            },
            {
                "year": 1998,
                "team": "DEN"
            }
        ],
        "losses": []
    },
    {
        "name": "Ralph Tamm",
        "birthDate": "3/11/1966",
        "wins": [
            {
                "year": 1991,
                "team": "WRS"
            },
            {
                "year": 1994,
                "team": "SFO"
            }
        ],
        "losses": []
    },
    {
        "name": "Ray Horton",
        "birthDate": "4/12/1960",
        "wins": [
            {
                "year": 1992,
                "team": "DAL"
            }
        ],
        "losses": [
            {
                "year": 1988,
                "team": "CIN"
            }
        ]
    },
    {
        "name": "Ken Norton Jr.",
        "birthDate": "9/29/1966",
        "wins": [
            {
                "year": 1992,
                "team": "DAL"
            },
            {
                "year": 1993,
                "team": "DAL"
            },
            {
                "year": 1994,
                "team": "SFO"
            }
        ],
        "losses": []
    },
    {
        "name": "Jason Garrett",
        "birthDate": "3/28/1966",
        "wins": [
            {
                "year": 1993,
                "team": "DAL"
            },
            {
                "year": 1995,
                "team": "DAL"
            }
        ],
        "losses": [
            {
                "year": 2000,
                "team": "NYG"
            }
        ]
    },
    {
        "name": "Dave Thomas",
        "birthDate": "8/25/1968",
        "wins": [
            {
                "year": 1993,
                "team": "DAL"
            }
        ],
        "losses": [
            {
                "year": 2000,
                "team": "NYG"
            }
        ]
    },
    {
        "name": "Dedrick Dodge",
        "birthDate": "6/14/1967",
        "wins": [
            {
                "year": 1994,
                "team": "SFO"
            },
            {
                "year": 1997,
                "team": "DEN"
            }
        ],
        "losses": []
    },
    {
        "name": "Marc Logan",
        "birthDate": "5/9/1965",
        "wins": [
            {
                "year": 1994,
                "team": "SFO"
            }
        ],
        "losses": [
            {
                "year": 1988,
                "team": "CIN"
            }
        ]
    },
    {
        "name": "Derek Loville",
        "birthDate": "7/4/1968",
        "wins": [
            {
                "year": 1994,
                "team": "SFO"
            },
            {
                "year": 1997,
                "team": "DEN"
            },
            {
                "year": 1998,
                "team": "DEN"
            }
        ],
        "losses": []
    },
    {
        "name": "Ed McCaffrey",
        "birthDate": "8/17/1968",
        "wins": [
            {
                "year": 1994,
                "team": "SFO"
            },
            {
                "year": 1997,
                "team": "DEN"
            },
            {
                "year": 1998,
                "team": "DEN"
            }
        ],
        "losses": []
    },
    {
        "name": "Deion Sanders",
        "birthDate": "8/9/1967",
        "wins": [
            {
                "year": 1994,
                "team": "SFO"
            },
            {
                "year": 1995,
                "team": "DAL"
            }
        ],
        "losses": []
    },
    {
        "name": "Robert Bailey",
        "birthDate": "9/3/1968",
        "wins": [
            {
                "year": 1995,
                "team": "DAL"
            },
            {
                "year": 2000,
                "team": "BAL"
            }
        ],
        "losses": []
    },
    {
        "name": "Billy Davis",
        "birthDate": "7/6/1972",
        "wins": [
            {
                "year": 1995,
                "team": "DAL"
            },
            {
                "year": 2000,
                "team": "BAL"
            }
        ],
        "losses": []
    },
    {
        "name": "Ron Stone",
        "birthDate": "7/20/1971",
        "wins": [
            {
                "year": 1995,
                "team": "DAL"
            }
        ],
        "losses": [
            {
                "year": 2000,
                "team": "NYG"
            }
        ]
    },
    {
        "name": "Don Beebe",
        "birthDate": "12/18/1964",
        "wins": [
            {
                "year": 1996,
                "team": "GNB"
            }
        ],
        "losses": [
            {
                "year": 1990,
                "team": "BUF"
            },
            {
                "year": 1991,
                "team": "BUF"
            },
            {
                "year": 1992,
                "team": "BUF"
            },
            {
                "year": 1993,
                "team": "BUF"
            },
            {
                "year": 1997,
                "team": "GNB"
            }
        ]
    },
    {
        "name": "Jeff Dellenbach",
        "birthDate": "2/14/1963",
        "wins": [
            {
                "year": 1996,
                "team": "GNB"
            }
        ],
        "losses": [
            {
                "year": 1996,
                "team": "NWE"
            },
            {
                "year": 1997,
                "team": "GNB"
            }
        ]
    },
    {
        "name": "Craig Hentrich",
        "birthDate": "5/18/1971",
        "wins": [
            {
                "year": 1996,
                "team": "GNB"
            }
        ],
        "losses": [
            {
                "year": 1997,
                "team": "GNB"
            },
            {
                "year": 1999,
                "team": "TEN"
            }
        ]
    },
    {
        "name": "Dorsey Levens",
        "birthDate": "5/21/1970",
        "wins": [
            {
                "year": 1996,
                "team": "GNB"
            }
        ],
        "losses": [
            {
                "year": 1997,
                "team": "GNB"
            },
            {
                "year": 2004,
                "team": "PHI"
            }
        ]
    },
    {
        "name": "Eugene Robinson",
        "birthDate": "5/28/1963",
        "wins": [
            {
                "year": 1996,
                "team": "GNB"
            }
        ],
        "losses": [
            {
                "year": 1997,
                "team": "GNB"
            },
            {
                "year": 1998,
                "team": "ATL"
            }
        ]
    },
    {
        "name": "Jeff Thomason",
        "birthDate": "12/30/1969",
        "wins": [
            {
                "year": 1996,
                "team": "GNB"
            }
        ],
        "losses": [
            {
                "year": 1997,
                "team": "GNB"
            },
            {
                "year": 2004,
                "team": "PHI"
            }
        ]
    },
    {
        "name": "Adam Timmerman",
        "birthDate": "8/14/1971",
        "wins": [
            {
                "year": 1996,
                "team": "GNB"
            },
            {
                "year": 1999,
                "team": "STL"
            }
        ],
        "losses": [
            {
                "year": 1997,
                "team": "GNB"
            },
            {
                "year": 2001,
                "team": "STL"
            }
        ]
    },
    {
        "name": "Darrien Gordon",
        "birthDate": "11/14/1970",
        "wins": [
            {
                "year": 1997,
                "team": "DEN"
            },
            {
                "year": 1998,
                "team": "DEN"
            }
        ],
        "losses": [
            {
                "year": 1994,
                "team": "SDC"
            },
            {
                "year": 2002,
                "team": "OAK"
            }
        ]
    },
    {
        "name": "Mike Lodish",
        "birthDate": "8/11/1967",
        "wins": [
            {
                "year": 1997,
                "team": "DEN"
            },
            {
                "year": 1998,
                "team": "DEN"
            }
        ],
        "losses": [
            {
                "year": 1990,
                "team": "BUF"
            },
            {
                "year": 1991,
                "team": "BUF"
            },
            {
                "year": 1992,
                "team": "BUF"
            },
            {
                "year": 1993,
                "team": "BUF"
            }
        ]
    },
    {
        "name": "Tom Rouen",
        "birthDate": "6/9/1968",
        "wins": [
            {
                "year": 1997,
                "team": "DEN"
            },
            {
                "year": 1998,
                "team": "DEN"
            }
        ],
        "losses": [
            {
                "year": 2005,
                "team": "SEA"
            }
        ]
    },
    {
        "name": "Shannon Sharpe",
        "birthDate": "6/26/1968",
        "wins": [
            {
                "year": 1997,
                "team": "DEN"
            },
            {
                "year": 1998,
                "team": "DEN"
            },
            {
                "year": 2000,
                "team": "BAL"
            }
        ],
        "losses": []
    },
    {
        "name": "Harry Swayne",
        "birthDate": "2/2/1965",
        "wins": [
            {
                "year": 1997,
                "team": "DEN"
            },
            {
                "year": 1998,
                "team": "DEN"
            },
            {
                "year": 2000,
                "team": "BAL"
            }
        ],
        "losses": [
            {
                "year": 1994,
                "team": "SDC"
            }
        ]
    },
    {
        "name": "Keith Traylor",
        "birthDate": "9/3/1969",
        "wins": [
            {
                "year": 1997,
                "team": "DEN"
            },
            {
                "year": 1998,
                "team": "DEN"
            },
            {
                "year": 2004,
                "team": "NWE"
            }
        ],
        "losses": []
    },
    {
        "name": "Brian Griese",
        "birthDate": "3/18/1975",
        "wins": [
            {
                "year": 1998,
                "team": "DEN"
            }
        ],
        "losses": [
            {
                "year": 2006,
                "team": "CHI"
            }
        ]
    },
    {
        "name": "Tory James",
        "birthDate": "5/18/1973",
        "wins": [
            {
                "year": 1998,
                "team": "DEN"
            }
        ],
        "losses": [
            {
                "year": 2002,
                "team": "OAK"
            }
        ]
    },
    {
        "name": "Seth Joyner",
        "birthDate": "11/18/1964",
        "wins": [
            {
                "year": 1998,
                "team": "DEN"
            }
        ],
        "losses": [
            {
                "year": 1997,
                "team": "GNB"
            }
        ]
    },
    {
        "name": "Nate Wayne",
        "birthDate": "1/12/1975",
        "wins": [
            {
                "year": 1998,
                "team": "DEN"
            }
        ],
        "losses": [
            {
                "year": 2004,
                "team": "PHI"
            }
        ]
    },
    {
        "name": "Devin Bush Sr.",
        "birthDate": "7/3/1973",
        "wins": [
            {
                "year": 1999,
                "team": "STL"
            }
        ],
        "losses": [
            {
                "year": 1998,
                "team": "ATL"
            }
        ]
    },
    {
        "name": "Todd Collins",
        "birthDate": "5/27/1970",
        "wins": [
            {
                "year": 1999,
                "team": "STL"
            }
        ],
        "losses": [
            {
                "year": 1996,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Mike Horan",
        "birthDate": "2/1/1959",
        "wins": [
            {
                "year": 1999,
                "team": "STL"
            }
        ],
        "losses": [
            {
                "year": 1986,
                "team": "DEN"
            },
            {
                "year": 1987,
                "team": "DEN"
            },
            {
                "year": 1989,
                "team": "DEN"
            }
        ]
    },
    {
        "name": "Mike Jones",
        "birthDate": "4/15/1969",
        "wins": [
            {
                "year": 1999,
                "team": "STL"
            }
        ],
        "losses": [
            {
                "year": 2002,
                "team": "OAK"
            }
        ]
    },
    {
        "name": "Chad Lewis",
        "birthDate": "10/5/1971",
        "wins": [
            {
                "year": 1999,
                "team": "STL"
            }
        ],
        "losses": [
            {
                "year": 2004,
                "team": "PHI"
            }
        ]
    },
    {
        "name": "Fred Miller",
        "birthDate": "2/6/1973",
        "wins": [
            {
                "year": 1999,
                "team": "STL"
            }
        ],
        "losses": [
            {
                "year": 2006,
                "team": "CHI"
            }
        ]
    },
    {
        "name": "Ricky Proehl",
        "birthDate": "3/7/1968",
        "wins": [
            {
                "year": 1999,
                "team": "STL"
            },
            {
                "year": 2006,
                "team": "IND"
            }
        ],
        "losses": [
            {
                "year": 2001,
                "team": "STL"
            },
            {
                "year": 2003,
                "team": "CAR"
            }
        ]
    },
    {
        "name": "Rick Tuten",
        "birthDate": "1/5/1965",
        "wins": [
            {
                "year": 1999,
                "team": "STL"
            }
        ],
        "losses": [
            {
                "year": 1990,
                "team": "BUF"
            }
        ]
    },
    {
        "name": "Kurt Warner",
        "birthDate": "6/22/1971",
        "wins": [
            {
                "year": 1999,
                "team": "STL"
            }
        ],
        "losses": [
            {
                "year": 2001,
                "team": "STL"
            },
            {
                "year": 2008,
                "team": "ARI"
            }
        ]
    },
    {
        "name": "Roland Williams",
        "birthDate": "4/27/1975",
        "wins": [
            {
                "year": 1999,
                "team": "STL"
            }
        ],
        "losses": [
            {
                "year": 2002,
                "team": "OAK"
            }
        ]
    },
    {
        "name": "Grant Wistrom",
        "birthDate": "7/3/1976",
        "wins": [
            {
                "year": 1999,
                "team": "STL"
            }
        ],
        "losses": [
            {
                "year": 2001,
                "team": "STL"
            },
            {
                "year": 2005,
                "team": "SEA"
            }
        ]
    },
    {
        "name": "Sam Adams",
        "birthDate": "6/13/1973",
        "wins": [
            {
                "year": 2000,
                "team": "BAL"
            }
        ],
        "losses": [
            {
                "year": 2002,
                "team": "OAK"
            }
        ]
    },
    {
        "name": "O.J. Brigance",
        "birthDate": "9/29/1969",
        "wins": [
            {
                "year": 2000,
                "team": "BAL"
            }
        ],
        "losses": [
            {
                "year": 2001,
                "team": "STL"
            }
        ]
    },
    {
        "name": "Ben Coates",
        "birthDate": "8/16/1969",
        "wins": [
            {
                "year": 2000,
                "team": "BAL"
            }
        ],
        "losses": [
            {
                "year": 1996,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Sam Gash",
        "birthDate": "3/7/1969",
        "wins": [
            {
                "year": 2000,
                "team": "BAL"
            }
        ],
        "losses": [
            {
                "year": 1996,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Kim Herring",
        "birthDate": "9/10/1975",
        "wins": [
            {
                "year": 2000,
                "team": "BAL"
            }
        ],
        "losses": [
            {
                "year": 2001,
                "team": "STL"
            }
        ]
    },
    {
        "name": "Clarence Love",
        "birthDate": "6/16/1976",
        "wins": [
            {
                "year": 2000,
                "team": "BAL"
            }
        ],
        "losses": [
            {
                "year": 2002,
                "team": "OAK"
            }
        ]
    },
    {
        "name": "Chris McAlister",
        "birthDate": "6/14/1977",
        "wins": [
            {
                "year": 2000,
                "team": "BAL"
            },
            {
                "year": 2009,
                "team": "NOR"
            }
        ],
        "losses": []
    },
    {
        "name": "Jeff Mitchell",
        "birthDate": "1/29/1974",
        "wins": [
            {
                "year": 2000,
                "team": "BAL"
            }
        ],
        "losses": [
            {
                "year": 2003,
                "team": "CAR"
            }
        ]
    },
    {
        "name": "Jamie Sharper",
        "birthDate": "11/23/1974",
        "wins": [
            {
                "year": 2000,
                "team": "BAL"
            }
        ],
        "losses": [
            {
                "year": 2005,
                "team": "SEA"
            }
        ]
    },
    {
        "name": "Brandon Stokley",
        "birthDate": "6/23/1976",
        "wins": [
            {
                "year": 2000,
                "team": "BAL"
            },
            {
                "year": 2006,
                "team": "IND"
            },
            {
                "year": 2011,
                "team": "NYG"
            }
        ],
        "losses": []
    },
    {
        "name": "Matt Stover",
        "birthDate": "1/27/1968",
        "wins": [
            {
                "year": 2000,
                "team": "BAL"
            }
        ],
        "losses": [
            {
                "year": 2009,
                "team": "IND"
            }
        ]
    },
    {
        "name": "Adalius Thomas",
        "birthDate": "8/18/1977",
        "wins": [
            {
                "year": 2000,
                "team": "BAL"
            }
        ],
        "losses": [
            {
                "year": 2007,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Rod Woodson",
        "birthDate": "3/10/1965",
        "wins": [
            {
                "year": 2000,
                "team": "BAL"
            }
        ],
        "losses": [
            {
                "year": 1995,
                "team": "PIT"
            },
            {
                "year": 2002,
                "team": "OAK"
            }
        ]
    },
    {
        "name": "Kole Ayi",
        "birthDate": "9/27/1978",
        "wins": [
            {
                "year": 2001,
                "team": "NWE"
            }
        ],
        "losses": [
            {
                "year": 2001,
                "team": "STL"
            }
        ]
    },
    {
        "name": "Tom Brady",
        "birthDate": "8/3/1977",
        "wins": [
            {
                "year": 2001,
                "team": "NWE"
            },
            {
                "year": 2003,
                "team": "NWE"
            },
            {
                "year": 2004,
                "team": "NWE"
            },
            {
                "year": 2014,
                "team": "NWE"
            },
            {
                "year": 2016,
                "team": "NWE"
            },
            {
                "year": 2018,
                "team": "NWE"
            },
            {
                "year": 2020,
                "team": "TAM"
            }
        ],
        "losses": [
            {
                "year": 2007,
                "team": "NWE"
            },
            {
                "year": 2011,
                "team": "NWE"
            },
            {
                "year": 2017,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Charles Johnson",
        "birthDate": "1/3/1972",
        "wins": [
            {
                "year": 2001,
                "team": "NWE"
            }
        ],
        "losses": [
            {
                "year": 1995,
                "team": "PIT"
            }
        ]
    },
    {
        "name": "Lee Johnson",
        "birthDate": "11/27/1961",
        "wins": [
            {
                "year": 2001,
                "team": "NWE"
            }
        ],
        "losses": [
            {
                "year": 1988,
                "team": "CIN"
            }
        ]
    },
    {
        "name": "Patrick Pass",
        "birthDate": "12/31/1977",
        "wins": [
            {
                "year": 2001,
                "team": "NWE"
            },
            {
                "year": 2003,
                "team": "NWE"
            },
            {
                "year": 2004,
                "team": "NWE"
            },
            {
                "year": 2007,
                "team": "NYG"
            }
        ],
        "losses": []
    },
    {
        "name": "Grey Ruegamer",
        "birthDate": "6/11/1976",
        "wins": [
            {
                "year": 2001,
                "team": "NWE"
            },
            {
                "year": 2007,
                "team": "NYG"
            }
        ],
        "losses": []
    },
    {
        "name": "Terrance Shaw",
        "birthDate": "11/11/1973",
        "wins": [
            {
                "year": 2001,
                "team": "NWE"
            }
        ],
        "losses": [
            {
                "year": 2002,
                "team": "OAK"
            }
        ]
    },
    {
        "name": "Adam Vinatieri",
        "birthDate": "12/28/1972",
        "wins": [
            {
                "year": 2001,
                "team": "NWE"
            },
            {
                "year": 2003,
                "team": "NWE"
            },
            {
                "year": 2004,
                "team": "NWE"
            },
            {
                "year": 2006,
                "team": "IND"
            }
        ],
        "losses": [
            {
                "year": 1996,
                "team": "NWE"
            },
            {
                "year": 2009,
                "team": "IND"
            }
        ]
    },
    {
        "name": "Jermaine Wiggins",
        "birthDate": "1/18/1975",
        "wins": [
            {
                "year": 2001,
                "team": "NWE"
            }
        ],
        "losses": [
            {
                "year": 2003,
                "team": "CAR"
            }
        ]
    },
    {
        "name": "Marco Battaglia",
        "birthDate": "1/25/1973",
        "wins": [
            {
                "year": 2002,
                "team": "TAM"
            }
        ],
        "losses": [
            {
                "year": 2003,
                "team": "CAR"
            }
        ]
    },
    {
        "name": "Lomas Brown",
        "birthDate": "3/30/1963",
        "wins": [
            {
                "year": 2002,
                "team": "TAM"
            }
        ],
        "losses": [
            {
                "year": 2000,
                "team": "NYG"
            }
        ]
    },
    {
        "name": "Chartric Darby",
        "birthDate": "10/22/1975",
        "wins": [
            {
                "year": 2002,
                "team": "TAM"
            }
        ],
        "losses": [
            {
                "year": 2005,
                "team": "SEA"
            }
        ]
    },
    {
        "name": "Jack Golden",
        "birthDate": "1/28/1977",
        "wins": [
            {
                "year": 2002,
                "team": "TAM"
            }
        ],
        "losses": [
            {
                "year": 2000,
                "team": "NYG"
            }
        ]
    },
    {
        "name": "Martin Gramatica",
        "birthDate": "11/27/1975",
        "wins": [
            {
                "year": 2002,
                "team": "TAM"
            },
            {
                "year": 2006,
                "team": "IND"
            }
        ],
        "losses": []
    },
    {
        "name": "Russ Hochstein",
        "birthDate": "10/7/1977",
        "wins": [
            {
                "year": 2002,
                "team": "TAM"
            },
            {
                "year": 2003,
                "team": "NWE"
            },
            {
                "year": 2004,
                "team": "NWE"
            }
        ],
        "losses": [
            {
                "year": 2007,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "John Howell",
        "birthDate": "4/28/1978",
        "wins": [
            {
                "year": 2002,
                "team": "TAM"
            }
        ],
        "losses": [
            {
                "year": 2005,
                "team": "SEA"
            }
        ]
    },
    {
        "name": "Joe Jurevicius",
        "birthDate": "12/23/1974",
        "wins": [
            {
                "year": 2002,
                "team": "TAM"
            }
        ],
        "losses": [
            {
                "year": 2000,
                "team": "NYG"
            },
            {
                "year": 2005,
                "team": "SEA"
            }
        ]
    },
    {
        "name": "Anthony McFarland",
        "birthDate": "12/18/1977",
        "wins": [
            {
                "year": 2002,
                "team": "TAM"
            },
            {
                "year": 2006,
                "team": "IND"
            }
        ],
        "losses": []
    },
    {
        "name": "Tom Tupa",
        "birthDate": "2/6/1966",
        "wins": [
            {
                "year": 2002,
                "team": "TAM"
            }
        ],
        "losses": [
            {
                "year": 1996,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Don Davis",
        "birthDate": "12/17/1972",
        "wins": [
            {
                "year": 2003,
                "team": "NWE"
            },
            {
                "year": 2004,
                "team": "NWE"
            }
        ],
        "losses": [
            {
                "year": 2001,
                "team": "STL"
            }
        ]
    },
    {
        "name": "Rodney Harrison",
        "birthDate": "12/15/1972",
        "wins": [
            {
                "year": 2003,
                "team": "NWE"
            },
            {
                "year": 2004,
                "team": "NWE"
            }
        ],
        "losses": [
            {
                "year": 1994,
                "team": "SDC"
            },
            {
                "year": 2007,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Dan Klecko",
        "birthDate": "1/12/1981",
        "wins": [
            {
                "year": 2003,
                "team": "NWE"
            },
            {
                "year": 2004,
                "team": "NWE"
            },
            {
                "year": 2006,
                "team": "IND"
            }
        ],
        "losses": []
    },
    {
        "name": "Randall Gay",
        "birthDate": "5/5/1982",
        "wins": [
            {
                "year": 2004,
                "team": "NWE"
            },
            {
                "year": 2009,
                "team": "NOR"
            }
        ],
        "losses": [
            {
                "year": 2007,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Dexter Reid",
        "birthDate": "3/18/1981",
        "wins": [
            {
                "year": 2004,
                "team": "NWE"
            },
            {
                "year": 2006,
                "team": "IND"
            }
        ],
        "losses": []
    },
    {
        "name": "Clark Haggans",
        "birthDate": "1/10/1977",
        "wins": [
            {
                "year": 2005,
                "team": "PIT"
            }
        ],
        "losses": [
            {
                "year": 2008,
                "team": "ARI"
            },
            {
                "year": 2012,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "James Harrison",
        "birthDate": "5/4/1978",
        "wins": [
            {
                "year": 2005,
                "team": "PIT"
            },
            {
                "year": 2008,
                "team": "PIT"
            }
        ],
        "losses": [
            {
                "year": 2010,
                "team": "PIT"
            },
            {
                "year": 2017,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Sean Morey",
        "birthDate": "2/26/1976",
        "wins": [
            {
                "year": 2005,
                "team": "PIT"
            }
        ],
        "losses": [
            {
                "year": 2008,
                "team": "ARI"
            }
        ]
    },
    {
        "name": "Jerame Tuman",
        "birthDate": "3/24/1976",
        "wins": [
            {
                "year": 2005,
                "team": "PIT"
            }
        ],
        "losses": [
            {
                "year": 2008,
                "team": "ARI"
            }
        ]
    },
    {
        "name": "Dwight Freeney",
        "birthDate": "2/19/1980",
        "wins": [
            {
                "year": 2006,
                "team": "IND"
            }
        ],
        "losses": [
            {
                "year": 2009,
                "team": "IND"
            },
            {
                "year": 2016,
                "team": "ATL"
            }
        ]
    },
    {
        "name": "Peyton Manning",
        "birthDate": "3/24/1976",
        "wins": [
            {
                "year": 2006,
                "team": "IND"
            },
            {
                "year": 2015,
                "team": "DEN"
            }
        ],
        "losses": [
            {
                "year": 2009,
                "team": "IND"
            },
            {
                "year": 2013,
                "team": "DEN"
            }
        ]
    },
    {
        "name": "Brandon Jacobs",
        "birthDate": "7/6/1982",
        "wins": [
            {
                "year": 2007,
                "team": "NYG"
            },
            {
                "year": 2011,
                "team": "NYG"
            }
        ],
        "losses": [
            {
                "year": 2012,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "Jeremy Shockey",
        "birthDate": "8/18/1980",
        "wins": [
            {
                "year": 2007,
                "team": "NYG"
            },
            {
                "year": 2009,
                "team": "NOR"
            }
        ],
        "losses": []
    },
    {
        "name": "Anthony Madison",
        "birthDate": "10/8/1981",
        "wins": [
            {
                "year": 2008,
                "team": "PIT"
            }
        ],
        "losses": [
            {
                "year": 2009,
                "team": "IND"
            },
            {
                "year": 2010,
                "team": "PIT"
            }
        ]
    },
    {
        "name": "Anthony Smith",
        "birthDate": "9/20/1983",
        "wins": [
            {
                "year": 2008,
                "team": "PIT"
            },
            {
                "year": 2010,
                "team": "GNB"
            }
        ],
        "losses": []
    },
    {
        "name": "John Carney",
        "birthDate": "4/20/1964",
        "wins": [
            {
                "year": 2009,
                "team": "NOR"
            }
        ],
        "losses": [
            {
                "year": 1994,
                "team": "SDC"
            }
        ]
    },
    {
        "name": "Jonathan Casillas",
        "birthDate": "6/3/1987",
        "wins": [
            {
                "year": 2009,
                "team": "NOR"
            },
            {
                "year": 2014,
                "team": "NWE"
            }
        ],
        "losses": []
    },
    {
        "name": "Kyle Eckel",
        "birthDate": "12/30/1981",
        "wins": [
            {
                "year": 2009,
                "team": "NOR"
            }
        ],
        "losses": [
            {
                "year": 2007,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Heath Evans",
        "birthDate": "12/30/1978",
        "wins": [
            {
                "year": 2009,
                "team": "NOR"
            }
        ],
        "losses": [
            {
                "year": 2007,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Jonathan Goodwin",
        "birthDate": "12/2/1978",
        "wins": [
            {
                "year": 2009,
                "team": "NOR"
            }
        ],
        "losses": [
            {
                "year": 2012,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "Roman Harper",
        "birthDate": "12/11/1982",
        "wins": [
            {
                "year": 2009,
                "team": "NOR"
            }
        ],
        "losses": [
            {
                "year": 2015,
                "team": "CAR"
            }
        ]
    },
    {
        "name": "Malcolm Jenkins",
        "birthDate": "12/20/1987",
        "wins": [
            {
                "year": 2009,
                "team": "NOR"
            },
            {
                "year": 2017,
                "team": "PHI"
            }
        ],
        "losses": []
    },
    {
        "name": "Jason Kyle",
        "birthDate": "5/12/1972",
        "wins": [
            {
                "year": 2009,
                "team": "NOR"
            }
        ],
        "losses": [
            {
                "year": 2003,
                "team": "CAR"
            }
        ]
    },
    {
        "name": "Darren Sharper",
        "birthDate": "11/3/1975",
        "wins": [
            {
                "year": 2009,
                "team": "NOR"
            }
        ],
        "losses": [
            {
                "year": 1997,
                "team": "GNB"
            }
        ]
    },
    {
        "name": "David Thomas",
        "birthDate": "7/5/1983",
        "wins": [
            {
                "year": 2009,
                "team": "NOR"
            }
        ],
        "losses": [
            {
                "year": 2007,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "A.J. Hawk",
        "birthDate": "1/6/1984",
        "wins": [
            {
                "year": 2010,
                "team": "GNB"
            }
        ],
        "losses": [
            {
                "year": 2016,
                "team": "ATL"
            }
        ]
    },
    {
        "name": "Derrick Martin",
        "birthDate": "5/16/1985",
        "wins": [
            {
                "year": 2010,
                "team": "GNB"
            },
            {
                "year": 2011,
                "team": "NYG"
            }
        ],
        "losses": []
    },
    {
        "name": "Ryan Pickett",
        "birthDate": "10/8/1979",
        "wins": [
            {
                "year": 2010,
                "team": "GNB"
            }
        ],
        "losses": [
            {
                "year": 2001,
                "team": "STL"
            }
        ]
    },
    {
        "name": "Sam Shields",
        "birthDate": "12/8/1987",
        "wins": [
            {
                "year": 2010,
                "team": "GNB"
            }
        ],
        "losses": [
            {
                "year": 2018,
                "team": "LAR"
            }
        ]
    },
    {
        "name": "Charles Woodson",
        "birthDate": "10/7/1976",
        "wins": [
            {
                "year": 2010,
                "team": "GNB"
            }
        ],
        "losses": [
            {
                "year": 2002,
                "team": "OAK"
            }
        ]
    },
    {
        "name": "Will Beatty",
        "birthDate": "3/2/1985",
        "wins": [
            {
                "year": 2011,
                "team": "NYG"
            },
            {
                "year": 2017,
                "team": "PHI"
            }
        ],
        "losses": []
    },
    {
        "name": "Rocky Bernard",
        "birthDate": "4/19/1979",
        "wins": [
            {
                "year": 2011,
                "team": "NYG"
            }
        ],
        "losses": [
            {
                "year": 2005,
                "team": "SEA"
            }
        ]
    },
    {
        "name": "Deon Grant",
        "birthDate": "3/14/1979",
        "wins": [
            {
                "year": 2011,
                "team": "NYG"
            }
        ],
        "losses": [
            {
                "year": 2003,
                "team": "CAR"
            }
        ]
    },
    {
        "name": "Linval Joseph",
        "birthDate": "10/10/1988",
        "wins": [
            {
                "year": 2011,
                "team": "NYG"
            }
        ],
        "losses": [
            {
                "year": 2022,
                "team": "PHI"
            }
        ]
    },
    {
        "name": "Mario Manningham",
        "birthDate": "5/25/1986",
        "wins": [
            {
                "year": 2011,
                "team": "NYG"
            }
        ],
        "losses": [
            {
                "year": 2012,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "Jason Pierre-Paul",
        "birthDate": "1/1/1989",
        "wins": [
            {
                "year": 2011,
                "team": "NYG"
            },
            {
                "year": 2020,
                "team": "TAM"
            }
        ],
        "losses": []
    },
    {
        "name": "Antrel Rolle",
        "birthDate": "12/16/1982",
        "wins": [
            {
                "year": 2011,
                "team": "NYG"
            }
        ],
        "losses": [
            {
                "year": 2008,
                "team": "ARI"
            }
        ]
    },
    {
        "name": "Tony Ugoh",
        "birthDate": "11/17/1983",
        "wins": [
            {
                "year": 2011,
                "team": "NYG"
            }
        ],
        "losses": [
            {
                "year": 2009,
                "team": "IND"
            }
        ]
    },
    {
        "name": "Brendon Ayanbadejo",
        "birthDate": "9/6/1976",
        "wins": [
            {
                "year": 2012,
                "team": "BAL"
            }
        ],
        "losses": [
            {
                "year": 2006,
                "team": "CHI"
            }
        ]
    },
    {
        "name": "Anquan Boldin",
        "birthDate": "10/3/1980",
        "wins": [
            {
                "year": 2012,
                "team": "BAL"
            }
        ],
        "losses": [
            {
                "year": 2008,
                "team": "ARI"
            }
        ]
    },
    {
        "name": "Ed Dickson",
        "birthDate": "7/25/1987",
        "wins": [
            {
                "year": 2012,
                "team": "BAL"
            }
        ],
        "losses": [
            {
                "year": 2015,
                "team": "CAR"
            }
        ]
    },
    {
        "name": "Dannell Ellerbe",
        "birthDate": "11/29/1985",
        "wins": [
            {
                "year": 2012,
                "team": "BAL"
            },
            {
                "year": 2017,
                "team": "PHI"
            }
        ],
        "losses": []
    },
    {
        "name": "Corey Graham",
        "birthDate": "7/25/1985",
        "wins": [
            {
                "year": 2012,
                "team": "BAL"
            },
            {
                "year": 2017,
                "team": "PHI"
            }
        ],
        "losses": []
    },
    {
        "name": "James Ihedigbo",
        "birthDate": "12/3/1983",
        "wins": [
            {
                "year": 2012,
                "team": "BAL"
            }
        ],
        "losses": [
            {
                "year": 2011,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Albert McClellan",
        "birthDate": "6/4/1986",
        "wins": [
            {
                "year": 2012,
                "team": "BAL"
            },
            {
                "year": 2018,
                "team": "NWE"
            }
        ],
        "losses": []
    },
    {
        "name": "Michael Oher",
        "birthDate": "5/28/1986",
        "wins": [
            {
                "year": 2012,
                "team": "BAL"
            }
        ],
        "losses": [
            {
                "year": 2015,
                "team": "CAR"
            }
        ]
    },
    {
        "name": "Kelechi Osemele",
        "birthDate": "6/24/1989",
        "wins": [
            {
                "year": 2012,
                "team": "BAL"
            }
        ],
        "losses": [
            {
                "year": 2020,
                "team": "KAN"
            }
        ]
    },
    {
        "name": "Torrey Smith",
        "birthDate": "1/26/1989",
        "wins": [
            {
                "year": 2012,
                "team": "BAL"
            },
            {
                "year": 2017,
                "team": "PHI"
            }
        ],
        "losses": []
    },
    {
        "name": "Terrell Suggs",
        "birthDate": "10/11/1982",
        "wins": [
            {
                "year": 2012,
                "team": "BAL"
            },
            {
                "year": 2019,
                "team": "KAN"
            }
        ],
        "losses": []
    },
    {
        "name": "Courtney Upshaw",
        "birthDate": "12/13/1989",
        "wins": [
            {
                "year": 2012,
                "team": "BAL"
            }
        ],
        "losses": [
            {
                "year": 2016,
                "team": "ATL"
            }
        ]
    },
    {
        "name": "Brandon Browner",
        "birthDate": "8/2/1984",
        "wins": [
            {
                "year": 2013,
                "team": "SEA"
            },
            {
                "year": 2014,
                "team": "NWE"
            }
        ],
        "losses": []
    },
    {
        "name": "Perrish Cox",
        "birthDate": "1/10/1987",
        "wins": [
            {
                "year": 2013,
                "team": "SEA"
            }
        ],
        "losses": [
            {
                "year": 2012,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "Chris Maragos",
        "birthDate": "1/6/1987",
        "wins": [
            {
                "year": 2013,
                "team": "SEA"
            },
            {
                "year": 2017,
                "team": "PHI"
            }
        ],
        "losses": []
    },
    {
        "name": "Michael Person",
        "birthDate": "5/17/1988",
        "wins": [
            {
                "year": 2013,
                "team": "SEA"
            }
        ],
        "losses": [
            {
                "year": 2019,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "O'Brien Schofield",
        "birthDate": "4/3/1987",
        "wins": [
            {
                "year": 2013,
                "team": "SEA"
            }
        ],
        "losses": [
            {
                "year": 2014,
                "team": "SEA"
            },
            {
                "year": 2016,
                "team": "ATL"
            }
        ]
    },
    {
        "name": "Richard Sherman",
        "birthDate": "3/30/1988",
        "wins": [
            {
                "year": 2013,
                "team": "SEA"
            }
        ],
        "losses": [
            {
                "year": 2014,
                "team": "SEA"
            },
            {
                "year": 2019,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "Spencer Ware",
        "birthDate": "11/23/1991",
        "wins": [
            {
                "year": 2013,
                "team": "SEA"
            },
            {
                "year": 2019,
                "team": "KAN"
            }
        ],
        "losses": []
    },
    {
        "name": "LeGarrette Blount",
        "birthDate": "12/5/1986",
        "wins": [
            {
                "year": 2014,
                "team": "NWE"
            },
            {
                "year": 2016,
                "team": "NWE"
            },
            {
                "year": 2017,
                "team": "PHI"
            }
        ],
        "losses": []
    },
    {
        "name": "Alan Branch",
        "birthDate": "12/29/1984",
        "wins": [
            {
                "year": 2014,
                "team": "NWE"
            },
            {
                "year": 2016,
                "team": "NWE"
            }
        ],
        "losses": [
            {
                "year": 2008,
                "team": "ARI"
            },
            {
                "year": 2017,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Dominique Easley",
        "birthDate": "4/28/1992",
        "wins": [
            {
                "year": 2014,
                "team": "NWE"
            }
        ],
        "losses": [
            {
                "year": 2018,
                "team": "LAR"
            }
        ]
    },
    {
        "name": "Jimmy Garoppolo",
        "birthDate": "11/2/1991",
        "wins": [
            {
                "year": 2014,
                "team": "NWE"
            },
            {
                "year": 2016,
                "team": "NWE"
            }
        ],
        "losses": [
            {
                "year": 2019,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "Rob Gronkowski",
        "birthDate": "5/14/1989",
        "wins": [
            {
                "year": 2014,
                "team": "NWE"
            },
            {
                "year": 2016,
                "team": "NWE"
            },
            {
                "year": 2018,
                "team": "NWE"
            },
            {
                "year": 2020,
                "team": "TAM"
            }
        ],
        "losses": [
            {
                "year": 2011,
                "team": "NWE"
            },
            {
                "year": 2017,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Stevan Ridley",
        "birthDate": "1/27/1989",
        "wins": [
            {
                "year": 2014,
                "team": "NWE"
            }
        ],
        "losses": [
            {
                "year": 2011,
                "team": "NWE"
            },
            {
                "year": 2016,
                "team": "ATL"
            }
        ]
    },
    {
        "name": "Logan Ryan",
        "birthDate": "2/9/1991",
        "wins": [
            {
                "year": 2014,
                "team": "NWE"
            },
            {
                "year": 2016,
                "team": "NWE"
            }
        ],
        "losses": [
            {
                "year": 2023,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "Joe Vellano",
        "birthDate": "10/30/1988",
        "wins": [
            {
                "year": 2014,
                "team": "NWE"
            }
        ],
        "losses": [
            {
                "year": 2016,
                "team": "ATL"
            }
        ]
    },
    {
        "name": "C.J. Anderson",
        "birthDate": "2/10/1991",
        "wins": [
            {
                "year": 2015,
                "team": "DEN"
            }
        ],
        "losses": [
            {
                "year": 2013,
                "team": "DEN"
            },
            {
                "year": 2018,
                "team": "LAR"
            }
        ]
    },
    {
        "name": "Shaquil Barrett",
        "birthDate": "11/17/1992",
        "wins": [
            {
                "year": 2015,
                "team": "DEN"
            },
            {
                "year": 2020,
                "team": "TAM"
            }
        ],
        "losses": []
    },
    {
        "name": "Vernon Davis",
        "birthDate": "1/31/1984",
        "wins": [
            {
                "year": 2015,
                "team": "DEN"
            }
        ],
        "losses": [
            {
                "year": 2012,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "James Ferentz",
        "birthDate": "6/5/1989",
        "wins": [
            {
                "year": 2015,
                "team": "DEN"
            },
            {
                "year": 2018,
                "team": "NWE"
            }
        ],
        "losses": []
    },
    {
        "name": "Von Miller",
        "birthDate": "3/26/1989",
        "wins": [
            {
                "year": 2015,
                "team": "DEN"
            },
            {
                "year": 2021,
                "team": "LAR"
            }
        ],
        "losses": [
            {
                "year": 2013,
                "team": "DEN"
            }
        ]
    },
    {
        "name": "Emmanuel Sanders",
        "birthDate": "3/17/1987",
        "wins": [
            {
                "year": 2015,
                "team": "DEN"
            }
        ],
        "losses": [
            {
                "year": 2010,
                "team": "PIT"
            },
            {
                "year": 2019,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "Antonio Smith",
        "birthDate": "10/21/1981",
        "wins": [
            {
                "year": 2015,
                "team": "DEN"
            }
        ],
        "losses": [
            {
                "year": 2008,
                "team": "ARI"
            }
        ]
    },
    {
        "name": "Aqib Talib",
        "birthDate": "2/13/1986",
        "wins": [
            {
                "year": 2015,
                "team": "DEN"
            }
        ],
        "losses": [
            {
                "year": 2018,
                "team": "LAR"
            }
        ]
    },
    {
        "name": "Chris Long",
        "birthDate": "3/28/1985",
        "wins": [
            {
                "year": 2016,
                "team": "NWE"
            },
            {
                "year": 2017,
                "team": "PHI"
            }
        ],
        "losses": []
    },
    {
        "name": "Joe Thuney",
        "birthDate": "11/18/1992",
        "wins": [
            {
                "year": 2016,
                "team": "NWE"
            },
            {
                "year": 2018,
                "team": "NWE"
            },
            {
                "year": 2022,
                "team": "KAN"
            },
            {
                "year": 2023,
                "team": "KAN"
            }
        ],
        "losses": [
            {
                "year": 2017,
                "team": "NWE"
            },
            {
                "year": 2024,
                "team": "KAN"
            }
        ]
    },
    {
        "name": "Kenjon Barner",
        "birthDate": "4/28/1989",
        "wins": [
            {
                "year": 2017,
                "team": "PHI"
            },
            {
                "year": 2018,
                "team": "NWE"
            },
            {
                "year": 2020,
                "team": "TAM"
            }
        ],
        "losses": []
    },
    {
        "name": "Carson Wentz",
        "birthDate": "12/30/1992",
        "wins": [
            {
                "year": 2017,
                "team": "PHI"
            }
        ],
        "losses": [
            {
                "year": 2024,
                "team": "KAN"
            }
        ]
    },
    {
        "name": "Stefen Wisniewski",
        "birthDate": "3/22/1989",
        "wins": [
            {
                "year": 2017,
                "team": "PHI"
            },
            {
                "year": 2019,
                "team": "KAN"
            }
        ],
        "losses": [
            {
                "year": 2020,
                "team": "KAN"
            }
        ]
    },
    {
        "name": "Adrian Clayborn",
        "birthDate": "7/6/1988",
        "wins": [
            {
                "year": 2018,
                "team": "NWE"
            }
        ],
        "losses": [
            {
                "year": 2016,
                "team": "ATL"
            }
        ]
    },
    {
        "name": "Ramon Humber",
        "birthDate": "8/10/1987",
        "wins": [
            {
                "year": 2018,
                "team": "NWE"
            }
        ],
        "losses": [
            {
                "year": 2009,
                "team": "IND"
            }
        ]
    },
    {
        "name": "Sony Michel",
        "birthDate": "2/17/1995",
        "wins": [
            {
                "year": 2018,
                "team": "NWE"
            },
            {
                "year": 2021,
                "team": "LAR"
            }
        ],
        "losses": []
    },
    {
        "name": "Danny Shelton",
        "birthDate": "8/20/1993",
        "wins": [
            {
                "year": 2018,
                "team": "NWE"
            },
            {
                "year": 2022,
                "team": "KAN"
            }
        ],
        "losses": []
    },
    {
        "name": "LeSean McCoy",
        "birthDate": "7/12/1988",
        "wins": [
            {
                "year": 2019,
                "team": "KAN"
            },
            {
                "year": 2020,
                "team": "TAM"
            }
        ],
        "losses": []
    },
    {
        "name": "Charvarius Ward",
        "birthDate": "5/16/1996",
        "wins": [
            {
                "year": 2019,
                "team": "KAN"
            }
        ],
        "losses": [
            {
                "year": 2020,
                "team": "KAN"
            },
            {
                "year": 2023,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "Antonio Brown",
        "birthDate": "7/10/1988",
        "wins": [
            {
                "year": 2020,
                "team": "TAM"
            }
        ],
        "losses": [
            {
                "year": 2010,
                "team": "PIT"
            }
        ]
    },
    {
        "name": "Mike Edwards",
        "birthDate": "5/18/1996",
        "wins": [
            {
                "year": 2020,
                "team": "TAM"
            },
            {
                "year": 2023,
                "team": "KAN"
            }
        ],
        "losses": []
    },
    {
        "name": "Blaine Gabbert",
        "birthDate": "10/15/1989",
        "wins": [
            {
                "year": 2020,
                "team": "TAM"
            },
            {
                "year": 2023,
                "team": "KAN"
            }
        ],
        "losses": []
    },
    {
        "name": "Ronald Jones II",
        "birthDate": "8/3/1997",
        "wins": [
            {
                "year": 2020,
                "team": "TAM"
            },
            {
                "year": 2022,
                "team": "KAN"
            }
        ],
        "losses": []
    },
    {
        "name": "Steve McLendon",
        "birthDate": "1/3/1986",
        "wins": [
            {
                "year": 2020,
                "team": "TAM"
            }
        ],
        "losses": [
            {
                "year": 2010,
                "team": "PIT"
            }
        ]
    },
    {
        "name": "Donovan Smith",
        "birthDate": "6/23/1993",
        "wins": [
            {
                "year": 2020,
                "team": "TAM"
            },
            {
                "year": 2023,
                "team": "KAN"
            }
        ],
        "losses": []
    },
    {
        "name": "Ndamukong Suh",
        "birthDate": "1/6/1987",
        "wins": [
            {
                "year": 2020,
                "team": "TAM"
            }
        ],
        "losses": [
            {
                "year": 2018,
                "team": "LAR"
            },
            {
                "year": 2022,
                "team": "PHI"
            }
        ]
    },
    {
        "name": "Justin Watson",
        "birthDate": "4/4/1996",
        "wins": [
            {
                "year": 2020,
                "team": "TAM"
            },
            {
                "year": 2022,
                "team": "KAN"
            },
            {
                "year": 2023,
                "team": "KAN"
            }
        ],
        "losses": [
            {
                "year": 2024,
                "team": "KAN"
            }
        ]
    },
    {
        "name": "Sebastian Joseph-Day",
        "birthDate": "3/21/1995",
        "wins": [
            {
                "year": 2021,
                "team": "LAR"
            }
        ],
        "losses": [
            {
                "year": 2023,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "Darian Kinnard",
        "birthDate": "12/29/1999",
        "wins": [
            {
                "year": 2022,
                "team": "KAN"
            },
            {
                "year": 2024,
                "team": "PHI"
            }
        ],
        "losses": []
    },
    {
        "name": "Elijah Lee",
        "birthDate": "2/8/1996",
        "wins": [
            {
                "year": 2022,
                "team": "KAN"
            }
        ],
        "losses": [
            {
                "year": 2019,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "Richie James",
        "birthDate": "9/5/1995",
        "wins": [
            {
                "year": 2023,
                "team": "KAN"
            }
        ],
        "losses": [
            {
                "year": 2019,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "Oren Burks",
        "birthDate": "3/21/1995",
        "wins": [
            {
                "year": 2024,
                "team": "PHI"
            }
        ],
        "losses": [
            {
                "year": 2023,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "Tyrion Davis-Price",
        "birthDate": "10/23/2000",
        "wins": [
            {
                "year": 2024,
                "team": "PHI"
            }
        ],
        "losses": [
            {
                "year": 2023,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "Fred Johnson",
        "birthDate": "6/5/1997",
        "wins": [
            {
                "year": 2024,
                "team": "PHI"
            }
        ],
        "losses": [
            {
                "year": 2021,
                "team": "CIN"
            }
        ]
    },
    {
        "name": "C.J. Uzomah",
        "birthDate": "1/14/1993",
        "wins": [
            {
                "year": 2024,
                "team": "PHI"
            }
        ],
        "losses": [
            {
                "year": 2021,
                "team": "CIN"
            }
        ]
    },
    {
        "name": "Mike Eischeid",
        "birthDate": "9/29/1940",
        "wins": [],
        "losses": [
            {
                "year": 1967,
                "team": "OAK"
            },
            {
                "year": 1973,
                "team": "MIN"
            },
            {
                "year": 1974,
                "team": "MIN"
            }
        ]
    },
    {
        "name": "Terry Cole",
        "birthDate": "7/7/1945",
        "wins": [],
        "losses": [
            {
                "year": 1968,
                "team": "BCS"
            },
            {
                "year": 1971,
                "team": "MIA"
            }
        ]
    },
    {
        "name": "Ron Porter",
        "birthDate": "7/27/1945",
        "wins": [],
        "losses": [
            {
                "year": 1968,
                "team": "BCS"
            },
            {
                "year": 1973,
                "team": "MIN"
            }
        ]
    },
    {
        "name": "Bob Lee",
        "birthDate": "8/7/1946",
        "wins": [],
        "losses": [
            {
                "year": 1969,
                "team": "MIN"
            },
            {
                "year": 1976,
                "team": "MIN"
            },
            {
                "year": 1979,
                "team": "LAR"
            }
        ]
    },
    {
        "name": "Jeff Severson",
        "birthDate": "9/16/1949",
        "wins": [],
        "losses": [
            {
                "year": 1972,
                "team": "WRS"
            },
            {
                "year": 1979,
                "team": "LAR"
            }
        ]
    },
    {
        "name": "Andy Maurer",
        "birthDate": "9/30/1948",
        "wins": [],
        "losses": [
            {
                "year": 1974,
                "team": "MIN"
            },
            {
                "year": 1977,
                "team": "DEN"
            }
        ]
    },
    {
        "name": "Randy Poltl",
        "birthDate": "3/26/1952",
        "wins": [],
        "losses": [
            {
                "year": 1974,
                "team": "MIN"
            },
            {
                "year": 1977,
                "team": "DEN"
            }
        ]
    },
    {
        "name": "Jackie Wallace",
        "birthDate": "3/13/1951",
        "wins": [],
        "losses": [
            {
                "year": 1974,
                "team": "MIN"
            },
            {
                "year": 1979,
                "team": "LAR"
            }
        ]
    },
    {
        "name": "Bob Brudzinski",
        "birthDate": "1/1/1955",
        "wins": [],
        "losses": [
            {
                "year": 1979,
                "team": "LAR"
            },
            {
                "year": 1982,
                "team": "MIA"
            },
            {
                "year": 1984,
                "team": "MIA"
            }
        ]
    },
    {
        "name": "Eddie Hill",
        "birthDate": "5/13/1957",
        "wins": [],
        "losses": [
            {
                "year": 1979,
                "team": "LAR"
            },
            {
                "year": 1982,
                "team": "MIA"
            },
            {
                "year": 1984,
                "team": "MIA"
            }
        ]
    },
    {
        "name": "Elvis Peacock",
        "birthDate": "11/7/1956",
        "wins": [],
        "losses": [
            {
                "year": 1979,
                "team": "LAR"
            },
            {
                "year": 1981,
                "team": "CIN"
            }
        ]
    },
    {
        "name": "Tony Franklin",
        "birthDate": "11/18/1956",
        "wins": [],
        "losses": [
            {
                "year": 1980,
                "team": "PHI"
            },
            {
                "year": 1985,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Guy Morriss",
        "birthDate": "5/13/1951",
        "wins": [],
        "losses": [
            {
                "year": 1980,
                "team": "PHI"
            },
            {
                "year": 1985,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Pete Johnson",
        "birthDate": "3/2/1954",
        "wins": [],
        "losses": [
            {
                "year": 1981,
                "team": "CIN"
            },
            {
                "year": 1984,
                "team": "MIA"
            }
        ]
    },
    {
        "name": "Darren Carrington",
        "birthDate": "10/10/1966",
        "wins": [],
        "losses": [
            {
                "year": 1989,
                "team": "DEN"
            },
            {
                "year": 1994,
                "team": "SDC"
            }
        ]
    },
    {
        "name": "Cornelius Bennett",
        "birthDate": "8/25/1965",
        "wins": [],
        "losses": [
            {
                "year": 1990,
                "team": "BUF"
            },
            {
                "year": 1991,
                "team": "BUF"
            },
            {
                "year": 1992,
                "team": "BUF"
            },
            {
                "year": 1993,
                "team": "BUF"
            },
            {
                "year": 1998,
                "team": "ATL"
            }
        ]
    },
    {
        "name": "Gale Gilbert",
        "birthDate": "12/20/1961",
        "wins": [],
        "losses": [
            {
                "year": 1990,
                "team": "BUF"
            },
            {
                "year": 1993,
                "team": "BUF"
            },
            {
                "year": 1994,
                "team": "SDC"
            }
        ]
    },
    {
        "name": "Glenn Parker",
        "birthDate": "4/22/1966",
        "wins": [],
        "losses": [
            {
                "year": 1990,
                "team": "BUF"
            },
            {
                "year": 1991,
                "team": "BUF"
            },
            {
                "year": 1992,
                "team": "BUF"
            },
            {
                "year": 1993,
                "team": "BUF"
            },
            {
                "year": 2000,
                "team": "NYG"
            }
        ]
    },
    {
        "name": "Brad Daluiso",
        "birthDate": "12/31/1967",
        "wins": [],
        "losses": [
            {
                "year": 1991,
                "team": "BUF"
            },
            {
                "year": 2000,
                "team": "NYG"
            }
        ]
    },
    {
        "name": "Chris Oldham",
        "birthDate": "10/26/1968",
        "wins": [],
        "losses": [
            {
                "year": 1991,
                "team": "BUF"
            },
            {
                "year": 1995,
                "team": "PIT"
            }
        ]
    },
    {
        "name": "Monty Brown",
        "birthDate": "4/13/1970",
        "wins": [],
        "losses": [
            {
                "year": 1993,
                "team": "BUF"
            },
            {
                "year": 1996,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Jerome Henderson",
        "birthDate": "8/8/1969",
        "wins": [],
        "losses": [
            {
                "year": 1993,
                "team": "BUF"
            },
            {
                "year": 1996,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "John Parrella",
        "birthDate": "11/22/1969",
        "wins": [],
        "losses": [
            {
                "year": 1993,
                "team": "BUF"
            },
            {
                "year": 1994,
                "team": "SDC"
            },
            {
                "year": 2002,
                "team": "OAK"
            }
        ]
    },
    {
        "name": "Johnnie Barnes",
        "birthDate": "7/21/1968",
        "wins": [],
        "losses": [
            {
                "year": 1994,
                "team": "SDC"
            },
            {
                "year": 1995,
                "team": "PIT"
            }
        ]
    },
    {
        "name": "Shawn Jefferson",
        "birthDate": "2/22/1969",
        "wins": [],
        "losses": [
            {
                "year": 1994,
                "team": "SDC"
            },
            {
                "year": 1996,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Tony Martin",
        "birthDate": "9/5/1965",
        "wins": [],
        "losses": [
            {
                "year": 1994,
                "team": "SDC"
            },
            {
                "year": 1998,
                "team": "ATL"
            }
        ]
    },
    {
        "name": "Junior Seau",
        "birthDate": "1/19/1969",
        "wins": [],
        "losses": [
            {
                "year": 1994,
                "team": "SDC"
            },
            {
                "year": 2007,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Chad Brown",
        "birthDate": "7/12/1970",
        "wins": [],
        "losses": [
            {
                "year": 1995,
                "team": "PIT"
            },
            {
                "year": 2007,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Brentson Buckner",
        "birthDate": "9/30/1971",
        "wins": [],
        "losses": [
            {
                "year": 1995,
                "team": "PIT"
            },
            {
                "year": 2003,
                "team": "CAR"
            }
        ]
    },
    {
        "name": "Randy Fuller",
        "birthDate": "6/2/1970",
        "wins": [],
        "losses": [
            {
                "year": 1995,
                "team": "PIT"
            },
            {
                "year": 1998,
                "team": "ATL"
            }
        ]
    },
    {
        "name": "Neil O'Donnell",
        "birthDate": "7/3/1966",
        "wins": [],
        "losses": [
            {
                "year": 1995,
                "team": "PIT"
            },
            {
                "year": 1999,
                "team": "TEN"
            }
        ]
    },
    {
        "name": "Yancey Thigpen",
        "birthDate": "8/15/1969",
        "wins": [],
        "losses": [
            {
                "year": 1995,
                "team": "PIT"
            },
            {
                "year": 1999,
                "team": "TEN"
            }
        ]
    },
    {
        "name": "Mike Bartrum",
        "birthDate": "6/23/1970",
        "wins": [],
        "losses": [
            {
                "year": 1996,
                "team": "NWE"
            },
            {
                "year": 2004,
                "team": "PHI"
            }
        ]
    },
    {
        "name": "Mike Jones",
        "birthDate": "8/25/1969",
        "wins": [],
        "losses": [
            {
                "year": 1996,
                "team": "NWE"
            },
            {
                "year": 1999,
                "team": "TEN"
            }
        ]
    },
    {
        "name": "Roell Preston",
        "birthDate": "6/23/1972",
        "wins": [],
        "losses": [
            {
                "year": 1997,
                "team": "GNB"
            },
            {
                "year": 1999,
                "team": "TEN"
            }
        ]
    },
    {
        "name": "Robbie Tobeck",
        "birthDate": "3/6/1970",
        "wins": [],
        "losses": [
            {
                "year": 1998,
                "team": "ATL"
            },
            {
                "year": 2005,
                "team": "SEA"
            }
        ]
    },
    {
        "name": "Anthony Dorsett",
        "birthDate": "9/14/1973",
        "wins": [],
        "losses": [
            {
                "year": 1999,
                "team": "TEN"
            },
            {
                "year": 2002,
                "team": "OAK"
            }
        ]
    },
    {
        "name": "Kevin Dyson",
        "birthDate": "6/23/1975",
        "wins": [],
        "losses": [
            {
                "year": 1999,
                "team": "TEN"
            },
            {
                "year": 2003,
                "team": "CAR"
            }
        ]
    },
    {
        "name": "Greg Favors",
        "birthDate": "9/30/1974",
        "wins": [],
        "losses": [
            {
                "year": 1999,
                "team": "TEN"
            },
            {
                "year": 2003,
                "team": "CAR"
            }
        ]
    },
    {
        "name": "Jevon Kearse",
        "birthDate": "9/3/1976",
        "wins": [],
        "losses": [
            {
                "year": 1999,
                "team": "TEN"
            },
            {
                "year": 2004,
                "team": "PHI"
            }
        ]
    },
    {
        "name": "Jon Runyan",
        "birthDate": "11/27/1973",
        "wins": [],
        "losses": [
            {
                "year": 1999,
                "team": "TEN"
            },
            {
                "year": 2004,
                "team": "PHI"
            }
        ]
    },
    {
        "name": "Ralph Brown",
        "birthDate": "9/16/1978",
        "wins": [],
        "losses": [
            {
                "year": 2000,
                "team": "NYG"
            },
            {
                "year": 2008,
                "team": "ARI"
            }
        ]
    },
    {
        "name": "Brad Maynard",
        "birthDate": "2/9/1974",
        "wins": [],
        "losses": [
            {
                "year": 2000,
                "team": "NYG"
            },
            {
                "year": 2006,
                "team": "CHI"
            }
        ]
    },
    {
        "name": "Brian Allen",
        "birthDate": "4/1/1978",
        "wins": [],
        "losses": [
            {
                "year": 2001,
                "team": "STL"
            },
            {
                "year": 2003,
                "team": "CAR"
            }
        ]
    },
    {
        "name": "Jon Ritchie",
        "birthDate": "9/4/1974",
        "wins": [],
        "losses": [
            {
                "year": 2002,
                "team": "OAK"
            },
            {
                "year": 2004,
                "team": "PHI"
            }
        ]
    },
    {
        "name": "Ricky Manning",
        "birthDate": "11/18/1980",
        "wins": [],
        "losses": [
            {
                "year": 2003,
                "team": "CAR"
            },
            {
                "year": 2006,
                "team": "CHI"
            }
        ]
    },
    {
        "name": "Muhsin Muhammad",
        "birthDate": "5/5/1973",
        "wins": [],
        "losses": [
            {
                "year": 2003,
                "team": "CAR"
            },
            {
                "year": 2006,
                "team": "CHI"
            }
        ]
    },
    {
        "name": "Dante Wesley",
        "birthDate": "4/5/1979",
        "wins": [],
        "losses": [
            {
                "year": 2003,
                "team": "CAR"
            },
            {
                "year": 2006,
                "team": "CHI"
            }
        ]
    },
    {
        "name": "David Akers",
        "birthDate": "12/9/1974",
        "wins": [],
        "losses": [
            {
                "year": 2004,
                "team": "PHI"
            },
            {
                "year": 2012,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "Roderick Hood",
        "birthDate": "10/3/1981",
        "wins": [],
        "losses": [
            {
                "year": 2004,
                "team": "PHI"
            },
            {
                "year": 2008,
                "team": "ARI"
            }
        ]
    },
    {
        "name": "Dirk Johnson",
        "birthDate": "6/1/1975",
        "wins": [],
        "losses": [
            {
                "year": 2004,
                "team": "PHI"
            },
            {
                "year": 2008,
                "team": "ARI"
            }
        ]
    },
    {
        "name": "Matt Ware",
        "birthDate": "12/2/1982",
        "wins": [],
        "losses": [
            {
                "year": 2004,
                "team": "PHI"
            },
            {
                "year": 2008,
                "team": "ARI"
            }
        ]
    },
    {
        "name": "Niko Koutouvides",
        "birthDate": "3/25/1981",
        "wins": [],
        "losses": [
            {
                "year": 2005,
                "team": "SEA"
            },
            {
                "year": 2011,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Jerheme Urban",
        "birthDate": "11/26/1980",
        "wins": [],
        "losses": [
            {
                "year": 2005,
                "team": "SEA"
            },
            {
                "year": 2008,
                "team": "ARI"
            }
        ]
    },
    {
        "name": "Mark Anderson",
        "birthDate": "5/26/1983",
        "wins": [],
        "losses": [
            {
                "year": 2006,
                "team": "CHI"
            },
            {
                "year": 2011,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Robbie Gould",
        "birthDate": "12/6/1982",
        "wins": [],
        "losses": [
            {
                "year": 2006,
                "team": "CHI"
            },
            {
                "year": 2019,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "Charles Tillman",
        "birthDate": "2/23/1981",
        "wins": [],
        "losses": [
            {
                "year": 2006,
                "team": "CHI"
            },
            {
                "year": 2015,
                "team": "CAR"
            }
        ]
    },
    {
        "name": "Randy Moss",
        "birthDate": "2/13/1977",
        "wins": [],
        "losses": [
            {
                "year": 2007,
                "team": "NWE"
            },
            {
                "year": 2012,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "Stephen Spach",
        "birthDate": "7/18/1982",
        "wins": [],
        "losses": [
            {
                "year": 2007,
                "team": "NWE"
            },
            {
                "year": 2008,
                "team": "ARI"
            }
        ]
    },
    {
        "name": "Wes Welker",
        "birthDate": "5/1/1981",
        "wins": [],
        "losses": [
            {
                "year": 2007,
                "team": "NWE"
            },
            {
                "year": 2011,
                "team": "NWE"
            },
            {
                "year": 2013,
                "team": "DEN"
            }
        ]
    },
    {
        "name": "Aaron Francisco",
        "birthDate": "7/5/1983",
        "wins": [],
        "losses": [
            {
                "year": 2008,
                "team": "ARI"
            },
            {
                "year": 2009,
                "team": "IND"
            }
        ]
    },
    {
        "name": "Dominique Rodgers-Cromartie",
        "birthDate": "4/7/1986",
        "wins": [],
        "losses": [
            {
                "year": 2008,
                "team": "ARI"
            },
            {
                "year": 2013,
                "team": "DEN"
            }
        ]
    },
    {
        "name": "Jacob Tamme",
        "birthDate": "3/15/1985",
        "wins": [],
        "losses": [
            {
                "year": 2009,
                "team": "IND"
            },
            {
                "year": 2013,
                "team": "DEN"
            },
            {
                "year": 2016,
                "team": "ATL"
            }
        ]
    },
    {
        "name": "Philip Wheeler",
        "birthDate": "12/12/1984",
        "wins": [],
        "losses": [
            {
                "year": 2009,
                "team": "IND"
            },
            {
                "year": 2016,
                "team": "ATL"
            }
        ]
    },
    {
        "name": "Landon Cohen",
        "birthDate": "8/3/1986",
        "wins": [],
        "losses": [
            {
                "year": 2011,
                "team": "NWE"
            },
            {
                "year": 2014,
                "team": "SEA"
            }
        ]
    },
    {
        "name": "Kyle Love",
        "birthDate": "11/18/1986",
        "wins": [],
        "losses": [
            {
                "year": 2011,
                "team": "NWE"
            },
            {
                "year": 2015,
                "team": "CAR"
            }
        ]
    },
    {
        "name": "Demarcus Dobbs",
        "birthDate": "11/30/1987",
        "wins": [],
        "losses": [
            {
                "year": 2012,
                "team": "SFO"
            },
            {
                "year": 2014,
                "team": "SEA"
            }
        ]
    },
    {
        "name": "Ted Ginn Jr.",
        "birthDate": "4/12/1985",
        "wins": [],
        "losses": [
            {
                "year": 2012,
                "team": "SFO"
            },
            {
                "year": 2015,
                "team": "CAR"
            }
        ]
    },
    {
        "name": "Dashon Goldson",
        "birthDate": "9/18/1984",
        "wins": [],
        "losses": [
            {
                "year": 2012,
                "team": "SFO"
            },
            {
                "year": 2016,
                "team": "ATL"
            }
        ]
    },
    {
        "name": "Ricky Jean-Francois",
        "birthDate": "11/23/1986",
        "wins": [],
        "losses": [
            {
                "year": 2012,
                "team": "SFO"
            },
            {
                "year": 2017,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Daniel Kilgore",
        "birthDate": "12/18/1987",
        "wins": [],
        "losses": [
            {
                "year": 2012,
                "team": "SFO"
            },
            {
                "year": 2020,
                "team": "KAN"
            }
        ]
    },
    {
        "name": "Will Tukuafu",
        "birthDate": "1/3/1984",
        "wins": [],
        "losses": [
            {
                "year": 2012,
                "team": "SFO"
            },
            {
                "year": 2014,
                "team": "SEA"
            }
        ]
    },
    {
        "name": "Cassius Marsh",
        "birthDate": "7/7/1992",
        "wins": [],
        "losses": [
            {
                "year": 2014,
                "team": "SEA"
            },
            {
                "year": 2017,
                "team": "NWE"
            }
        ]
    },
    {
        "name": "Kevin Norwood",
        "birthDate": "9/23/1989",
        "wins": [],
        "losses": [
            {
                "year": 2014,
                "team": "SEA"
            },
            {
                "year": 2015,
                "team": "CAR"
            }
        ]
    },
    {
        "name": "Mike Remmers",
        "birthDate": "4/11/1989",
        "wins": [],
        "losses": [
            {
                "year": 2015,
                "team": "CAR"
            },
            {
                "year": 2020,
                "team": "KAN"
            }
        ]
    },
    {
        "name": "Ricardo Allen",
        "birthDate": "12/18/1991",
        "wins": [],
        "losses": [
            {
                "year": 2016,
                "team": "ATL"
            },
            {
                "year": 2021,
                "team": "CIN"
            }
        ]
    },
    {
        "name": "Tevin Coleman",
        "birthDate": "4/16/1993",
        "wins": [],
        "losses": [
            {
                "year": 2016,
                "team": "ATL"
            },
            {
                "year": 2019,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "Ben Garland",
        "birthDate": "4/6/1988",
        "wins": [],
        "losses": [
            {
                "year": 2016,
                "team": "ATL"
            },
            {
                "year": 2019,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "Levine Toilolo",
        "birthDate": "7/30/1991",
        "wins": [],
        "losses": [
            {
                "year": 2016,
                "team": "ATL"
            },
            {
                "year": 2019,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "Nick Williams",
        "birthDate": "11/23/1990",
        "wins": [],
        "losses": [
            {
                "year": 2016,
                "team": "ATL"
            },
            {
                "year": 2018,
                "team": "LAR"
            }
        ]
    },
    {
        "name": "Brandin Cooks",
        "birthDate": "9/25/1993",
        "wins": [],
        "losses": [
            {
                "year": 2017,
                "team": "NWE"
            },
            {
                "year": 2018,
                "team": "LAR"
            }
        ]
    },
    {
        "name": "Mike Thomas",
        "birthDate": "8/16/1994",
        "wins": [],
        "losses": [
            {
                "year": 2018,
                "team": "LAR"
            },
            {
                "year": 2021,
                "team": "CIN"
            }
        ]
    },
    {
        "name": "Samaje Perine",
        "birthDate": "9/16/1995",
        "wins": [],
        "losses": [
            {
                "year": 2021,
                "team": "CIN"
            },
            {
                "year": 2024,
                "team": "KAN"
            }
        ]
    },
    {
        "name": "Javon Hargrave",
        "birthDate": "2/7/1993",
        "wins": [],
        "losses": [
            {
                "year": 2022,
                "team": "PHI"
            },
            {
                "year": 2023,
                "team": "SFO"
            }
        ]
    },
    {
        "name": "Marlon Tuipulotu",
        "birthDate": "5/31/1999",
        "wins": [],
        "losses": [
            {
                "year": 2022,
                "team": "PHI"
            },
            {
                "year": 2024,
                "team": "KAN"
            }
        ]
    }
]