var fireBase=(function(){
    //project setup
    var config=[{
        apiKey: "AIzaSyC2LO9r6M_junJVVEOfcS3c9_vfsKqxpds",
        authDomain: "cloudfirestore-59681.firebaseapp.com",
        databaseURL: "https://cloudfirestore-59681.firebaseio.com",
        projectId: "cloudfirestore-59681",
        storageBucket: "cloudfirestore-59681.appspot.com",
        messagingSenderId: "1073536411829"
    },{
        apiKey: "AIzaSyBtfjkDLYIIRTJWLX-pEfY--_U_TlnOD4I",
        authDomain: "andy-924a8.firebaseapp.com",
        databaseURL: "https://andy-924a8.firebaseio.com",
        projectId: "andy-924a8",
        storageBucket: "andy-924a8.appspot.com",
        messagingSenderId: "909890950851"
    }];

    //get the correct init via authDomain
    var getConfig=function(authDomain){
        config.forEach(pr=>{
            if(pr.authDomain.includes(authDomain)){
                firebase.initializeApp(pr);
                console.log(firebase);
            }
        })
    };

    //public Init Function
    var init=function(authDomain){
        getConfig(authDomain);
    };

    return {
        init:init
    };

})();

module.exports={
    fireBase
}