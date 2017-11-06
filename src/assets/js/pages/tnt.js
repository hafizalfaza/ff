var tntPage = (function(){
    return {
        init: function(){
            tntSection2();
        }
    }
})();


tntPage.init();


function onSeeAllTntPage(){
    var tntPageSeeAll = document.querySelector('.tnt-see-all')
    var tntCategoryCarousel = document.querySelector('.tnt-category-carousel')
    var tntPageRecipeCards = document.querySelector('.tnt-recipe-cards-container')
    var tntRecipeCardsCarouselMobile = document.querySelector('.tnt-recipe-cards-carousel-mobile')

    tntPageSeeAll.classList.remove('active');
    tntCategoryCarousel.style.display = 'block';
    tntPageRecipeCards.classList.add('active');
    tntRecipeCardsCarouselMobile.style.display = 'none';
}