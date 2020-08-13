$(".carousel").carousel();

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
