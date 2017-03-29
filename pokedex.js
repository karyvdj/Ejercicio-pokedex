function Pokemon(nombre,color,puntosAtaque){
  this.nombre = nombre;
  this.color = color;
  this.nivelDeAmistad = 0;
  this.vida = 100;
  this.puntosAtaque = puntosAtaque;

  this.saludar = function () {
    console.log("Hola, me llamo " + this.nombre);
  };

  this.pelear = function(pokemonObjeto) {
    pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque;
  }

  this.beber = function (tipoAlcohol) {
    if(tipoAlcohol=="chelas"){
      this.nivelDeAmistad += 80;
    }else if (tipoAlcohol == "vodka"){
      this.nivelDeAmistad += 10;
    }
  };
}
var pokemons = [];

function crearPokemon(){
  var nombrePokemon = document.getElementById('nombrePokemon');
  var colorPokemon = document.getElementById('colorPokemon');
  var puntosAtaque = document.getElementById('puntosAtaque');

  var pokemon = new Pokemon (nombrePokemon.value,
                             colorPokemon.value,
                             parseInt(puntosAtaque.value)
                            );
  pokemons.push(pokemon);
  console.log(pokemons);
  añadirPokemon1();
  añadirPokemon2();
  borrar();
  //mostrarPokemons()//
}

function añadirPokemon1(){
  var pokemon1 = document.getElementById('pokemon1');
  pokemon1.innerHTML = "";

  pokemons.forEach(function(pokemon){
    var elemento = document.createElement("option");
    elemento.innerHTML = pokemon.nombre;
    pokemon1.appendChild(elemento);
  });
}

function añadirPokemon2(){
  var pokemon2 = document.getElementById('pokemon2');
  pokemon2.innerHTML = "";

  pokemons.forEach(function(pokemon){
    var elemento = document.createElement("option");
    elemento.innerHTML = pokemon.nombre;
    pokemon2.appendChild(elemento);
  });
}

function borrar() {
  var stringVacio = "";
  document.getElementById('nombrePokemon').value = stringVacio;
  document.getElementById('colorPokemon').value = stringVacio;
  document.getElementById('puntosAtaque').value = stringVacio;
}

function pelear(){

}

/*function mostrarPokemons(){
  var listaPokemons = document.getElementById('listaPokemons');

  var lista = document.createElement ("ul");

  pokemons.forEach(function(pokemon){
    var elemento = document.createElement("li");

    elemento.innerHTML = pokemon.nombre + pokemon.color + pokemon.puntosAtaque;
    lista.appendChild(elemento);

    listaPokemons.appendChild(lista);
  })
}*/


/*var pikachu = new Pokemon ("Pikachu", "amarillo",70);
var charmander = new Pokemon ("Charmander", "rojo",90);
console.log(pikachu);
console.log(charmander);

console.log(pikachu.saludar());
console.log(charmander.saludar());

console.log(pikachu.nivelDeAmistad);
console.log(charmander.nivelDeAmistad);

pikachu.pelear(charmander)

console.log(charmander.vida)*/
