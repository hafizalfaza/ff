function encSection2(){
    
    var eventsCarousel = document.querySelector('.events-carousel');
  //EVENTS CAROUSEL
  
  if(eventsCarousel){

    if(eventsCarousel){
        var flktyEvents = new Flickity( eventsCarousel, {
          // options
          cellAlign: 'left',
          contain: true,
          pageDots: false,
          wrapAround: true
        });
      }

    var eventsCarouselChildren = document.querySelector('.events-carousel').children[0].children[0].childNodes;

    var flickityChildrenCount = eventsCarouselChildren.length;
    
    eventsCarouselChildren.forEach((carouselChild, i) => {
        carouselChild.classList.remove('is-selected');
    })
    
    var selectedProductIndex;
    
    flktyEvents.on( 'select', function() {
      eventsCarouselChildren.forEach((carouselChild, i) => {
            carouselChild.classList.remove('is-selected');
            carouselChild.classList.remove('init-active');
        })
    
        selectedProductIndex = flktyEvents.selectedIndex
    
        var selectedIndexes = [];
        var unselectedIndexes = [];
    
        var selectedAdder = 0;
        var unselectedAdder = 0;
    
        eventsCarouselChildren.forEach((carouselChild, i) => {
            if(i<3){
    
                if(selectedProductIndex + i < flickityChildrenCount){
                    selectedIndexes.push(selectedProductIndex + i);
                }else{
                    selectedIndexes.push(selectedAdder);
                    selectedAdder+=1;
                }
            }
    
        })
    
        eventsCarouselChildren.forEach((el, i) => {
            if(selectedIndexes.indexOf(i) === -1) {
                unselectedIndexes.push(i);
            }
        })
    
    
        selectedIndexes.forEach((index, i) => {
          eventsCarouselChildren[index].classList.remove(eventsCarouselChildren[index].classList[1])
          eventsCarouselChildren[index].classList.add('item-active-'+(i+1))
        })
    
        unselectedIndexes.forEach((index, i) => {
          eventsCarouselChildren[index].classList.remove(eventsCarouselChildren[index].classList[1])
        })
    
    })
  }
  
  
  //CALENDAR CAROUSEL
  
  var calendarCarousel = document.querySelector('.calendar-carousel');
  
  if(calendarCarousel){
    var flktyCalendar = new Flickity( calendarCarousel, {
      // options
      cellAlign: 'left',
      contain: true,
      pageDots: false,
      wrapAround: true
    });
  }

}







