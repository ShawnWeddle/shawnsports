const scheduleData = [
  [ "ARI", "@LAC", "SEA", "@SFO", "@NYG", "DET", "@LAR", "DEN", "@DAL", "@SEA", "LAR", "@KAN", "WAS", "PHI", "BYE", "NYJ", "@NOR", "LVR", "SFO", ],
  [ "ATL", "@PIT", "CAR", "@GNB", "@NOR", "BAL", "CHI", "SFO", "@TAM", "CIN", "KAN", "BYE", "@MIN", "DET", "@CLE", "@WAS", "TAM", "NOR", "@CAR", ],
  [ "BAL", "@IND", "NOR", "@DAL", "TEN", "@ATL", "@CLE", "CIN", "@BUF", "JAX", "LAC", "@CAR", "@HOU", "BYE", "TAM", "@PIT", "CLE", "@CIN", "PIT", ],
  [ "BUF", "@HOU", "DET", "LAC", "NWE", "@LAR", "@LVR", "BYE", "BAL", "@MIN", "@NYJ", "MIA", "KAN", "@NWE", "@GNB", "CHI", "@DEN", "@MIA", "NYJ", ],
  [ "CAR", "CHI", "@ATL", "@CLE", "DET", "BYE", "@PHI", "TAM", "@GNB", "DEN", "@NOR", "BAL", "@TAM", "@MIN", "NOR", "CIN", "@PIT", "SEA", "ATL", ],
  [ "CHI", "@CAR", "MIN", "PHI", "NYJ", "@GNB", "@ATL", "NWE", "@SEA", "TAM", "BYE", "NOR", "@DET", "JAX", "@MIA", "@BUF", "GNB", "DET", "@MIN", ],
  [ "CIN", "TAM", "@HOU", "@PIT", "JAX", "@MIA", "BYE", "@BAL", "TEN", "@ATL", "PIT", "@WAS", "NOR", "@CLE", "KAN", "@CAR", "@IND", "BAL", "CLE", ],
  [ "CLE", "@JAX", "@TAM", "CAR", "PIT", "@NYJ", "BAL", "@TEN", "@PIT", "@NOR", "HOU", "BYE", "LVR", "CIN", "ATL", "@NYG", "@BAL", "IND", "@CIN", ],
  [ "DAL", "@NYG", "WAS", "BAL", "@HOU", "TAM", "@GNB", "@PHI", "ARI", "@IND", "SFO", "TEN", "PHI", "@SEA", "BYE", "@LAR", "JAX", "NYG", "@WAS", ],
  [ "DEN", "@KAN", "JAX", "LAR", "@SFO", "@LAC", "SEA", "@ARI", "KAN", "@CAR", "BYE", "LVR", "@PIT", "MIA", "@NYJ", "@LVR", "BUF", "@NWE", "LAC", ],
  [ "DET", "NOR", "@BUF", "NYJ", "@CAR", "@ARI", "BYE", "GNB", "MIN", "@MIA", "NWE", "TAM", "CHI", "@ATL", "TEN", "@MIN", "NYG", "@CHI", "@GNB", ],
  [ "GNB", "@MIN", "@NYJ", "ATL", "@TAM", "CHI", "DAL", "@DET", "CAR", "@NWE", "MIN", "BYE", "@LAR", "@NOR", "BUF", "MIA", "@CHI", "HOU", "DET", ],
  [ "HOU", "BUF", "CIN", "@IND", "DAL", "@TEN", "@JAX", "NYG", "BYE", "@LAC", "@CLE", "IND", "BAL", "@PIT", "@WAS", "JAX", "@PHI", "@GNB", "TEN", ],
  [ "IND", "BAL", "@KAN", "HOU", "@WAS", "@PIT", "TEN", "@MIN", "@JAX", "DAL", "MIA", "@HOU", "NYG", "BYE", "@PHI", "@TEN", "CIN", "@CLE", "JAX", ],
  [ "JAX", "CLE", "@DEN", "NWE", "@CIN", "PHI", "HOU", "BYE", "IND", "@BAL", "@TEN", "@NYG", "TEN", "@CHI", "PIT", "@HOU", "@DAL", "WAS", "@IND", ],
  [ "KAN", "DEN", "IND", "@MIA", "@LVR", "BYE", "LAC", "@SEA", "@DEN", "NYJ", "@ATL", "ARI", "@BUF", "@LAR", "@CIN", "NWE", "SFO", "@LAC", "LVR", ],
  [ "LVR", "MIA", "@LAC", "@NOR", "KAN", "@NWE", "BUF", "LAR", "@NYJ", "@SFO", "SEA", "@DEN", "@CLE", "BYE", "LAC", "DEN", "TEN", "@ARI", "@KAN", ],
  [ "LAR", "SFO", "NYG", "@DEN", "@PHI", "BUF", "ARI", "@LVR", "LAC", "@WAS", "@ARI", "BYE", "GNB", "KAN", "@SFO", "DAL", "@SEA", "@TAM", "SEA", ],
  [ "LAC", "ARI", "LVR", "@BUF", "@SEA", "DEN", "@KAN", "BYE", "@LAR", "HOU", "@BAL", "NYJ", "NWE", "@TAM", "@LVR", "SFO", "@MIA", "KAN", "@DEN", ],
  [ "MIA", "@LVR", "@SFO", "KAN", "@MIN", "CIN", "BYE", "@NYJ", "NWE", "DET", "@IND", "@BUF", "NYJ", "@DEN", "CHI", "@GNB", "LAC", "BUF", "@NWE", ],
  [ "MIN", "GNB", "@CHI", "@TAM", "MIA", "@NOR", "BYE", "IND", "@DET", "BUF", "@GNB", "@SFO", "ATL", "CAR", "@NWE", "DET", "WAS", "@NYJ", "CHI", ],
  [ "NWE", "@SEA", "PIT", "@JAX", "@BUF", "LVR", "NYJ", "@CHI", "@MIA", "GNB", "@DET", "BYE", "@LAC", "BUF", "MIN", "@KAN", "@NYJ", "DEN", "MIA", ],
  [ "NOR", "@DET", "@BAL", "LVR", "ATL", "MIN", "@NYG", "PIT", "BYE", "CLE", "CAR", "@CHI", "@CIN", "GNB", "@CAR", "@TAM", "ARI", "@ATL", "TAM", ],
  [ "NYG", "DAL", "@LAR", "TEN", "ARI", "@WAS", "NOR", "@HOU", "BYE", "@PHI", "WAS", "JAX", "@IND", "SFO", "@SEA", "CLE", "@DET", "@DAL", "PHI", ],
  [ "NYJ", "@TEN", "GNB", "@DET", "@CHI", "CLE", "@NWE", "MIA", "LVR", "@KAN", "BUF", "@LAC", "@MIA", "BYE", "DEN", "@ARI", "NWE", "MIN", "@BUF", ],
  [ "PHI", "WAS", "@TEN", "@CHI", "LAR", "@JAX", "CAR", "DAL", "@WAS", "NYG", "BYE", "PIT", "@DAL", "@ARI", "IND", "SEA", "HOU", "@SFO", "@NYG", ],
  [ "PIT", "ATL", "@NWE", "CIN", "@CLE", "IND", "@TAM", "@NOR", "CLE", "BYE", "@CIN", "@PHI", "DEN", "HOU", "@JAX", "BAL", "CAR", "@TEN", "@BAL", ],
  [ "SFO", "@LAR", "MIA", "ARI", "DEN", "@SEA", "WAS", "@ATL", "BYE", "LVR", "@DAL", "MIN", "SEA", "@NYG", "LAR", "@LAC", "@KAN", "PHI", "@ARI", ],
  [ "SEA", "NWE", "@ARI", "@WAS", "LAC", "SFO", "@DEN", "KAN", "CHI", "ARI", "@LVR", "BYE", "@SFO", "DAL", "NYG", "@PHI", "LAR", "@CAR", "@LAR", ],
  [ "TAM", "@CIN", "CLE", "MIN", "GNB", "@DAL", "PIT", "@CAR", "ATL", "@CHI", "BYE", "@DET", "CAR", "LAC", "@BAL", "NOR", "@ATL", "LAR", "@NOR", ],
  [ "TEN", "NYJ", "PHI", "@NYG", "@BAL", "HOU", "@IND", "CLE", "@CIN", "BYE", "JAX", "@DAL", "@JAX", "WAS", "@DET", "IND", "@LVR", "PIT", "@HOU", ],
  [ "WAS", "@PHI", "@DAL", "SEA", "IND", "NYG", "@SFO", "BYE", "PHI", "LAR", "@NYG", "CIN", "@ARI", "@TEN", "HOU", "ATL", "@MIN", "@JAX", "DAL", ],
]

type GameTypeNFL = {
  Away: string,
  Home: string,
  Winner: undefined,
  Week: number,
  Code: string,
}

export const createScheduleData = () => {
  const allGames: GameTypeNFL[] = [];
  const T = { Away: "ARI", Home: "BUF", Winner: undefined, Week: 1, Code: "BUF-ARI-001"}
  scheduleData.map((arr, index) => {
    const activeTeam = arr[0];
    for(let i=1; i<arr.length; i++){
      let oppTeam = arr[i];
      if(activeTeam && oppTeam){
        if(oppTeam.includes("@")){
          oppTeam = oppTeam.replace("@", "");
          if(oppTeam === "BYE" || activeTeam > oppTeam){
            allGames.push({ Away: activeTeam, Home: oppTeam, Winner: undefined, Week: i, Code: activeTeam + "-" + oppTeam + "-" + i.toString().padStart(3, "0")})
          }
        } else {
          if(oppTeam === "BYE" || activeTeam > oppTeam){
            allGames.push({ Away: oppTeam, Home: activeTeam, Winner: undefined, Week: i, Code: oppTeam + "-" + activeTeam + "-" + i.toString().padStart(3, "0")})
          }
        }
      }
    }
  })
  const P = allGames.sort((a,b) => {
    if(a.Week !== b.Week){
      return a.Week > b.Week ? 1 : -1
    }

    return a.Code > b.Code ? 1 : -1
  })
  console.log(P);
}