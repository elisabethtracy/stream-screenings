//David's API Key: acOQl1nbm9nht6C6qAYkvpbyu7UrI5LsCWLJAXz9

let url = "https://api.watchmode.com/v1/releases/?apiKey=acOQl1nbm9nht6C6qAYkvpbyu7UrI5LsCWLJAXz9&limit=10"

fetch(url)
    .then(function(response){
        // console.log(response);
        return response.json();
    })

    .then(function(data){
       

        const releases = data.releases;

        // // tests how returned data operates
        // console.log(data);
        // let test1 = data;
        // console.log(test1);
        // console.log(releases);
        // console.log(test1.releases[0]);
        // console.log(releases[0].title);
        // console.log(releases[0].poster_url);

        // shows all images and titles in "releases" object
        //  image
        for (i=0; i < releases.length; i++) {
        const imgElement1 = document.createElement('img');
        const imgUrl1 = releases[i].poster_url;
        // imgTest1.setAttribute('src', releases[i].poster_url);    // can use this one or the next line, either works
        imgElement1.src = imgUrl1;
        document.body.appendChild(imgElement1);

        // text
        const txElement1 = document.createElement('tx');
        const txContent1 = releases[i].title;
        txElement1.textContent = txContent1;
        document.body.appendChild(txElement1);

        // assigns other possibly useful parameters to variables
        const watchModeID = releases[i].id;
        const showOrMovie = releases[i].tmdb_type;
        const serviceName = releases[i].source_name;

        }
        
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