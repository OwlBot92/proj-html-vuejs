/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var app = new Vue({
  el: '#root',
  data: {
    navList: ["Home", "Pages", "Courses", "Features", "Blog", "Shop"],
    courses: [
    /* RIGA UNO */
    [{
      costo: "30.00",
      testo: "How to be Successful: Create A Growth Mindset For Success",
      lezioni: 3,
      studenti: 50,
      img: "img/motivation-course-06-480x298.jpg"
    }, {
      costo: "30.00",
      testo: "How to Build Confidence in Your Abilities",
      lezioni: 1,
      studenti: 50,
      img: "img/motivation-course-05-480x298.jpg"
    }, {
      costo: "20.00",
      testo: "Productivity Machine – Focus in a Distracted Worlds",
      lezioni: 5,
      studenti: 50,
      img: "img/motivation-course-04-480x298.jpg"
    }],
    /* RIGA DUE */
    [{
      costo: "20.00",
      testo: "Effective Time Management Mastery – Complete Guide",
      lezioni: 18,
      studenti: 50,
      img: "img/motivation-course-03-480x298.jpg"
    }, {
      costo: "25.99",
      testo: "Body Language Secrets for Entrepreneurs",
      lezioni: 19,
      studenti: 50,
      img: "img/motivation-course-02-480x298.jpg"
    }, {
      costo: "19.99",
      testo: "Management Skills: The Science of Leadership",
      lezioni: 17,
      studenti: 50,
      img: "img/motivation-course-01-480x298.jpg"
    }]],
    articles: [{
      img: "img/motivation-blog-04-480x325.jpg",
      date: "May 13, 2020",
      title: "How to Stay True to Your Personal Brand",
      preview: "When it comes to your business or career, you want …"
    }, {
      img: "img/motivation-blog-03-480x325.jpg",
      date: "May 13, 2020",
      title: "5 Vital Lessons in 5 Years of Freelancing",
      preview: "Being self-employed and working from home, it’s easy to get …"
    }, {
      img: "img/motivation-blog-02-480x325.jpg",
      date: "May 13, 2020",
      title: "11 Super Useful Tips for Small-business Owners",
      preview: "Being a small-business owner poses a ton of challenges. We …"
    }, {
      img: "img/motivation-blog-01-480x325.jpg",
      date: "May 13, 2020",
      title: "How to Give Yourself Grace to Start Again",
      preview: "Forgive yourself for bad habits you may have started or …"
    }],
    footerLinks: [["Start here", "Blog", "About Us"], ["Success story", "Courses", "Contact Us"], ["Membership", "Purchase guide", "Privacy policy", "Terms of service"]],
    index: 0,
    realStories: [{
      text: "I am free to learn at my own pace,follow my own schedule and choose the subject i want to learn from the syllabus. Great study portal for people like me.",
      img: "img/testimonial-avata-02.jpg",
      name: "Mina Hollace",
      job: "/ Freelancer"
    }, {
      text: "I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
      img: "img/testimonial-avata-04.jpg",
      name: "Madley Pondor",
      job: "/ IT Specialist"
    }, {
      text: "I am happy with their arrangement of lessons and subject. They reflect a scientific inestigation into effective methods to adopt for learners",
      img: "img/testimonial-avata-01.jpg",
      name: "Luvic Dubble",
      job: "/ Private Tutor"
    }, {
      text: "I'm a very strict person so i require everything to be organized and neat. Then, i'll be able to make things right and shine. MaxCoach guys just got me.",
      img: "img/testimonial-avata-03.jpg",
      name: "Florence Themes",
      job: "/ Multimedia Admin"
    }]
  },
  methods: {
    clickNext: function clickNext() {
      this.index == 3 ? this.index = 0 : this.index++;
    },
    clickPrev: function clickPrev() {
      this.index == 0 ? this.index = 3 : this.index--;
    }
  }
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/app": 0,
/******/ 			"dist/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;