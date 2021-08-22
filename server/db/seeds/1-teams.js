
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        { "id": 1, "theme_id": 1, "name": "Dogs", "image_url": "dogs.jpg" },
        { "id": 2, "theme_id": 1, "name": "SeaLions", "image_url": "sealions.jpg" },
        { "id": 3, "theme_id": 1, "name": "Whales", "image_url": "whale.jpg" },
        { "id": 4, "theme_id": 1, "name": "Bats", "image_url": "bats.jpg" },

        { "id": 5, "theme_id": 2, "name": "Bowties", "image_url": "bowties.jpg" },
        { "id": 6, "theme_id": 2, "name": "Elbows", "image_url": "elbows.jpg" },
        { "id": 7, "theme_id": 2, "name": "Spirals", "image_url": "spirals.jpg" },
        { "id": 8, "theme_id": 2, "name": "Plain Spaghetti", "image_url": "plainspaghetti.jpg" },

        { "id": 9, "theme_id": 3, "name": "Basketballers", "image_url": "bball.jpg" },
        { "id": 10, "theme_id": 3, "name": "Footballers", "image_url": "footballers.jpg" },
        { "id": 11, "theme_id": 3, "name": "Netballers", "image_url": "netball.jpg" },
        { "id": 12, "theme_id": 3, "name": "Underwater Hockey Amateur Squad", "image_url": "underwater.jpg" },

        { "id": 13, "theme_id": 4, "name": "Storms", "image_url": "storms.jpg" },
        { "id": 14, "theme_id": 4, "name": "Tornados", "image_url": "tornados.jpg" },
        { "id": 15, "theme_id": 4, "name": "Monsoons", "image_url": "monsoons.jpg" },
        { "id": 16, "theme_id": 4, "name": "Humidity", "image_url": "humidity.jpg" },

        { "id": 17, "theme_id": 5, "name": "Rice Crackers", "image_url": "rice-crackers.jpg" },
        { "id": 18, "theme_id": 5, "name": "Chippies", "image_url": "chips.jpg" },
        { "id": 19, "theme_id": 5, "name": "Chocolate Raspberry Dusted Almonds", "image_url": "almonds.jpg" },
        { "id": 20, "theme_id": 5, "name": "Caramel TimTams", "image_url": "timtams.jpg" },

        { "id": 21, "theme_id": 6, "name": "Hip-Hoppers", "image_url": "hiphop.jpg" },
        { "id": 22, "theme_id": 6, "name": "Jazz Band", "image_url": "jazzband.jpg" },
        { "id": 23, "theme_id": 6, "name": "Indie-Rockers", "image_url": "indierock.jpg" },
        { "id": 24, "theme_id": 6, "name": "Sea Shanty Singers", "image_url": "seashanty.jpg" },

        { "id": 25, "theme_id": 7, "name": "Jaguars", "image_url": "jaguars.jpg" },
        { "id": 26, "theme_id": 7, "name": "Chevrolets", "image_url": "chev.jpg" },
        { "id": 27, "theme_id": 7, "name": "Ferraris", "image_url": "ferraris.jpg" },
        { "id": 28, "theme_id": 7, "name": "Dodgy Rental Cars", "image_url": "rental-car.jpg" },

        { "id": 29, "theme_id": 8, "name": "Iced Lattes", "image_url": "iced-latte.jpg" },
        { "id": 30, "theme_id": 8, "name": "San Pellegrino", "image_url": "sanpel.jpg" },
        { "id": 31, "theme_id": 8, "name": "Powerade", "image_url": "powerade.jpg" },
        { "id": 32, "theme_id": 8, "name": "Off Milk", "image_url": "off-milk.jpg" }

      ]);
    });
};
