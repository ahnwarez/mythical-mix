export function makeTeams (teamNames, people) {
  const names = shuffle(people)

  const teams = {}
  teamNames.forEach(name => {
    teams[name] = []
  })

  for (let i = 0; i < names.length; i++) {
    const teamName = teamNames[i % teamNames.length]
    teams[teamName].push(names[i])
  }

  // eslint-disable-next-line no-console
  console.log(JSON.stringify(teams, null, 2))
  return teams

  function shuffle (input) {
    for (let i = input.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1))
      const itemAtIndex = input[randomIndex]

      input[randomIndex] = input[i]
      input[i] = itemAtIndex
    }
    return input
  }
}
