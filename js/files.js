function discriptReplaceBr() {
    let imagesBlock = document.getElementsByClassName('images_block')[0];
    if (imagesBlock) {
        let descriptImg = imagesBlock.getElementsByClassName('descriptImg');
        descriptImg = Array.from(descriptImg);
        descriptImg.map((x) => x.innerHTML = x.innerHTML.replace(/[_]/g, '_<br>'));
        descriptImg.map((x) => x.innerHTML = x.innerHTML.replace(/[-]/g, '-<br>'));
        
    }

}
$(document).ready(function () {
    discriptReplaceBr();
});