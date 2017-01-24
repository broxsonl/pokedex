'use strict';

const url = 'http://pokeapi.co/api/v2/pokemon/';

const $pokeTable = $('.table-header');

let counter = 1;

$('.next').on('click', function () {
  $pokeTable.empty();
  for (let i = counter; i <= counter + 4; i++) {
    $.get(`${url}${i}/`, res => {
      let pokeRow = document.createElement('tr');
      $pokeTable.append(pokeRow);

      let pokeName = document.createElement('td');
      let pokeType = document.createElement('td');
      let pokeHeight = document.createElement('td');
      let pokeWeight = document.createElement('td');

      pokeName.textContent = res.name;
      pokeType.textContent = res.types[0].type.name;
      pokeHeight.textContent = res.height;
      pokeWeight.textContent = res.weight;

      $pokeTable.append(pokeRow);
      pokeRow.append(pokeName);
      pokeRow.append(pokeType);
      pokeRow.append(pokeHeight);
      pokeRow.append(pokeWeight);
      pokeRow.append(pokeType);
    });
  }
  counter += 5;
});

$('.prev').on('click', function() {
  $pokeTable.empty();
  for (let i = counter - 4; i <= counter; i++) {
    $.get(`${url}${i}/`, res => {
      let pokeRow = document.createElement('tr');
      $pokeTable.append(pokeRow);

      let pokeName = document.createElement('td');
      let pokeType = document.createElement('td');
      let pokeHeight = document.createElement('td');
      let pokeWeight = document.createElement('td');

      pokeName.textContent = res.name;
      pokeType.textContent = res.types[0].type.name;
      pokeHeight.textContent = res.height;
      pokeWeight.textContent = res.weight;

      $pokeTable.append(pokeRow);
      pokeRow.append(pokeName);
      pokeRow.append(pokeType);
      pokeRow.append(pokeHeight);
      pokeRow.append(pokeWeight);
      pokeRow.append(pokeType);
    });
  }
  counter -= 5;
});
