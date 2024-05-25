import timer from "./clock"

setInterval(timer,1000)

let activity =  document.querySelector(".tabs-item_first")
activity.addEventListener("click", ()=>insertHTML("portfolio"))

let map =  document.querySelector(".tabs-item_second")
map.addEventListener("click", ()=>insertHTML("map"))

let clock = document.querySelector('.tabs-item_third')
clock.addEventListener("click", ()=>insertHTML("clock"))

let tabs = document.querySelectorAll(".tabs-item")
let clockWrapper = document.querySelector(".clockWrapper")
let container = document.getElementById("app")
window.addEventListener("popstate", ()=>{
   render()
  })

let render = ()=>{
  let path = new URL(window.location.href).pathname
  if(path.slice(1)==="map"){
    getMap()
  }
  else if(path.slice(1)==="clock"){
    getClock()
  }
  else if(path.slice(1)==="portfolio"||path==="/"){
    getPortfolio()
  }
}


function getPortfolio(){
  container.innerHTML = ``
  container.style.height = "100%"
  fetch("pages/portfolio.html")
  .then(res => res.text())
  .then(html => container.innerHTML =html)
}
function getMap(){
  container.innerHTML = `<img id="loader" src="../img/icons/loader.gif"></img>` 
  container.style.height = "500px"
  const body = document.createElement('map-card');
  container.appendChild(body);
  
}
function getClock(){
  container.innerHTML = ``
  container.style.height = "500px"
  let time = sessionStorage.getItem("spentTime")  
  container.innerHTML = `<div class="clockWrapper">${time}</div>`

    
}
function insertHTML(url){
    if(url=="portfolio"){
      window.history.pushState("portfolio","","portfolio")
      getPortfolio()
    }
    else if(url=="clock"){
        window.history.pushState("clock","","clock")
        getClock()
      }
    else{
      window.history.pushState("map","","map")
      getMap()
      
    }
    tabs.forEach(i=>i.classList.contains(new URL(window.location.href).pathname.slice(1))
    ?i.style.background='lightgrey'
    : i.style.background='white'
)
    
}
  render()
