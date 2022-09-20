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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var URL_GET_API_MOCHI = exports.URL_GET_API_MOCHI = "https://mochien3.1-api.mochidemy.com/v3.1/words/dictionary-english";
// export const URL_GET_API_MOCHI = `https://mochien-test.akira.edu.vn/v3.1/words/dictionary-english`;
var URL_TRANS = exports.URL_TRANS = "https://translate.googleapis.com/translate_a/single?client=dict-chrome-ex&sl=en&tl=vi&hl=en-US&dt=t&dt=bd&dj=1&source=bubble&q=";
var URL_ROOT = exports.URL_ROOT = "https://mochien3.1-api.mochidemy.com/";
// export const URL_ROOT = `https://mochien-test.akira.edu.vn/`;
var URL_ROOT_TEST = exports.URL_ROOT_TEST = "https://mochien3.1-api.mochidemy.com";
var URL_PAGE_LOGIN = exports.URL_PAGE_LOGIN = "https://mochidemy.com/extension-page-login/login?";
var URL_PAGE_REGISTER = exports.URL_PAGE_REGISTER = "https://mochidemy.com/extension-page-login/register?";
var URL_LEARN = exports.URL_LEARN = "https://learn.mochidemy.com?";
var URL_GET_FACEBOOK = exports.URL_GET_FACEBOOK = "https://mochien3.1-api.mochidemy.com/v3.1/words/fb-lock";
var paramsAPI = exports.paramsAPI = {
  privateKey: "M0ch1M0ch1_En_$ecret_k3y",
  appVersion: "2.3",
  deviceType: "3"
};
var listMessage = exports.listMessage = {
  bgcNewTab: "bgcNewTab",
  OffNewTab: "OffNewTab",
  getLanguage: "getLanguage",
  modalLoginSearch: "modalLoginSearch",
  popupShort: "popupShort",
  clickSaveLoginSearch: "clickSaveLoginSearch",
  searchWordLogin: "searchWordLogin",
  clickSaveSignUpSearch: "clickSaveSignUpSearch",
  searchWordSignUp: "searchWordSignUp",
  tabReload: "tabReload",

  getBackground: "getBackground",
  reloadNewTab: "reloadNewTab",
  saveBackground: "saveBackground",
  newTabOn: "newTabOn",
  reloadNewTabAll: "reloadNewTabAll",
  removeTabDefault: "removeTabDefault",
  removeNewTab: "removeNewTab",
  newTabOff: "newTabOff",
  changeLanguage: "changeLanguage",
  saveTimeFirst: "saveTimeFirst",
  save_word_button: "save_word_button",
  modalLoginSaveWord: "modalLoginSaveWord",
  getStatusSaveFirst: "getStatusSaveFirst",
  modalPopup30: "modalPopup30",
  showPopupSave: "showPopupSave",

  reloadCookie: "reloadCookie",
  getDataSettings: "getDataSettings",
  handleNotLogin: "handleNotLogin",
  handleProfile: "handleProfile",
  handleReload: "handleReload",
  getProfile: "getProfile",

  tracking_words: "tracking-words",
  click_popup_save: "click_popup_save",
  tabReloadLogin: "tabReloadLogin",
  clickSetting: "clickSetting",
  reloadBgc: "reloadBgc",
  reloadWelcome: "reloadWelcome",
  searchFirstDay: "searchFirstDay",
  saveFirstSearch: "saveFirstSearch",
  getTimeSave: "getTimeSave",
  checkAnswer: "checkAnswer",
  getCheckAnswer: "getCheckAnswer",
  checkResult: "checkResult",
  getStatusFacebook: "getStatusFacebook",
  getTimeFirstSaveDay: "getTimeFirstSaveDay",
  clickAllTest: "clickAllTest",
  testFirstSearch: "testFirstSearch",
  getTimeTest: "getTimeTest",
  saveData: "saveData",

  searchYoutube: "searchYoutube",
  searchFacebook: "searchFacebook",
  searchFirstYoutube: "searchFirstYoutube",
  searchFirstFacebook: "searchFirstFacebook",
  getSearchFirstYoutube: "getSearchFirstYoutube",
  getSearchFirstFacebook: "getSearchFirstFacebook",
  saveFirstYoutube: "saveFirstYoutube",
  saveFirstFacebook: "saveFirstFacebook",
  saveFirst: "saveFirst",

  question: "input__question--id",
  button: "mochi__button--id",
  wrong: "wrong",
  idAnswer: "id__answer",
  idWrong: "id__wrong",
  right: "right",
  textAnswerId: "textAnswer__id",
  titleId: "title__id",
  idNewsfeed: "id__newsfeed"

};

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateUUID = generateUUID;
exports.checkGG = checkGG;
// uuid
var GA_TEST = "UA-150440250-8";
var GA_PRODUCT = "UA-150440250-2";
var GA = GA_PRODUCT;
// const GA = GA_TEST;

function generateUUID() {
  // Public Domain/MIT
  var d = new Date().getTime(); //Timestamp
  var d2 = typeof performance !== "undefined" && performance.now && performance.now() * 1000 || 0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
  });
}
var fetchGa = function fetchGa(category, action, label) {
  var myuuid = void 0;
  chrome.storage.sync.get(["gaTracking"], function (result) {
    if (result.gaTracking == undefined) {
      myuuid = generateUUID();
      chrome.storage.sync.set({
        gaTracking: myuuid
      }, function () {});
    } else {
      myuuid = result.gaTracking;
    }
    // console.log("id used", myuuid);
    // console.log("category", category);
    // console.log("action", action);
    fetch("https://www.google-analytics.com/collect?v=1&tid=" + GA + "&cid=" + myuuid + "&t=event&ec=" + category + "&ea=" + action + "&el=" + label, {
      mode: "no-cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      redirect: "follow",
      referrerPolicy: "no-referrer"
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      return cb(response);
    });
  });
};

function checkGG(request, sender, sendResponse) {
  switch (request) {
    case "searchFirstFacebook":
      fetchGa("engagement", "search_word", "first_search_newsfeed");
      break;
    case "searchFacebook":
      fetchGa("engagement", "search_word", "newsfeed_search");
      break;
    case "searchFirstYoutube":
      fetchGa("engagement", "search_word", "first_search_youtube");
      break;
    case "searchYoutube":
      fetchGa("engagement", "search_word", "youtube_search");
      break;
    case "testFirstDay":
      fetchGa("engagement", "news_feed", "first_use");
      break;
    case "clickAllTest":
      fetchGa("engagement", "news_feed", "total_use");
      break;
    case "searchFirstDay":
      fetchGa("engagement", "search_word", "first_search");
      break;
    case "showPopupSave":
      fetchGa("engagement", "save_word", "first_save_popup");
      break;
    case "click_popup_save":
      fetchGa("engagement", "search_word", "direct_search_popup");
      sendResponse("GA");
      break;
    case "GB":
      fetchGa("engagement", "search_word", "pinned_extension_popup");
      sendResponse("GB");
      break;
    case "tracking-new-tab":
      fetchGa("engagement", "search_word", "newtab_popup");
      break;
    case "tracking-words":
      fetchGa("engagement", "search_sentence", "direct_search_popup");
      break;
    case "tracking-pinned":
      fetchGa("engagement", "search_sentence", "pinned_extension_popup");
      break;
    case "tracking-word-new-tab":
      fetchGa("engagement", "search_sentence", "newtab_popup");
      break;
    case "tracking-new_tab":
      fetchGa("engagement", "show_newtab", "");
      break;
    case "save_word_button":
      fetchGa("engagement", "save_word", "save_word_button");
      break;
    case "searchWordLogin":
      fetchGa("acquisition", "click_login", "search_login");
      break;
    case "searchWordSignUp":
      fetchGa("acquisition", "click_signup", "search_login");
      break;
    case "newTabSignUp":
      fetchGa("acquisition", "click_signup", "newtab_search");
      break;
    case "newTabLogin":
      fetchGa("acquisition", "click_login", "newtab_search");
      break;
    case "modalLogin":
      fetchGa("acquisition", "show_login_popup", "newtab_search");
      break;
    case "modalLoginButton":
      fetchGa("acquisition", "show_login_popup", "newtab_login");
      break;
    case "modalLoginSearch":
      fetchGa("acquisition", "show_login_popup", "search_login");
      break;
    case "modalLoginSaveWord":
      fetchGa("acquisition", "show_login_popup", "search_saveword");
      break;
    case "OffNewTab":
      fetchGa("engagement", "off_mochi_newtab", "");
      break;
    case "modalPopup30":
      fetchGa("conversion", "show_popup_upgrade", "");
      break;
    case "checkClickUpgrade":
      fetchGa("conversion", "click_upgrade", "");
      break;
    case "clickButtonLoginNewTab":
      fetchGa("acquisition", "click_login", "newtab_login");
      break;
    case "clickButtonSignUpinNewTab":
      fetchGa("acquisition", "click_signup", "newtab_login");
      break;
    case "clickSaveLoginSearch":
      fetchGa("acquisition", "click_login", "search_saveword");
      break;
    case "clickSaveSignUpSearch":
      fetchGa("acquisition", "click_signup", "search_saveword");
      break;
    case "signUpSuccess":
      fetchGa("acquisition", "show_signup_success", "");
      break;
    case "clickBookMark0":
      fetchGa("conversion", "newtab_click", "bookmark_1");
      break;
    case "clickBookMark1":
      fetchGa("conversion", "newtab_click", "bookmark_2");
      break;
    case "clickBookMark2":
      fetchGa("conversion", "newtab_click", "bookmark_3");
      break;
    case "clickBookMark3":
      fetchGa("conversion", "newtab_click", "bookmark_4");
      break;
    //sidebar
    case "sideBar0":
      fetchGa("conversion", "newtab_click", "sidebar_1");
      break;
    case "sideBar1":
      fetchGa("conversion", "newtab_click", "sidebar_2");
      break;
    case "sideBar2":
      fetchGa("conversion", "newtab_click", "sidebar_3");
      break;
    case "sideBar3":
      fetchGa("conversion", "newtab_click", "sidebar_4");
      break;
    case "clickSearchBar":
      fetchGa("conversion", "newtab_click", "search_bar");
      break;
    // infeed
    case "clickInFeed0":
      fetchGa("conversion", "newtab_click", "infeed_1");
      break;
    case "clickInFeed1":
      fetchGa("conversion", "newtab_click", "infeed_2");
      break;
    case "clickInFeed2":
      fetchGa("conversion", "newtab_click", "infeed_3");
      break;
    case "clickInFeed3":
      fetchGa("conversion", "newtab_click", "infeed_4");
      break;
    case "clickInFeed4":
      fetchGa("conversion", "newtab_click", "infeed_5");
      break;
    case "clickInFeed5":
      fetchGa("conversion", "newtab_click", "infeed_6");
      break;
    case "clickNotice":
      fetchGa("conversion", "newtab_click", "click_notice");
      break;
    default:
      break;
  }
}

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addListener = addListener;
exports.listeners = listeners;

var _index = __webpack_require__(1);

function addListener(request, sender, sendResponse) {
  var mochiToken = "notLogin";
  var mochiTab = "en-vn";
  var fileData = {
    handleClickSetting: "handleClickSetting",
    notLogin: "not_login"
  };
  switch (request) {

    // case listMessage.getDataSettings:
    //   sendResponse({
    //     token: mochiToken,
    //     isSettingTab: mochiTab,
    //   });
    // case listMessage.reloadCookie:
    //   chrome.cookies.get(
    //     { url: "https://mochidemy.com", name: "mochiToken" },
    //     function(token) {
    //       if (token == null) {
    //         mochiToken = "notLogin";
    //       } else {
    //         mochiToken = token.value;
    //         chrome.storage.sync.get(["firstTimeSave"], function(result) {});
    //       }
    //     }
    //   );
    //   chrome.cookies.get(
    //     { url: "https://mochidemy.com", name: "defaultDict" },
    //     function(tab) {
    //       if (tab == null) {
    //         mochiTab = "en-vn";
    //       } else {
    //         mochiTab = tab.value;
    //       }
    //     }
    //   );
    //   sendResponse("success");
    // return true;
    case _index.listMessage.getTimeTest:
      chrome.storage.sync.get(['testFirstDay'], function (result) {
        sendResponse(result.testFirstDay);
      });
      return true;
    case _index.listMessage.getTimeFirstSaveDay:
      chrome.storage.sync.get(['firstTimeSaveDay'], function (result) {
        sendResponse(result.firstTimeSaveDay);
      });
      return true;
    case _index.listMessage.getStatusFacebook:
      chrome.tabs.query({ currentWindow: true }, function (tabs) {
        console.log(tabs);
        for (var i = 0; i < tabs.length; i++) {
          if (tabs[i].url === "https://www.facebook.com/") {
            sendResponse("1");
          }
        }
      });
      return true;
    case _index.listMessage.checkResult:
      chrome.storage.sync.set({
        checkHandleClick: "0"
      });
      break;
    case _index.listMessage.checkAnswer:
      chrome.storage.sync.set({
        checkHandleClick: "1"
      });
      break;
    case _index.listMessage.getCheckAnswer:
      chrome.storage.sync.get(["checkHandleClick"], function (result) {
        sendResponse(result.checkHandleClick);
      });
      return true;
    case _index.listMessage.clickSetting:
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          fileData: fileData.handleClickSetting
        });
      });
      break;
    case "notLogin":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { fileData: fileData.notLogin });
      });
      break;
    case _index.listMessage.newTabOff:
      chrome.storage.sync.set({ disableNewTab: false }, function () {
        // console.log('Value is set to new tab off');
      });
      break;
    case _index.listMessage.newTabOn:
      chrome.storage.sync.set({ disableNewTab: true }, function () {
        // console.log('Value is set to new tab on');
      });
      break;
    case _index.listMessage.bgcNewTab:
      chrome.storage.sync.get(["disableNewTab"], function (result) {
        // console.log("Result10", result.disableNewTab);
        sendResponse(result.disableNewTab);
      });
      return true;
      break;
    case _index.listMessage.getBackground:
      chrome.storage.sync.get(["saveBackground"], function (result) {
        // console.log("bgc tra ve", result.saveBackground);
        sendResponse(result.saveBackground);
      });
      return true;
      break;
    case _index.listMessage.handleNotLogin:
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { fileData: "handle_not_login" });
      });
      chrome.storage.sync.remove(["dataProfile"], function () {});
      break;
    case _index.listMessage.getProfile:
      chrome.storage.sync.get(["dataProfile"], function (result) {
        sendResponse(result.dataProfile);
      });
      return true;
    case fileData.handleClickSetting:
      document.querySelector(".div__popup--setting").style.display = "block";
      document.querySelector(".overlay__popup").style.display = "block";
      break;
    case fileData.notLogin:
      chrome.runtime.sendMessage("modalLoginSearch");
      handleOpenModal("mochi-modal-login");
      break;
    case _index.listMessage.reloadNewTab:
      chrome.tabs.query({ currentWindow: true }, function (tabs) {
        console.log(tabs);
        for (var i = 0; i < tabs.length; i++) {
          if (tabs[i].url == "chrome://newtab/") {
            chrome.tabs.reload(tabs[i].id);
          }
        }
        sendResponse(tabs);
      });
      return true;
      break;
    case _index.listMessage.reloadNewTabAll:
      //to do 
      chrome.tabs.query({ currentWindow: true }, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
          if (tabs[i].url == "chrome://newtab/") {
            chrome.tabs.reload(tabs[i].id);
          }
        }
      });
      break;
    case _index.listMessage.handleReload:
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { fileData: "handle_reload" });
      });
      break;
    case _index.listMessage.getLanguage:
      chrome.storage.sync.get(["mochiTab"], function (result) {
        sendResponse(result.mochiTab);
      });
      return true;
    case _index.listMessage.reloadBgc:
      chrome.tabs.query({ currentWindow: true }, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
          if (tabs[i].url !== "chrome://newtab/") {
            // chrome.tabs.reload(tabs[i].id);
          }
        }
      });
      break;
    case _index.listMessage.reloadWelcome:
      chrome.tabs.query({ currentWindow: true }, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
          if (tabs[i].url === "https://mochidemy.com/extension-welcome/") {
            chrome.tabs.reload(tabs[i].id);
          }
        }
      });
      break;
    case _index.listMessage.removeTabDefault:
      chrome.tabs.query({ currentWindow: true }, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
          if (tabs[i].url === "chrome://newtab/") {
            chrome.tabs.remove(tabs[i].id);
          }
        }
        chrome.tabs.create({
          url: "../build-new-tab/index.html"
        });
      });
      break;
    case _index.listMessage.removeNewTab:
      chrome.tabs.query({ currentWindow: true }, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
          if (tabs[i].url === "chrome://newtab/") {
            chrome.tabs.remove(tabs[i].id);
          }
        }
        chrome.tabs.create({
          url: "chrome-search://local-ntp/local-ntp.html"
        });
      });
      break;
    case _index.listMessage.saveFirst:
      chrome.storage.sync.set({ firstTimeSave: true }, function () {});
      break;
    case _index.listMessage.saveTimeFirst:
      chrome.storage.sync.set({ firstTimeSave: false }, function () {});
      break;
    case _index.listMessage.getStatusSaveFirst:
      chrome.storage.sync.get(["firstTimeSave"], function (result) {
        sendResponse(typeof result.firstTimeSave !== "undefined" ? result.firstTimeSave : false);
      });
      return true;
    case _index.listMessage.getTimeSave:
      chrome.storage.sync.get(["timeSearchFirst"], function (result) {
        sendResponse(result.timeSearchFirst);
      });
      return true;
      break;
    default:
      return;
  }
}
function listeners(request, sender, sendResponse) {
  switch (request.name) {
    case _index.listMessage.getSearchFirstYoutube:
      chrome.storage.sync.get(['saveTimeFirstYoutube'], function (result) {
        sendResponse(result.saveTimeFirstYoutube);
      });
      return true;
    case _index.listMessage.saveFirstYoutube:
      chrome.storage.sync.set({ saveTimeFirstYoutube: request.data }, function (result) {
        sendResponse(true);
      });
      return true;
    case _index.listMessage.tabReload:
      chrome.tabs.query({ currentWindow: true }, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
          if (tabs[i].url === "chrome://newtab/") {
            chrome.tabs.reload(tabs[i].id);
          }
        }
        sendResponse(tabs);
      });
      return true;
    case _index.listMessage.saveData:
      chrome.storage.local.set({ mochiFacebook: request.data }, function (result) {});
      break;
    case _index.listMessage.saveFirstSearch:
      chrome.storage.sync.set({
        timeSearchFirst: request.data
      });
      break;
    case _index.listMessage.tabReload:
      chrome.tabs.query({ currentWindow: true }, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
          if (tabs[i].url === "chrome://newtab/") {
            chrome.tabs.reload(tabs[i].id);
          }
        }
        sendResponse(tabs);
      });
      return true;
    case _index.listMessage.testFirstSearch:
      chrome.storage.sync.set({
        testFirstDay: request.data
      }, function (result) {
        sendResponse(true);
      });
      return true;
    case _index.listMessage.saveFirstSaveDay:
      chrome.storage.sync.set({
        firstTimeSaveDay: request.data
      });
      break;
    case _index.listMessage.saveFirstSearch:
      chrome.storage.sync.set({
        timeSearchFirst: request.data
      }, function (result) {
        sendResponse(true);
      });
      return true;
    case _index.listMessage.tabReload:
      chrome.tabs.query({ currentWindow: true }, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
          if (tabs[i].url === "chrome://newtab/") {
            chrome.tabs.reload(tabs[i].id);
          }
        }
        sendResponse(tabs);
      });
      return true;
      break;
    case _index.listMessage.tabReloadLogin:
      chrome.tabs.query({ currentWindow: true }, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
          if (tabs[i].url === "chrome://newtab/") {
            chrome.tabs.reload(tabs[i].id);
          }
        }
      });
      break;
    case _index.listMessage.handleProfile:
      chrome.storage.sync.set({
        dataProfile: request.dataProfile,
        dataToken: request.dataToken
      }, function (response) {
        sendResponse(response);
      });
      return true;
      break;
    case _index.listMessage.changeLanguage:
      chrome.storage.sync.set({ mochiTab: request.data }, function (result) {});
      break;
    case _index.listMessage.saveBackground:
      chrome.storage.sync.set({ saveBackground: request.data }, function (result) {});
      break;
    default:
      return;
  }
}

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(61);


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
}; // import commons from 'Utils/commons';


var _checkGG = __webpack_require__(14);

var _listener = __webpack_require__(18);

var _index = __webpack_require__(1);

var _index2 = __webpack_require__(1);

var mochiToken = "notLogin";
var mochiTab = "en-vn";
var myuuid;
// let url = '';
// let userId = '';
console.log = function () {};
chrome.tabs.onCreated.addListener(function (e) {
  var url = e.pendingUrl;
  // if (url == "chrome://newtab/") {
  //     chrome.tabs.update({
  //       url: "../build-new-tab/index.html",
  //     });
  // }
});
function getCookies(domain, name, callback) {
  chrome.cookies.get({ url: domain, name: name }, function (cookie) {
    if (callback && cookie !== null) {
      callback(cookie.value);
    }
  });
}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // Tracking GA
  (0, _checkGG.checkGG)(request, sender, sendResponse);
  if (request == "reloadCookie") {
    chrome.cookies.get({ url: "https://mochidemy.com", name: "mochiToken" }, function (token) {
      if (token == null) {
        mochiToken = "notLogin";
      } else {
        mochiToken = token.value;
        chrome.storage.sync.get(["firstTimeSave"], function (result) {});
      }
    });
    chrome.cookies.get({ url: "https://mochidemy.com", name: "defaultDict" }, function (tab) {
      if (tab == null) {
        mochiTab = "en-vn";
      } else {
        mochiTab = tab.value;
      }
    });
    sendResponse("success");
  }
  if (request == "getDataSettings") {
    sendResponse({
      token: mochiToken,
      isSettingTab: mochiTab
    });
  }
});

// function handleUnInstall() {
//   chrome.storage.sync.get(["gaTracking"], function(result) {
//     if (result.gaTracking !== undefined) {
//       // myuuid = result.gaTracking;
//      const paramsApiUnInstall = {...paramsAPI, uuid:result.gaTracking}
//       fetch(`${urlRootTest}v3.1/extension_uninstall`,{
//         method: 'GET',
//         paramsApiUnInstall
//       }
//       );
//     }
//   });
// }

chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    // alert(unInstall);
    chrome.storage.sync.get(["gaTracking"], function (result) {
      if (result.gaTracking === undefined) {
        myuuid = (0, _checkGG.generateUUID)();
        chrome.storage.sync.set({
          gaTracking: myuuid
        }, function () {});
        chrome.runtime.setUninstallURL(
        // `https://mochidemy.com/extension-see-you-later?uuid=${myuuid}`
        _index2.URL_ROOT_TEST + "/v3.1/extension-uninstall?uuid=" + myuuid);
      } else if (result.gaTracking !== undefined) {
        myuuid = result.gaTracking;
        chrome.runtime.setUninstallURL(_index2.URL_ROOT_TEST + "/v3.1/extension-uninstall?uuid=" + myuuid);
      }
    });
    // window.open("https://mochidemy.com/extension-welcome");
    chrome.tabs.create({ url: "https://mochidemy.com/extension-welcome" }, function (tab) {
      console.log("New tab launched with https://mochidemy.com/extension-welcome");
    });
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if ((typeof request === "undefined" ? "undefined" : _typeof(request)) === "object") {
    (0, _listener.listeners)(request, sender, sendResponse);
  } else {
    (0, _listener.addListener)(request, sender, sendResponse);
  }
});

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.name === "saveBackground") {
//     chrome.storage.sync.set({ saveBackground: request.data }, function(result) {});
//   }
// });
// Xu ly select option
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.name === "changeLanguage") {
//     chrome.storage.sync.set({ mochiTab: request.data }, function(result) {});
//   }
// });
// Toi uu API dang nhap

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   console.log("res", request);
//   if (request.name === "handleProfile") {
//     chrome.storage.sync.set(
//       {
//         dataProfile: request.dataProfile,
//         dataToken: request.dataToken,
//       },
//       function(response) {
//         sendResponse(response);
//       }
//     );
//   }
//   return true;
// });

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.name == "tabReload") {
//     chrome.tabs.query({ currentWindow: true }, function(tabs) {
//       for (let i = 0; i < tabs.length; i++) {
//         if (tabs[i].url === "chrome://newtab/") {
//           chrome.tabs.reload(tabs[i].id);
//         }
//       }
//       sendResponse(tabs);
//     });
//   }
//   return true;
// });

chrome.runtime.onMessageExternal.addListener(function (request, sender, sendResponse) {
  if (request.getTargetData) {
    chrome.tabs.query({ currentWindow: true }, function (tabs) {
      for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].url === "chrome://newtab/") {
          chrome.tabs.reload(tabs[i].id);
        }
      }
      sendResponse(tabs);
    });
  }
  return true;
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.name === _index.listMessage.saveFirstSearch) {
    chrome.storage.sync.set({
      timeSearchFirst: request.data
    }, function (result) {
      sendResponse(true);
    });
  }
  return true;
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request === "getTimeSave") {
    chrome.storage.sync.get(["timeSearchFirst"], function (result) {
      sendResponse(result);
    });
  }
  return true;
});

// Chuc nang khoa newfeed
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // console.log(request);
  if (request.name === "saveData") {
    // console.log("dang set")
    chrome.storage.local.set({ mochiFacebook: request.data }, function (result) {});
  }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // console.log(request)
  if (request === "getDatafacebook") {
    chrome.storage.local.get(["mochiFacebook"], function (result) {
      sendResponse(result.mochiFacebook);
    });
    return true;
  }
});
// Xu ly audio
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.name === "audio") {
    fetch(request.data, {
      method: "GET"
    }).then(function (response) {
      return response.blob();
    }).then(function (data) {
      var reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = function () {
        var base64data = reader.result.toString();
        // console.log(base64data);
        sendResponse(base64data);
        chrome.storage.local.set({ listAudio2: base64data }, function (result) {});
      };
    });
  }
  return true;
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request === "getAudio") {
    chrome.storage.local.get(["listAudio2"], function (result) {
      //   console.log("result data" + result);
      sendResponse(result.listAudio2);
    });
    return true;
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.name === "newFeedOn") {
    chrome.storage.sync.set({
      statusNewFeed: "1"
    });
  } else if (request.name === "newFeedOff") {
    chrome.storage.sync.set({
      statusNewFeed: "0"
    });
    chrome.storage.sync.remove("statusReload");
  } else if (request.name === "statusNewFeed") {
    chrome.storage.sync.set({
      statusReload: "0"
    });
  } else if (request.name === "backNewFeed") {
    chrome.storage.sync.set({
      statusNewFeed: "0"
    });
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request === "getStatusNewFeed") {
    chrome.storage.sync.get(["statusNewFeed"], function (result) {
      sendResponse(result.statusNewFeed);
    });
  }
  if (request === "getStatusReload") {
    chrome.storage.sync.get(["statusReload"], function (result) {
      sendResponse(result.statusReload);
    });
  }
  if (request === "removeLoad") {
    chrome.storage.sync.remove("statusReload");
  }
  return true;
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request === "reloadAllPage") {
    chrome.tabs.query({ currentWindow: true }, function (tabs) {
      for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].url === "https://www.facebook.com/") {
          chrome.tabs.reload(tabs[i].id);
        }
      }
    });
  }
  return true;
});

// youtube
chrome.webRequest.onBeforeRequest.addListener(function (details) {
  if (details.url.search("youtube") !== 1) {
    //   console.log(details);
  }
  if (details.url.search("https://www.youtube.com/api/timedtext") !== -1) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { url: details.url }, function (response) {});
    });
  }
  return details;
}, { urls: ["<all_urls>"] }, ["requestBody"]);

// chrome.webRequest.onCompleted.addListener(
//   function(details) {
//     if (details.url.search("https://www.youtube.com/api/timedtext") !== -1) {
//       chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, { url: details.url }, function(
//           response
//         ) {});
//       });
//     }
//     return details;
//   },
//   { urls: ["<all_urls>"] },
//   ["responseHeaders"]
// );
// Xu ly phan History Newtab
var handleConvertBase64 = function handleConvertBase64(url, newArrayHistory, arrayHistoryIndex) {
  fetch(url, {
    method: "GET"
  }).then(function (response) {
    return response.blob();
  }).then(function (data) {
    var reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onloadend = function () {
      var base64data = reader.result.toString();
      var arrNewHistory = _extends({}, arrayHistoryIndex, {
        image: base64data
      });
      if (newArrayHistory.length < 4) {
        newArrayHistory.push(arrNewHistory);
      }
    };
  }).catch(function (err) {});
};
var handleSearchUrl = function handleSearchUrl(text) {
  var textStart = text.lastIndexOf("type=\"image/x-icon\"");
  if (textStart === -1) {
    textStart = text.lastIndexOf("rel=\"shortcut icon\"");
    if (textStart === -1) {
      textStart = text.lastIndexOf("rel=\"icon\"");
      if (textStart === -1) {
        linkFavicon = "https://static.ladipage.net/5975a287c2e826c997f027ee/logo-20210624084155.png";
        return linkFavicon;
      }
    }
  }
  var getPositionLink = text.lastIndexOf("<", textStart);
  var getLinkUrl = text.indexOf(">", getPositionLink);
  var getLinkFavicon = text.slice(getPositionLink, getLinkUrl);
  var textSearch = "href=\"";
  var getUrlStart = getLinkFavicon.indexOf(textSearch) + textSearch.length;
  var getUrlEnd = getLinkFavicon.indexOf("\"", getUrlStart);
  var linkFavicon = getLinkFavicon.slice(getUrlStart, getUrlEnd);
  if (linkFavicon !== "" && linkFavicon.indexOf(".") !== -1) {
    return linkFavicon;
  } else {
    linkFavicon = "https://static.ladipage.net/5975a287c2e826c997f027ee/logo-20210624084155.png";
    return linkFavicon;
  }
};
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request === "getUrlHistory") {
    chrome.history.search({
      maxResults: 100,
      text: ""
    }, function (results) {
      console.log("history", results);
      var maxResult = results.sort(function (a, b) {
        return a.visitCount - b.visitCount;
      });
      var arrayHistory = [];
      arrayHistory.push(maxResult[maxResult.length - 1]);
      arrayHistory.push(maxResult[maxResult.length - 2]);
      arrayHistory.push(maxResult[maxResult.length - 3]);
      arrayHistory.push(maxResult[maxResult.length - 4]);
      console.log("arrayHistory", arrayHistory);
      var newArrayHistory = [];

      var _loop = function _loop(i) {
        var urlHistoryMax = arrayHistory[i].url;
        var getDomainUrl = urlHistoryMax.split("/");
        var domainUrl = getDomainUrl[0] + "//" + getDomainUrl[2];
        fetch(urlHistoryMax).then(function (response) {
          return response.text();
        }).then(function (text) {
          var getUrlFavicon = handleSearchUrl(text);
          var getUrlNoHttps = "" + domainUrl + getUrlFavicon;
          console.log("getUrlFavicon", getUrlFavicon);
          console.log("getUrlNoHttps", getUrlNoHttps);
          if (getUrlFavicon.indexOf("http") !== -1) {
            if (urlHistoryMax.indexOf("facebook") !== -1) {
              getUrlFavicon = "https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico";
              handleConvertBase64(getUrlFavicon, newArrayHistory, arrayHistory[i]);
            } else if (urlHistoryMax.indexOf("youtube") !== -1) {
              getUrlFavicon = "https://www.youtube.com/s/desktop/94d44772/img/favicon_48x48.png";
              handleConvertBase64(getUrlFavicon, newArrayHistory, arrayHistory[i]);
            } else {
              handleConvertBase64(getUrlFavicon, newArrayHistory, arrayHistory[i]);
            }
          } else if (getUrlFavicon.indexOf("//") !== -1) {
            getUrlFavicon = "https:" + getUrlFavicon;
            console.log("--------------no http ------------", getUrlFavicon);
            handleConvertBase64(getUrlFavicon, newArrayHistory, arrayHistory[i]);
          } else if (getUrlFavicon.indexOf("https") === -1) {
            handleConvertBase64(getUrlNoHttps, newArrayHistory, arrayHistory[i]);
          }
          console.log("newArrayHistory", newArrayHistory);
          console.log("lengthHistory", newArrayHistory.length);
          var handleSave = setInterval(function () {
            chrome.storage.local.set({ convertText: newArrayHistory }, function () {
              sendResponse(true);
            });
          }, 1000);
          chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
            if (request === "clearHistory") {
              clearInterval(handleSave);
            }
          });
        });
      };

      for (var i = 0; i < arrayHistory.length; i++) {
        _loop(i);
      }
    });
    return true;
  }
});
// chrome.history.getVisits("https://mochidemy.com/extension-page-login/", function(result) {
//     console.log(result);
// })

/***/ })

/******/ });