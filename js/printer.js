class Printer {

    display() {
        let printer = document.querySelector(".printer");
        let container = document.querySelector("article");
        let dopArt = document.querySelector(".dopArt");
        let fileDocx = document.querySelector(".fileDocx");
        if (printer) {
            printer.addEventListener("click", () => {
                printer.setAttribute("style", "display:none;");
                dopArt.setAttribute("style", "display:none;");
                fileDocx.setAttribute("style", "display:none;");
                //container.setAttribute("style","font-size:14pt !important;text-align:justify !important;");
                Array.from(container.getElementsByTagName("div")).map((x) => { x.style.fontSize = "14pt"; x.style.textAlign = "justify" });
                Array.from(container.getElementsByTagName("p")).map((x) => x.style.fontSize = "14pt");
                Array.from(container.getElementsByTagName("span")).map((x) => x.style.fontSize = "14pt");
                Array.from(container.getElementsByTagName("h1")).map((x) => x.style.textAlign = "center");
                let WinPrint = window.open('', '', 'left=50,top=50,toolbar=0,scrollbars=1,status=0');
                let prtCSS = '<link rel="stylesheet" href="/css/text.css" type="text/css" />';
                let prtCSSImg = '<link rel="stylesheet" href="/css/image.css" type="text/css" />';
                let prtCSSBootstrap = '<link rel="stylesheet" href="/bootstrap/css/bootstrap.css" type="text/css" />';
                WinPrint.document.write(prtCSS);
                WinPrint.document.write(prtCSSImg);
                WinPrint.document.write(prtCSSBootstrap);
                WinPrint.document.writeln(container.innerHTML);
                WinPrint.document.close();
                WinPrint.focus();
                WinPrint.print();
                WinPrint.close();
                if (WinPrint.closed == true) {
                    printer.setAttribute("style", "display:block;");
                    dopArt.setAttribute("style", "display:block;");
                    fileDocx.setAttribute("style", "display:block;");
                    Array.from(container.getElementsByTagName("div")).map((x) => { x.style.fontSize = ""; x.style.textAlign = ""; x.getAttribute("style") != null ? x.getAttribute("style") == "" ? x.removeAttribute("style") : "" : ""; });
                    Array.from(container.getElementsByTagName("p")).map((x) => { x.style.fontSize = ""; x.getAttribute("style") != null ? x.getAttribute("style") == "" ? x.removeAttribute("style") : "" : ""; });
                    Array.from(container.getElementsByTagName("span")).map((x) => x.style.fontSize = "");
                    Array.from(container.getElementsByTagName("h1")).map((x) => { x.style.textAlign = ""; x.getAttribute("style") != null ? x.getAttribute("style") == "" ? x.removeAttribute("style") : "" : ""; });
                }
                console.log(WinPrint.closed)
            })
        }




    }
}
$(document).ready(function () {
    const printer = new Printer();
    printer.display();
})