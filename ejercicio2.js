const baseUrl = 'https://swapi.dev/api/'

const request = async (url) => {
  const response = await fetch(url)
  return await response.json()
}

const getPeopleById = async (id) => {
  return await request(`${baseUrl}people/${id}`)
}

const main = async () => {
  //  obtenemos la informacion de Luke Skywalker con el id 1
  const luke = await getPeopleById(1)
  // obtenemos la informacion del planeta de Luke Skywalker
  const lukePlanet = await request(luke.homeworld)
  // imprimimos informacion a la consola sobre el planeta obtenido
  console.log('=========== Informacion importante del planeta de Luke Skywalker ===========')
  console.log(`Nombre: ${lukePlanet.name}`)
  console.log(`Poblacion: ${lukePlanet.population}`)
  console.log(`Diametro: ${lukePlanet.diameter}`)
  console.log(`Gravedad: ${lukePlanet.gravity}`)
  console.log('============================================================================')
}

main()