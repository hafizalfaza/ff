var snfPage = (function(){
    return {
        init: function(){
            snfSection2();
        }
    }
})();


snfPage.init();


function onSeeAllSnfPage(){
    var snfPageSeeAll = document.querySelector('.snf-see-all')
    var snfCategoryCarousel = document.querySelector('.snf-category-carousel')
    var snfPageRecipeCards = document.querySelector('.snf-recipe-cards-container')
    var snfRecipeCardsCarouselMobile = document.querySelector('.snf-recipe-cards-carousel-mobile')

    snfPageSeeAll.classList.remove('active');
    snfCategoryCarousel.style.display = 'block';
    snfPageRecipeCards.classList.add('active');
    snfRecipeCardsCarouselMobile.style.display = 'none';
}