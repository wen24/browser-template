'use strict'
$(document).ready(function () {
  var player = 1
  var player2 = 2
  var turn = 0

    $('.square').on('click', function (event) {
      var squareSelected = $(this)

function checkIfEmpty() {
  if (squareSelected.hasClass('x') || squareSelected.hasClass('o')) {
     alert('This square has already been selected! Please select another.')
}}
function clickX() {
  $('.square').on('click', function () {
    $('.square').show('x'); turn++
})}
function clickO() {
  $('.square').on('click', function () {
    $('.square').show('o'); turn++
})}
function checkForDraw() {
  if (squareSelected.hasClass.length == 9){
    alert('Oh no! A draw.')
}}
function reset() {
$('.square').click(function () {
  $('.square').removeClass('x'&&'o')
})}
function playerTurns() {

}

})
}

module.exports = true
checkForDraw
