let fireBase =require('./modules/firebase').fireBase;
fireBase.init('cloudfirestore-59681.firebaseapp.com');

let app=require('./modules/app').app;

let dev_frm = require('./modules/dev').dev_frm;

var header;
var height;

let pages=[];

function getNav(){
    let navlinks=document.querySelectorAll('.nav-link');
    navlinks.forEach(link => {
        let data_target=link.getAttribute('data-target');
        let page=dev_frm.getElementBy('id',data_target);
        if(page!=null){
            let el={
                nav:link,
                id:data_target,
                scrollPos:page.offsetTop,
            }
            pages.push(el);
            console.log(pages);
            console.log(JSON.stringify(pages,0,'  '));
        }  
    }); 
}

document.addEventListener('DOMContentLoaded', ()=>{
    app.init();
    getNav();

    header=dev_frm.getElementBy('class','header');
    height=header.clientHeight;
  
});

function getCurrentLink(scrollPos){
    pages.forEach(page => {
        if(scrollPos >= page.scrollPos){
            document.querySelector('.active').classList.remove('active');
            page.nav.classList.add('active');
        }    
    });
}

document.addEventListener('scroll', e=>{
    dev_frm.swapHeader(height);   
    var scrollPos=dev_frm.scrollPos();
    getCurrentLink(scrollPos);

});