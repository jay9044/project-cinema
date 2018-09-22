alert( window.innerWidth );

//ApiKeys
const apiKey = "8d5ab09"

//selectors
const form = document.querySelector("form");
const resultsPosterPosition = document.querySelector(".results");
const resultsInfoPosition = document.querySelector(".results-info")
const headingTitle = document.querySelector("#welcome-heading")
const headingAfterSearch = document.querySelector("#heading__after")
const textInputField = document.querySelector("#search_input")
const scrollHeading = document.querySelector(".scroll-header");
const gridContainer = document.querySelector(".grid-container")


//Event Listeners
form.addEventListener("submit", function (e) {
    e.preventDefault()
    // console.log({event})
    titleResults = event.target[0].value
    searchTitle(titleResults);
    textInputField.value = "Search For Another Movie..";
    headingTitle.textContent = "";
    headingAfterSearch.style.textTransform = "capitalize";
    headingAfterSearch.textContent = `All '${titleResults}' Films`
    scrollHeading.style.textTransform ="capitalize";
    scrollHeading.textContent = `Scroll Through Our Selection of ${titleResults} Films`
    gridContainer.style.marginTop = 0;
})

//function for creating a element
function createNode(element) {
    return document.createElement(element)
}

// append child function
function append(parent, element) {
    return parent.appendChild(element)
}


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
    films.map(film => {
        myString +=
            `<div data-imdbid=${film.imdbID}><h1 class="movie-title"> ${film.Title}(${film.Year})</h1>
            <img class="posters" src=${film.Poster}></div>`
    })
    resultsPosterPosition.innerHTML = myString;
    }
    //this find the data set id given to each film
    resultsPosterPosition.addEventListener("mouseover", function(event){
        const filmID = event.path[1].attributes["data-imdbid"].nodeValue
        //if mobile size remove mouseover
        if(window.innerWidth < 500){
            remove.resultsPosterPosition.addEventListener("mouseover", function(event){
                getMovieInfo(filmID)
            })
        }
        getMovieInfo(filmID);
    })
    //clear movie info when mouse leaves poster
    resultsPosterPosition.addEventListener("mouseout",function(event){
        resultsInfoPosition.textContent ="";
    })

//this function is passed into the event listener
function getMovieInfo(filmID){
    const url = `http://www.omdbapi.com/?i=${filmID}&apikey=${apiKey}`
    fetch(url)
    .then(response => response.json())
    .then(body =>{
        console.log(body)
        let movieInfo = `<div>
                            <h3>Movie Information:</h3>
                            <p>Plot: ${body.Plot}</p>
                            <p>Rating: ${body.imdbRating}</p>
                            <p>Directed By: ${body.Director}</p>
                            <p>Genre: ${body.Genre}</p>
                            <p>Runtime: ${body.Runtime}</p>
                        </div>`
        resultsInfoPosition.innerHTML = movieInfo;
    })
}











//menu toggle
var open_menu = document.querySelector("#main-menu");
var burger_menu = document.querySelector("#burger_menu");
burger_menu.addEventListener("click", function () {
    burger_menu.classList.toggle("active-burger");
    open_menu.classList.toggle("show-menu-mobile");
});


