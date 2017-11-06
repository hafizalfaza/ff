
function tntSection2(){
    var tntCategoryCarousel = document.querySelector('.tnt-category-carousel');
    if(tntCategoryCarousel){
        var flktyTntCategory = new Flickity( tntCategoryCarousel, {
            // options
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            wrapAround: true
          });


    
          var tntCategoryCarouselChildren = tntCategoryCarousel.children[0].children[0].childNodes;
          
          var flickityChildrenCount = tntCategoryCarouselChildren.length;
          
          tntCategoryCarouselChildren.forEach((carouselChild, i) => {
              carouselChild.classList.remove('is-selected');
          })
          
          var selectedProductIndex;
          
          flktyTntCategory.on( 'select', function() {
            tntCategoryCarouselChildren.forEach((carouselChild, i) => {
                  carouselChild.classList.remove('is-selected');
                  carouselChild.classList.remove('init-active');
              })
          
              selectedProductIndex = flktyTntCategory.selectedIndex
          
              var selectedIndexes = [];
              var unselectedIndexes = [];
          
              var selectedAdder = 0;
              var unselectedAdder = 0;
          
              tntCategoryCarouselChildren.forEach((carouselChild, i) => {
                  if(i<4){
          
                      if(selectedProductIndex + i < flickityChildrenCount){
                          selectedIndexes.push(selectedProductIndex + i);
                      }else{
                          selectedIndexes.push(selectedAdder);
                          selectedAdder+=1;
                      }
                  }
          
              })
          
              tntCategoryCarouselChildren.forEach((el, i) => {
                  if(selectedIndexes.indexOf(i) === -1) {
                      unselectedIndexes.push(i);
                  }
              })
          
          
              selectedIndexes.forEach((index, i) => {
                tntCategoryCarouselChildren[index].classList.remove(tntCategoryCarouselChildren[index].classList[1])
                tntCategoryCarouselChildren[index].classList.add('item-active-'+(i+1))
              })
          
              unselectedIndexes.forEach((index, i) => {
                tntCategoryCarouselChildren[index].classList.remove(tntCategoryCarouselChildren[index].classList[1])
              })
          
          })


    }



    //Carousel withn gradient colors

if(document.querySelector('.products-carousel')){
    
}



}

