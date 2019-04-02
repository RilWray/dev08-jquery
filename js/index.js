$(document).ready(function () {
$('#content').hide().fadeIn(3000); 
function resetSign(event){
    welcome = '';
    sign = '';
    caclSign();
    setSign();
    event.preventDefault();
}

// Create variables for the welcome message
var greeting = '[not initialized]';
var name = '[not initialized]';
var message = '[not initialized]';
// Concatenate the three variables above to create the welcome message
var welcome;
var sign = '[not initialized]';
var tiles, subTotal, shipping, grandTotal;

function caclSign() {
    tiles = sign.length;
    subTotal = tiles * 5;
    shipping = 7;
    grandTotal = subTotal + shipping;
}

function initiateVars() {
    greeting = 'Howdy';
    name = 'Riley';
    message = 'Please check your order:';
    sign = 'JavaScript';
    welcome = greeting + '! ' + name + ', ' + message;
    caclSign();
}



function setTextContentById(getId, setMsg) {
    // Get the element that has an id of greeting
    var el = document.getElementById(getId);
    // Replace the content of that element with the personalized welcome message
    el.textContent = setMsg;
}
function setSign() {

    setTextContentById('greeting', welcome);
    setTextContentById('userSign', sign);
    setTextContentById('tiles', tiles);
    setTextContentById('subTotal', '$' + subTotal);
    setTextContentById('shipping', '$' + shipping);
    setTextContentById('grandTotal', '$' + grandTotal);
}

initiateVars();
setSign();
//resetSign();

var el = document.getElementById('resetButton');

el.addEventListener('click', resetSign, false);
})

