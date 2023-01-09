const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryImgs = document.querySelectorAll('.gallery-img');
let  currentselected = 0;


prevBtn.addEventListener('click',function(){
    galleryImgs[currentselected].classList.remove("active");
    currentselected--;
    galleryImgs[currentselected].classList.add("active");
    nextBtn.disabled = false;
     if(currentselected === 0){
         prevBtn.disabled =true;
     }

});


nextBtn.addEventListener('click',function(){
    
    galleryImgs[currentselected].classList.remove("active");
    currentselected = currentselected + 1;

    galleryImgs[currentselected].classList.add("active");
    prevBtn.disabled =false;

    if (gallery.length === selected +1){
        nextBtn.disabled =true;
    }
});