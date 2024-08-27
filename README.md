# The Tale of the Redwind Video Vault

Up until recently, most of my journey as a web developer had involved frontend work, and work with massive, all encompassing libraries and frameworks like WordPress, React, and Laravel. This had allowed me to create full-stack web applications for personal and client use, but I never fully felt like I was fully in control of things or had a strong understanding of what was going on under the hood, so to speak. 

The many layers of abstraction, which no doubt made many things much more accessible to me as a technomancer in training, hid from me the inner workings of the projects I was building. I felt a strong disconnect between what I was able to build, and my understanding of and ability to fully explain it.

This would not do.

Motivated in no little part by a search for more gainful employment, but more spurred on by my desire to learn more about the backend in particular, I decided to embark on a side-quest to level up in all things backend related. Guided by my gracious and benevolent mentor, [Ean Moore](), I was tasked with create a simple REST API that used all of the major HTTP request methods: GET, PUSH, PUT, and DELETE using nothing but Node and Express.

So, I struck out, first in search of the necessary resources to guide me on my way, a handful of relevant tutorials to help me understand the underlying goings on, proper documentation to get the needed syntax down, and blessed coffee because <span style="color:red; font-weight:bold;">I NEED IT IN MY VEINS</span>.

Upon the consumption of said resources, I began building my API, the first ever I had built without the use of a great deal of abstractions, and though I'm sure I still stood a great deal more of abstractions relative to the raw machine code, I found building my own backend highly enjoyable. It was empowering to have such control over calls being made to and from the server, to be in more direct control of the flow of data. But using another external app, Postman, to send API calls and test functionality wasn't enough for me. I soon began to wonder what I could use this new found power for.

As I had been using the name, URL, and description of the tutorial I had been watching as dummy data, I wondered if it might be worthwhile to build a frontend that would allow me to store and watch all of my videos in one place. So, I decided on building a CRUD web app to store and display my videos, as well as update and delete them as needed.

A novel idea? Perhaps not. But as I begin to build a simple frontend, again shunning arbitrary abstractions and sticking to the essentials of HTML, CSS, and JavaScript. This first iteration would be nothing fancy, just a proof of concept. After more than a few maddening missteps and misplaced commas, I finally had a working frontend capable of displaying the dummy videos stored as JSON data on the backend as embedded videos, as well as a form the user could use to upload new videos to the collection. The C and R were in working order. Next, I took to implementing edit and delete buttons beneath the videos to add the U and D. Once this was done, I decided it would be more useful to also be able to view each individual video on its own dedicated page. That meant creating a dynamic routing system in vanilla JavaScript.

Ut-oh.

I had created routing schema before in WordPress, React, and Laravel, which made it particularly easy, but I had never even considered what it would be like to have to set up such a feature on my own. So, after once again stocking up on supplies and resources, back into the code I went.

Several potential expansions of this app had already began pouring into my mind. Perhaps I could build a browser extension that would automagically take any video the user had open in a window and add it to the Video Vault. Maybe I could add user account functionality and have the app store data in a database on a dedicated server,
