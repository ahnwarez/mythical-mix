const connection = require('./connection')

function getTeams (db = connection) {
  return db('teams')
    .join('themes', 'teams.theme_id', 'themes.id')
    .select(
      'themes.id as themeId',
      'themes.name as themeName',
      'themes.image_url as themeImageUrl',
      'teams.id as teamId',
      'teams.name as teamName',
      'teams.image_url as teamImageUrl'
    )
}

module.exports = {
  getTeams
}
