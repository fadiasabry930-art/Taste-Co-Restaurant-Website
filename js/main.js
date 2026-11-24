let image=document.querySelectorAll(`.image`);
for (let image = 0; i < image.length; i++) {
    image[i].addEventListener(`click`,function(){
        if (this.classlist.contain(`zoomed`)) {
            this.classlist.remove(`zoomed`)
            
        }
        else{
            this.classlist.toggle(`zoomed`)
        }
    });
    
}