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
      dtnC.map((x, i) => x.addEventListener("click", (e) => {
        image.filter((f) => f.getAttribute("data").indexOf(e.target.getAttribute("data")) !== -1).map((x, i) => x.parentElement.parentElement.parentElement.style.display = "flex");
        image.filter((f) => f.getAttribute("data").indexOf(e.target.getAttribute("data")) !== -1).map((x, i) => x.parentElement.parentElement.parentElement.style.cursor = "pointer");
        image.filter((f) => f.getAttribute("data").indexOf(e.target.getAttribute("data")) === -1).map((x, i) => x.parentElement.parentElement.parentElement.style.display = "none");
        image.filter((f) => f.getAttribute("data").indexOf(e.target.getAttribute("data")) !== -1).map((x, i) => x.parentElement.parentElement.style.display = "flex");
        images[i].style.overflow = "hidden";
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
    } else if (s.src.indexOf(".rar") !== -1) {
      s.src = "/img/icon/rar.png"
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

function settins() {
  let sett = document.querySelectorAll(".settens");
  if (sett) {
    let settinsPanel = document.querySelector("#settinsPanel");
    let closesvg = '<submit class = "closePanel"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-octagon-fill" viewBox="0 0 16 16"><path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" /></svg></submit>';

   
    function createImageLiter(saveComponent, liter, names) {
      function defaultLiter(props) {
        let imgBlock = $("#imgBlock");
        
        if(imgBlock){
          let nameL = document.getElementById("names");
          let categoryL = document.getElementById("categoryL");
          let autorL = document.getElementById("autorL");
          let izdL = document.getElementById("izdL");
          let godL = document.getElementById("godL");
          let strL = document.getElementById("strL");
          let linL = document.getElementById("linL");

            liter.names.value = nameL?nameL.value:"";
            liter.category.value = categoryL?categoryL.textContent:"";
            liter.autor.value = autorL?autorL.textContent:"";
            liter.izd.value = izdL?izdL.textContent:"";
            liter.god.value = godL?godL.textContent:"";
            liter.str.value = godL?strL.textContent:"";
            liter.lin.value = linL?linL.href.replace("https://fk-i-s.ru/adminpanel/articles",".."):"";
        }

      }
      
      function literCategory(names, id, txt) {
        if(names === "Скачать"){
          return '<a href="'+ txt +'" id = "'+ id +'" class="btn btn-primary">'+ names +'</a>';
        }else{
           return "<div><i><b>"+names+": </b><span id = '"+ id +"'>" + txt + "</span>;</i></div>";
        }
       
      }

      let text_block2 = $(".text_block2");
      if (text_block2) {
        saveComponent.addEventListener("click", () => {
          if (!document.getElementById("blockLiter")) {
            text_block2.children().eq(0).before("<div id = 'blockLiter' class = 'row'></div>");
          }

          document.getElementById("blockLiter").innerHTML = "<div id = 'imgBlock' class = 'col-sm-2'><img id = 'imageLiter' width = '100%'></div><div class = 'col-sm'>" + 
          literCategory("Название", "nameL", liter.names.value) +
          literCategory("Категория", "categoryL", liter.category.value) + 
          literCategory("Автор", "autorL", liter.autor.value) + 
          literCategory("Издание", "izdL", liter.izd.value) + 
          literCategory("Год", "godL", liter.god.value) +
          literCategory("Страниц", "strL", liter.str.value) + 
          literCategory("Скачать", "linL", liter.lin.value) +"</div>";
          let imgLiter = $("#imageLiter");
          let subInputJson = $("#sub_art_content_json");
          let imageName = names.split(".")[0].trim();
          let mime = names.split(".");
          mime = mime[mime.length - 1].trim();;
        /*  if (mime === "pdf" || mime === "PDF") {
            $.ajax({
              method: "POST",
              url: "/adminpanel/img/cinvertImage.php",
              data: { imageSrc: liter.liter.value, nameImg: imageName + ".gif" }
            }).done(function (d) {
              console.log(d)
            });
            imgLiter.attr("src", "/img/upload/" + imageName + ".gif");
            subInputJson.text('[{"name":"Изображение","content":"/img/upload/' + imageName + ".gif" + '"},{"name":"Содержание","content":""}]');
          } else {
            let imageN = "/img/upload/" + names.trim();
            imgLiter.attr("src", imageN);
            subInputJson.text('[{"name":"Изображение","content":"' + imageN + '"},{"name":"Содержание","content":""}]');
          }
*/
let imageN = "/img/upload/" + names.trim();
imgLiter.attr("src", imageN);
subInputJson.text('[{"name":"Изображение","content":"' + imageN + '"},{"name":"Содержание","content":""}]');

        }, { once: true });
        defaultLiter(liter);

      }
    }

    Array.from(sett).map((x, i) => x.addEventListener('click', (e) => {
      settinsPanel.style.display = "block";
      let imgE = document.getElementsByClassName("iconBaseDir")[i];
      let descriptImg = document.getElementsByClassName("descriptImg")[i];
      let descr = "<div class = 'col-sm'> <h3>Название</h3> <div class = 'textPanel'>" + descriptImg.innerHTML + "</div></div>";
      let images = "<div class = 'col-5'><img class = 'mt-3' width = '100%'  src = '" + "/img/upload/" + descriptImg.textContent.trim() + "'></div>"
      let links = "../img/upload/" + descriptImg.textContent.trim();
      settinsPanel.innerHTML = "<div class = 'col-sm'>" + closesvg + "<div class = 'row'>" + images + descr + "</div><div class = 'col-sm mt-3'> <h3> Ссылка на документ </h3> <div class = 'textPanel'>" + links + "</div>";
      let literB = { 
        liter: createInput("text", "Изображение", settinsPanel, "imageInput"), 
        names: createInput("text", "Название", settinsPanel, "nameInput"), 
        category: createInput("text", "Категория", settinsPanel, "categoryInput"),
        autor:createInput("text", "Автор", settinsPanel, "autorInput"),
        izd:createInput("text", "Издание", settinsPanel, "izdInput"),
        god:createInput("text", "Год", settinsPanel, "godInput"),
        str:createInput("text", "Страниц", settinsPanel, "strInput"),
        lin:createInput("text", "Скачать", settinsPanel, "linInput")
      };
      let saveComponent = createInput("submit", "Сохранить", settinsPanel, "saveInput");
      if (imgE.src != "http://" + window.location.host + "/img/icon/pdf.png") {
        document.getElementById("imageInput").value = imgE.src;
      }
      createImageLiter(saveComponent, literB, descriptImg.textContent);
      settinsPanel.querySelector(".closePanel").addEventListener('click', (e2) => {

        settinsPanel.style.display = "none"
      })
    }, { once: false }));
  }

  function createInput(types, textLabel, settinsPanel, id) {
    if (!document.getElementById(id)) {
      let div = document.body.appendChild(document.createElement("div"));
      let label = document.body.appendChild(document.createElement("label"));
      let input = document.body.appendChild(document.createElement("input"));
      settinsPanel.appendChild(div);
      div.appendChild(label);
      div.appendChild(input);
      div.className = "row";
      let forH = id;
      label.htmlFor = forH;
      label.className = "form-label text-left col-sm-3 ml-2";
      input.className = "form-control col-sm mr-3";
      input.id = forH;
      input.type = types;
      if(textLabel === "Сохранить"){
        input.value = textLabel;
      }else{
        label.innerText = textLabel;
      }
      return input;
    }
  }

}

function searhArtFiles(id) {
  let articles = document.getElementById(id);
  if (articles) {
    let = main_menu_cl = articles.getElementsByClassName('main_menu_cl');
    let searh = document.getElementById('searh');
    function searhEl(params) {
      const regex2 = new RegExp(searh.value, 'i');
      main_menu_cl = Array.from(main_menu_cl);
      let arr = main_menu_cl.filter((x) => x.innerHTML.match(regex2))
        .map((x2) => '<div class = "col-sm-2  images">' + x2.innerHTML + '</div>');
      articles.innerHTML = arr.join('');
      settins();
      discriptReplaceBr();
      fileInput();

    }

    searh.addEventListener('keyup', searhEl, false)
  }

}
$(document).ready(function () {
  discriptReplaceBr();
  fileInput();
  searhArtFiles("imageGalleryBox");
  settins();
});