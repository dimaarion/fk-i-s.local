function fileTitle() {
    function createEl(a) {
        return document.body.appendChild(document.createElement(a))
    }
    function selectorEl(a) {
        return document.querySelector(a);
    }
   
  let title = createEl('div');
  let images_block = selectorEl('.images_block');
  let img = images_block.getElementsByTagName('img');
  img =  Array.from(img);
    img.map((x) => images_block.insertBefore(createEl('div'), x))
    
}
$(document).ready(function () {
    fileTitle();
});