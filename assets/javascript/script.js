//make it where when the user inputs an animal into the text box it creates a new button and  replaces the 
//'data-person' in the html to the animal
//have the images stack on each other using the cat button activity as a reference
//pause and play the gifs using the gif pausing activity as a reference


//apikey = '6uOsr6lTuwmI5xXUcoRSKaBEHeClo6Ts';




// SETUP VARIABLES 
//=============================================

var queryAnimal = "";

var queryURLBase = 'https://api.giphy.com/v1/gifs/search?api_key=6uOsr6lTuwmI5xXUcoRSKaBEHeClo6Ts&q='
var queryURLEnd = '&limit=10&offset=0&rating=PG&lang=en'


// FUNCTIONS
//=============================================
//AJAX Call for the query
function runQuery(queryURL) {
    $.ajax({ url: queryURL, method: "GET" })
        .done(function (giphyData) {
            console.log(giphyData);
        })
}

// MAIN PROCESSES (METHODS, (FUNCTION CALLS))
//=============================================
//On Submit takes the user input value, trims it, and assigns it to a variable we can use
$('#submit-button').on('click', function () {

    queryAnimal = $('#animalForm').val().trim();
    console.log(queryAnimal);

    //Add in the Search Term
    var newURL = queryURLBase + queryAnimal + queryURLEnd;
    console.log(newURL);

    //Send AJAX call for new URL
    runQuery(newURL);

    return false;

    var newButton = $('<button/>'), {
        text: queryAnimal,
        click: function () {
            //make new gif 
        }
});


})

//after each submit we want to add a new button and then have that  button be able to make a new gif
//until it reaches a limit(might have to use the limit in for loop)

$("button").on("click", function () {
    var animal = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    function () {
        for (var i = 0; i < results.length; i++) {

            // Step 3: uncomment the for loop above and the closing curly bracket below.
            // Make a div with jQuery and store it in a variable named animalDiv.
            animalDiv = $('<div>');
            // Make a paragraph tag with jQuery and store it in a variable named p.
            var p = $('<p>');
            // Set the inner text of the paragraph to the rating of the image in results[i].
            p.text(results[i].rating);
            // Make an image tag with jQuery and store it in a variable named animalImage.
            var animalImage = $('<img>');
            // Set the image's src to results[i]'s fixed_height.url.
            animalImage.attr('src', results[i].images.fixed_height.url)
            // Append the p variable to the animalDiv variable.
            animalDiv.append(p);
            // Append the animalImage variable to the animalDiv variable.
            animalDiv.append(animalImage);
            // Prepend the animalDiv variable to the element with an id of gifs-appear-here.
            $('#gifs-appear-here').prepend(animalDiv);

        }
    }




//take the input (queryAnimal) and have it create a new button that runs a function that 
//outputs 10 gifs



