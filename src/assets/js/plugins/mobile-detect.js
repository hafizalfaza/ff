var md = new MobileDetect(window.navigator.userAgent);

if(md.mobile() !== null){
    
    //RECIPES PAGE

    var recipesRecipesCarousel = document.querySelector('.recipes-recipes-carousel');

    if(recipesRecipesCarousel){
        recipesRecipesCarousel.style.display = 'none';
    }

    var recipesPageSeeAll = document.querySelector('.recipes-see-all');

    if(recipesPageSeeAll){
        recipesPageSeeAll.classList.add('active');
    }

    var recipesRecipeCards = document.querySelector('.recipes-recipe-cards-container');
    
    if(recipesRecipeCards){
        recipesRecipeCards.classList.remove('active');
    }

    var recipesRecipeCardsCarouselMobile = document.querySelector('.recipes-recipe-cards-carousel-mobile');
    
    if(recipesRecipeCardsCarouselMobile){
        recipesRecipeCardsCarouselMobile.style.display = 'block';

        var flktyRecipesRecipeCardsCarouselMobile = new Flickity( recipesRecipeCardsCarouselMobile, {
            // options
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            wrapAround: true
          });
    }


    // ------------------------------------------------------------------------------


    //SWITCH & FLOW PAGE

    var snfCategoryCarousel = document.querySelector('.snf-category-carousel');
    
        if(snfCategoryCarousel){
            snfCategoryCarousel.style.display = 'none';
        }
    
        var snfPageSeeAll = document.querySelector('.snf-see-all');
    
        if(snfPageSeeAll){
            snfPageSeeAll.classList.add('active');
        }
    
        var snfRecipeCards = document.querySelector('.snf-recipe-cards-container');
        
        if(snfRecipeCards){
            snfRecipeCards.classList.remove('active');
        }
    
        var snfRecipeCardsCarouselMobile = document.querySelector('.snf-recipe-cards-carousel-mobile');
        
        if(snfRecipeCardsCarouselMobile){
            snfRecipeCardsCarouselMobile.style.display = 'block';
    
            var flktySnfRecipeCardsCarouselMobile = new Flickity( snfRecipeCardsCarouselMobile, {
                // options
                cellAlign: 'left',
                contain: true,
                pageDots: false,
                wrapAround: true
              });
        }
    
    
        // ------------------------------------------------------------------------------





        //RESOURCES & INSPIRATIONAL PAGE

    var rniCategoryCarousel = document.querySelector('.rni-category-carousel');
    
        if(rniCategoryCarousel){
            rniCategoryCarousel.style.display = 'none';
        }
    
        var rniPageSeeAll = document.querySelector('.rni-see-all');
    
        if(rniPageSeeAll){
            rniPageSeeAll.classList.add('active');
        }
    
        var rniRecipeCards = document.querySelector('.rni-recipe-cards-container');
        
        if(rniRecipeCards){
            rniRecipeCards.classList.remove('active');
        }
    
        var rniRecipeCardsCarouselMobile = document.querySelector('.rni-recipe-cards-carousel-mobile');
        
        if(rniRecipeCardsCarouselMobile){
            rniRecipeCardsCarouselMobile.style.display = 'block';
    
            var flktyRniRecipeCardsCarouselMobile = new Flickity( rniRecipeCardsCarouselMobile, {
                // options
                cellAlign: 'left',
                contain: true,
                pageDots: false,
                wrapAround: true
              });
        }
    
    
        // ------------------------------------------------------------------------------



        //TIPS & TRICKS PAGE

    var tntCategoryCarousel = document.querySelector('.tnt-category-carousel');
    
        if(tntCategoryCarousel){
            tntCategoryCarousel.style.display = 'none';
        }
    
        var tntPageSeeAll = document.querySelector('.tnt-see-all');
    
        if(tntPageSeeAll){
            tntPageSeeAll.classList.add('active');
        }
    
        var tntRecipeCards = document.querySelector('.tnt-recipe-cards-container');
        
        if(tntRecipeCards){
            tntRecipeCards.classList.remove('active');
        }
    
        var tntRecipeCardsCarouselMobile = document.querySelector('.tnt-recipe-cards-carousel-mobile');
        
        if(tntRecipeCardsCarouselMobile){
            tntRecipeCardsCarouselMobile.style.display = 'block';
    
            var flktyTntRecipeCardsCarouselMobile = new Flickity( tntRecipeCardsCarouselMobile, {
                // options
                cellAlign: 'left',
                contain: true,
                pageDots: false,
                wrapAround: true
              });
        }
    
    
        // ------------------------------------------------------------------------------

        //EVENT & CALENDAR PAGE

        var encPageSeeAll = document.querySelector('.enc-see-all');
        
        if(encPageSeeAll){
            encPageSeeAll.classList.add('active');
        }
        

        var encEventCards = document.querySelector('.events-container');
        
        if(encEventCards){
            encEventCards.classList.remove('active');
        }


        var encEventCardsCarouselMobile = document.querySelector('.enc-event-cards-carousel-mobile');
        
        if(encEventCardsCarouselMobile){
            encEventCardsCarouselMobile.style.display = 'block';
    
            var flktyEncEventCardsCarouselMobile = new Flickity( encEventCardsCarouselMobile, {
                // options
                cellAlign: 'left',
                contain: true,
                pageDots: false,
                wrapAround: true
              });
        }






        // NEWS PAGE


        var newsCardsCarousel = document.querySelector('.news-cards-carousel-mobile');
        
            if(newsCardsCarousel){

                newsCardsCarousel.style.display = 'block';

                var flktyNewsCards = new Flickity( newsCardsCarousel, {
                    // options
                    cellAlign: 'left',
                    contain: true,
                    pageDots: false,
                    wrapAround: true
                  });
            }


            var newsCards = document.querySelector('.news-cards-container');
            
                if(newsCards){
                    newsCards.classList.remove('active');
                }

        //-------------------------------------------------------------------------------------
}