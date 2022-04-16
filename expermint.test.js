const { areSimilar } = require('./expirment')

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

test('one similar team', () => {
  const shuffle1 = [
    [maria, matt, min, finn, rachel],
    [clementine, daniel, garret, gen, jasmine],
    [jesser, jessew, kang, karmel, katie],
    [sindre, tai, tiaan, zak, hon],
  ]
  const shuffle2 = [
    [maria, matt, finn, min, tiaan],
    [kang, sindre, gen, katie, jasmine],
    [jessew, hon, karmel, garret, zak],
    [tai, rachel, clementine, daniel, jesser],
  ]
  const actual = areSimilar(shuffle1, shuffle2)
  expect(actual).toBeGreaterThanOrEqual(0.75)
})

test('different teams', () => {
  const shuffle1 = [
    [hon, katie, garret, kang, min],
    [rachel, daniel, jesser, jessew, tiaan],
    [tai, sindre, clementine, jasmine, finn],
    [gen, zak, karmel, matt, maria],
  ]
  const shuffle2 = [
    [min, finn, clementine, tiaan],
    [gen, hon, karmel, daniel, jesser],
    [jessew, jasmine, tai, maria, matt],
    [rachel, katie, kang, garret, zak],
  ]
  const actual = areSimilar(shuffle1, shuffle2)
  expect(actual).toBeLessThan(0.75)
})

test('different teams', () => {
  const shuffle1 = [
    [kang, karmel, maria, gen, finn],
    [clementine, sindre, matt, tiaan, tai],
    [rachel, daniel, jessew, garret, katie],
    [hon, min, jasmine, zak, jesser],
  ]
  const shuffle2 = [
    [min, finn, clementine, tiaan],
    [gen, hon, karmel, daniel, jesser],
    [jessew, jasmine, tai, maria, matt],
    [rachel, katie, kang, garret, zak],
  ]
  const actual = areSimilar(shuffle1, shuffle2)
  expect(actual).toBeLessThan(0.75)
})

test('different teams', () => {
  const shuffle1 = [
    [kang, karmel, maria, gen, finn],
    [clementine, sindre, matt, tiaan, tai],
    [rachel, daniel, jessew, garret, katie],
    [hon, min, jasmine, zak, jesser],
  ]
  const shuffle2 = [
    [tai, clementine, rachel, daniel, garret],
    [zak, matt, min, katie, karmel],
    [jesser, jessew, gen, hon, jasmine],
    [maria, kang, sindre, tiaan, finn],
  ]
  const actual = areSimilar(shuffle1, shuffle2)
  expect(actual).toBeLessThan(0.75)
})

test('different teams', () => {
  const shuffle1 = [
    [kang, karmel, maria, gen, finn],
    [clementine, sindre, matt, tiaan, tai],
    [rachel, daniel, jessew, garret, katie],
    [hon, min, jasmine, zak, jesser],
  ]
  const shuffle2 = [
    [tai, maria, min, karmel, matt],
    [sindre, hon, rachel, jessew, daniel],
    [gen, tiaan, katie, finn, jasmine],
    [clementine, jesser, garret, zak, kang],
  ]
  const actual = areSimilar(shuffle1, shuffle2)
  expect(actual).toBeLessThan(0.75)
})

test('different teams', () => {
  const shuffle1 = [
    [maria, matt, finn, min, tiaan],
    [kang, sindre, gen, katie, jasmine],
    [jessew, hon, karmel, garret, zak],
    [tai, rachel, clementine, daniel, jesser],
  ]
  const shuffle2 = [
    [min, sindre, finn, clementine, tiaan],
    [gen, hon, karmel, daniel, jesser],
    [jessew, jasmine, tai, maria, matt],
    [rachel, katie, kang, garret, zak],
  ]
  const actual = areSimilar(shuffle1, shuffle2)
  expect(actual).toBeLessThan(0.75)
})
