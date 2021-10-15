class Articles{

    selectArtArr(){
        let s = document.getElementsByClassName("content");
        return s = Array.from(s);
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

    subart(){
        if(this.selectArtArr() !== null){
            this.selectArtArr().map((x)=>createList(x));
            function createList(x) {
                let divBox = document.createElement("div");
                document.body.appendChild(divBox);
               let div = x.getElementsByTagName("div");
               div = Array.from(div);
               div.map((d)=>{
                d.removeAttribute("id");
                d.className = "col-sm text-justify"

               })

               x.appendChild(divBox);
               divBox.className = "row";




console.log(x);
            }
        }


    }


   display(){
    this.searhArt();
    this.menuArtorArt();
    this.subart();
   }
}
const articles = new Articles();







$(document).ready(function () {
    articles.display();
});