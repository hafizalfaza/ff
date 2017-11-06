
function rniSection2(){
    var rniCategoryCarousel = document.querySelector('.rni-category-carousel');
    if(rniCategoryCarousel){
        var flktyRniCategory = new Flickity( rniCategoryCarousel, {
            // options
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            wrapAround: true
          });


    
          var rniCategoryCarouselChildren = rniCategoryCarousel.children[0].children[0].childNodes;
          
          var flickityChildrenCount = rniCategoryCarouselChildren.length;
          
          rniCategoryCarouselChildren.forEach((carouselChild, i) => {
              carouselChild.classList.remove('is-selected');
          })
          
          var selectedProductIndex;
          
          flktyRniCategory.on( 'select', function() {
            rniCategoryCarouselChildren.forEach((carouselChild, i) => {
                  carouselChild.classList.remove('is-selected');
                  carouselChild.classList.remove('init-active');
              })
          
              selectedProductIndex = flktyRniCategory.selectedIndex
          
              var selectedIndexes = [];
              var unselectedIndexes = [];
          
              var selectedAdder = 0;
              var unselectedAdder = 0;
          
              rniCategoryCarouselChildren.forEach((carouselChild, i) => {
                  if(i<4){
          
                      if(selectedProductIndex + i < flickityChildrenCount){
                          selectedIndexes.push(selectedProductIndex + i);
                      }else{
                          selectedIndexes.push(selectedAdder);
                          selectedAdder+=1;
                      }
                  }
          
              })
          
              rniCategoryCarouselChildren.forEach((el, i) => {
                  if(selectedIndexes.indexOf(i) === -1) {
                      unselectedIndexes.push(i);
                  }
              })
          
          
              selectedIndexes.forEach((index, i) => {
                rniCategoryCarouselChildren[index].classList.remove(rniCategoryCarouselChildren[index].classList[1])
                rniCategoryCarouselChildren[index].classList.add('item-active-'+(i+1))
              })
          
              unselectedIndexes.forEach((index, i) => {
                rniCategoryCarouselChildren[index].classList.remove(rniCategoryCarouselChildren[index].classList[1])
              })
          
          })


    }



    //Carousel withn gradient colors

if(document.querySelector('.products-carousel')){
    
}



}

