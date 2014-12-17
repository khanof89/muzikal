var myApp = new Framework7({
});

var $$ = Dom7;

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var s_Id = getParameterByName('id');

// Select Template
var template = document.getElementById('random-template').innerHTML;
// Compile and render
var compiledTemplate = Template7.compile(template);

// Defined as function "getrandom"
function getrandom() {
    // Get JSON Data from UrbanDictionary API
    //$$.getJSON ('http://api.urbandictionary.com/v0/random', function (json) {
    $$.getJSON ('https://itsmuzikal.com/api/player?id='+ s_Id +'&api_key=ga52e0kgslpYksmkaiij796ankws', function (json) {

        // Insert rendered template
        document.getElementById('content-wrap').innerHTML = compiledTemplate(json);
    });
}


// Execute to list UrbanDictionary Definitions
getrandom();

// Select Pull to refresh content
var ptrContent = $$('.pull-to-refresh-content');

// On refresh
ptrContent.on('refresh', function (e) {
    // Emulate 1s loading
    setTimeout(function () {

        // Execute getrandom to get new Definitions
        getrandom();

        player.pullToRefreshDone();
    }, 1000);
});
var modalInfo = localStorage.modalInfo;
if (!modalInfo) {
    player.modal({
        title: 'Welcome,',
        text: 'Please make sure you are connected with internet to use this application.',
        buttons: [
            {text: 'Yes I am'}]
    });localStorage.modalInfo = 'true'
};