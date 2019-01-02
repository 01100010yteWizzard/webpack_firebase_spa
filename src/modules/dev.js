
var dev_frm=(function(){

    var removeClass;
    removeClass = function(element,className){
        element.classList.remove(className);
    };

    var addClass;
    addClass = function(element,className){
        element.classList.add(className);
    };

    var getElementBy;
    getElementBy = function(by, name, child=0){
        switch (by) {
            case 'id':
                return document.getElementById(name);
            case 'class':
                return document.getElementsByClassName(name)[child];
            default:
                break;
        }
    };

    var scrollPos;
    scrollPos = function(){
         scroll_pos=window.scrollY;
         return scroll_pos
    };

    let header;
    header = getElementBy('class','header');

    let h;
    h = getElementBy('class','h');
    
    var swapHeader;
    swapHeader = function(header_height){
        let scroll_pos;
        scroll_pos = scrollPos();
 
        if(scroll_pos<=header_height){
            addClass(header,'flex--vert');
            removeClass(header,'header_swap');
            removeClass(h,'h_swap');
            removeClass(header,'header_height');
        }

        if(scroll_pos>=header_height){
            removeClass(header,'flex--vert');
        
            addClass(header,'header_swap');
            addClass(h,'h_swap');
        }

        if(scroll_pos>=header_height && scroll_pos < header_height+400){
            removeClass(header,'header_height');
        }

        if(scroll_pos>=header_height+400){
            addClass(header,'header_height');
        }
    };

    return{
        swapHeader:swapHeader,
        getElementBy:getElementBy,
        addClass:addClass,
        removeClass:removeClass,
        scrollPos:scrollPos,
    };
})();


module.exports={
    dev_frm
}