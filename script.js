function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/thaydark.jpg")
  } else {
    img.setAttribute("src", "./assets/thaylight.jpg")
  }
  }

  
  // pegar a tag img

  //substituir a img
  //se light mode, add img light
  // se sem light mode, manter img normal