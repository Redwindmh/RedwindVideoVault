//
// const nameInput = document.getElementById("name-input")
// const urlInput = document.getElementById("url-input")
// const descriptionInput = document.getElementById("description-input")
// const submitBtn = document.getElementById("submit-button")
// const vidBox = document.getElementById("vid-box")
const singleVidBox = document.getElementById("single-vid-box")
// const vidId = 

// submitBtn.addEventListener("click", () => {
//   console.log("Button works!")
//
//   let vidObj = {
//     name : nameInput.value,
//     url : urlInput.value,
//     description : descriptionInput.value
//   }
//
//   fetch("http://localhost:8081/api/videos", {
//     method : 'POST',
//     headers : {
//       'Content-Type' : 'application/json'
//     },
//     body : JSON.stringify(vidObj),
//   })
// })

// Fetch call for individual video
 
fetch("http://localhost:8081/api/videos/4").then((res) => {
  return res.json()
})
  .then((video) => {
    console.log(video)
    singleVidBox.innerHTML = `<div><h2 class="single-vid-name">${JSON.stringify(video.name)}</h2><iframe src=${JSON.stringify(video.url)} title="${JSON.stringify(video.name)}" class="single-vid-iframe"></iframe><div class="vid-ud-buttons"><div class="edit-button" id="edit-buton">Edit</div><div class="delete-button" id="delete-buton">Delete</div></div><p class="single-vid-description">${JSON.stringify(video.description)}</p></div>`
  })

