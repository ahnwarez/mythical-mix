const { people } = require('../data/people')

function something (groups, week) {
  return people.map(
    (person, index) => ({
      ...person,
      group: groups[index % groups.length],
      week: week
    }))
}

exports.seed = function (knex) {
  const groups = [1, 2, 3, 4]
  const table = []
  for (let week = 1; week <= 6; week++) {
    groups.unshift(groups.pop())
    groups.unshift(groups.pop())
    groups.unshift(groups.pop())
    people.unshift(people.pop())
    people.unshift(people.pop())
    const result = something(groups, week)
    table.push(result)
  }
  // Deletes ALL existing entries
  return knex('people_teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('people_teams').insert(table.flat())
    }
    )
}
