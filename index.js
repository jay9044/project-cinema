//ApiKeys
const omdbApi = "8d5ab09"

//selectors
const form = document.querySelector("form");
const resultsPosterPosition = document.querySelector(".results"); 
const headingTitle = document.querySelector("#welcome-heading")
const headingAfterSearch = document.querySelector("#heading__after")
const textInputField = document.querySelector("#search_input")

//Event Listeners
form.addEventListener("submit", function(e){
    e.preventDefault()
    console.log({event})
    titleResults = event.target[0].value
    searchTitle(titleResults);
    textInputField.value = "Search For Another Movie..";
    headingTitle.textContent = "";
    headingAfterSearch.textContent = `All ${titleResults} Films & Related Films`

})

//function for creating a element
function createNode(element) {
    return document.createElement(element)
}

// append child function
function append(parent, element) {
    return parent.appendChild(element)
}



function searchTitle(title){
fetch(`http://www.omdbapi.com/?s=${title}&apikey=8d5ab09`)
.then(response => response.json())
.then(body => {
    console.log(body)
    displayResults(body.Search)
   })
}

function displayResults(films){
    let myString=""
    films.map(film=> {
        myString += 
        `<img class="posters" src=${film.Poster}>`
    })
    resultsPosterPosition.innerHTML = myString;    
}


