const imgs = document.querySelectorAll('.header-slider ul img'); //select the slider and all images
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0; //when n = 0, displays the first image. Previous and Next button will increase/decrease the value of the n

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none'; //first the function hides all the images
    }
    imgs[n].style.display = 'block';//the particular image in [n] will be visible
}
changeSlide();

prev_btn.addEventListener('click', (e) => {
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})

next_btn.addEventListener('click', (e) => {
    if(n < imgs.length -1 ){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})