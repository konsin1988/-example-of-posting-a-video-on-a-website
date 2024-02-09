const video_1 = document.getElementById("video_1");
const video_2 = document.getElementById("video_2");
const close_button = document.getElementById("close_button");
const video_on = document.getElementById("video_on");
const display = document.getElementById("display");
const video_modal = document.getElementById("video_modal");

const video_anchor_1 =
  "https://www.youtube.com/embed/3A63zTD7seM?si=s2fLib1MK6ib7Fg6";
const video_anchor_2 =
  "https://www.youtube.com/embed/aSxI3XG47vA?si=8IzjEjN5SqpPaUgs";

function getVideoTemp(video) {
  return `<iframe
          width="560"
          height="315"
          src="${video}"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>`;
}

function removeClass() {
  video_on.classList.remove("display_none");
}

video_1.onclick = function () {
  video_modal.innerHTML = getVideoTemp(video_anchor_1);
  removeClass();
};
video_2.onclick = function () {
  video_modal.innerHTML = getVideoTemp(video_anchor_2);
  removeClass();
};

close_button.onclick = function () {
  video_on.classList.add("display_none");
};
