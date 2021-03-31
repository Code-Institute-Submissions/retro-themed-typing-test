const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random'; //API I will call to use the strings returned

$(document).ready(function() {
  $("#start-game").click(function() {
    $("#welcome-section").css("display", "none");
    $("#pre-countdown").removeClass("d-none");
    playCounter();
  });
});

function playCounter() {
  var countToStart = setInterval(function() {
    $("#startCountdown").text(function(i, text) {
      if (parseInt(text) > 0) {
        return parseInt(text) - 1;
      } else {
        clearTimeout(countToStart);
        $("#typing-test").removeClass("d-none");
        return "GO!";
      }
    });

  }, 1400);
}
