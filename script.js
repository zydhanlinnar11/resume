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
  document.getElementById("linkedin").onclick = () => {window.open("https://" + linkSosmed["linkedin"] + "/" + userName)};
  document.getElementById("gh").onclick = () => {window.open("https://" + linkSosmed["gh"] + "/" + userName)};
  document.getElementById("sosmed").onclick = () => {
    if(sidebarOpened) {
      document.getElementById("sidebar").style["margin-left"] = "100%";
    } else {
      document.getElementById("sidebar").style["margin-left"] = "0%";
    }
    sidebarOpened = !sidebarOpened;
  }
  document.getElementById("linkedin-sidebar").onclick = () => {window.open("https://" + linkSosmed["linkedin"] + "/" + userName)};
  document.getElementById("gh-sidebar").onclick = () => {window.open("https://" + linkSosmed["gh"] + "/" + userName)};
  }

  window.onresize = () => {
    sidebarOpened = false;
    document.getElementById("sidebar").style["margin-left"] = "100%";
  }