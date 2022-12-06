import { getPets } from "./database.js"
import { getWalkers } from "./database.js"

//Step 1 - Update the code so that the <li> items for each pet has an id attribute 

//Step 2 - Add a click event listener to your HTML document
    //accomplished thru document object which has a property of addEventListener. The first parameter of the property makes it a click event type
//Step 3 - Store the target HTML element of the click event in a variable
    //accomplished thru creating newClick variable and storing the callback function and target property in the variable
//Step 4 - Check if the id property of the element starts with string 'pet'
    //accomplished thru if statement on variable of click event to check if the id begins with pet

/* document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        const newClick = clickEvent.target;
        if (newClick.id.startsWith('pet')) {
            const [,petPrimaryKey] = newClick.id.split('--');
            for (const pet of pets) {
            if (pet.id === parseInt(petPrimaryKey)) {
                window.alert(`${pet.name} barks at you`)
            }
        }
    }
}
) */


document.addEventListener(
    "click",  // This is the type of event
    (clickEvent) => {
        const newClick1 = clickEvent.target;
        if (newClick1.id.startsWith('pet')) {
            const [,petPrimaryKey] = newClick1.id.split('--');
            let matchingPet = null
            for (const pet of pets) {
                if (parseInt(petPrimaryKey) === pet.id) {
                    matchingPet = pet
                }
            }
            let matchingWalker = null
            for (const walker of walkers) {
                if (matchingPet.walkerId === walker.id) {
                    matchingWalker = walker
                }
            }
        window.alert(`${matchingPet.name} is beign walked by ${matchingWalker.name}`)
    }
}
)

const pets = getPets()
const walkers = getWalkers();

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id='pet--${pet.id}'>${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

