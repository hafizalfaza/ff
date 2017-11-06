var recipesPage = (function(){
    return {
        init: function(){
            recipesSection2();
        }
    }
})();


recipesPage.init();

function onSeeAllRecipesPage(){
    var recipesPageSeeAll = document.querySelector('.recipes-see-all')
    var recipesRecipesCarousel = document.querySelector('.recipes-recipes-carousel')
    var recipesPageRecipeCards = document.querySelector('.recipes-recipe-cards-container')
    var recipesRecipeCardsCarouselMobile = document.querySelector('.recipes-recipe-cards-carousel-mobile')

    recipesPageSeeAll.classList.remove('active');
    recipesRecipesCarousel.style.display = 'block';
    recipesPageRecipeCards.classList.add('active');
    recipesRecipeCardsCarouselMobile.style.display = 'none';
}