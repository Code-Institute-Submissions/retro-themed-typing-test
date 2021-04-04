const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random'; //API I will call to use the strings returned

$(document).ready(function() {
  $("#start-game").click(function() {
    $("#welcome-section").css("display", "none"); //Hides the welcome-section when the play button is clicked.
    $("#pre-countdown").removeClass("d-none"); //Removes the display none class so we show the pre countdown timer when play button is clicked.
    preCountdown();
  });
});

//Sets startCountdown text to 1 minus whatever number is already inputted into that field by parsing the text to an integer.
function preCountdown() {
  var countToStart = setInterval(function() {
    $("#startCountdown").text(function(i, text) {
      if (parseInt(text) > 0) {
        return parseInt(text) - 1;
      } else {
        clearTimeout(countToStart);
        $("#typing-test").removeClass("d-none");
        $(this).text("GO!");
        setTimeout(function(){
          $("#pre-countdown").addClass("d-none");
        }, 1000)
        return;
      }
    });

  }, 1400);
}
