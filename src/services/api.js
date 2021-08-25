import axios from 'axios'

const apiGetAllPokemons = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/"
})

export default apiGetAllPokemons

