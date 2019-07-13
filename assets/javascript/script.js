//make it where when the user inputs an animal into the text box it creates a new button and  replaces the 
//'data-person' in the html to the animal
//have the images stack on each other using the cat button activity as a reference
//pause and play the gifs using the gif pausing activity as a reference


//apikey = '6uOsr6lTuwmI5xXUcoRSKaBEHeClo6Ts';




// SETUP VARIABLES 
//=============================================

var queryAnimal = "";

var animalButtons = [];

var queryURLBase = 'https://api.giphy.com/v1/gifs/search?api_key=6uOsr6lTuwmI5xXUcoRSKaBEHeClo6Ts&q='
var queryURLEnd = '&limit=10&offset=0&rating=PG&lang=en'


// FUNCTIONS
//=============================================


/* AJAX Call for the query
function runQuery(newURL) {
    $.ajax({ url: newURL, method: "GET" })
        .done(function (giphyData) {
            console.log(giphyData);
        })
}
*/




// MAIN PROCESSES (METHODS, (FUNCTION CALLS))
//=============================================


//function for rendering new buttons on each animal search query

function renderButtons() {

    $("#buttons-view").empty();

    // Looping through the array of animal buttons
    for (var i = 0; i < animalButtons.length; i++) {







        // Then dynamicaly generating buttons for each animal in the array.
        var newAnimalButton = $("<button>");
        // Adding a class
        newAnimalButton.addClass("animalClass");
        // Adding a data-attribute with a value of the animal at index i
        newAnimalButton.attr("data-name", animalButtons[i]);
        // Providing the button's text with a value of the animal at index i
        newAnimalButton.text(animalButtons[i]);
        // Adding the button to the HTML
        $("#buttons-view").append(newAnimalButton);
    }






}

$('#add-animal').on('click', function () {
    event.preventDefault();

    queryAnimal = $('#animalForm').val().trim();



    /*
    console.log(queryAnimal);

    //Add in the Search Term
    var newURL = queryURLBase + queryAnimal + queryURLEnd;
    //console.log(newURL);

    //Send AJAX call for new URL
    runQuery(newURL);
*/



    animalButtons.push(queryAnimal);
    renderButtons();




});

renderButtons();


//$('.newAnimalButton').on('click', function () {
//$("animalButtons").on("click", function () {
//Add in the Search Term


var newURL = queryURLBase + queryAnimal + queryURLEnd;


//console.log(newURL);

//Send AJAX call for new URL
// runQuery(newURL);



$('#buttons-view').on('click', '.animalClass', function () {
    // Giphy code request here...
    // var animalImage = $(this).attr("data-name");
    var newURL = queryURLBase + queryAnimal + queryURLEnd;

    $.ajax({
        url: newURL,
        method: "GET"
    })

        .then(function (response) {
            console.log(response);
            console.log(newURL);

            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var animalGifDiv = $("<div>");

                var p = $('<p>');

                p.text('Rating: ' + results[i].rating);

                var animalImage = $('<img>');

                // var animalImage = $(this).attr("data-name");

                animalImage.attr("src", results[i].images.fixed_height.url, 'data-name');

                animalGifDiv.prepend(p);

                animalGifDiv.prepend(animalImage);

                $("#gifs-appear-here").prepend(animalGifDiv);
            }

        });
});






