window.onscroll = () => {
    this.scrollY > 40 ? document.querySelector('header').classList.add("bg") : document.querySelector('header').classList.remove("bg")
};




const PopUp = document.querySelector('#PopUp');
const PopUpContent = document.querySelector('.PopUpContent');
const PopUpClose = document.querySelector('#PopUpClose');

PopUp.addEventListener('click',()=>{
    PopUpContent.classList.add('open')
});
PopUpClose.addEventListener('click',()=>{
    PopUpContent.classList.remove('open');
    var iframes = PopUpContent.getElementsByTagName("iframe");
    if (iframes != null) {
        for (var i = 0; i < iframes.length; i++) {
            iframes[i].src = iframes[i].src; 
        }
    }
});
