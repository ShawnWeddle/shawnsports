import { findDoubleLosers, allLosers, type PlayerGameType } from "./UnEditedSuperLoserList";
import { findDoubleWinners, allWinners } from "./UnEditedWinnersList";

export const findDuos = () => {
  const L = findDoubleLosers(allLosers);
  const W = findDoubleWinners(allWinners);

  const duos  = [];

  for(let i=0; i<L.length; i++){
    for(let j=0; j<W.length; j++){
      const loser = L[i];
      const winner = W[j];

      if(!loser || !winner){
        continue;
      }

      if(loser[0].year === winner[0].year && loser[1].year === winner[1].year){
        duos.push(loser, winner);
      }
    }
  }

  return duos;
}

const WHK = [
    [
        {
            "year": 1967,
            "team": "OAK",
            "player": "Mike Eischeid",
            "birthDate": "9/29/1940"
        },
        {
            "year": 1973,
            "team": "MIN",
            "player": "Mike Eischeid",
            "birthDate": "9/29/1940"
        }
    ],
    [
        {
            "year": 1967,
            "team": "GNB",
            "player": "Marv Fleming",
            "birthDate": "1/2/1942"
        },
        {
            "year": 1973,
            "team": "MIA",
            "player": "Marv Fleming",
            "birthDate": "1/2/1942"
        }
    ],
    [
        {
            "year": 1974,
            "team": "MIN",
            "player": "Andy Maurer",
            "birthDate": "9/30/1948"
        },
        {
            "year": 1977,
            "team": "DEN",
            "player": "Andy Maurer",
            "birthDate": "9/30/1948"
        }
    ],
    [
        {
            "year": 1974,
            "team": "PIT",
            "player": "Preston Pearson",
            "birthDate": "1/17/1945"
        },
        {
            "year": 1977,
            "team": "DAL",
            "player": "Preston Pearson",
            "birthDate": "1/17/1945"
        }
    ],
    [
        {
            "year": 1974,
            "team": "MIN",
            "player": "Randy Poltl",
            "birthDate": "3/26/1952"
        },
        {
            "year": 1977,
            "team": "DEN",
            "player": "Randy Poltl",
            "birthDate": "3/26/1952"
        }
    ],
    [
        {
            "year": 1974,
            "team": "PIT",
            "player": "Preston Pearson",
            "birthDate": "1/17/1945"
        },
        {
            "year": 1977,
            "team": "DAL",
            "player": "Preston Pearson",
            "birthDate": "1/17/1945"
        }
    ],
    [
        {
            "year": 1979,
            "team": "LAR",
            "player": "Elvis Peacock",
            "birthDate": "11/7/1956"
        },
        {
            "year": 1981,
            "team": "CIN",
            "player": "Elvis Peacock",
            "birthDate": "11/7/1956"
        }
    ],
    [
        {
            "year": 1979,
            "team": "PIT",
            "player": "Matt Bahr",
            "birthDate": "7/6/1956"
        },
        {
            "year": 1981,
            "team": "SFO",
            "player": "Matt Bahr",
            "birthDate": "7/6/1956"
        }
    ],
    [
        {
            "year": 1990,
            "team": "BUF",
            "player": "Gale Gilbert",
            "birthDate": "12/20/1961"
        },
        {
            "year": 1994,
            "team": "SDC",
            "player": "Gale Gilbert",
            "birthDate": "12/20/1961"
        }
    ],
    [
        {
            "year": 1990,
            "team": "NYG",
            "player": "Bart Oates",
            "birthDate": "12/16/1958"
        },
        {
            "year": 1994,
            "team": "SFO",
            "player": "Bart Oates",
            "birthDate": "12/16/1958"
        }
    ],
    [
        {
            "year": 1991,
            "team": "BUF",
            "player": "Don Beebe",
            "birthDate": "12/18/1964"
        },
        {
            "year": 1997,
            "team": "GNB",
            "player": "Don Beebe",
            "birthDate": "12/18/1964"
        }
    ],
    [
        {
            "year": 1991,
            "team": "WRS",
            "player": "Mark Schlereth",
            "birthDate": "1/25/1966"
        },
        {
            "year": 1997,
            "team": "DEN",
            "player": "Mark Schlereth",
            "birthDate": "1/25/1966"
        }
    ],
    [
        {
            "year": 1991,
            "team": "BUF",
            "player": "Cornelius Bennett",
            "birthDate": "8/25/1965"
        },
        {
            "year": 1998,
            "team": "ATL",
            "player": "Cornelius Bennett",
            "birthDate": "8/25/1965"
        }
    ],
    [
        {
            "year": 1991,
            "team": "WRS",
            "player": "Mark Schlereth",
            "birthDate": "1/25/1966"
        },
        {
            "year": 1998,
            "team": "DEN",
            "player": "Mark Schlereth",
            "birthDate": "1/25/1966"
        }
    ],
    [
        {
            "year": 1993,
            "team": "BUF",
            "player": "Gale Gilbert",
            "birthDate": "12/20/1961"
        },
        {
            "year": 1994,
            "team": "SDC",
            "player": "Gale Gilbert",
            "birthDate": "12/20/1961"
        }
    ],
    [
        {
            "year": 1993,
            "team": "DAL",
            "player": "Ken Norton Jr.",
            "birthDate": "9/29/1966"
        },
        {
            "year": 1994,
            "team": "SFO",
            "player": "Ken Norton Jr.",
            "birthDate": "9/29/1966"
        }
    ],
    [
        {
            "year": 1993,
            "team": "BUF",
            "player": "John Parrella",
            "birthDate": "11/22/1969"
        },
        {
            "year": 1994,
            "team": "SDC",
            "player": "John Parrella",
            "birthDate": "11/22/1969"
        }
    ],
    [
        {
            "year": 1993,
            "team": "DAL",
            "player": "Ken Norton Jr.",
            "birthDate": "9/29/1966"
        },
        {
            "year": 1994,
            "team": "SFO",
            "player": "Ken Norton Jr.",
            "birthDate": "9/29/1966"
        }
    ],
    [
        {
            "year": 1994,
            "team": "SDC",
            "player": "Johnnie Barnes",
            "birthDate": "7/21/1968"
        },
        {
            "year": 1995,
            "team": "PIT",
            "player": "Johnnie Barnes",
            "birthDate": "7/21/1968"
        }
    ],
    [
        {
            "year": 1994,
            "team": "SFO",
            "player": "Deion Sanders",
            "birthDate": "8/9/1967"
        },
        {
            "year": 1995,
            "team": "DAL",
            "player": "Deion Sanders",
            "birthDate": "8/9/1967"
        }
    ],
    [
        {
            "year": 1994,
            "team": "SDC",
            "player": "Tony Martin",
            "birthDate": "9/5/1965"
        },
        {
            "year": 1998,
            "team": "ATL",
            "player": "Tony Martin",
            "birthDate": "9/5/1965"
        }
    ],
    [
        {
            "year": 1994,
            "team": "SFO",
            "player": "Derek Loville",
            "birthDate": "7/4/1968"
        },
        {
            "year": 1998,
            "team": "DEN",
            "player": "Derek Loville",
            "birthDate": "7/4/1968"
        }
    ],
    [
        {
            "year": 1994,
            "team": "SDC",
            "player": "Tony Martin",
            "birthDate": "9/5/1965"
        },
        {
            "year": 1998,
            "team": "ATL",
            "player": "Tony Martin",
            "birthDate": "9/5/1965"
        }
    ],
    [
        {
            "year": 1994,
            "team": "SFO",
            "player": "Ed McCaffrey",
            "birthDate": "8/17/1968"
        },
        {
            "year": 1998,
            "team": "DEN",
            "player": "Ed McCaffrey",
            "birthDate": "8/17/1968"
        }
    ],
    [
        {
            "year": 1996,
            "team": "NWE",
            "player": "Mike Jones",
            "birthDate": "8/25/1969"
        },
        {
            "year": 1999,
            "team": "TEN",
            "player": "Mike Jones",
            "birthDate": "8/25/1969"
        }
    ],
    [
        {
            "year": 1996,
            "team": "GNB",
            "player": "Adam Timmerman",
            "birthDate": "8/14/1971"
        },
        {
            "year": 1999,
            "team": "STL",
            "player": "Adam Timmerman",
            "birthDate": "8/14/1971"
        }
    ],
    [
        {
            "year": 1997,
            "team": "GNB",
            "player": "Dorsey Levens",
            "birthDate": "5/21/1970"
        },
        {
            "year": 2004,
            "team": "PHI",
            "player": "Dorsey Levens",
            "birthDate": "5/21/1970"
        }
    ],
    [
        {
            "year": 1997,
            "team": "DEN",
            "player": "Keith Traylor",
            "birthDate": "9/3/1969"
        },
        {
            "year": 2004,
            "team": "NWE",
            "player": "Keith Traylor",
            "birthDate": "9/3/1969"
        }
    ],
    [
        {
            "year": 1997,
            "team": "GNB",
            "player": "Jeff Thomason",
            "birthDate": "12/30/1969"
        },
        {
            "year": 2004,
            "team": "PHI",
            "player": "Jeff Thomason",
            "birthDate": "12/30/1969"
        }
    ],
    [
        {
            "year": 1997,
            "team": "DEN",
            "player": "Keith Traylor",
            "birthDate": "9/3/1969"
        },
        {
            "year": 2004,
            "team": "NWE",
            "player": "Keith Traylor",
            "birthDate": "9/3/1969"
        }
    ],
    [
        {
            "year": 2000,
            "team": "NYG",
            "player": "Brad Maynard",
            "birthDate": "2/9/1974"
        },
        {
            "year": 2006,
            "team": "CHI",
            "player": "Brad Maynard",
            "birthDate": "2/9/1974"
        }
    ],
    [
        {
            "year": 2000,
            "team": "BAL",
            "player": "Brandon Stokley",
            "birthDate": "6/23/1976"
        },
        {
            "year": 2006,
            "team": "IND",
            "player": "Brandon Stokley",
            "birthDate": "6/23/1976"
        }
    ],
    [
        {
            "year": 2002,
            "team": "OAK",
            "player": "Jon Ritchie",
            "birthDate": "9/4/1974"
        },
        {
            "year": 2004,
            "team": "PHI",
            "player": "Jon Ritchie",
            "birthDate": "9/4/1974"
        }
    ],
    [
        {
            "year": 2002,
            "team": "TAM",
            "player": "Russ Hochstein",
            "birthDate": "10/7/1977"
        },
        {
            "year": 2004,
            "team": "NWE",
            "player": "Russ Hochstein",
            "birthDate": "10/7/1977"
        }
    ],
    [
        {
            "year": 2003,
            "team": "CAR",
            "player": "Ricky Manning",
            "birthDate": "11/18/1980"
        },
        {
            "year": 2006,
            "team": "CHI",
            "player": "Ricky Manning",
            "birthDate": "11/18/1980"
        }
    ],
    [
        {
            "year": 2003,
            "team": "NWE",
            "player": "Dan Klecko",
            "birthDate": "1/12/1981"
        },
        {
            "year": 2006,
            "team": "IND",
            "player": "Dan Klecko",
            "birthDate": "1/12/1981"
        }
    ],
    [
        {
            "year": 2003,
            "team": "CAR",
            "player": "Ricky Manning",
            "birthDate": "11/18/1980"
        },
        {
            "year": 2006,
            "team": "CHI",
            "player": "Ricky Manning",
            "birthDate": "11/18/1980"
        }
    ],
    [
        {
            "year": 2003,
            "team": "NWE",
            "player": "Adam Vinatieri",
            "birthDate": "12/28/1972"
        },
        {
            "year": 2006,
            "team": "IND",
            "player": "Adam Vinatieri",
            "birthDate": "12/28/1972"
        }
    ],
    [
        {
            "year": 2003,
            "team": "CAR",
            "player": "Muhsin Muhammad",
            "birthDate": "5/5/1973"
        },
        {
            "year": 2006,
            "team": "CHI",
            "player": "Muhsin Muhammad",
            "birthDate": "5/5/1973"
        }
    ],
    [
        {
            "year": 2003,
            "team": "NWE",
            "player": "Dan Klecko",
            "birthDate": "1/12/1981"
        },
        {
            "year": 2006,
            "team": "IND",
            "player": "Dan Klecko",
            "birthDate": "1/12/1981"
        }
    ],
    [
        {
            "year": 2003,
            "team": "CAR",
            "player": "Muhsin Muhammad",
            "birthDate": "5/5/1973"
        },
        {
            "year": 2006,
            "team": "CHI",
            "player": "Muhsin Muhammad",
            "birthDate": "5/5/1973"
        }
    ],
    [
        {
            "year": 2003,
            "team": "NWE",
            "player": "Adam Vinatieri",
            "birthDate": "12/28/1972"
        },
        {
            "year": 2006,
            "team": "IND",
            "player": "Adam Vinatieri",
            "birthDate": "12/28/1972"
        }
    ],
    [
        {
            "year": 2003,
            "team": "CAR",
            "player": "Dante Wesley",
            "birthDate": "4/5/1979"
        },
        {
            "year": 2006,
            "team": "CHI",
            "player": "Dante Wesley",
            "birthDate": "4/5/1979"
        }
    ],
    [
        {
            "year": 2003,
            "team": "NWE",
            "player": "Dan Klecko",
            "birthDate": "1/12/1981"
        },
        {
            "year": 2006,
            "team": "IND",
            "player": "Dan Klecko",
            "birthDate": "1/12/1981"
        }
    ],
    [
        {
            "year": 2003,
            "team": "CAR",
            "player": "Dante Wesley",
            "birthDate": "4/5/1979"
        },
        {
            "year": 2006,
            "team": "CHI",
            "player": "Dante Wesley",
            "birthDate": "4/5/1979"
        }
    ],
    [
        {
            "year": 2003,
            "team": "NWE",
            "player": "Adam Vinatieri",
            "birthDate": "12/28/1972"
        },
        {
            "year": 2006,
            "team": "IND",
            "player": "Adam Vinatieri",
            "birthDate": "12/28/1972"
        }
    ],
    [
        {
            "year": 2006,
            "team": "CHI",
            "player": "Mark Anderson",
            "birthDate": "5/26/1983"
        },
        {
            "year": 2011,
            "team": "NWE",
            "player": "Mark Anderson",
            "birthDate": "5/26/1983"
        }
    ],
    [
        {
            "year": 2006,
            "team": "IND",
            "player": "Brandon Stokley",
            "birthDate": "6/23/1976"
        },
        {
            "year": 2011,
            "team": "NYG",
            "player": "Brandon Stokley",
            "birthDate": "6/23/1976"
        }
    ],
    [
        {
            "year": 2006,
            "team": "CHI",
            "player": "Charles Tillman",
            "birthDate": "2/23/1981"
        },
        {
            "year": 2015,
            "team": "CAR",
            "player": "Charles Tillman",
            "birthDate": "2/23/1981"
        }
    ],
    [
        {
            "year": 2006,
            "team": "IND",
            "player": "Peyton Manning",
            "birthDate": "3/24/1976"
        },
        {
            "year": 2015,
            "team": "DEN",
            "player": "Peyton Manning",
            "birthDate": "3/24/1976"
        }
    ],
    [
        {
            "year": 2012,
            "team": "SFO",
            "player": "Ricky Jean-Francois",
            "birthDate": "11/23/1986"
        },
        {
            "year": 2017,
            "team": "NWE",
            "player": "Ricky Jean-Francois",
            "birthDate": "11/23/1986"
        }
    ],
    [
        {
            "year": 2012,
            "team": "BAL",
            "player": "Dannell Ellerbe",
            "birthDate": "11/29/1985"
        },
        {
            "year": 2017,
            "team": "PHI",
            "player": "Dannell Ellerbe",
            "birthDate": "11/29/1985"
        }
    ],
    [
        {
            "year": 2012,
            "team": "SFO",
            "player": "Ricky Jean-Francois",
            "birthDate": "11/23/1986"
        },
        {
            "year": 2017,
            "team": "NWE",
            "player": "Ricky Jean-Francois",
            "birthDate": "11/23/1986"
        }
    ],
    [
        {
            "year": 2012,
            "team": "BAL",
            "player": "Corey Graham",
            "birthDate": "7/25/1985"
        },
        {
            "year": 2017,
            "team": "PHI",
            "player": "Corey Graham",
            "birthDate": "7/25/1985"
        }
    ],
    [
        {
            "year": 2012,
            "team": "SFO",
            "player": "Ricky Jean-Francois",
            "birthDate": "11/23/1986"
        },
        {
            "year": 2017,
            "team": "NWE",
            "player": "Ricky Jean-Francois",
            "birthDate": "11/23/1986"
        }
    ],
    [
        {
            "year": 2012,
            "team": "BAL",
            "player": "Torrey Smith",
            "birthDate": "1/26/1989"
        },
        {
            "year": 2017,
            "team": "PHI",
            "player": "Torrey Smith",
            "birthDate": "1/26/1989"
        }
    ],
    [
        {
            "year": 2014,
            "team": "SEA",
            "player": "Cassius Marsh",
            "birthDate": "7/7/1992"
        },
        {
            "year": 2017,
            "team": "NWE",
            "player": "Cassius Marsh",
            "birthDate": "7/7/1992"
        }
    ],
    [
        {
            "year": 2014,
            "team": "NWE",
            "player": "LeGarrette Blount",
            "birthDate": "12/5/1986"
        },
        {
            "year": 2017,
            "team": "PHI",
            "player": "LeGarrette Blount",
            "birthDate": "12/5/1986"
        }
    ],
    [
        {
            "year": 2015,
            "team": "CAR",
            "player": "Mike Remmers",
            "birthDate": "4/11/1989"
        },
        {
            "year": 2020,
            "team": "KAN",
            "player": "Mike Remmers",
            "birthDate": "4/11/1989"
        }
    ],
    [
        {
            "year": 2015,
            "team": "DEN",
            "player": "Shaquil Barrett",
            "birthDate": "11/17/1992"
        },
        {
            "year": 2020,
            "team": "TAM",
            "player": "Shaquil Barrett",
            "birthDate": "11/17/1992"
        }
    ],
    [
        {
            "year": 2017,
            "team": "NWE",
            "player": "Brandin Cooks",
            "birthDate": "9/25/1993"
        },
        {
            "year": 2018,
            "team": "LAR",
            "player": "Brandin Cooks",
            "birthDate": "9/25/1993"
        }
    ],
    [
        {
            "year": 2017,
            "team": "PHI",
            "player": "Kenjon Barner",
            "birthDate": "4/28/1989"
        },
        {
            "year": 2018,
            "team": "NWE",
            "player": "Kenjon Barner",
            "birthDate": "4/28/1989"
        }
    ],
    [
        {
            "year": 2018,
            "team": "LAR",
            "player": "Ndamukong Suh",
            "birthDate": "1/6/1987"
        },
        {
            "year": 2022,
            "team": "PHI",
            "player": "Ndamukong Suh",
            "birthDate": "1/6/1987"
        }
    ],
    [
        {
            "year": 2018,
            "team": "NWE",
            "player": "Danny Shelton",
            "birthDate": "8/20/1993"
        },
        {
            "year": 2022,
            "team": "KAN",
            "player": "Danny Shelton",
            "birthDate": "8/20/1993"
        }
    ],
    [
        {
            "year": 2018,
            "team": "LAR",
            "player": "Ndamukong Suh",
            "birthDate": "1/6/1987"
        },
        {
            "year": 2022,
            "team": "PHI",
            "player": "Ndamukong Suh",
            "birthDate": "1/6/1987"
        }
    ],
    [
        {
            "year": 2018,
            "team": "NWE",
            "player": "Joe Thuney",
            "birthDate": "11/18/1992"
        },
        {
            "year": 2022,
            "team": "KAN",
            "player": "Joe Thuney",
            "birthDate": "11/18/1992"
        }
    ],
    [
        {
            "year": 2018,
            "team": "LAR",
            "player": "Mike Thomas",
            "birthDate": "8/16/1994"
        },
        {
            "year": 2021,
            "team": "CIN",
            "player": "Mike Thomas",
            "birthDate": "8/16/1994"
        }
    ],
    [
        {
            "year": 2018,
            "team": "NWE",
            "player": "Sony Michel",
            "birthDate": "2/17/1995"
        },
        {
            "year": 2021,
            "team": "LAR",
            "player": "Sony Michel",
            "birthDate": "2/17/1995"
        }
    ],
    [
        {
            "year": 2020,
            "team": "KAN",
            "player": "Charvarius Ward",
            "birthDate": "5/16/1996"
        },
        {
            "year": 2023,
            "team": "SFO",
            "player": "Charvarius Ward",
            "birthDate": "5/16/1996"
        }
    ],
    [
        {
            "year": 2020,
            "team": "TAM",
            "player": "Mike Edwards",
            "birthDate": "5/18/1996"
        },
        {
            "year": 2023,
            "team": "KAN",
            "player": "Mike Edwards",
            "birthDate": "5/18/1996"
        }
    ],
    [
        {
            "year": 2020,
            "team": "KAN",
            "player": "Charvarius Ward",
            "birthDate": "5/16/1996"
        },
        {
            "year": 2023,
            "team": "SFO",
            "player": "Charvarius Ward",
            "birthDate": "5/16/1996"
        }
    ],
    [
        {
            "year": 2020,
            "team": "TAM",
            "player": "Blaine Gabbert",
            "birthDate": "10/15/1989"
        },
        {
            "year": 2023,
            "team": "KAN",
            "player": "Blaine Gabbert",
            "birthDate": "10/15/1989"
        }
    ],
    [
        {
            "year": 2020,
            "team": "KAN",
            "player": "Charvarius Ward",
            "birthDate": "5/16/1996"
        },
        {
            "year": 2023,
            "team": "SFO",
            "player": "Charvarius Ward",
            "birthDate": "5/16/1996"
        }
    ],
    [
        {
            "year": 2020,
            "team": "TAM",
            "player": "Donovan Smith",
            "birthDate": "6/23/1993"
        },
        {
            "year": 2023,
            "team": "KAN",
            "player": "Donovan Smith",
            "birthDate": "6/23/1993"
        }
    ],
    [
        {
            "year": 2020,
            "team": "KAN",
            "player": "Charvarius Ward",
            "birthDate": "5/16/1996"
        },
        {
            "year": 2023,
            "team": "SFO",
            "player": "Charvarius Ward",
            "birthDate": "5/16/1996"
        }
    ],
    [
        {
            "year": 2020,
            "team": "TAM",
            "player": "Justin Watson",
            "birthDate": "4/4/1996"
        },
        {
            "year": 2023,
            "team": "KAN",
            "player": "Justin Watson",
            "birthDate": "4/4/1996"
        }
    ],
    [
        {
            "year": 2022,
            "team": "PHI",
            "player": "Marlon Tuipulotu",
            "birthDate": "5/31/1999"
        },
        {
            "year": 2024,
            "team": "KAN",
            "player": "Marlon Tuipulotu",
            "birthDate": "5/31/1999"
        }
    ],
    [
        {
            "year": 2022,
            "team": "KAN",
            "player": "Darian Kinnard",
            "birthDate": "12/29/1999"
        },
        {
            "year": 2024,
            "team": "PHI",
            "player": "Darian Kinnard",
            "birthDate": "12/29/1999"
        }
    ]
]