const categories = document.querySelectorAll('.ctg')



for(i=0 ; i<categories.length ; i++){
    categories[i].addEventListener('hover',function(){
        categories.forEach.classList.remove('.active');
        
    })
}