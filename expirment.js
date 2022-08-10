const cosine = require('cosine')
const data = require('./data/students')

const clementine = 'clementine'
const daniel = 'daniel'
const garret = 'garret'
const gen = 'gen'
const hon = 'hon'
const jasmine = 'jasmine'
const jesser = 'jesser'
const jessew = 'jessew'
const kang = 'kang'
const karmel = 'karmel'
const katie = 'katie'
const maria = 'maria'
const matt = 'matt'
const min = 'min'
const finn = 'finn'
const rachel = 'rachel'
const sindre = 'sindre'
const tai = 'tai'
const tiaan = 'tiaan'
const zak = 'zak'

function areSimilar(shuffle1, shuffle2) {
  let results = []
  for (const arr1 of shuffle1) {
    for (const arr2 of shuffle2) {
      results.push(cosine(arr1, arr2))
    }
  }

  return results.reduce((acc, x) => (acc > x ? acc : x))
}

for (let index = 0; index < 10; index++) {
  const shuffle1 = {
    1: [karmel, finn, tai, min, clementine],
    2: [maria, hon, matt, garret, gen],
    3: [jessew, daniel, jesser, sindre, jasmine],
    4: [tiaan, kang, rachel, zak, katie],
  }
  const shuffle2 = makeTeams(['1', '2', '3', '4'], data.people)
  const result = areSimilar(Object.values(shuffle1), Object.values(shuffle2))
  if (result < 0.4) {
    // console.table(shuffle1)
    console.table(shuffle2)
    break
  }
}

function makeTeams(teamNames, people) {
  const names = shuffle(people)

  const teams = {}
  teamNames.forEach((name) => {
    teams[name] = []
  })

  for (let i = 0; i < names.length; i++) {
    const teamName = teamNames[i % teamNames.length]
    teams[teamName].push(names[i])
  }

  // eslint-disable-next-line no-console
  // console.log(JSON.stringify(teams, null, 2))
  return teams

  function shuffle(input) {
    for (let i = input.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1))
      const itemAtIndex = input[randomIndex]

      input[randomIndex] = input[i]
      input[i] = itemAtIndex
    }
    return input
  }
}
module.exports = {
  areSimilar,
}
