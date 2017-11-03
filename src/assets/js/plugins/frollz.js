(function(){
    var frollzMoveEl = document.querySelectorAll('.frollz-move');
    var frollzMoveElArray = [];
    
    frollzMoveEl.forEach((el) => {
        var viewportOffset = el.getBoundingClientRect();
        var top = viewportOffset.y;
        var left = viewportOffset.x;
        var height = viewportOffset.height;
  
        var rotateSpeed = el.getAttribute('rotate-speed') || 1;
        var rotateDirection = el.getAttribute('rotate-direction');
        var rotateLimit = el.getAttribute('rotate-length');
  
        var shiftSpeed = el.getAttribute('shift-speed') || 1;
        var shiftDirection = el.getAttribute('shift-direction');
        var shiftLimit = el.getAttribute('shift-length');
  
        var triggerOffset = el.getAttribute('trigger-offset') || 0;
        
        var isRotateActive = el.classList.contains('rotate');
        var isShiftActive = el.classList.contains('shift');
    
        frollzMoveElArray.push({
          el,
          top,
          height,
          rotateSpeed,
          rotateDirection,
          rotateLimit,
          shiftSpeed,
          shiftDirection,
          shiftLimit,
          triggerOffset,        
          isRotateActive,
          isShiftActive
        });
    })
  
    function frollzMove(){
  
        const wScroll = window.scrollY;
  
        frollzMoveElArray.forEach((frollzMoveEl, i) => {
            if(wScroll >= frollzMoveEl.top - frollzMoveEl.triggerOffset) {
        
                var rotateValue = (wScroll - (frollzMoveEl.top - frollzMoveEl.triggerOffset))*frollzMoveEl.rotateSpeed;
            
                if(frollzMoveEl.rotateDirection === 'counter-clockwise'){
                    rotateValue = rotateValue * (-1);
                }
            
                var shiftValue = (wScroll - (frollzMoveEl.top - frollzMoveEl.triggerOffset))*frollzMoveEl.shiftSpeed;
                var shiftValueMatrix;
            
                if(frollzMoveEl.shiftDirection==='left'){
    
                shiftValueMatrix = (-shiftValue)+"px, 0, 0";
                shiftValueLengthMatrix = (-frollzMoveEl.shiftLimit)+"px, 0, 0";
    
    
                }else if (frollzMoveEl.shiftDirection==='left-top' || frollzMoveEl.shiftDirection==='top-left'){
    
                shiftValueMatrix = (-shiftValue)+"px, "+(-shiftValue)+"px, 0";
                shiftValueLengthMatrix = (-frollzMoveEl.shiftLimit)+"px, "+(-frollzMoveEl.shiftLimit)+"px, 0";
    
                }else if (frollzMoveEl.shiftDirection==='top'){
    
                shiftValueMatrix = "0, "+(-shiftValue)+"px, 0";
                shiftValueLengthMatrix = "0, "+(-frollzMoveEl.shiftLimit)+"px, 0";
    
    
                }else if (frollzMoveEl.shiftDirection==='right-top' || frollzMoveEl.shiftDirection==='top-right'){
    
                shiftValueMatrix = (shiftValue)+"px, "+(-shiftValue)+"px, 0";
                shiftValueLengthMatrix = (frollzMoveEl.shiftLimit)+"px, "+(-frollzMoveEl.shiftLimit)+"px, 0";
    
    
                } else if (frollzMoveEl.shiftDirection==='right'){
    
                shiftValueMatrix = (shiftValue)+"px, 0, 0";
                shiftValueLengthMatrix = (frollzMoveEl.shiftLimit)+"px, 0, 0";
    
    
                } else if (frollzMoveEl.shiftDirection==='right-bottom' || frollzMoveEl.shiftDirection==='bottom-right'){
    
                shiftValueMatrix = (shiftValue)+"px, "+(shiftValue)+"px, 0";
                shiftValueLengthMatrix = (frollzMoveEl.shiftLimit)+"px, "+(frollzMoveEl.shiftLimit)+"px, 0";
    
                }else if (frollzMoveEl.shiftDirection==='bottom'){
    
                shiftValueMatrix = "0, "+(shiftValue)+"px, 0";
                shiftValueLengthMatrix = "0, "+(frollzMoveEl.shiftLimit)+"px, 0";
    
                } else if (frollzMoveEl.shiftDirection==='left-bottom' || frollzMoveEl.shiftDirection==='bottom-left'){
    
                shiftValueMatrix = (-shiftValue)+"px, "+(shiftValue)+"px, 0";
                shiftValueLengthMatrix = (-frollzMoveEl.shiftLimit)+"px, "+(frollzMoveEl.shiftLimit)+"px, 0";
    
                }else{
                shiftValueMatrix = (shiftValue)+"px, 0, 0";
                shiftValueLengthMatrix = (frollzMoveEl.shiftLimit)+"px, 0, 0";
                }
            
                var transformExpression = "";
                
                if(frollzMoveEl.isShiftActive && !frollzMoveEl.shiftLimit){
                    transformExpression +=  " translate3d("+(shiftValueMatrix)+") ";
                }else if (frollzMoveEl.isShiftActive && frollzMoveEl.shiftLimit){
                if(shiftValue <= frollzMoveEl.shiftLimit){
                    transformExpression +=  " translate3d("+(shiftValueMatrix)+") ";
                }else{
                    transformExpression +=  " translate3d("+(shiftValueLengthMatrix)+") ";
                }
                }
    
            
                if(frollzMoveEl.isRotateActive && !frollzMoveEl.rotateLimit){
                    transformExpression +=  " rotate("+(rotateValue)+"deg) ";
                }else if (frollzMoveEl.isRotateActive && frollzMoveEl.rotateLimit){
                if(rotateValue <= frollzMoveEl.rotateLimit){
                    transformExpression +=  " rotate("+(rotateValue)+"deg) ";
                }else{
                    transformExpression +=  " rotate("+(frollzMoveEl.rotateLimit)+"deg) ";
                }
                }
    
                frollzMoveEl.el.style.transform = transformExpression;
            }
        
        });
    };
  
    window.addEventListener('scroll', frollzMove);
  })();