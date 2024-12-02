const nameInput = document.getElementById("name-input")
const urlInput = document.getElementById("url-input")
const descriptionInput = document.getElementById("description-input")
const submitBtn = document.getElementById("submit-button")
const vidBox = document.getElementById("vid-box")
const vidLink = document.getElementById("single-vid-link")
const aboutLink = document.getElementById("about-link")
const singleVidBox = document.getElementById("single-vid-box")
const deleteButton = document.getElementById('delete-button')
const PORT = 8080


// Testing making palge elements moveable using ht logo
const htLogo = document.getElementById("ht-logo")
let beingDragged

htLogo.addEventListener('dragstart', dragStart)
htLogo.addEventListener('drag', dragging)
htLogo.addEventListener('dragend', dragEnd)

function dragStart (e) {
  beingDragged = e.target
  console.log(`You have begun dragging ${e.id}`)
}

function dragging (e) {
  e.preventDefault()
  beingDragged = e.target
  beingDragged.style.visibility = "hidden"
  console.log("Drag me, bitch!")
}

function dragEnd (e) {
  e.preventDefault()
  beingDragged.style.visibility = "visible"
  console.log("You better put me down!")
}

// Testing adding child elements to a page using JavaScript
let testing = document.createElement("h2")
testing.textContent = "CAN YOU SEE THIS"
testing.style.color = "white"
document.getElementById("content").appendChild(testing)

// Function to allow submit button to send data to backend and post it to page
submitBtn.addEventListener("click", () => {
  let vidObj = {
    name : nameInput.value,
    url : urlInput.value,
    description : descriptionInput.value
  }

  fetch("http://localhost:8081/api/videos", {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(vidObj),
  })
})

const iframeGenerator = () => {
  // Fetch call to create iframes for added videos
  fetch("http://localhost:8081/api/videos").then((res) => {
    return res.json()
  })
    .then((videos) => {
      videos.map((video)  => {
        vidBox.innerHTML += `<div><a href="video/${video.id}" id="single-vid-link"><p style="color:white;">${JSON.stringify(video.name)}</p></a><iframe src=${JSON.stringify(video.url)} title=${JSON.stringify(video.name)}></iframe><div class="vid-ud-buttons"><button name="edit" class="edit-button" id="edit-button" type="button" onClick="editVid(${video.id})">Edit</button><button name="delete" class="delete-button" id="delete-button" type="button" onClick="deleteVid(${video.id})">Delete</button></div></div>`

        // const pageRoute = {
        //   `/video/${video.id}`: {
        //     template: "/src/templates/single-video-page.html",
        //     title: "Single video page",
        //     description: "This is the page for loading and watching a single video"
        //   }
        //       }
      })
      // videos.map((video) => {
      //   const videoLink = document.createElement("a");
      //   videoLink.href = `/video/${video.id}`;
      //   videoLink.innerHTML = `<p style="color:white;">${video.name}</p>`;
      //   videoLink.addEventListener("click", (event) => {
      //     event.preventDefault();
      //     route(event);
      //   });
      //   const videoFrame = document.createElement("iframe");
      //   videoFrame.src = video.url;
      //   videoFrame.title = video.name;
      //   const videoDiv = document.createElement("div");
      //   videoDiv.appendChild(videoLink);
      //   videoDiv.appendChild(videoFrame);
      //   vidBox.appendChild(videoDiv);
      // });
    })
}

// Function to edit video
const editVid = (id) => {
  console.log(`Edit video ${id}`)
}

// Function to delete a video
const deleteVid = (id) => {
  fetch(`http://localhost:8081/api/videos/${id}`, {
    method : 'DELETE',
    headers: {
      "content-type" : "application/json",
      accept: "application/json"
    }
  }).then(() => {
      location.reload(true) // (The "true" makes sure the page is loaded from the server, bypassing the cache)
    })
}

const urlRoutes = {
  404: {
    template: "/src/templates/404.html",
    title: "404 page",
    description: "Page not found"
  },
  "/": {
    template: "/index.html",
    title: "Home page",
    description: "This is the home page"
  },
  "/video": {
    template: "/src/templates/single-video-page.html",
    title: "Single video page",
    description: "This is the page for loading and watching a single video"
  },
  "/about": {
    template: "/src/templates/about.html",
    title: "About page",
    description: "This is the about page, chock full of helpful information"
  }
}

// Routes stuff

// document.addEventListener('click', (event) => {
aboutLink.addEventListener('click', (event) => {
  // const { target } = event
  // if (!target.matches("a")) {
  //   return
  // }
  // event.preventDefault()
  console.log("button works")
  // route()
})

const route = (event) => {
  // event.preventDefault()
  event = event || window.event
  window.history.pushState({}, "", event.target.value)
  locationHandler()
}

const locationHandler = async () => {
  let path = window.location.pathname
  if(location.length == 0) {
    location = "/"
  } else {
    const route = urlRoutes[path] || urlRoutes["404"]
    const html = await fetch(route.template).then((response)=>response.text())
    if ( path == "/") {
      iframeGenerator()
    } else {
      document.getElementById("content").innerHTML = html
    }
    // console.log(html)
    document.title = route.title
    // document.querySelector('meta[name="description"]').setAttribute("description", route.description)
  }}

// Event listener that listens for URL states
window.onpopstate = locationHandler
window.route = route

locationHandler()
