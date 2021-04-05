const RANDOM_SENTENCE_API_URL = 'https://api.quotable.io/random'; //API I will call to use the strings returned
var words;

$(document).ready(function() {
  restart();
  $("#start-game").click(function() {
    $("#welcome-section").css("display", "none"); //Hides the welcome-section when the play button is clicked.
    $("#pre-countdown").removeClass("d-none"); //Removes the display none class so we show the pre countdown timer when play button is clicked.
    preCountdown();
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
        setTimeout(function(){
          $("#pre-countdown").addClass("d-none");
        }, 1000)
        $("#typing-game").removeClass("d-none");
        return;
      }
    });

  }, 1200);
}

//Play's audio sounds on 3, 2, 1, GO!
function preCountdownSound(preCountdownSec){
  var audio1 = $("<audio id='audio1' src='assets/sounds/1-precountdown.mp3'></audio>");
  var audio2 = $("<audio id='audio2' src='assets/sounds/2-precountdown.mp3'></audio>");
  var audio3 = $("<audio id='audio3' src='assets/sounds/3-precountdown.mp3'></audio>");
  var audioGo = $("<audio id='audioGo' src='assets/sounds/go-precountdown.mp3'></audio>");

  if (preCountdownSec == 3) {
    $("body").append(audio3);
    document.getElementById("audio3").play();
  }

  if (preCountdownSec == 2) {
    $("body").append(audio2);
    document.getElementById("audio2").play();
  }

  if (preCountdownSec == 1) {
    $("body").append(audio1);
    document.getElementById("audio1").play();
  }

  if (preCountdownSec == "GO!") {
    $("body").append(audioGo);
    document.getElementById("audioGo").play();
  }
}

function restart(){
  words = "";
  function getRandomSentence(){
    return fetch(RANDOM_SENTENCE_API_URL)
      .then(response => response.json())
      .then (data => data.content)
  }

  async function renderSentence(){
    var sentence = "";
    var sentences = "";
    sentence += await getRandomSentence() + " ";
    words = sentence.split(' ');
    for(var w = 0; w < words.length; w++){
      sentences += '<span word-number="'+w+'">'+words[w]+'</span> ';
    }
    $("#row1").html(sentences);
  }
  renderSentence()
}
