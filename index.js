get24();
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
  }

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
   dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[slideIndex-1].style.display = "block";
 dots[slideIndex-1].className += " active";


}




function get24 () {
document.getElementById("button2").removeEventListener("click", get24)
document.getElementById("button1").removeEventListener("click", get24)
fetch('https://api.opencnft.io/1/rank?window=24h')
.then(response => response.json())
.then(data => console.log(data["ranking"][4]["name"],
console.log(data["ranking"][3]["name"],
console.log(data["ranking"][2]["name"],
console.log(data["ranking"][1]["name"],
console.log(data["ranking"][0]["name"],
))))));

(function golEl () {

    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }

    }

})();


document.getElementById("button2").addEventListener("click", getAll)
document.getElementById("button1").addEventListener("click", get7)

}

function get7 () {
document.getElementById("button2").removeEventListener("click", get7)
document.getElementById("button1").removeEventListener("click", get7)
fetch('https://api.opencnft.io/1/rank?window=7d')
.then(response => response.json())
.then(data => console.log(data["ranking"][4]["name"],
console.log(data["ranking"][3]["name"],
console.log(data["ranking"][2]["name"],
console.log(data["ranking"][1]["name"],
console.log(data["ranking"][0]["name"],
))))));

(function polEl () {

    var logger2 = document.getElementById('second');
    console.log = function (message2) {
        if (typeof message2 == 'object') {
            logger2.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message2) : message2) + '<br />';
        } else {
            logger2.innerHTML += message2 + '<br />';
        }

    }
})();

document.getElementById("button2").addEventListener("click", get24)
document.getElementById("button1").addEventListener("click", get30)

}


function get30 () {
document.getElementById("button2").removeEventListener("click", get30)
document.getElementById("button1").removeEventListener("click", get30)
fetch('https://api.opencnft.io/1/rank?window=30d')
.then(response => response.json())
.then(data => console.log(data["ranking"][4]["name"],
console.log(data["ranking"][3]["name"],
console.log(data["ranking"][2]["name"],
console.log(data["ranking"][1]["name"],
console.log(data["ranking"][0]["name"],
))))));

(function folEl () {
    var logger3 = document.getElementById('third');
    console.log = function (message3) {
        if (typeof message3 == 'object') {
            logger3.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message3) : message3) + '<br />';
        } else {
            logger3.innerHTML += message3 + '<br />';
        }

    }
})();

document.getElementById("button2").addEventListener("click", get7)
document.getElementById("button1").addEventListener("click", getAll)
}

function getAll () {
document.getElementById("button2").removeEventListener("click", getAll)
document.getElementById("button1").removeEventListener("click", getAll)
fetch('https://api.opencnft.io/1/rank?window=all')
.then(response => response.json())
.then(data => console.log(data["ranking"][4]["name"],
console.log(data["ranking"][3]["name"],
console.log(data["ranking"][2]["name"],
console.log(data["ranking"][1]["name"],
console.log(data["ranking"][0]["name"],
))))));

(function solEl () {
    var old4 = console.log;
    var logger4 = document.getElementById('fourth');
    console.log = function (message4) {
        if (typeof message4 == 'object') {
            logger4.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message4) : message4) + '<br />';
        } else {
            logger4.innerHTML += message4 + '<br />';
        }

    }
})();
document.getElementById("button2").addEventListener("click", get30)
}
