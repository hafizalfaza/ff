var rniPage = (function(){
    return {
        init: function(){
            rniSection2();
        }
    }
})();


rniPage.init();


function onSeeAllRniPage(){
    var rniPageSeeAll = document.querySelector('.rni-see-all')
    var rniCategoryCarousel = document.querySelector('.rni-category-carousel')
    var rniPageRecipeCards = document.querySelector('.rni-recipe-cards-container')
    var rniRecipeCardsCarouselMobile = document.querySelector('.rni-recipe-cards-carousel-mobile')

    rniPageSeeAll.classList.remove('active');
    rniCategoryCarousel.style.display = 'block';
    rniPageRecipeCards.classList.add('active');
    rniRecipeCardsCarouselMobile.style.display = 'none';
}