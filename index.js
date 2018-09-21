//ApiKeys
const apiKey = "8d5ab09"

//selectors
const form = document.querySelector("form");
const resultsPosterPosition = document.querySelector(".results");
const resultsInfoPosition = document.querySelector(".results-info")
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
            `<div data-imdbid=${film.imdbID}><h1> ${film.Title}(${film.Year})</h1>
            <img class="posters" src=${film.Poster}></div>`
    })
    resultsPosterPosition.innerHTML = myString;
    }

    resultsPosterPosition.addEventListener("click", function(event){
        const filmID = event.path[1].attributes["data-imdbid"].nodeValue
        getMovieInfo(filmID);
    })
    

function getMovieInfo(filmID){
    const url = `http://www.omdbapi.com/?i=${filmID}&apikey=${apiKey}`
    fetch(url)
    .then(response => response.json())
    .then(body =>{
        console.log(body)
        let movieInfo = `<div>
                            <h3>Movie Information:</h3>
                            <p>Plot: ${body.Plot}</p>
                        </div>`
        resultsInfoPosition.innerHTML = movieInfo;
        
    })
}





// document.querySelector("[data-imdbid=tt7428594]")