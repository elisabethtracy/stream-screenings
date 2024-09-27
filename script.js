let container = document.querySelector('.container');

let row = document.querySelector('.row');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// David's API Key: acOQl1nbm9nht6C6qAYkvpbyu7UrI5LsCWLJAXz9
// uses David's API key (out of free monthly requests until Oct 23, 2024)
// let releasesUrl = "https://api.watchmode.com/v1/releases/?apiKey=acOQl1nbm9nht6C6qAYkvpbyu7UrI5LsCWLJAXz9&limit=15";

// Jake's API Key: JKuoJOHyXXyCCTjmprvFSwO7Yx33M3i7p3G1vZh3
// uses Jakes's API key (currently in use)
let releasesUrl = "https://api.watchmode.com/v1/releases/?apiKey=JKuoJOHyXXyCCTjmprvFSwO7Yx33M3i7p3G1vZh3&limit=15";

// Elisabeth's API Key: ____
// uses Elisabeths's API key (needs to be added in blanks above and below)
// let releasesUrl = "https://api.watchmode.com/v1/releases/?apiKey=_____&limit=15";

fetch(releasesUrl)
    .then(function(releaseResponse){
        return releaseResponse.json();
    })

    .then(function(releaseData){
        const releases = releaseData.releases;
        // console.log(releases);

        // handles the display of each item in the "releases" object        
        // for (i=0; i < releases.length; i++) {
        for (i=releases.length -1; i > -1; i--) {

            const whereFoundSource = releases[i].source_name;

            if((whereFoundSource === 'ABC') ||
                (whereFoundSource === 'CBS') ||
                (whereFoundSource === 'FOX') ||
                (whereFoundSource === 'FX') ||
                (whereFoundSource === 'NBC') ||
                (whereFoundSource === 'The CW') ) {
                    continue;
                }
            else {
                
                //creates divs to display cards
                const colLgDiv = document.createElement('div');
                const cardDiv = document.createElement('div');
                colLgDiv.classList.add('col-lg');
                cardDiv.classList.add('card');
                row.appendChild(colLgDiv);
                colLgDiv.appendChild(cardDiv);

                //  image
                const posterImage = document.createElement('img');
                const posterUrl = releases[i].poster_url;
                // imgTest1.setAttribute('src', releases[i].poster_url);    // can use this one or the next line, either works
                if (posterUrl === '') {
                    posterImage.src = './assets/no_image_available.jpg';
                }   
                else {
                    posterImage.src = posterUrl;
                }
                // imgElement1.classList.add('card-img-top');
                cardDiv.appendChild(posterImage);

                // title text
                const titleText = document.createElement('tx');
                const titleSource = releases[i].title;
                titleText.textContent = titleSource;
                titleText.classList.add('card-title');
                cardDiv.appendChild(titleText);

                // create & append unordered list
                const detailsList = document.createElement('ul');
                cardDiv.appendChild(detailsList);

                // streaming service source
                const whereFound = document.createElement('li');
                // const whereFoundSource = releases[i].source_name; // defined above
                whereFound.textContent = `Where to watch: ${whereFoundSource}`;
                whereFound.classList.add('card-text');
                detailsList.appendChild(whereFound);

                // release date
                const dateReleased = document.createElement('li');
                const dateReleasedSource = releases[i].source_release_date;
                dateReleased.textContent = `Release Date: ${dateReleasedSource}`;
                dateReleased.classList.add('card-text');
                detailsList.appendChild(dateReleased);

                // movie or tv
                const tvOrMovie = document.createElement('li');
                // const tvOrMovieSource = releases[i].type; // use if you want the tv_[] option and such
                const tvOrMovieSource = releases[i].tmdb_type; // use if you only want tv or movie
                let tvOrMovieSourceEdited = '';
                if(tvOrMovieSource === 'movie'){
                    tvOrMovieSourceEdited = capitalizeFirstLetter(tvOrMovieSource);
                }
                else if (tvOrMovieSource === 'tv'){
                    tvOrMovieSourceEdited = tvOrMovieSource.toUpperCase();
                }
                tvOrMovie.textContent = `Type: ${tvOrMovieSourceEdited}`;
                tvOrMovie.classList.add('card-text');
                detailsList.appendChild(tvOrMovie);
            }
        }
    });