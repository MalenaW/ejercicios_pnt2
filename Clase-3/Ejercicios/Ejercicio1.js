let listaIds = [6, 49, 58, 150, 79, 66];
// https://pokeapi.co/api/v2/pokemon?limit=150&offset=0

// Devolver un objeto respuesta, con un objeto por pokemon,
// el cual el nombre del pokemon, sea la llave
// y el objeto debe contener sprite front default, altura, peso, nombre, y id de cada pokemon

// respuesta = {
//     pikachu:{
//         id: 1,
//         altura: 10
//     },
//     ditto:{
//         id: 2,
//         altura: 10
//     }
// }
async function obtenerPokemon(listaIds) {
  let respuestas = {};
  try {
    const respuesta = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`
    );
    const data = await respuesta.json();
    //console.log(data);
    let nuevoArray = listaIds.map((id) => data.results[id - 1].name);
    for (const key of nuevoArray) {
      const resultado = await fetch(`https://pokeapi.co/api/v2/pokemon/${key}`);
      const data = await resultado.json();
      respuestas[key] = {
        id: data.id,
        nombre: data.name,
        altura: data.height,
        sprite: data.sprites.front_default,
      };

      console.log(data.name);
    }
  } catch (error) {
    console.log("Ups, algo fallo", error);
  }

  //
  // fetch https://pokeapi.co/api/v2/pokemon?limit=150&offset=0
  // De todo el fetch, obtener la info de esos ids en particular, en base al indice
  // y luego recorrer esos en la siguiente url
  // fetch https://pokeapi.co/api/v2/pokemon/${}

  console.log("Respuesta final: ", respuesta);
}

obtenerPokemon(listaIds);
