setNavButtonOnClick() // Handle navigation button on click
let sidebarOpened = false // sideBar hidden when page opened
playHelloFadeAnim() // Play fade animation when page opened

// On scroll
let prevYPos = window.pageYOffset
window.onscroll = () => {
  // Hide navbar when scroll down and vice versa
  if (isScrolledDown() && !sidebarOpened) hideNavbar()
  else showNavbar()
  prevYPos = window.pageYOffset
}

// Navbar hide / show function
function hideNavbar() { document.getElementById("navbar").style.top = "-64px" }
function showNavbar() { document.getElementById("navbar").style.top = "0px" }

// isScrolledDown function
let isScrolledDown = () => window.pageYOffset > prevYPos

// Always hide sidebar when window is resized
window.onresize = () => { hideSideBar() }

// set navigation button link
function setNavButtonOnClick() {
  setSosmedLink("navbar")
  setSosmedLink("sidebar")
  document.getElementById("navbar-sosmed").onclick = () => {
    if (sidebarOpened) hideSideBar()
    else showSideBar()
  }
}

// Hide and show sidebar
function hideSideBar() {
  document.getElementById("sidebar").style["top"] = "-105%"
  sidebarOpened = false
}

function showSideBar() {
  document.getElementById("sidebar").style["top"] = "64px"
  sidebarOpened = true
}

// set link for nav/side bar button
function setSosmedLink(position) {
  let userName = "zydhanlinnar11"
  const linkSosmed = {
    github: "github.com",
    facebook: "facebook.com",
    instagram: "instagram.com",
    linkedin: "linkedin.com/in",
  }
  for (let key in linkSosmed) setOnClick(linkSosmed, position, key, userName)
}

function setOnClick(linkSosmed, position, sosmed, userName) {
  document.getElementById(`${position}-${sosmed}`).onclick = () => {
    window.open(`https://${linkSosmed[sosmed]}/${userName}`)
  }
}

// Fade animation
function playHelloFadeAnim() {
  const animationTimeInMs = 1000
  const FRAME_TIME = 16 // 60 FPS
  const MAX_COUNTER = animationTimeInMs / FRAME_TIME
  let counter = 0
  let interval = setInterval(() => {
    if (counter == MAX_COUNTER) clearInterval(interval)
    else
      counter++,
        (document.getElementById("hello-section").style.opacity = counter / MAX_COUNTER)
  }, FRAME_TIME)
}