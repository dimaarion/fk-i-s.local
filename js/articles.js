class Articles {

    selectArtArr() {
        let s = document.getElementsByClassName("content");
        return s = Array.from(s);
    }

    clearArt() {
        let container = document.querySelector("article");
        if (container) {
            //Array.from(container.getElementsByTagName("div")).map((x) => {x.style.fontSize = "";x.getAttribute("style") != null?x.getAttribute("style") == ""?x.removeAttribute("style"):"":"";});
            Array.from(container.getElementsByTagName("p")).map((x) => { x.style.fontSize = ""; x.getAttribute("style") != null ? x.getAttribute("style") == "" ? x.removeAttribute("style") : "" : ""; });
            Array.from(container.getElementsByTagName("span")).map((x) => { x.getAttribute("style") != null ? x.removeAttribute("style") : ""; });
            Array.from(container.getElementsByTagName("br")).map((x) => { x.getAttribute("style") != null ? x.removeAttribute("style") : ""; });
        }

    }

    searhArt() {
        let articles = document.getElementById('articles');

        if (articles) {
            let main_menu_cl = articles.getElementsByClassName('main_menu_cl');
            let searh = document.getElementById('searh');
            function searhEl(params) {
                const regex2 = new RegExp(searh.value, 'i');
                main_menu_cl = Array.from(main_menu_cl);
                let arr = main_menu_cl.filter((x) => x.innerHTML.match(regex2))
                    .map((x2) => '<div class = "row">' + x2.innerHTML + '</div>');
                articles.innerHTML = arr.join('');

            }

            searh.addEventListener('keypress', searhEl, false)
        }

    }

    menuArtorArt() {
        let menuArt = document.getElementById('menuArt');
        let privArt = document.getElementById('privArt');
        if (menuArt != undefined && privArt != undefined) {
            let update_menu_art = menuArt.getElementsByClassName('update_menu_art');
            update_menu_art = Array.from(update_menu_art);
            let new_menu_art = privArt.getElementsByClassName('new_menu_art');
            new_menu_art = Array.from(new_menu_art);
            for (let i = 0; i < update_menu_art.length; i++) {

                let g = new_menu_art.filter((x) => x.children[0].value == update_menu_art[i].children[0].value);
                g[0].style.display = 'none';
            }
        }
    }

    subart() {
        if (this.selectArtArr() !== null) {
            this.selectArtArr().map((x) => createList(x));
            function createList(x) {
                let divBox = document.createElement("div");
                document.body.appendChild(divBox);
                let div = x.getElementsByTagName("div");
                div = Array.from(div);
                div.map((d) => {
                    d.removeAttribute("id");
                    d.className = "col-sm text-justify"

                })

                x.appendChild(divBox);
                divBox.className = "row";





            }
        }


    }
    createDocx() {

        function exportHTML(e) {
            let header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
                "xmlns:w='urn:schemas-microsoft-com:office:word' " +
                "xmlns='http://www.w3.org/TR/REC-html40'>" +
                "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
            let footer = "</body></html>";
          
            let sourceHTML = header + document.querySelector(e).innerHTML + footer;

            let source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
            let fileDownload = document.createElement("a");
            document.body.appendChild(fileDownload);
            fileDownload.href = source;
            fileDownload.download = document.querySelector("h1") != undefined || document.querySelector("h1") != null ? document.querySelector("h1").innerText + ".doc" : "document.doc";
            fileDownload.click();
            document.body.removeChild(fileDownload);
        }

        let fileDocx = document.querySelector(".fileDocx");
        if (fileDocx) {
            fileDocx.addEventListener("click", () => exportHTML("article"))
        }

    }


    display() {
        //this.searhArt();
        this.menuArtorArt();
        this.createDocx();
        //this.clearArt();
        //this.subart();
    }
}
const articles = new Articles();







$(document).ready(function () {
    articles.display();
});