
exports.seed = function (knex) {
  return knex('themes').del()
    .then(function () {
      return knex('themes').insert([
        {
          "id": 1,
          "name": "Animals",
          "image_url": "mammals-cropped.jpg"
        },
        {
          "id": 2,
          "name": "Pasta",
          "image_url": "pasta.jpg"
        },
        {
          "id": 3,
          "name": "Sports",
          "image_url": "sports.jpg"
        },
        {
          "id": 4,
          "name": "Weather",
          "image_url": "weather.jpg"
        },
        {
          "id": 5,
          "name": "Snacks",
          "image_url": "snacks.jpg"
        },
        {
          "id": 6,
          "name": "Music",
          "image_url": "music.jpg"
        },
        {
          "id": 7,
          "name": "Cars",
          "image_url": "cars-cropped.jpg"
        },
        {
          "id": 8,
          "name": "Beverages",
          "image_url": "iced-latte.jpg"
        }
      ]);
    });
};
