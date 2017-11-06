
function recipesSection2(){
    var recipesRecipesCarousel = document.querySelector('.recipes-recipes-carousel');
    if(recipesRecipesCarousel){
        var flktyRecipesRecipes = new Flickity( recipesRecipesCarousel, {
            // options
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            wrapAround: true
          });


    
          var recipesRecipesCarouselChildren = recipesRecipesCarousel.children[0].children[0].childNodes;
          
          var flickityChildrenCount = recipesRecipesCarouselChildren.length;
          
          recipesRecipesCarouselChildren.forEach((carouselChild, i) => {
              carouselChild.classList.remove('is-selected');
          })
          
          var selectedProductIndex;
          
          flktyRecipesRecipes.on( 'select', function() {
            recipesRecipesCarouselChildren.forEach((carouselChild, i) => {
                  carouselChild.classList.remove('is-selected');
                  carouselChild.classList.remove('init-active');
              })
          
              selectedProductIndex = flktyRecipesRecipes.selectedIndex
          
              var selectedIndexes = [];
              var unselectedIndexes = [];
          
              var selectedAdder = 0;
              var unselectedAdder = 0;
          
              recipesRecipesCarouselChildren.forEach((carouselChild, i) => {
                  if(i<4){
          
                      if(selectedProductIndex + i < flickityChildrenCount){
                          selectedIndexes.push(selectedProductIndex + i);
                      }else{
                          selectedIndexes.push(selectedAdder);
                          selectedAdder+=1;
                      }
                  }
          
              })
          
              recipesRecipesCarouselChildren.forEach((el, i) => {
                  if(selectedIndexes.indexOf(i) === -1) {
                      unselectedIndexes.push(i);
                  }
              })
          
          
              selectedIndexes.forEach((index, i) => {
                recipesRecipesCarouselChildren[index].classList.remove(recipesRecipesCarouselChildren[index].classList[1])
                recipesRecipesCarouselChildren[index].classList.add('item-active-'+(i+1))
              })
          
              unselectedIndexes.forEach((index, i) => {
                recipesRecipesCarouselChildren[index].classList.remove(recipesRecipesCarouselChildren[index].classList[1])
              })
          
          })


    }



    //Carousel withn gradient colors

if(document.querySelector('.products-carousel')){
    
}



}

