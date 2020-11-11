var namaLengkap = "Zydhan Linnar Putra";
var namaPanggilan = "Zydhan"
var prevScrollpos = window.pageYOffset;
document.getElementById("JudulHeader").innerHTML = "zyd :)";
// document.getElementById("fotoku").style.marginLeft = "35%";
document.getElementById("circlecontainer").style.height = "885px";
console.log(document.getElementById("circlecontainer").style.height);
// document.getElementById("judulbio").style.marginTop = (-screen.availHeight * window.devicePixelRatio) + 229 + "px";
document.getElementById("bg-image").style.marginTop = 95 + "px";
// document.getElementById("circlecontainer").style.width = screen.availWidth * devicePixelRatio;
// document.getElementById("circle").style.cx = "50%";
// console.log(document.getElementsByClassName("bg-image")[0].style.width);
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    document.getElementById("mobile").style.display = "block";
    document.getElementById("navbar").style.display = "none";
    document.getElementById("sapaan").style.display = "none";
    document.getElementById("biodata").style.display = "none";
    document.getElementById("bg-image").style.display = "none";
    document.getElementsByClassName("bg-text")[0].style.display = "none";
    // document.body.style.width = "60px";
  }else{
    document.getElementById("mobile").style.display = "none";
  }

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var header = document.getElementById("navbar");
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-64px";
  }
//   document.getElementById("judulbio").innerHTML = currentScrollPos;
  if(document.documentElement.scrollTop > 0) {
    header.style.backgroundColor = "white";
    var r = 250 + document.documentElement.scrollTop * 3;
    var browserWidth = screen.availWidth * window.devicePixelRatio;
    document.getElementById("circle").style.r = r;
    if(browserWidth <= r * 2) {
        // document.getElementById("circle").style.r = r;
        // document.getElementById("circlecontainer").style.width = screen.availWidth * devicePixelRatio;
    } else {
        // document.getElementById("circle").style.cx = browserWidth/2;
        document.getElementById("circle").style.cy = 650 + document.documentElement.scrollTop / 2;
        // document.getElementById("circlecontainer").style.width = r * 2;
    }
  } else {
    header.style.backgroundColor = "rgba(255, 255, 255, 0)";
    document.getElementById("judulbio").style.color = "rgba(0, 0, 0, 0)";
    var biodesc = document.getElementsByClassName("biodesc");
    var i;
    for(i=0; i<biodesc.length; i++) {
      biodesc[i].style.color = "rgba(0, 0, 0, 0)";
    }
  }
  if(document.documentElement.scrollTop > 279) {
    var biodesc = document.getElementsByClassName("biodesc");
    var i;
    document.getElementById("judulbio").style.color = "rgba(0, 0, 0, 1)";
    for(i=0; i<biodesc.length; i++) {
      biodesc[i].style.color = "rgba(0, 0, 0, 1)";
      // biodesc[i].innerHTML = document.documentElement.scrollTop;
    }
  }
   prevScrollpos = currentScrollPos;
}

document.getElementById("ig").onclick = function() {window.open("https://instagram.com/zydhanlinnar11")};
document.getElementById("fb").onclick = function() {window.open("https://facebook.com/zydhanlinnarp")};
document.getElementById("gh").onclick = function() {window.open("https://github.com/zydhanlinnar11")};
document.getElementById("twt").onclick = function() {window.open("https://twitter.com/zydhanlinnar11")};