const RANDOM_SENTENCE_API_URL = 'https://api.quotable.io/random'; //API I will call to use the strings returned
var words;
var typingInput = $("#typingInput"); // Input element
var preInputVal = ""; // Is set to the value before next word
var inputVal = ""; // Is set to user input value

var gameCountdownTimer = "";
var currentSpanNo = 0;
var correctCounter = 0;
var wrongCounter = 0;
var rowCounter = 0;
var error_keystrokes = 0;

var loading = 0;
var scalePreCountdown = 1;

$(document).ready(function() {
  restart();
  $("#start-game").click(function() {
    $("#welcome-section").css("display", "none"); //Hides the welcome-section when the play button is clicked.
    $("#pre-countdown").removeClass("d-none"); //Removes the display none class so we show the pre countdown timer when play button is clicked.
    preCountdown();
  });
  keyListener();
  $("#restartGame").on("click", function() {
    restart();
  });
  $("#facebookShare").click(function() {
    FB.ui({
      method: 'share',
      href: 'https://bradleyplaydon.github.io/retro-themed-typing-test/',
      quote: 'I just got ' + correctCounter + ' words correct on this retro typing game give it a go!'
    }, function(response) {});
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
          typingInput.focus();
        }, 1000)
        return;
      }
    });
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
    if(!(/iPhone|iPad|iPod|Android|webOS|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent))){
    $("body").append(audio3);
    document.getElementById("audio3").play();
    }
  }

  if (preCountdownSec == 2) {
    animatePreCountdown();
    if(!(/iPhone|iPad|iPod|Android|webOS|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent))){
    $("body").append(audio2);
    document.getElementById("audio2").play();
    }
  }

  if (preCountdownSec == 1) {
    animatePreCountdown();
    if(!(/iPhone|iPad|iPod|Android|webOS|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent))){
    $("body").append(audio1);
    document.getElementById("audio1").play();
    }
  }

  if (preCountdownSec == "GO!") {
    animatePreCountdown();
    if(!(/iPhone|iPad|iPod|Android|webOS|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent))){
    $("body").append(audioGo);
    document.getElementById("audioGo").play();
    }
  }
}

function restart() {
  words = "";
  currentSpanNo = 0;
  rowCounter = 0;
  scalePreCountdown = 1;
  $('#words').animate({scrollTop:0},200);

  $("#gameCountdown").text("1:00");
  gameCountdownStarted = 0;
  window.clearTimeout(gameCountdownTimer);
  gameCountdownTimer = "";

  correctCounter = 0;
  wrongCounter = 0;
  error_keystrokes = 0;

  function getRandomSentence() {
    return fetch(RANDOM_SENTENCE_API_URL)
      .then(response => response.json())
      .then(data => data.content)
  }

  async function renderSentence() {
    var noOfSetences = 0;
    var sentence = "";
    var sentences = "";
    $("#row1").hide("fast");
    $("#row1").before(`<div id='spinner' class='d-flex justify-content-center align-items-center'>
                      <div class='spinner-border' role="status"></div>
                      </div>`);
    do {
      sentence += await getRandomSentence() + " ";
      noOfSetences = sentence.split(' ').length;
    } while (noOfSetences < 250)
    $("#spinner").remove();
    $("#row1").show("fast");

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
    if(loading == 0){
      gameCountdown();
    }
    compareKeyTyped();
  })
}

function gameCountdown() {
  var gameTimer = 60;
  if(gameCountdownStarted == 0){
    gameCountdownStarted = 1;
    gameCountdownTimer = window.setInterval(function() {
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
      window.clearInterval(gameCountdownTimer);
      gameCountdownTimer = "";
      results(correctCounter, wrongCounter);
    }
  }, 1000)
}
}

function animatePreCountdown() {
  scalePreCountdown++;
  $("#startCountdown").css("transform", "scale(" + scalePreCountdown + ")");
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

  if (event.which == spaceKey && typingInput.val() == " ") {
    typingInput.val("");
  } else if (event.which == spaceKey && loading == 0) {
    currentSpan.removeClass("incorrect")
    var typedValues = typingInput.val().split(" "); // User entered values array
    if (typedValues[0] == words[currentSpanNo]) {
      currentSpan.removeClass("highlight").addClass("correct"); // If the first word the user types matches the first span add class
      correctCounter++;
      error_keystrokes += words[currentSpanNo].length;
      error_keystrokes++;
    } else {
      currentSpan.removeClass("highlight").addClass("incorrect");
      wrongCounter++;
      error_keystrokes -= Math.round(words[currentSpanNo].length / 2);
    }
    //Next span
    currentSpanNo++;
    currentSpan = $('#row1 span[word-number="' + currentSpanNo + '"]');
    line_height = parseInt(
      $('#row1 span[word-number="' + currentSpanNo + '"]').css("line-height")
      );
    currentSpan.addClass("highlight");

    var currentSpanPos = currentSpan.position();
    var prevSpanPos = 0;

    // Checks span top position to check if there is a text wrap to find the next row if there is we increment rowCounter
    if (currentSpanPos.top > prevSpanPos + 49) {
      rowCounter++;
      prevSpanPos = currentSpanPos.top;
      var lineHeightOfSpan = line_height * rowCounter;
      //var scrollDown = (rowCounter == 1) ? ($('#words').outerHeight() / 2) : (($('#words').outerHeight() / 2) * rowCounter) + 10;
      $('#words').animate({
        scrollTop: lineHeightOfSpan
      }, 500);
    }

    typingInput.val("");
  } else {
    //If the value before space is wrong in anyway then show the incorrect class as indicator
    if (typingInput.val().split(" ")[0] == words[currentSpanNo].substr(0, typingInput.val().length)) {
      currentSpan.removeClass("incorrect").addClass("highlight");
    } else {
      currentSpan.removeClass("highlight").addClass("incorrect");
    }
  }
}

function results(correct, wrong){
  error_wpm = Math.round(error_keystrokes / 5);
  $("#wpm").text(error_wpm + " WPM");
  $("#keystrokes").text("Keystrokes: " + error_keystrokes);
  $("#correct").text(correct);
  $("#wrong").text(wrong);
  $("#twitterShare").attr("href", 'https://twitter.com/intent/tweet?hashtags=retrotypingchallenge%20&ref_src=twsrc%5Etfw&text='+ 'I just got ' + correctCounter + ' words correct on this retro typing game give it a go!&tw_p=tweetbutton&url=https://bradleyplaydon.github.io/retro-themed-typing-test/');
  $("#results").removeClass("d-none");
}
