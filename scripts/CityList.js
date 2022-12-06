import { getCities, getWalkers } from "./database.js"

const walkers = getWalkers()
const cities = getCities()


//Currently, we need to find all cities for a walker and display them


export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}


