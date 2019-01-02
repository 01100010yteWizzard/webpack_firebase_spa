const app={
    pages:[],
    show: new Event('show'),
    navlinks:[],
    init: function(){
        navlinks=document.querySelectorAll('.nav-link');
        navlinks.forEach((link)=>{
            link.addEventListener('click', app.navTo);
        })
    },
    navTo: function(e){
        e.preventDefault();
        document.querySelector('.active').classList.remove('active');
        let a=e.target;
        let pageName=a.getAttribute('data-target')
        if(pageName==='header'){
            var ca=navlinks[1];
            ca.classList.add('active');
            pageName=ca.getAttribute('data-target')
            document.getElementById(pageName).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }else{
            a.classList.add('active');
            document.getElementById(pageName).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }
        
        console.log(pageName);
    }
}
module.exports={
    app
}