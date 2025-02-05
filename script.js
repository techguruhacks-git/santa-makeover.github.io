let currentElement = "";
let initialX = 0,
  initialY = 0;

const isTouchDevice = () => {

  try {

    document.createEvent("TouchEvent");
    return true;
  } 

  catch (e) {

    return false;

  }

};

function dragStart(e) {

  initialX = isTouchDevice() ? e.touches[0].clientX : e.clientX;

  initialY = isTouchDevice() ? e.touches[0].clientY : e.clientY;

  currentElement = e.target;

      }

        function dragOver(e) {
        e.preventDefault();
        }

    const drop = (e) => {
        e.preventDefault();
        let newX = isTouchDevice() ? e.touches[0].clientX : e.clientX;
      let newY = isTouchDevice() ? e.touches[0].clientY : e.clientY;
  
      currentElement.style.top =
  
      currentElement.offsetTop - (initialY - newY) + "px";
  
      currentElement.style.left =
  
      currentElement.offsetLeft - (initialX - newX) + "px";
};


window.onload = () => {

  currentElement = "";

  let body = document.body;

  body.addEventListener("dragstart", dragStart, false);

  body.addEventListener("dragover", dragOver, false);

  body.addEventListener("drop", drop, false);

  body.addEventListener("touchstart", dragStart, false);
  
  body.addEventListener("touchmove", drop, false);
};



var mySong = document.getElementById("mySong");
var Laugh = document.getElementById("laugh");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(mySong.paused){
        Laugh.play();
        mySong.play();
        icon.src = "pause.png";


    }

    else{
        icon.src = "play.png";
        mySong.pause();

    }
}