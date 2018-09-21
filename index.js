//ApiKeys
const apiKey = "8d5ab09"

//selectors
const form = document.querySelector("form");
const resultsPosterPosition = document.querySelector(".results");
const headingTitle = document.querySelector("#welcome-heading")
const headingAfterSearch = document.querySelector("#heading__after")
const textInputField = document.querySelector("#search_input")


//Event Listeners
form.addEventListener("submit", function (e) {
    e.preventDefault()
    // console.log({event})
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

//menu toggle
// var open_menu = document.querySelector("#main-menu");
// var burger_menu = document.querySelector("#burger_menu");
// burger_menu.addEventListener("click", function () {
//     burger_menu.classList.toggle("active-burger");
//     open_menu.classList.toggle("show-menu-mobile");
// });

function searchTitle(title) {
    fetch(`http://www.omdbapi.com/?s=${title}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(body => {
            console.log(body.Search)
            displayResults(body.Search)
        })
}

//search title passes into this function
function displayResults(films) {
    let myString = ""
    films.forEach(film => {
        myString +=
            `<h1>${film.Title} ${(film.Year)}</h1>
            <img class="posters" src=${film.Poster}>`
    })
    resultsPosterPosition.innerHTML = myString;

    //has to be done while image loads otherwise it wont see images
    const filmPosters = document.querySelectorAll(".posters")
    filmPosters.forEach(filmPoster => {
        filmPoster.addEventListener("click", function (event) {
                console.log({event})
            })
        })
    }





function getMovieInfo(body){
    const imdbId = body.Search.imbdID
    const url = `http://www.omdbapi.com/?i=tt${imbdId}&apikey=${apiKey}`
    fetch(url)
    .then(response => response.json())
    .then(body =>{

    })
}