class Redactor {

    baseArr = [];

    getClass(c) {
        return Array.from(document.getElementsByClassName(c));
    }

    getId(id) {
        return document.getElementById(id);
    }



    getValues() {

        this.getClass("subLabelJson").map((x, i) => {
            this.baseArr[i] = { name: x.innerHTML, content: this.getClass("subInputJson")[i].innerHTML }
            let textArera = this.getId("sub_art_content_json");
            textArera.innerHTML = JSON.stringify(this.baseArr)

        });


        this.getClass("subInputJson").map((x, i) => {
            x.addEventListener("keyup", (e) => {
                this.baseArr[i] = { name: this.getClass("subLabelJson")[i].innerHTML, content: e.target.value }
                let textArera = this.getId("sub_art_content_json");
                textArera.innerHTML = JSON.stringify(this.baseArr)
            }, false)
        });
        if (this.getId("addPanel") !== null) {
            this.getId("addPanel").setAttribute("style", "display:none;");
        }

    }

    addPanel() {
        let addPanel = this.getId("addPanel");
        let svg = addPanel.getElementsByTagName("svg")[0];

        svg.addEventListener("click", (e) => {
            if (this.getId("addPanelInput") == undefined) {
                let addPanelInput = document.createElement("div");
                document.body.appendChild(addPanelInput);
                addPanel.appendChild(addPanelInput);
                addPanelInput.id = "addPanelInput";
                addPanelInput.className = "text-left"
                addPanelInput.innerHTML = '<div class = "row"><div class = "col-sm "><label>Название</label><input id = "addLabel" type = "text" class = "form-control col-sm"/></div><div class = "col-sm"><label>Название</label><input type = "text" id = "addInput" class = "form-control col-sm"/></div><div class = "col-sm mt-2"><label class = ""></label><input type = "button" value = "Добавить" id = "btnAddPanel"  class = "form-control  col-sm"/></div></div>'
                let btnAddPanel = this.getId("btnAddPanel");
                btnAddPanel.addEventListener("click", () => {
                    let label = document.createElement("label");
                    let input = document.createElement("input");
                    document.body.appendChild(label);
                    document.body.appendChild(input)
                    this.getId("subCntentPanel").appendChild(label);
                    this.getId("subCntentPanel").appendChild(input);
                    label.className = "form-label subLabelJson";
                    label.innerText = this.getId("addLabel").value
                    input.className = "form-control subInputJson";
                    input.value = this.getId("addInput").value;
                    this.getValues();
                    //  this.baseArr.push({name:this.getId("addLabel").value, content:this.getId("addInput").value})
                }, false)

            } else {
                this.getId("addPanelInput").remove();
            }
            // let label = document.createElement("label");
            //document.body.appendChild(label);
            //this.getId("subCntentPanel").appendChild(label);
        }, false)



    }

    mainPanel() {
        let divButton = document.querySelector("#menunain div");
        if (divButton != undefined) {
            window.addEventListener("scroll", (e) => {
                if (window.scrollY > 200) {
                    divButton.setAttribute("style", "position: fixed;background-color: #ffffff;z-index: 10000;margin-left: -270px;margin-top:-90px !important; ");
                } else {
                    divButton.removeAttribute("style");
                }

            })

        }

    }

    display() {

        //  this.addPanel() 
        this.getValues();
        this.mainPanel();
    }
}



$(document).ready(function () {
    const r = new Redactor();
    r.display();

});