# Giphy-API
https://nickgluch.github.io/Giphy-API/

One of the problems I had when developing this was that on the button press, the buttons wouldn't populate gifs. The issue was that I had to have the function execute on an item that doesn't exist but will in the future, I did this by creating a callback function. 
My approach to developing this project was to start by laying out where the animal will be typed, and catch that input and make a function to create a new button on each input submission. Then on each click of that new button, it will get an AJAX call to get the URL with the search query of that animal and populate the screen with gifs of that animal.

