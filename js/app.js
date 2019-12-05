// query the desired element
let searchInput = document.getElementById('search-input');

// listen to when a key is pressed down
searchInput.onkeydown = function (event) {
    // is key an Enter key
    if (event.key === 'Enter') {
        // yes, do the search
        search(event.target.value)
    }
};

let apiEndpoint = 'https://api.giphy.com/v1/gifs/search?api_key=TqhxF5Dh1N5rAl6CihLvVIXYEmDdjH1I&limit=10&q=';

function search(query) {
    // perform fetch to api
    fetch(apiEndpoint + query).then(result => {
        result.json().then(json => {
            // create gif elements by json data
            createGifs(json)
        })
    })
}

function createGifs(json) {
    // clear the old results
    document.querySelector('.results-container').innerHTML = '';

    // iterate over all the results
    for (let gifData of json.data) {
        // create an <img>
        let gif = document.createElement('img');
        // set src to gif url like `<img src="blah blah">`
        gif.src = gifData.images.downsized.url;

        // append <div class="gif"><img ></div> into '.results-container'
        document.querySelector('.results-container').appendChild(gif);
    }
}
