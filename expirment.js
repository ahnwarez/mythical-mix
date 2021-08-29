const { people } = require('./server/db/data/people')

function something (groups, week) {
  return people.map(
    ({ name }, index) => ({
      name,
      ['week' + week]: groups[index % groups.length]
    }))
}

function main () {
  const groups = [1, 2, 3, 4]
  for (let week = 1; week <= 6; week++) {
    groups.unshift(groups.pop())
    groups.unshift(groups.pop())
    groups.unshift(groups.pop())
    people.unshift(people.pop())
    people.unshift(people.pop())
    const result = something(groups, week)
    console.log(result)
  }
}

main()
