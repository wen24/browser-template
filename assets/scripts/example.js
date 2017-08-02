'use strict'

const x = 'X'
const o = 'O'
const human = 'player'
const comp = 'computer'
const human2 = 'player2'
const board = 'ticTacToeBoard'
const announceWinner = 'winner'
const boardCheck = 'checkBoard'
const boardReset = 'resetBoard'
const clickboard = 'clicked'
let theBoard = []

function sexXO() {
  const human = x; const comp = o;
}

$('td').click(function(){
    $('td').fadeIn();

});
function newWaitImg(id) {
    var img = {
       "id" : id,
       "state" : "on",
       "hide" : function () {
           $(this.id).hide();
           this.state = "off";
       },
       "show" : function () {
           $(this.id).show();
           this.state = "on";
       },
       "toggle" : function () {
           if (this.state == "on") {
               this.hide();
           } else {
               this.show();
           }
       }
    };
};

function image() {
    var img = document.createElement("IMG");
    img.src = "xpiece.jpg";
    $('row').html(img);
}

function nextPlayerTurn(){
  if(turn){
    turn = false;
  } else {
    turn = true;
  }
  return turn;
}

$('td').on('click', function () {
  $(this).on()
})

let clicked_sq = function(){
  console.log('clicked');
  $('sqOne').on("click", clicked_sq);

  $('sqTwo').on("click", clicked_sq);

  $('sqThree').on("click", clicked_sq);

  $('sqFour').on("click", clicked_sq);

  $('sqFive').on("click", clicked_sq);

  $('sqSix').on("click", clicked_sq);

  $('sqSeven').on("click", clicked_sq);

  $('sqEight').on("click", clicked_sq);

  $('sqNine').on("click", clicked_sq);
};

function boardReset( {
  if theBoard[] =
})

function draw() {
				alert('It is a draw!');
				reset();
function win() {
      	alert('You win!');
      	reset();
function lose() {
    		alert("You lost!");
    		reset();

function announceWinner(draw,win,lose) {
  if theBoard[] = sqOne && sqTwo && sqThree === 'X';
  console.log (function win());
}
  else if theBoard[] = sqFour && sFive && sqSix === 'X';
  console.log (function win());
}
  else if theBoard[] = sqSeven && sqEight && sqNine === 'X';
console.log (function win());
}
  else if theBoard[] = sqOne && sqFour && sqSeven === 'X';
  console.log (function win());
}
  else if theBoard[] = sqTwo && sqFive && sqEight === 'X';
  console.log (function win());
}
  else if theBoard[] = sqThree && sqSix && sqNine === 'X';
  console.log (function win());
}
  else if theBoard[] = sqOne && sqFive && sqNine === 'X';
  console.log (function win());
}
  else if theBoard[] = sqThree && sqFive && sqSeven === 'X';
  console.log (function win());
        }
      }
    }
  }
}

function displyScore() {
  while
}
module.exports = true
