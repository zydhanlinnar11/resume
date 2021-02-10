navButtonPressed();

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
  }