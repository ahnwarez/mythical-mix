import { v4 as uuidv4 } from 'uuid'
const localStoragePeople = 'people'

export function getPeople () {
  const str = localStorage.getItem(localStoragePeople)
  if (str) {
    return JSON.parse(str)
  } else {
    return []
  }
}

export function addPerson (person) {
  const people = getPeople()
  const newPeople = [
    ...people,
    {
      ...person,
      id: uuidv4()
    }
  ]
  localStorage.setItem(localStoragePeople, JSON.stringify(newPeople))
}

export function deletePerson (id) {
  const people = getPeople()
  const newPeople = people.filter(person => person.id !== id)
  localStorage.setItem(localStoragePeople, JSON.stringify(newPeople))
}
