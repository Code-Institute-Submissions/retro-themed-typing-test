$.ajaxSetup({
  cache: true
});
$.getScript('https://connect.facebook.net/en_US/sdk.js', function() {
  FB.init({
    appId: '2358527374291305',
    version: 'v2.7' // or v2.1, v2.2, v2.3, ...
  });
  $('#loginbutton,#feedbutton').removeAttr('disabled');
  FB.getLoginStatus(updateStatusCallback);
});

function updateStatusCallback(){
   console.log("status updated")
}
