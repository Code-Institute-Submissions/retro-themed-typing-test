const RANDOM_SENTENCE_API_URL = 'https://api.quotable.io/random'; //API I will call to use the strings returned
var words;
var typingInput = $("#typingInput"); // Input element
var preInputVal = ""; // Is set to the value before next word
var inputVal = ""; // Is set to user input value

var currentSpanNo = 0;
var correctCounter = 0;

var loading = 0;
var scalePreCountdown = 1;

$(document).ready(function() {
  restart();
  $("#start-game").click(function() {
    $("#welcome-section").css("display", "none"); //Hides the welcome-section when the play button is clicked.
    $("#pre-countdown").removeClass("d-none"); //Removes the display none class so we show the pre countdown timer when play button is clicked.
    preCountdown();
  });
  $("#restartGame").on("click", function() {
    restart();
  });

});

//Sets startCountdown text to 1 minus whatever number is already inputted into that field by parsing the text to an integer.
function preCountdown() {
  preCountdownSound(parseInt($("#startCountdown").text()));
  var countToStart = setInterval(function() {
    $("#startCountdown").text(function(i, text) {
      if (parseInt(text) > 0) {
        preCountdownSound(parseInt(text) - 1);
        return parseInt(text) - 1;
      } else {
        clearTimeout(countToStart);
        $(this).text("GO!");
        preCountdownSound($(this).text());
        setTimeout(function() {
          $("#pre-countdown").parent().addClass("d-none");
        }, 1000)
        setTimeout(function() {
        $("#typing-game").removeClass("d-none");
      }, 1000)
        return;
      }
    });
    keyListener();
  }, 1200);
}

//Play's audio sounds on 3, 2, 1, GO!
function preCountdownSound(preCountdownSec) {
  var audio1 = $("<audio id='audio1' src='assets/sounds/1-precountdown.mp3'></audio>");
  var audio2 = $("<audio id='audio2' src='assets/sounds/2-precountdown.mp3'></audio>");
  var audio3 = $("<audio id='audio3' src='assets/sounds/3-precountdown.mp3'></audio>");
  var audioGo = $("<audio id='audioGo' src='assets/sounds/go-precountdown.mp3'></audio>");

  if (preCountdownSec == 3) {
    animatePreCountdown();
    $("body").append(audio3);
    document.getElementById("audio3").play();
  }

  if (preCountdownSec == 2) {
    animatePreCountdown();
    $("body").append(audio2);
    document.getElementById("audio2").play();
  }

  if (preCountdownSec == 1) {
    animatePreCountdown();
    $("body").append(audio1);
    document.getElementById("audio1").play();
  }

  if (preCountdownSec == "GO!") {
    animatePreCountdown();
    $("body").append(audioGo);
    document.getElementById("audioGo").play();
  }
}

function restart() {
  words = "";

  function getRandomSentence() {
    return fetch(RANDOM_SENTENCE_API_URL)
      .then(response => response.json())
      .then(data => data.content)
  }

  async function renderSentence() {
    var noOfSetences = 0;
    var sentence = "";
    var sentences = "";
    do {
    sentence += await getRandomSentence() + " ";
    noOfSetences = sentence.split(' ').length;
  } while(noOfSetences < 250)
    words = sentence.split(' ');
    for (var w = 0; w < words.length; w++) {
      sentences += '<span word-number="' + w + '">' + words[w] + '</span> ';
    }
    $("#row1").html(sentences);
    $("#row1 span:first").addClass("highlight");
  }
  renderSentence()
}

function keyListener() {
  //On key release in typing input field
  typingInput.keyup(function(event) {
    gameCountdown();
    compareKeyTyped();
  })
}

function gameCountdown() {
  var gameTimer = 60;
  window.setInterval(function() {
    gameTimer--;
    var minTxt;
    var secTxt;

    minTxt = Math.floor(gameTimer / 60); //Returns 0 if gameTimer is < 60
    secTxt = gameTimer % 60; //Returns seconds

    if (secTxt < 10) {
      secTxt = "0" + secTxt;
    }

    $("#gameCountdown").text(minTxt + ":" + secTxt);

    if (gameTimer > 9) {
      $("#gameCountdown").text("0:" + gameTimer);
    } else if (gameTimer > 0) {
      $("#gameCountdown").text("0:0" + gameTimer);
    } else {
      $("#gameCountdown").text("0:00");
    }
  }, 1000)
}

function animatePreCountdown(){
  scalePreCountdown++;
  $("#startCountdown").css("transform", "scale("+scalePreCountdown+")");
}

function compareKeyTyped() {
  var bkspaceKey = 8;
  var delKey = 46;
  var spaceKey = 32;

  if (preInputVal === "" && inputVal === "") {
    inputVal = typingInput.val();
  } else {
    preInputVal = inputVal;
    inputVal = typingInput.val();
  }

  currentSpan = $('#row1 span[word-number="' + currentSpanNo + '"]');

  // if the delete key is pressed
  var keyid = event.which;
    switch (keyid) {
      case bkspaceKey:
        correctCounter += preInputVal.length - inputVal.length;
        break;
      case delKey:
        correctCounter += preInputVal.length - inputVal.length;;
        break;
      default:
        break;
    }

  if(event.which == spaceKey && typingInput.val() == " "){
     typingInput.val("");
  } else if (event.which == spaceKey && loading == 0) {
    var typedValues = typingInput.val().split(" "); // User entered values array
    if (typedValues[0] == words[currentSpanNo]) {
        currentSpan.removeClass("highlight").addClass("correct"); // If the first word the user types matches the first span add class
      } else {
        currentSpan.removeClass("highlight").addClass("incorrect");
      }
  }
}
