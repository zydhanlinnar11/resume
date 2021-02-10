navButtonPressed();
let sidebarOpened = false;
let prevYPos = window.pageYOffset;
playHelloFadeAnim();

window.onscroll = () => {
  let currYPos = window.pageYOffset;
  if(currYPos > prevYPos) {
    document.getElementById("navbar").style.top = "-64px";
    hideSideBar();
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
  if(!sidebarOpened)
    return;
  let margin = 9;
  let interval = setInterval(openAnim, 3);
  function openAnim() {
    if(margin == -100)
      clearInterval(interval)
    else {
      margin--;
      document.getElementById("sidebar").style["top"] = margin + "%";
    }
  }
  sidebarOpened = false;
}

function showSideBar() {
  let margin = -100;
  let interval = setInterval(openAnim, 3);
  function openAnim() {
    if(margin == 9)
      clearInterval(interval)
    else {
      margin++;
      document.getElementById("sidebar").style["top"] = margin + "%";
    }
  }
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