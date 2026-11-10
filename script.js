function upDate(previewPic) {
  console.log("upDate triggered");
  console.log("Alt:", previewPic.alt);
  console.log("Source:", previewPic.src);

  const imageDiv = document.getElementById("image");
  imageDiv.textContent = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.textContent = "Hover over an image below to display here.";
}

function addTabIndex() {
  console.log("addTabIndex triggered");
  const images = document.querySelectorAll(".gallery img");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}

window.onload = addTabIndex;
