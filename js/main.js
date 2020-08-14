$(".carousel").carousel();

$("body").scrollspy({ target: ".navbar", offset: 50 });

//Get all the hyperlink elements
var links = document.getElementsByTagName("a");

//Browse the previously created array
Array.prototype.forEach.call(links, function (elem, index) {
  //Get the hyperlink target and if it refers to an id go inside condition
  var elemAttr = elem.getAttribute("href");
  if (elemAttr && elemAttr.includes("#")) {
    //Replace the regular action with a scrolling to target on click
    elem.addEventListener("click", function (ev) {
      ev.preventDefault();
      //Scroll to the target element using replace() and regex to find the href's target id
      document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    });
  }
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "15px";
  } else {
    document.getElementById("header").style.fontSize = "20px";
  }
}

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration * 1000);
  });
}

$(window).on("load", async function () {
  $(".loader_").fadeOut(00);
  /*$(".margin_name").fadeOut(000);
  $(".major").fadeOut(000);
  $(".minor").fadeOut(000);
  $(".margin_name").fadeIn(5000);
  await sleep(1);
  $(".major").fadeIn(3000);
  await sleep(1);
  $(".minor").fadeIn(3000);
  await sleep(1);
  $(".resume_button").fadeIn(2000);
  $(".projects_button").fadeIn(2000);
});

$(window).on("load", async function () {
  $(".resume_button").fadeOut(000);
  $(".projects_button").fadeOut(000);*/
});
