/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let fireBase =__webpack_require__(/*! ./modules/firebase */ \"./src/modules/firebase.js\").fireBase;\r\nfireBase.init('cloudfirestore-59681.firebaseapp.com');\r\n\r\nlet app=__webpack_require__(/*! ./modules/app */ \"./src/modules/app.js\").app;\r\n\r\nlet dev_frm = __webpack_require__(/*! ./modules/dev */ \"./src/modules/dev.js\").dev_frm;\r\n\r\nvar header;\r\nvar height;\r\n\r\nlet pages=[];\r\n\r\nfunction getNav(){\r\n    let navlinks=document.querySelectorAll('.nav-link');\r\n    navlinks.forEach(link => {\r\n        let data_target=link.getAttribute('data-target');\r\n        let page=dev_frm.getElementBy('id',data_target);\r\n        if(page!=null){\r\n            let el={\r\n                nav:link,\r\n                id:data_target,\r\n                scrollPos:page.offsetTop,\r\n            }\r\n            pages.push(el);\r\n            console.log(pages);\r\n            console.log(JSON.stringify(pages,0,'  '));\r\n        }  \r\n    }); \r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', ()=>{\r\n    app.init();\r\n    getNav();\r\n\r\n    header=dev_frm.getElementBy('class','header');\r\n    height=header.clientHeight;\r\n  \r\n});\r\n\r\nfunction getCurrentLink(scrollPos){\r\n    pages.forEach(page => {\r\n        if(scrollPos >= page.scrollPos){\r\n            document.querySelector('.active').classList.remove('active');\r\n            page.nav.classList.add('active');\r\n        }    \r\n    });\r\n}\r\n\r\ndocument.addEventListener('scroll', e=>{\r\n    dev_frm.swapHeader(height);   \r\n    var scrollPos=dev_frm.scrollPos();\r\n    getCurrentLink(scrollPos);\r\n\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const app={\r\n    pages:[],\r\n    show: new Event('show'),\r\n    navlinks:[],\r\n    init: function(){\r\n        navlinks=document.querySelectorAll('.nav-link');\r\n        navlinks.forEach((link)=>{\r\n            link.addEventListener('click', app.navTo);\r\n        })\r\n    },\r\n    navTo: function(e){\r\n        e.preventDefault();\r\n        document.querySelector('.active').classList.remove('active');\r\n        let a=e.target;\r\n        let pageName=a.getAttribute('data-target')\r\n        if(pageName==='header'){\r\n            var ca=navlinks[1];\r\n            ca.classList.add('active');\r\n            pageName=ca.getAttribute('data-target')\r\n            document.getElementById(pageName).scrollIntoView({behavior: \"smooth\", block: \"end\", inline: \"nearest\"});\r\n        }else{\r\n            a.classList.add('active');\r\n            document.getElementById(pageName).scrollIntoView({behavior: \"smooth\", block: \"end\", inline: \"nearest\"});\r\n        }\r\n        \r\n        console.log(pageName);\r\n    }\r\n}\r\nmodule.exports={\r\n    app\r\n}\n\n//# sourceURL=webpack:///./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/dev.js":
/*!****************************!*\
  !*** ./src/modules/dev.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nvar dev_frm=(function(){\r\n\r\n    var removeClass;\r\n    removeClass = function(element,className){\r\n        element.classList.remove(className);\r\n    };\r\n\r\n    var addClass;\r\n    addClass = function(element,className){\r\n        element.classList.add(className);\r\n    };\r\n\r\n    var getElementBy;\r\n    getElementBy = function(by, name, child=0){\r\n        switch (by) {\r\n            case 'id':\r\n                return document.getElementById(name);\r\n            case 'class':\r\n                return document.getElementsByClassName(name)[child];\r\n            default:\r\n                break;\r\n        }\r\n    };\r\n\r\n    var scrollPos;\r\n    scrollPos = function(){\r\n         scroll_pos=window.scrollY;\r\n         return scroll_pos\r\n    };\r\n\r\n    let header;\r\n    header = getElementBy('class','header');\r\n\r\n    let h;\r\n    h = getElementBy('class','h');\r\n    \r\n    var swapHeader;\r\n    swapHeader = function(header_height){\r\n        let scroll_pos;\r\n        scroll_pos = scrollPos();\r\n \r\n        if(scroll_pos<=header_height){\r\n            addClass(header,'flex--vert');\r\n            removeClass(header,'header_swap');\r\n            removeClass(h,'h_swap');\r\n            removeClass(header,'header_height');\r\n        }\r\n\r\n        if(scroll_pos>=header_height){\r\n            removeClass(header,'flex--vert');\r\n        \r\n            addClass(header,'header_swap');\r\n            addClass(h,'h_swap');\r\n        }\r\n\r\n        if(scroll_pos>=header_height && scroll_pos < header_height+400){\r\n            removeClass(header,'header_height');\r\n        }\r\n\r\n        if(scroll_pos>=header_height+400){\r\n            addClass(header,'header_height');\r\n        }\r\n    };\r\n\r\n    return{\r\n        swapHeader:swapHeader,\r\n        getElementBy:getElementBy,\r\n        addClass:addClass,\r\n        removeClass:removeClass,\r\n        scrollPos:scrollPos,\r\n    };\r\n})();\r\n\r\n\r\nmodule.exports={\r\n    dev_frm\r\n}\n\n//# sourceURL=webpack:///./src/modules/dev.js?");

/***/ }),

/***/ "./src/modules/firebase.js":
/*!*********************************!*\
  !*** ./src/modules/firebase.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var fireBase=(function(){\r\n    //project setup\r\n    var config=[{\r\n        apiKey: \"AIzaSyC2LO9r6M_junJVVEOfcS3c9_vfsKqxpds\",\r\n        authDomain: \"cloudfirestore-59681.firebaseapp.com\",\r\n        databaseURL: \"https://cloudfirestore-59681.firebaseio.com\",\r\n        projectId: \"cloudfirestore-59681\",\r\n        storageBucket: \"cloudfirestore-59681.appspot.com\",\r\n        messagingSenderId: \"1073536411829\"\r\n    },{\r\n        apiKey: \"AIzaSyBtfjkDLYIIRTJWLX-pEfY--_U_TlnOD4I\",\r\n        authDomain: \"andy-924a8.firebaseapp.com\",\r\n        databaseURL: \"https://andy-924a8.firebaseio.com\",\r\n        projectId: \"andy-924a8\",\r\n        storageBucket: \"andy-924a8.appspot.com\",\r\n        messagingSenderId: \"909890950851\"\r\n    }];\r\n\r\n    //get the correct init via authDomain\r\n    var getConfig=function(authDomain){\r\n        config.forEach(pr=>{\r\n            if(pr.authDomain.includes(authDomain)){\r\n                firebase.initializeApp(pr);\r\n                console.log(firebase);\r\n            }\r\n        })\r\n    };\r\n\r\n    //public Init Function\r\n    var init=function(authDomain){\r\n        getConfig(authDomain);\r\n    };\r\n\r\n    return {\r\n        init:init\r\n    };\r\n\r\n})();\r\n\r\nmodule.exports={\r\n    fireBase\r\n}\n\n//# sourceURL=webpack:///./src/modules/firebase.js?");

/***/ })

/******/ });