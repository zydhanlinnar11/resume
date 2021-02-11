navButtonPressed();
let sidebarOpened = false;
let prevYPos = window.pageYOffset;
playHelloFadeAnim();

window.onscroll = () => {
  let currYPos = window.pageYOffset;
  if(currYPos > prevYPos && !sidebarOpened) {
    document.getElementById("navbar").style.top = "-64px";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }
}

window.onresize = () => {
  hideSideBar();
}

function navButtonPressed() {
  setSosmedLink("navbar");
  setSosmedLink("sidebar");
  document.getElementById("navbar-sosmed").onclick = () => {
    if(sidebarOpened)
      hideSideBar();
    else
      showSideBar();
  }
}

function hideSideBar() {
  document.getElementById("sidebar").style["top"] = "-105%";
  sidebarOpened = false;
}

function showSideBar() {
  document.getElementById("sidebar").style["top"] = "64px";
  sidebarOpened = true;
}

function setSosmedLink(position) {
  let userName = "zydhanlinnar11";
  const linkSosmed = {
    "twitter" : "twitter.com",
    "github" : "github.com",
    "facebook" : "facebook.com",
    "instagram" : "instagram.com",
    "linkedin" : "linkedin.com/in"
  }
  document.getElementById(position + "-" + "linkedin").onclick = () => {window.open("https://" + linkSosmed["linkedin"] + "/" + userName)};
  document.getElementById(position + "-" + "github").onclick = () => {window.open("https://" + linkSosmed["github"] + "/" + userName)};
  document.getElementById(position + "-" + "facebook").onclick = () => {window.open("https://" + linkSosmed["facebook"] + "/" + userName)};
  document.getElementById(position + "-" + "instagram").onclick = () => {window.open("https://" + linkSosmed["instagram"] + "/" + userName)};
}

function playHelloFadeAnim() {
  let counter = 0;
  let interval = setInterval(playAnim, 3);
  function playAnim() {
    if(counter == 100) {
      clearInterval(interval);
    } else {
      counter++;
      document.getElementById("hello-section").style.opacity = (counter / 100);
    }
  }
}