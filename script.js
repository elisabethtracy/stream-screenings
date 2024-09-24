//David's API Key: acOQl1nbm9nht6C6qAYkvpbyu7UrI5LsCWLJAXz9

let url = "https://api.watchmode.com/v1/releases/?apiKey=acOQl1nbm9nht6C6qAYkvpbyu7UrI5LsCWLJAXz9&limit=10"

fetch(url)
    .then(function(response){
        //console.log(response);
        return response.json();
    })

    .then(function(data){
        console.log(data);
    });