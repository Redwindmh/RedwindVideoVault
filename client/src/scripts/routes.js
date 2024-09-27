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

module.exports = { urlRoutes }
