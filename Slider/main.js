var container = document.getElementById('container');
var images = ['k1.jpg','k2.jpg','k3.jpg'];
var allimages = images.length;
var current = 0;
container.addEventListener('click',start_stop);
var test = 0;
function slide() {
    container.innerHTML = '<img src="'+images[current]+'" />'
    current++;
    if (current == allimages) {
        current = 0;
    }
}
slide();
var loop = setInterval(slide,2000);
function start_stop() {
    if (test === 0) {
        clearInterval(loop);
        test++;
        container.setAttribute('title','start slide');
  }else{
    loop = setInterval(slide,2000);
    test--;
    container.setAttribute('title','stop slide');
}

}