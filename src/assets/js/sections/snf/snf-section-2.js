
function snfSection2(){
    var snfCategoryCarousel = document.querySelector('.snf-category-carousel');
    if(snfCategoryCarousel){
        var flktySnfCategory = new Flickity( snfCategoryCarousel, {
            // options
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            wrapAround: true
          });


    
          var snfCategoryCarouselChildren = snfCategoryCarousel.children[0].children[0].childNodes;
          
          var flickityChildrenCount = snfCategoryCarouselChildren.length;
          
          snfCategoryCarouselChildren.forEach((carouselChild, i) => {
              carouselChild.classList.remove('is-selected');
          })
          
          var selectedProductIndex;
          
          flktySnfCategory.on( 'select', function() {
            snfCategoryCarouselChildren.forEach((carouselChild, i) => {
                  carouselChild.classList.remove('is-selected');
                  carouselChild.classList.remove('init-active');
              })
          
              selectedProductIndex = flktySnfCategory.selectedIndex
          
              var selectedIndexes = [];
              var unselectedIndexes = [];
          
              var selectedAdder = 0;
              var unselectedAdder = 0;
          
              snfCategoryCarouselChildren.forEach((carouselChild, i) => {
                  if(i<4){
          
                      if(selectedProductIndex + i < flickityChildrenCount){
                          selectedIndexes.push(selectedProductIndex + i);
                      }else{
                          selectedIndexes.push(selectedAdder);
                          selectedAdder+=1;
                      }
                  }
          
              })
          
              snfCategoryCarouselChildren.forEach((el, i) => {
                  if(selectedIndexes.indexOf(i) === -1) {
                      unselectedIndexes.push(i);
                  }
              })
          
          
              selectedIndexes.forEach((index, i) => {
                snfCategoryCarouselChildren[index].classList.remove(snfCategoryCarouselChildren[index].classList[1])
                snfCategoryCarouselChildren[index].classList.add('item-active-'+(i+1))
              })
          
              unselectedIndexes.forEach((index, i) => {
                snfCategoryCarouselChildren[index].classList.remove(snfCategoryCarouselChildren[index].classList[1])
              })
          
          })


    }



    //Carousel withn gradient colors

if(document.querySelector('.products-carousel')){
    
}



}

