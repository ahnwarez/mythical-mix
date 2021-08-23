export function assignGroups(peoplesNamesArra) {
  //console.log(peoplesNamesArray);
  const peoplesNamesArray = shuffleArray(peoplesNamesArra)

  const teams = [[], [], [], []]// push peoples names into array
  const length = peoplesNamesArray.length
  const remainder = length % 4
  for (let i = 0; i < length; i++) {


    let num = Math.floor(Math.random() * teams.length);
    if (teams[num].length < 4) {
      teams[num].push(peoplesNamesArray[i])
    }


    else {
      if (i >= length - remainder) {
        if (teams[num].length !== 5) {
          teams[num].push(peoplesNamesArray[i])
        }
        else {
          let newNum = Math.floor(Math.random() * teams.length);
          while (newNum === num) {
            newNum = Math.floor(Math.random() * teams.length);
          }
          if (teams[newNum].length !== 5) {
            teams[newNum].push(peoplesNamesArray[i])
          }
        }
      }
      else {
        for (let j = 0; j < teams.length; j++) {
          let element = teams[j]
          if (element.length < 4) {
            element.push(peoplesNamesArray[i])
            break
          }
        }
      }
    }
  } return teams // last two will always be in bigger groups 
  //

  //HAVE AN ARRAY THAT HAS RANDOMLY PLACED INDEXES AND GO THROUGH IT NORMALLY AND RUN THE SAME CODE

}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}


export function assignGroupNames(team, teamsArray) {// jsonTeam is "team" key 
  return teamsArray
    .map((people, i) => ({
      teamName: team[i],
      // teamImageUrl: team[i].teamImageUrl,
      people
    }))
}
