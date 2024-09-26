//David's API Key: acOQl1nbm9nht6C6qAYkvpbyu7UrI5LsCWLJAXz9

const genresArrayLocal = [
{id: 1, name: 'Action', tmdb_id: 28},
{id: 39, name: 'Action & Adventure', tmdb_id: 10759},
{id: 30, name: 'Adult', tmdb_id: 0},
{id: 2, name: 'Adventure', tmdb_id: 12},
{id: 3, name: 'Animation', tmdb_id: 16},
{id: 33, name: 'Anime', tmdb_id: 0},
{id: 31, name: 'Biography', tmdb_id: 0},
{id: 4, name: 'Comedy', tmdb_id: 35},
{id: 5, name: 'Crime', tmdb_id: 80},
{id: 6, name: 'Documentary', tmdb_id: 99},
{id: 7, name: 'Drama', tmdb_id: 18},
{id: 8, name: 'Family', tmdb_id: 10751},
{id: 9, name: 'Fantasy', tmdb_id: 14},
{id: 34, name: 'Food', tmdb_id: 0},
{id: 28, name: 'Game Show', tmdb_id: 0},
{id: 10, name: 'History', tmdb_id: 36},
{id: 11, name: 'Horror', tmdb_id: 27},
{id: 21, name: 'Kids', tmdb_id: 10762},
{id: 12, name: 'Music', tmdb_id: 10402},
{id: 32, name: 'Musical', tmdb_id: 0},
{id: 13, name: 'Mystery', tmdb_id: 9648},
{id: 36, name: 'Nature', tmdb_id: 0},
{id: 22, name: 'News', tmdb_id: 10763},
{id: 23, name: 'Reality', tmdb_id: 10764},
{id: 14, name: 'Romance', tmdb_id: 10749},
{id: 40, name: 'Sci-Fi & Fantasy', tmdb_id: 10765},
{id: 15, name: 'Science Fiction', tmdb_id: 878},
{id: 25, name: 'Soap', tmdb_id: 10766},
{id: 29, name: 'Sports', tmdb_id: 0},
{id: 37, name: 'Supernatural', tmdb_id: 0},
{id: 26, name: 'Talk', tmdb_id: 10767},
{id: 17, name: 'Thriller', tmdb_id: 53},
{id: 35, name: 'Travel', tmdb_id: 0},
{id: 38, name: 'TV Movie', tmdb_id: 10770},
{id: 18, name: 'War', tmdb_id: 10752},
{id: 41, name: 'War & Politics', tmdb_id: 10768},
{id: 19, name: 'Western', tmdb_id: 37}
];

let container = document.querySelector('.container');

let row = document.querySelector('.row');

console.log(genresArrayLocal);


let releasesUrl = "https://api.watchmode.com/v1/releases/?apiKey=acOQl1nbm9nht6C6qAYkvpbyu7UrI5LsCWLJAXz9&limit=10";

fetch(releasesUrl)
    .then(function(releaseResponse){
        // console.log(releaseResponse);
        return releaseResponse.json();
    })

    .then(function(releaseData){
       

        const releases = releaseData.releases;

        // // tests how returned data operates
        // console.log(releaseData);
        // let test1 = releaseData;
        // console.log(test1);
        console.log(releases);
        // console.log(test1.releases[0]);
        // console.log(releases[0].title);
        // console.log(releases[0].poster_url);

        // shows all images and titles in "releases" object
        
        for (i=0; i < releases.length; i++) {

        // card div
        // const div = document.createElement('div');
        // div.classList.add('row');
        // div.classList.add('col-lg');
        // div.classList.add('card');
        // document.body.appendChild(div);
        // row.appendChild(div);
        // let card = document.querySelector('.card');

        const colLgDiv = document.createElement('div');
        const cardDiv = document.createElement('div');
        colLgDiv.classList.add('col-lg');
        cardDiv.classList.add('card');
        row.appendChild(colLgDiv);
        colLgDiv.appendChild(cardDiv);

        //  image
        const imgElement1 = document.createElement('img');
        const imgUrl1 = releases[i].poster_url;
        // imgTest1.setAttribute('src', releases[i].poster_url);    // can use this one or the next line, either works
        imgElement1.src = imgUrl1;
        // imgElement1.classList.add('card-img-top');
        cardDiv.appendChild(imgElement1);

        // text
        const txElement1 = document.createElement('tx');
        const txContent1 = releases[i].title;
        txElement1.textContent = txContent1;
        txElement1.classList.add('card-title');
        cardDiv.appendChild(txElement1);
        }
        // const fragment = document.createDocumentFragment();
        // const cardTest = fragment
        //     .appendChild(document.createElement("section"))
        //     .appendChild(document.createElement("ul"))
        //     .appendChild(document.createElement("li"));
        // cardTest.textContent = "movie title";   
        // container.appendChild(fragment);


        // assigns other possibly useful parameters to variables
        // const watchModeID = releases[i].id;
        // const showOrMovie = releases[i].tmdb_type;
        // const serviceName = releases[i].source_name;

        

        // genre functionality
        let userGenre;
        userGenre = 'Horror';
        let genreId = '';

        for (i=0; i < genresArrayLocal.length; i++){
            if(genresArrayLocal[i].name === userGenre){
                genreId = genresArrayLocal[i].id;
                break;
            }
        }
        console.log(genreId);

        let listTitlesUrl = "https://api.watchmode.com/v1/list-titles/?apiKey=acOQl1nbm9nht6C6qAYkvpbyu7UrI5LsCWLJAXz9&genres=11";

        fetch(listTitlesUrl)
            .then(function(titlesResponse){
                // console.log(titlesResponse);
                return titlesResponse.json();
            })

            .then(function(titlesData){
                    console.log(titlesData);
        

            });

        // // text insertion reference code
        // onst txt = tempStorageObject.text[j];
        // const tx = document.createElement("tx");
        // tx.classList.add('text-item', 'draggable');
        // tx.textContent = txt.value;
        // document.body.appendChild(tx);

        // // img/api insertion reference code
        // console.log(test1.releases.title[0]);
        // console.log(whatever.url);
        // console.log(whatever.explanation);
        // console.log(data.poster_url);
        // Create
        // const newImg = document.createElement('img');
        // Inject
        // newImg.setAttribute('src', whatever.url);
        // Append
        // document.body.appendChild(newImg);
    });

    let genresUrl = "https://api.watchmode.com/v1/genres/?apiKey=acOQl1nbm9nht6C6qAYkvpbyu7UrI5LsCWLJAXz9";

// fetch(genresUrl)
//     .then(function(response){
//         // console.log(response);
//         return response.json();
//     })

//     .then(function(data){
       
//         const genresObject = data;
//         const genresArray = [];
//         console.log(genresObject);
            
//         for (i=0; i < genresObject.length; i++){
//             // console.log(genresObject[i].name);
//             genresArray.push(genresObject[i].name);
//         }

//         console.log(genresArray);

//     });

// let userGenre;
// userGenre = 'Action';
// let genreId = '';

// for (i=0; i < genresObject.length; i++){
//     if(genresObject[i].name === userGenre){
//         genreId = genresObject[i].id;
//         break;
//     }
// }
// console.log(genreId);

// let listTitlesUrl = "https://api.watchmode.com/v1/list-titles/?apiKey=acOQl1nbm9nht6C6qAYkvpbyu7UrI5LsCWLJAXz9";

// fetch(listTitlesUrl)
//     .then(function(response){
//         // console.log(response);
//         return response.json();
//     })

//     .then(function(data){
       

        // const genresObject = data;
        // const genresArray = [];
        // console.log(genresObject);
            
        // for (i=0; i < genresObject.length; i++){
        //     // console.log(genresObject[i].name);
        //     genresArray.push(genresObject[i].name);
        // }

        // console.log(genresArray);


        // // tests how returned data operates
        // console.log(data);
        // let test1 = data;
        // console.log(test1);
        // console.log(releases);
        // console.log(test1.releases[0]);
        // console.log(releases[0].title);
        // console.log(releases[0].poster_url);

 
    // });


