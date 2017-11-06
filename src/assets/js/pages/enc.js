var encPage = (function(){
    return {
        init: function(){
            encSection2();
        }
    }
})();


encPage.init();

function onSeeAllEncPage(){
    var encPageSeeAll = document.querySelector('.enc-see-all')
    var encEvents = document.querySelector('.events-container')
    var encEventsCarousel = document.querySelector('.events-carousel')
    var encEventCardsCarouselMobile = document.querySelector('.enc-event-cards-carousel-mobile')

    encPageSeeAll.classList.remove('active');
    encEvents.classList.add('active');
    encEventCardsCarouselMobile.style.display = 'none';
    encEventsCarousel.style.display = 'none';
}