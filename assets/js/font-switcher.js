$("#flexSwitchCheckDefault, #flexSwitchCheckDefaultMobile").change(function(){
    if(this.checked == true){
        setEasyToReadFont();
    }
    else {
        setRetroFont();
    }
});

var rootVars = document.querySelector(':root');

function setEasyToReadFont() {
  rootVars.style.setProperty('--retro-font', 'Helvetica');
}

function setRetroFont(){
  rootVars.style.setProperty('--retro-font', 'Glass TTY VT220');
}
