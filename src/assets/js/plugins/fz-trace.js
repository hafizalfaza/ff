var fzTraceSetPositionArray = [];
var fzTopTraceSetPositionArray;

(function(){
    var tracePathEl = document.querySelectorAll('.trace-path');
    var tracePathElArray = [];

    tracePathEl.forEach((el) => {
        var viewportOffset = el.getBoundingClientRect();
        var top = viewportOffset.y;
        var left = viewportOffset.x;
        var height = viewportOffset.height;
        var length = el.getTotalLength();
      
        el.style.strokeDasharray = length + ' ' + length;
        el.style.strokeDashoffset = length;
      
        tracePathElArray.push({
          el,
          top,
          height,
          length,
          stopped: true
        })
      
      });

    var fzTraceFuncArray = [];


    tracePathElArray.forEach((tracePathEl, i) => {

        
        function fzTraceFunc(){
            var scrollTop = window.scrollY;
            
            if(scrollTop >= tracePathEl.top - 400) {
                const scrollDiff = (scrollTop + 400) - tracePathEl.top
                const offsetVal = scrollDiff * (tracePathEl.length/tracePathEl.height)
                if(tracePathEl.length - offsetVal >=0){

                    function animate(){
                        const offsetValString = (Math.round(tracePathEl.length - offsetVal)).toString();
                        tracePathEl.el.style.strokeDashoffset = offsetValString;
                    }

                    requestAnimationFrame(animate);

                }else{
                  
                    function animate(){
                        const offsetValString = (Math.round(0).toString());
                        tracePathEl.el.style.strokeDashoffset = offsetValString;
                    }

                    
                    requestAnimationFrame(animate);
                    
                    

                }
              }else{
               
                function animate(){
                    const offsetValString = (Math.round(tracePathEl.length)).toString();
                    tracePathEl.el.style.strokeDashoffset = offsetValString;

                    tracePathEl.stopped = false;
                }

 
                    requestAnimationFrame(animate);
                    tracePathEl.stopped = true;
                
              }

        }

        fzTraceFuncArray.push(fzTraceFunc)
        
          window.addEventListener('scroll', fzTraceFuncArray[i]);
  
          fzTraceSetPositionArray.push(fzTraceFunc);

        
      })
})();


