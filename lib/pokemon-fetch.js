'use strict';

const url = 'http://pokeapi.co/api/v2/pokemon/';

const $pokeTable = $('#pokedex-table');

let counter = 1;

$('.next').on('click', function () {

  $('tr:not(:first-child)').remove();
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

      pokeRow.appendChild(pokeName);
      pokeRow.appendChild(pokeType);
      pokeRow.appendChild(pokeHeight);
      pokeRow.appendChild(pokeWeight);
    });
  }
  counter += 5;
  if (counter > 1) $('.prev').show();
});

$('.prev').on('click', function() {
  $('tr:not(:first-child)').remove();
  for (let i = counter - 5; i <= counter - 1; i++) {
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

      pokeRow.appendChild(pokeName);
      pokeRow.appendChild(pokeType);
      pokeRow.appendChild(pokeHeight);
      pokeRow.appendChild(pokeWeight);
    });
  }
  counter -= 5;
  if (counter <= 1) $('.prev').hide();
});
