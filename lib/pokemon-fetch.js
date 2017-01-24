'use strict';

const pokemonFetch = module.exports = {};

const request = require('superagent');
const url = 'http://pokeapi.co/api/v2/pokemon/';
const $ = require('jquery');

const $pokeTable = $('pokedex-table');

let counter = 1;

pokemonFetch.fetchNextPokemon = function() {
  for (let i = counter; i <= counter + 4; i++) {
    request.get(`${url}${i}/`)
    .then( res => {
      let pokemon = {};
      pokemon.name = res.body.name;
      pokemon.type = res.body.types[0].type.name;
      pokemon.weight = res.body.weight;
      pokemon.height = res.body.height;
      return pokemon;
    })
    .then( pokemon => {
      $('$pokeTable').append('pokeRow');
      let pokeRow = document.createElement('tr');
      let pokeName = document.createElement('td');
      let pokeType = document.createElement('td');
      let pokeHeight = document.createElement('td');
      let pokeWeight = document.createElement('td');

      pokeName.textContent = pokemon.name;
      pokeType.textContent = pokemon.type;
      pokeHeight.textContent = pokemon.weight;
      pokeWeight.textContent = pokemon.height;
      $pokeTable.appendChild(pokeRow);
      pokeRow.appendChild(pokeName);
      pokeRow.appendChild(pokeType);
      pokeRow.appendChild(pokeHeight);
      pokeRow.appendChild(pokeWeight);
      pokeRow.appendChild(pokeType);
    });
  }
};

pokemonFetch.fetchPrevPokemon = function() {
  for (let i = counter; i >= counter - 4; i--) {
    request.get(`${url}${i}/`)
    .then( res => {
      let pokemon = {};
      pokemon.name = res.body.name;
      pokemon.type = res.body.types[0].type.name;
      pokemon.weight = res.body.weight;
      pokemon.height = res.body.height;
      return pokemon;
    })
    .then( pokemon => {
      let pokeRow = document.createElement('tr');
      $('$pokeTable').append('pokeRow');
      let pokeName = document.createElement('td');
      let pokeType = document.createElement('td');
      let pokeHeight = document.createElement('td');
      let pokeWeight = document.createElement('td');
      pokeName.textContent = pokemon.name;
      pokeType.textContent = pokemon.type;
      pokeHeight.textContent = pokemon.weight;
      pokeWeight.textContent = pokemon.height;
      pokeRow.appendChild(pokeName);
      pokeRow.appendChild(pokeType);
      pokeRow.appendChild(pokeHeight);
      pokeRow.appendChild(pokeWeight);
      pokeRow.appendChild(pokeType);
    });
  }
};
