navButtonPressed();
let sidebarOpened = false;

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
  document.getElementById("sidebar").style["margin-left"] = "100%";
  sidebarOpened = false;
}

function showSideBar() {
  document.getElementById("sidebar").style["margin-left"] = "0%";
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