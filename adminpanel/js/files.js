function discriptReplaceBr() {
  let imagesBlock = document.getElementsByClassName('images_block')[0];
  if (imagesBlock) {
    let descriptImg = imagesBlock.getElementsByClassName('descriptImg');
    let titleImg = imagesBlock.getElementsByClassName('titleImg');
    let image = imagesBlock.getElementsByTagName("img");
    descriptImg = Array.from(descriptImg);
    titleImg = Array.from(titleImg);
    image = Array.from(image);
    descriptImg.map((x) => x.innerHTML = x.innerHTML.replace(/[_]/g, '_<br>'));
    descriptImg.map((x) => x.innerHTML = x.innerHTML.replace(/[-]/g, '-<br>'));
    image.map((x) => iconFile(x));
    titleImg.map((x) => {
      x.innerHTML = '<span>' + x.innerHTML + '</span>';
      let f = x.appendChild(document.body.appendChild(document.createElement('button')));
      f.setAttribute('class', 'copyUrl');
      f.setAttribute('type', 'button');
      f.style.cursor = 'pointer';
      f.innerHTML = 'Скопировать';

      f.addEventListener('click', (e) => {
        var range = document.createRange();
        range.selectNode(x.getElementsByTagName('span')[0]);
        window.getSelection().addRange(range);
        document.execCommand('copy')
      })

    });
    !function function_name() {
      let imagesBlock = document.getElementsByClassName('images_block')[0];
      let image = imagesBlock.getElementsByTagName("img");
      let btn = document.querySelector("#btn_filter_img");
      let dtnC = btn.getElementsByClassName("btn");
      let images = imagesBlock.getElementsByClassName('images');
      dtnC = Array.from(dtnC);
      image = Array.from(image);
      images = Array.from(images);
      dtnC.map((x) => x.addEventListener("click", (e) => {
        image.filter((f) => f.getAttribute("data").indexOf(e.target.getAttribute("data")) !== -1).map((x, i) => x.parentElement.parentElement.parentElement.style.display = "flex");
        image.filter((f) => f.getAttribute("data").indexOf(e.target.getAttribute("data")) !== -1).map((x, i) => x.parentElement.parentElement.parentElement.style.cursor = "pointer");
        image.filter((f) => f.getAttribute("data").indexOf(e.target.getAttribute("data")) === -1).map((x, i) => x.parentElement.parentElement.parentElement.style.display = "none");
        image.filter((f) => f.getAttribute("data").indexOf(e.target.getAttribute("data")) !== -1).map((x, i) => x.parentElement.parentElement.style.display = "flex");

      }))

    }()

  }
  function iconFile(s) {

    if (s.src.indexOf(".pdf") !== -1 || s.src.indexOf(".PDF") !== -1) {
      s.src = "/img/icon/pdf.png"
    } else if (s.src.indexOf(".doc") !== -1) {
      s.src = "/img/icon/doc.jpg"
    } else if (s.src.indexOf(".djvu") !== -1) {
      s.src = "/img/icon/djvu.png"
    }

  }

}

function fileInput(params) {
  let fInput = document.querySelector("#customFileLangHTML");
  let fLabel = document.querySelector(".fileInput");
  let fileSpan = document.querySelector(".fileSpan");
  if (fInput != null) {
    fInput.addEventListener("change", () => {
      Array.from(fInput.files)
        .map((x) => {
          fLabel.innerHTML = x.name;
          fileSpan.innerHTML = (x.size / 1000000 < 40) ? "<p class = 'dopusk'>Размер: " + x.size / 1000000 + " мб. </p>" : "<p class = 'nodopusk'>Размер: " + x.size / 1000000 + " мб. </p>";
        }
        );
    })
  }


}

$(document).ready(function () {
  discriptReplaceBr();
  fileInput();
});