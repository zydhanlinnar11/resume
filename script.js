navButtonPressed();
let sidebarOpened = false;

function navButtonPressed() {
  let userName = "zydhanlinnar11";
  const linkSosmed = {
    "twt" : "twitter.com",
    "gh" : "github.com",
    "fb" : "facebook.com",
    "ig" : "instagram.com",
    "linkedin" : "linkedin.com/in"
  }
  document.getElementById("linkedin").onclick = function() {window.open("https://" + linkSosmed["linkedin"] + "/" + userName)};
  document.getElementById("gh").onclick = function() {window.open("https://" + linkSosmed["gh"] + "/" + userName)};
  document.getElementById("sosmed").onclick = function() {
    if(sidebarOpened) {
      document.getElementById("sidebar").style["margin-left"] = "100%";
    } else {
      document.getElementById("sidebar").style["margin-left"] = "0%";
    }
    sidebarOpened = !sidebarOpened;
  }
  document.getElementById("linkedin-sidebar").onclick = function() {window.open("https://" + linkSosmed["linkedin"] + "/" + userName)};
  document.getElementById("gh-sidebar").onclick = function() {window.open("https://" + linkSosmed["gh"] + "/" + userName)};
  }

  window.onresize = function() {
    sidebarOpened = false;
    document.getElementById("sidebar").style["margin-left"] = "100%";
  }