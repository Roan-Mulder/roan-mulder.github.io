PORTFOLIO TEMPLATE - how to use
================================

FILES
  index.html             Home (hero + 3 project cards)
  projects.html          All projects (main + smaller ones)
  about.html             About me + skills
  cv.html                CV page
  contact.html           Contact buttons
  project-template.html  Copy this for each new project
  css/style.css          All colors and layout (colors are at the top)
  images/                Put your photos and screenshots here
  files/                 Create this folder and add Roan-Mulder-CV.pdf

TO PREVIEW
  Double-click index.html. The fonts need an internet connection.

TO REPLACE A PLACEHOLDER IMAGE
  1. Put the image in the images/ folder (keep names simple: roan.jpg).
  2. In the HTML, find the dashed placeholder, for example:
       <div class="media media--portrait"><div class="ph">Your photo</div></div>
  3. Replace only the inner <div class="ph">...</div> with:
       <img src="images/roan.jpg" alt="Portrait of Roan Mulder">

TO ADD A PROJECT
  1. Copy project-template.html and rename it, e.g. mario-toolkit.html
  2. Fill in the text, YouTube link and images.
  3. In index.html and projects.html, point the card button to the new file:
       <a class="btn" href="mario-toolkit.html">Project page</a>

TO CHANGE THE GREEN
  Edit the colors at the top of css/style.css (--moss, --deep, --card).

TO PUBLISH
  Upload the CONTENTS of this folder (not the zip) to your GitHub repository
  named yourusername.github.io, then turn on Pages in Settings.
  index.html must stay in the top level of the repository.

PLACEHOLDERS TO CHANGE BEFORE PUBLISHING
  - Email address (search for your.email@example.com in every page)
  - Text in square brackets [like this]
  - The CV PDF link on cv.html
