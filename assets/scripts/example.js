'use strict'
$(document).ready(function () {
  let player = 1
  let turns = 0

  $('.square').on('click', function (event) {
    const squareSelected = $(this)
    console.log(turns)
    if (squareSelected.hasClass('x') || squareSelected.hasClass('o')) {
      alert('This square has already been selected! Please select another.')
    } else {
      turns++
      if (player === 1) {
        squareSelected.addClass('x')
        if (checkIfPlayerWon('x') && (squareSelected.hasClass('x'))) {
          alert('Congratulations Player ' + player + ' has won!')
          reset()
        } else {
          if (turns >= 9) {
            draw()
          }
          player = 2
        }
      } else {
        squareSelected.addClass('o')
        if (checkIfPlayerWon('o') && (squareSelected.hasClass('o'))) {
          alert('Congratulations Player ' + player + ' has won!')
          reset()
        } else {
          if (turns >= 9) {
            draw()
          }
          player = 1
        }
      }
    }
  })

  function checkIfPlayerWon (symbol) {
    if ($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)) {
      return true
    } else if ($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)) {
      return true
    } else if ($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
      return true
    } else if ($('.sq1').hasClass(symbol) && $('.sq3').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
      return true
    } else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)) {
      return true
    } else if ($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
      return true
    } else if ($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
      return true
    } else if ($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
      return true
    } else {
      return false
    }
  }

  function draw () {
    if ($('.sq1').hasClass('x') || $('.sq1').hasClass('o') && $('.sq2').hasClass('x') || $('.sq2').hasClass('o') && $('.sq3').hasClass('x') || $('.sq3').hasClass('o') &&
      $('.sq4').hasClass('x') || $('.sq4').hasClass('o') && $('.sq5').hasClass('x') || $('.sq5').hasClass('o') && $('.sq6').hasClass('x') || $('.sq6').hasClass('o') &&
      $('.sq7').hasClass('x') || $('.sq7').hasClass('o') && $('.sq8').hasClass('x') || $('.sq8').hasClass('o') && $('.sq9').hasClass('x') || $('.sq9').hasClass('o') ===
      $(squareSelected.hasClass('x')) || $(squareSelected.hasClass('o'))
      return (document.getElementById('.displayWLT').innerHTML = 'Draw!'))
  }

  function reset () {
    $('#reset').onclick
    $('.square').removeClass(('.sq1') && ('.sq2') && ('.sq3') && ('.sq4') && ('.sq5') && ('.sq6') && ('.sq7') && ('.sq8') && ('.sq9')) // remove (.sq1, .sq2, etc)
  }

)} // <--closing for global, moved around but still can't contain all functions in global scope.
    // also not 100% is draw/reset working as intended

module.exports = true
checkIfPlayerWon,
reset,
draw
