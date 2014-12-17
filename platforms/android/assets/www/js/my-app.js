var myApp = new Framework7({
});

var $$ = Dom7;

// Select Template
var template = document.getElementById('random-template').innerHTML;

// Compile and render
var compiledTemplate = Template7.compile(template);


// Defined as function "getrandom"
function getrandom() {
    // Get JSON Data from UrbanDictionary API
    //$$.getJSON ('http://api.urbandictionary.com/v0/random', function (json) {
    $$.getJSON ('https://itsmuzikal.com/api/index?api_key=ga52e0kgslpYksmkaiij796ankws', function (json) {

        // Insert rendered template
        document.getElementById('content-wrap').innerHTML = compiledTemplate(json);
    });
}

// Execute to list UrbanDictionary Definitions
getrandom();

/* function for player*/

//Template for player
var playertemplate = documnet.getElementById('player-template').innerHTML;

var compiledPlayer = Template7.compile(playertemplate);
//Compiled template for player

function playerfunction(id) {
    // Get JSON Data from UrbanDictionary API
    //$$.getJSON ('http://api.urbandictionary.com/v0/random', function (json) {
    $$.getJSON ('https://itsmuzikal.com/api/player?id='+ id +'&api_key=ga52e0kgslpYksmkaiij796ankws', function (json) {

        // Insert rendered template
        document.getElementById('player-wrap').innerHTML = compiledPlayer(json);
    });
}

//Execute playerfunction
playerfunction();





// Select Pull to refresh content
var ptrContent = $$('.pull-to-refresh-content');

// On refresh
ptrContent.on('refresh', function (e) {
    // Emulate 1s loading
    setTimeout(function () {

        // Execute getrandom to get new Definitions
        getrandom();

        myApp.pullToRefreshDone();
    }, 1000);
});


var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

var modalInfo = localStorage.modalInfo;
if (!modalInfo) {
    myApp.modal({
        title: 'Welcome,',
        text: 'Please make sure you are connected with internet to use this application.',
        buttons: [
            {text: 'Yes I am'}]
    });localStorage.modalInfo = 'true'
};
