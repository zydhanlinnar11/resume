navButtonPressed(); // Handle navigation button on click
let sidebarOpened = false; // sideBar hidden when page opened
playHelloFadeAnim(); // Play fade animation when page opened

// On scroll
let prevYPos = window.pageYOffset;
console.log(`before: ${prevYPos}`);
window.onscroll = () => {
  // Hide navbar when scroll down and vice versa
  let currYPos = window.pageYOffset;
  if (currYPos > prevYPos && !sidebarOpened) {
    document.getElementById("navbar").style.top = "-64px";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }
  prevYPos = currYPos;
};

// Always hide sidebar when window is resized
window.onresize = () => {
  hideSideBar();
};

// set navigation button link
function navButtonPressed() {
  setSosmedLink("navbar");
  setSosmedLink("sidebar");
  document.getElementById("navbar-sosmed").onclick = () => {
    if (sidebarOpened) hideSideBar();
    else showSideBar();
  };
}

// Hide and show sidebar
function hideSideBar() {
  document.getElementById("sidebar").style["top"] = "-105%";
  sidebarOpened = false;
}

function showSideBar() {
  document.getElementById("sidebar").style["top"] = "64px";
  sidebarOpened = true;
}

// set link for nav/side bar button
function setSosmedLink(position) {
  let userName = "zydhanlinnar11";
  const linkSosmed = {
    twitter: "twitter.com",
    github: "github.com",
    facebook: "facebook.com",
    instagram: "instagram.com",
    linkedin: "linkedin.com/in",
  };
  document.getElementById(position + "-" + "linkedin").onclick = () => {
    window.open("https://" + linkSosmed["linkedin"] + "/" + userName);
  };
  document.getElementById(position + "-" + "github").onclick = () => {
    window.open("https://" + linkSosmed["github"] + "/" + userName);
  };
  document.getElementById(position + "-" + "facebook").onclick = () => {
    window.open("https://" + linkSosmed["facebook"] + "/" + userName);
  };
  document.getElementById(position + "-" + "instagram").onclick = () => {
    window.open("https://" + linkSosmed["instagram"] + "/" + userName);
  };
}

// Fade animation
function playHelloFadeAnim() {
  let counter = 0;
  let interval = setInterval(playAnim, 3);
  function playAnim() {
    if (counter == 100) {
      clearInterval(interval);
    } else {
      counter++;
      document.getElementById("hello-section").style.opacity = counter / 100;
    }
  }
}
