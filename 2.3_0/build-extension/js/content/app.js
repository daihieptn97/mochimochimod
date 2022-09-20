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
/******/ 	return __webpack_require__(__webpack_require__.s = 188);
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

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var iconMochiImage = "chrome-extension://" + chrome.runtime.id + "/images/extension_icon.png";
var avatarMochiBlueImage = "chrome-extension://" + chrome.runtime.id + "/images/ellipse-green.png";
var avatarMochiYellowImage = "chrome-extension://" + chrome.runtime.id + "/images/ellipse-yellow.png";
var logoMochiImage = "chrome-extension://" + chrome.runtime.id + "/images/logo_orange.png";
var mochiImageTutorial = "chrome-extension://" + chrome.runtime.id + "/images/mochiTutorial.png";
var mochiClose = "chrome-extension://" + chrome.runtime.id + "/images/cross.png";
var mochiNotification = "chrome-extension://" + chrome.runtime.id + "/images/mochiNotification.png";
var mochiRemind = "chrome-extension://" + chrome.runtime.id + "/images/mochiRemind.png";
var mochiNotFound = "chrome-extension://" + chrome.runtime.id + "/images/mochiNotFound.png";
var mochiButtonCloseGray = "chrome-extension://" + chrome.runtime.id + "/images/button-exit.png";
var mochiButtonSettings = "chrome-extension://" + chrome.runtime.id + "/images/settings.png";
var mochiButtonCheckImage = "chrome-extension://" + chrome.runtime.id + "/images/check2.png";
var urlImage = "https://mochidemy.com/extension-bg/";
//MODAL
var mochiModal = "\n      <div class='mochi-modal' style=\"display: none\">\n        <div class=\"mochi-modal-main mochi-modal-login\"  style=\"display: none\">\n          <img src=\"" + mochiImageTutorial + "\" alt=\"mascot\" class=\"mochi-modal-mascot\"/>\n          <img\n            src=\"" + mochiClose + "\"\n            alt=\"mascot\"\n            class=\"mochi-modal-close-btn\"\n            id = \"mochi-close-login\"\n          />\n          <div class=\"mochi-login-notify\">\n            <span class = \"mochi-modal-title\">\n              <strong style = \"display: block\">\u0110\u0103ng nh\u1EADp t\xE0i kho\u1EA3n h\u1ECDc MochiMochi</strong>\n              <strong style = \"display: block\">\u0111\u1EC3 tra c\u1EE9u v\xE0 l\u01B0u t\u1EEB v\u1EF1ng v\xE0o s\u1ED5 tay</strong>\n            </span>\n            <div class=\"mochi-login-notify-group-btn\">\n              <div class=\"mochi_primary_btn\" id=\"mochi-btn-login\">\n                \u0110\u0103ng nh\u1EADp\n              </div>\n              <div class=\"mochi_secondary_btn\" id=\"mochi-btn-register\">\n                T\u1EA1o t\xE0i kho\u1EA3n m\u1EDBi\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- MODAL FREE USER 30 -->\n        \n        <div class=\"mochi-modal-main mochi-modal-free-over-30\" style=\"display: none;min-height: 210px!important\">\n          <img src=\"" + mochiNotification + "\" alt=\"mascot\" style = \"width:160px!important\" class=\"mochi-modal-mascot\"/>\n          <img\n            src=\"" + mochiClose + "\"\n            alt=\"mascot\"\n            class=\"mochi-modal-close-btn\"\n            id = \"mochi-close-free-user-upgrade-30\"\n          />\n          <div class=\"mochi-login-notify\">\n            <span class = \"mochi-modal-title\">\n            <strong style = \"display: block\">B\u1EA1n \u0111\xE3 l\u01B0u 30 t\u1EEB v\xE0o s\u1ED5 tay.</strong>\n            <strong style = \"display: block\">N\xE2ng c\u1EA5p t\xE0i kho\u1EA3n \u0111\u1EC3 l\u01B0u t\u1EEB kh\xF4ng gi\u1EDBi h\u1EA1n</strong>\n            </span>\n            <div class=\"mochi-login-notify-group-btn\">\n              <div class=\"mochi_primary_btn\" id=\"btn-mochi-submit-free-30\">\n                  N\xE2ng c\u1EA5p ngay\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- MODAL FREE USER 50-->\n        \n        <div class=\"mochi-modal-main mochi-modal-free-over-50\"  style=\"display: none;min-height: 210px!important\">\n          <img src=\"" + mochiNotification + "\" alt=\"mascot\" style = \"width:160px!important\" class=\"mochi-modal-mascot\"/>\n          <img\n            src=\"" + mochiClose + "\"\n            alt=\"mascot\"\n            class=\"mochi-modal-close-btn\"\n            id = \"mochi-close-free-user-upgrade-50\"\n          />\n          <div class=\"mochi-login-notify\">\n            <span class = \"mochi-modal-title\">\n            <strong style = \"display: block\">B\u1EA1n \u0111\xE3 l\u01B0u 50 t\u1EEB v\xE0o s\u1ED5 tay.</strong>\n            <strong style = \"display: block\">N\xE2ng c\u1EA5p t\xE0i kho\u1EA3n \u0111\u1EC3 l\u01B0u t\u1EEB kh\xF4ng gi\u1EDBi h\u1EA1n</strong>\n            </span>\n            <div class=\"mochi-login-notify-group-btn\">\n              <div class=\"mochi_primary_btn\" id=\"btn-mochi-submit-free-50\">\n                  N\xE2ng c\u1EA5p ngay\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- MODAL PAID USER 100 -->\n\n        <div class=\"mochi-modal-main mochi-modal-paid-over-100\" style=\"display: none;min-height: 210px!important\">\n          <img src=\"" + mochiImageTutorial + "\" alt=\"mascot\" style = \"width:160px!important\" class=\"mochi-modal-mascot\"/>\n          <img\n            src=\"" + mochiClose + "\"\n            alt=\"mascot\"\n            class=\"mochi-modal-close-btn\"\n            id = \"mochi-close-mochi-paid-user-100\"\n          />\n          <div class=\"mochi-login-notify\">\n            <span class = \"mochi-modal-title\">\n              <strong style = \"display: block\">B\u1EA1n \u0111ang c\xF3 h\u01A1n 100 t\u1EEB c\u1EA7n \xF4n t\u1EADp.</strong>\n              <strong style = \"display: block\">\xD4n t\u1EADp ngay \u0111\u1EC3 l\u01B0u th\xEAm t\u1EEB v\xE0o s\u1ED5 tay.</strong>\n            </span>\n            <div class=\"mochi-login-notify-group-btn\">\n              <div class=\"mochi_primary_btn\" id=\"btn-mochi-submit-100\">\n                  \xD4n t\u1EADp ngay\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- MODAL PAID USER 100 level 1 -->\n\n        <div class=\"mochi-modal-main mochi-modal-paid-over-100-lv1\" style=\"display: none;min-height: 210px!important\">\n          <img src=\"" + mochiImageTutorial + "\" alt=\"mascot\" style = \"width:160px!important\" class=\"mochi-modal-mascot\"/>\n          <img\n            src=\"" + mochiClose + "\"\n            alt=\"mascot\"\n            class=\"mochi-modal-close-btn\"\n            id = \"mochi-close-mochi-paid-user-100-level-1\"\n          />\n          <div class=\"mochi-login-notify\">\n            <span class = \"mochi-modal-title\">\n              <strong style = \"display: block\">B\u1EA1n \u0111ang c\xF3 100 t\u1EEB v\u1EF1ng level 1.</strong>\n              <strong style = \"display: block\">\xD4n t\u1EADp ngay \u0111\u1EC3 l\u01B0u th\xEAm t\u1EEB v\xE0o s\u1ED5 tay </strong>\n            </span>\n            <div class=\"mochi-login-notify-group-btn\">\n              <div class=\"mochi_primary_btn\" id=\"btn-mochi-submit-100-lv-1\">\n                  \xD4n t\u1EADp ngay\n              </div>\n            </div>\n          </div>\n        </div>\n        \n        <!-- MODAL PAID USER UNDERSTAND -->\n\n        <div class=\"mochi-modal-main mochi-modal-understand\"  style=\"display: none;min-height: 210px!important\">\n          <img src=\"" + mochiRemind + "\" alt=\"mascot\" style = \"width:160px!important\" class=\"mochi-modal-mascot\"/>\n          <img\n            src=\"" + mochiClose + "\"\n            alt=\"mascot\"\n            class=\"mochi-modal-close-btn\"\n            id = \"mochi-close-mochi-understand\"\n          />\n          <div class=\"mochi-login-notify\">\n            <span class = \"mochi-modal-title\">\n              <strong style = \"display: block\">B\u1EA1n \u0111\xE3 l\u01B0u t\u1EEB th\xE0nh c\xF4ng.</strong>\n              <strong style = \"display: block\">\u0110\u1EEBng qu\xEAn \xF4n t\u1EADp v\xE0o Th\u1EDDi \u0110i\u1EC3m V\xE0ng \u0111\u1EC3 t\u0103ng hi\u1EC7u qu\u1EA3 ghi nh\u1EDB</strong>\n            </span>\n            <div class=\"mochi-login-notify-group-btn\">\n              <div class=\"mochi_primary_btn\" id = \"btn-mochi-submit-understand\">\n                  M\xECnh \u0111\xE3 hi\u1EC3u\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- MODAL PAID USER DONN'T OPEN WEBSITE YET -->\n\n        <div class=\"mochi-modal-main mochi-modal-open-web\" style=\"display: none;min-height: 220px!important\">\n          <img src=\"" + mochiNotFound + "\" alt=\"mascot\" style = \"width:127px!important\" class=\"mochi-modal-mascot\"/>\n          <img\n            src=\"" + mochiClose + "\"\n            alt=\"mascot\"\n            class=\"mochi-modal-close-btn\"\n            id = \"mochi-close-mochi-open-web\"\n          />\n          <div class=\"mochi-login-notify\">\n            <span class = \"mochi-modal-title\">\n              <strong style = \"display: block\">B\u1EA1n \u0111\xE3 l\u01B0u t\u1EEB th\xE0nh c\xF4ng.</strong>\n              <strong style = \"display: block\">\u0110\u0103ng nh\u1EADp v\xE0o website v\xE0 m\u1EDF tab S\u1ED4 TAY</strong>\n              <strong style = \"display: block\">\u0110\u1EC3 xem t\u1EEB v\u1EF1ng v\u1EEBa l\u01B0u</strong>\n            </span>\n            <div class=\"mochi-login-notify-group-btn\">\n              <div class=\"mochi_primary_btn\" id=\"btn-mochi-submit-open-web\">\n                  M\u1EDF website ngay\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- MODAL PAID USER NOW GO TO STUDY -->\n\n        <div class=\"mochi-modal-main mochi-modal-now-study\" style=\"display: none;min-height: 220px!important\">\n          <img src=\"" + mochiNotification + "\" alt=\"mascot\" style = \"width:160px!important\" class=\"mochi-modal-mascot\"/>\n          <img\n            src=\"" + mochiClose + "\"\n            alt=\"mascot\"\n            class=\"mochi-modal-close-btn\"\n            id = \"mochi-close-mochi-now-study\"\n          />\n          <div class=\"mochi-login-notify\">\n            <span class = \"mochi-modal-title mochi-append-review-count\">\n            </span>\n            <div class=\"mochi-login-notify-group-btn\">\n              <div class=\"mochi_primary_btn\" id=\"btn-mochi-submit-now-study\">\n                  \xD4n t\u1EADp ngay\n              </div>\n            </div>\n          </div>\n        </div>\n    </div>";

var mochiSvg = {
  audioRed1: "\n    <svg width='14' height='11' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'>\n      <path fill-rule='evenodd' clip-rule='evenodd' d='M9.52483 3.56707C9.52483 4.5401 9.22583 5.46892 8.6784 6.24525C8.53998 6.44154 8.27008 6.48744 8.07557 6.34775C7.88105 6.20807 7.83558 5.93571 7.97399 5.73942C8.4181 5.10963 8.66029 4.35729 8.66029 3.56707C8.66029 2.764 8.41012 2.00013 7.95249 1.36454C7.81216 1.16963 7.85497 0.896835 8.0481 0.755223C8.24124 0.61361 8.51157 0.65681 8.6519 0.851713C9.21598 1.63515 9.52483 2.57819 9.52483 3.56707ZM2.85523 1.72887C4.05969 0.654832 5.96759 1.5098 5.96759 3.12358V3.80333C5.96759 5.41711 4.05969 6.27207 2.85523 5.19803V4.89516C2.58687 5.08599 2.25872 5.1982 1.90435 5.1982C0.997152 5.1982 0.261719 4.46276 0.261719 3.55556V3.37166C0.261719 2.46446 0.997152 1.72903 1.90435 1.72903C2.25872 1.72903 2.58687 1.84124 2.85523 2.03207V1.72887Z' fill='#EB5757'/>\n    </svg>",
  audioRed2: "\n    <svg width='16' height='13' viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg'>\n      <path fill-rule='evenodd' clip-rule='evenodd' d='M11.8461 4.56631C11.8461 6.04599 11.399 7.45812 10.5798 8.63922C10.4429 8.8366 10.1734 8.88462 9.97782 8.74648C9.78222 8.60834 9.73463 8.33635 9.87152 8.13897C10.5896 7.10353 10.9815 5.8658 10.9815 4.56631C10.9815 3.25414 10.5819 2.00504 9.85074 0.963867C9.7127 0.767305 9.7587 0.495035 9.95349 0.355737C10.1483 0.216438 10.4181 0.262859 10.5561 0.459422C11.3902 1.64707 11.8461 3.07217 11.8461 4.56631ZM8.6784 7.24536C9.22583 6.46903 9.52483 5.5402 9.52483 4.56718C9.52483 3.5783 9.21598 2.63525 8.6519 1.85182C8.51157 1.65691 8.24124 1.61371 8.0481 1.75533C7.85497 1.89694 7.81216 2.16974 7.95249 2.36464C8.41012 3.00024 8.66029 3.7641 8.66029 4.56718C8.66029 5.35739 8.4181 6.10973 7.97399 6.73953C7.83558 6.93582 7.88105 7.20818 8.07557 7.34786C8.27008 7.48754 8.53998 7.44165 8.6784 7.24536ZM5.96759 4.12368C5.96759 2.5099 4.05969 1.65494 2.85523 2.72897V3.03217C2.58687 2.84134 2.25872 2.72913 1.90435 2.72913C0.997152 2.72913 0.261719 3.46457 0.261719 4.37177V4.55567C0.261719 5.46287 0.997152 6.1983 1.90435 6.1983C2.25872 6.1983 2.58687 6.08609 2.85523 5.89526V6.19814C4.05969 7.27217 5.96759 6.41721 5.96759 4.80343V4.12368Z' fill='#EB5757'/>\n    </svg>",
  audioRed3: "\n    <svg width='19' height='21' viewBox='0 0 15 13' fill='none' xmlns='http://www.w3.org/2000/svg'>\n      <path fill-rule='evenodd' clip-rule='evenodd' d='M14.2674 6.2553C14.2674 8.30126 13.626 10.2507 12.4549 11.8681C12.3141 12.0626 12.0436 12.1051 11.8508 11.963C11.6581 11.8208 11.616 11.5479 11.7568 11.3534C12.8207 9.88419 13.4029 8.11464 13.4029 6.2553C13.4029 4.42328 12.8377 2.6782 11.8027 1.22116C11.6636 1.02535 11.7082 0.752834 11.9022 0.612475C12.0962 0.472115 12.3663 0.517064 12.5054 0.71287C13.6448 2.31691 14.2674 4.23942 14.2674 6.2553ZM10.5798 10.6392C11.399 9.45814 11.8461 8.04602 11.8461 6.56633C11.8461 5.0722 11.3902 3.64709 10.5561 2.45945C10.4181 2.26288 10.1483 2.21646 9.95349 2.35576C9.7587 2.49506 9.7127 2.76733 9.85074 2.96389C10.5819 4.00507 10.9815 5.25416 10.9815 6.56633C10.9815 7.86583 10.5896 9.10356 9.87152 10.139C9.73463 10.3364 9.78222 10.6084 9.97782 10.7465C10.1734 10.8846 10.4429 10.8366 10.5798 10.6392ZM9.52483 6.5672C9.52483 7.54022 9.22583 8.46905 8.6784 9.24538C8.53998 9.44167 8.27008 9.48757 8.07557 9.34788C7.88105 9.2082 7.83558 8.93584 7.97399 8.73955C8.4181 8.10976 8.66029 7.35741 8.66029 6.5672C8.66029 5.76413 8.41012 5.00026 7.95249 4.36467C7.81216 4.16976 7.85497 3.89696 8.0481 3.75535C8.24124 3.61374 8.51157 3.65694 8.6519 3.85184C9.21598 4.63527 9.52483 5.57832 9.52483 6.5672ZM2.85523 4.729C4.05969 3.65496 5.96759 4.50993 5.96759 6.12371V6.80345C5.96759 8.41723 4.05969 9.2722 2.85523 8.19816V7.89529C2.58687 8.08612 2.25872 8.19833 1.90435 8.19833C0.997152 8.19833 0.261719 7.46289 0.261719 6.55569V6.37179C0.261719 5.46459 0.997152 4.72916 1.90435 4.72916C2.25872 4.72916 2.58687 4.84137 2.85523 5.0322V4.729Z' fill='#EB5757'/>\n    </svg>",
  audioBlue1: "\n    <svg width='14' height='11' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'>\n      <path fill-rule='evenodd' clip-rule='evenodd' d='M9.52483 3.56707C9.52483 4.5401 9.22583 5.46892 8.6784 6.24525C8.53998 6.44155 8.27008 6.48744 8.07557 6.34775C7.88105 6.20807 7.83558 5.93572 7.97399 5.73942C8.4181 5.10963 8.66029 4.35729 8.66029 3.56707C8.66029 2.764 8.41012 2.00013 7.95249 1.36454C7.81216 1.16963 7.85497 0.896835 8.0481 0.755223C8.24124 0.61361 8.51157 0.65681 8.6519 0.851713C9.21598 1.63515 9.52483 2.57819 9.52483 3.56707ZM2.85523 1.72887C4.05969 0.654833 5.96759 1.5098 5.96759 3.12358V3.80333C5.96759 5.41711 4.05969 6.27207 2.85523 5.19803V4.89516C2.58687 5.08599 2.25872 5.1982 1.90435 5.1982C0.997152 5.1982 0.261719 4.46276 0.261719 3.55556V3.37166C0.261719 2.46446 0.997152 1.72903 1.90435 1.72903C2.25872 1.72903 2.58687 1.84124 2.85523 2.03207V1.72887Z' fill='#2F80ED'/>\n    </svg>",
  audioBlue2: "\n    <svg width='16' height='13' viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg'>\n      <path fill-rule='evenodd' clip-rule='evenodd' d='M11.8461 4.56631C11.8461 6.04599 11.399 7.45812 10.5798 8.63922C10.4429 8.8366 10.1734 8.88462 9.97782 8.74648C9.78222 8.60834 9.73463 8.33635 9.87152 8.13897C10.5896 7.10353 10.9815 5.8658 10.9815 4.56631C10.9815 3.25414 10.5819 2.00504 9.85074 0.963867C9.7127 0.767305 9.7587 0.495035 9.95349 0.355737C10.1483 0.216438 10.4181 0.262859 10.5561 0.459422C11.3902 1.64707 11.8461 3.07217 11.8461 4.56631ZM8.6784 7.24536C9.22583 6.46903 9.52483 5.5402 9.52483 4.56718C9.52483 3.5783 9.21598 2.63525 8.6519 1.85182C8.51157 1.65691 8.24124 1.61371 8.0481 1.75533C7.85497 1.89694 7.81216 2.16974 7.95249 2.36464C8.41012 3.00024 8.66029 3.7641 8.66029 4.56718C8.66029 5.35739 8.4181 6.10973 7.97399 6.73953C7.83558 6.93582 7.88105 7.20818 8.07557 7.34786C8.27008 7.48754 8.53998 7.44165 8.6784 7.24536ZM5.96759 4.12368C5.96759 2.5099 4.05969 1.65494 2.85523 2.72897V3.03217C2.58687 2.84134 2.25872 2.72913 1.90435 2.72913C0.997152 2.72913 0.261719 3.46457 0.261719 4.37177V4.55567C0.261719 5.46287 0.997152 6.1983 1.90435 6.1983C2.25872 6.1983 2.58687 6.08609 2.85523 5.89526V6.19814C4.05969 7.27217 5.96759 6.41721 5.96759 4.80343V4.12368Z' fill='#2F80ED'/>\n    </svg>",
  audioBlue3: "\n    <svg width='19' height='21' viewBox='0 0 15 13' fill='none' xmlns='http://www.w3.org/2000/svg'>\n      <path fill-rule='evenodd' clip-rule='evenodd' d='M14.2674 6.2553C14.2674 8.30126 13.626 10.2507 12.4549 11.8681C12.3141 12.0626 12.0436 12.1051 11.8508 11.963C11.6581 11.8208 11.616 11.5479 11.7568 11.3534C12.8207 9.88419 13.4029 8.11464 13.4029 6.2553C13.4029 4.42328 12.8377 2.6782 11.8027 1.22116C11.6636 1.02535 11.7082 0.752834 11.9022 0.612475C12.0962 0.472115 12.3663 0.517064 12.5054 0.71287C13.6448 2.31691 14.2674 4.23942 14.2674 6.2553ZM10.5798 10.6392C11.399 9.45814 11.8461 8.04602 11.8461 6.56633C11.8461 5.0722 11.3902 3.64709 10.5561 2.45945C10.4181 2.26288 10.1483 2.21646 9.95349 2.35576C9.7587 2.49506 9.7127 2.76733 9.85074 2.96389C10.5819 4.00507 10.9815 5.25416 10.9815 6.56633C10.9815 7.86583 10.5896 9.10356 9.87152 10.139C9.73463 10.3364 9.78222 10.6084 9.97782 10.7465C10.1734 10.8846 10.4429 10.8366 10.5798 10.6392ZM9.52483 6.5672C9.52483 7.54022 9.22583 8.46905 8.6784 9.24538C8.53998 9.44167 8.27008 9.48757 8.07557 9.34788C7.88105 9.2082 7.83558 8.93584 7.97399 8.73955C8.4181 8.10976 8.66029 7.35741 8.66029 6.5672C8.66029 5.76413 8.41012 5.00026 7.95249 4.36467C7.81216 4.16976 7.85497 3.89696 8.0481 3.75535C8.24124 3.61374 8.51157 3.65694 8.6519 3.85184C9.21598 4.63527 9.52483 5.57832 9.52483 6.5672ZM2.85523 4.729C4.05969 3.65496 5.96759 4.50993 5.96759 6.12371V6.80345C5.96759 8.41723 4.05969 9.2722 2.85523 8.19816V7.89529C2.58687 8.08612 2.25872 8.19833 1.90435 8.19833C0.997152 8.19833 0.261719 7.46289 0.261719 6.55569V6.37179C0.261719 5.46459 0.997152 4.72916 1.90435 4.72916C2.25872 4.72916 2.58687 4.84137 2.85523 5.0322V4.729Z' fill='#2F80ED'/>\n    </svg>",
  plus: "\n    <svg width='15' height='16' viewBox='0 0 13 14' fill='none' xmlns='http://www.w3.org/2000/svg'>\n      <path fill-rule='evenodd' clip-rule='evenodd' d='M6.5 0.5C2.91023 0.5 0 3.41023 0 7C0 10.5898 2.91023 13.5 6.5 13.5C10.0898 13.5 13 10.5898 13 7C13 3.41023 10.0898 0.5 6.5 0.5ZM7.09091 9.36364C7.09091 9.52036 7.02865 9.67066 6.91784 9.78147C6.80702 9.89229 6.65672 9.95455 6.5 9.95455C6.34328 9.95455 6.19298 9.89229 6.08217 9.78147C5.97135 9.67066 5.90909 9.52036 5.90909 9.36364V7.59091H4.13636C3.97965 7.59091 3.82935 7.52865 3.71853 7.41784C3.60771 7.30702 3.54545 7.15672 3.54545 7C3.54545 6.84328 3.60771 6.69298 3.71853 6.58216C3.82935 6.47135 3.97965 6.40909 4.13636 6.40909H5.90909V4.63636C5.90909 4.47964 5.97135 4.32934 6.08217 4.21853C6.19298 4.10771 6.34328 4.04545 6.5 4.04545C6.65672 4.04545 6.80702 4.10771 6.91784 4.21853C7.02865 4.32934 7.09091 4.47964 7.09091 4.63636V6.40909H8.86364C9.02036 6.40909 9.17066 6.47135 9.28147 6.58216C9.39229 6.69298 9.45455 6.84328 9.45455 7C9.45455 7.15672 9.39229 7.30702 9.28147 7.41784C9.17066 7.52865 9.02036 7.59091 8.86364 7.59091H7.09091V9.36364Z' fill='white'/>\n    </svg>",
  plusSaved: "\n    <svg width=\"15\" height=\"16\" viewBox=\"0 0 14 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path opacity=\"0.2\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 0.5C3.41023 0.5 0.5 3.41023 0.5 7C0.5 10.5898 3.41023 13.5 7 13.5C10.5898 13.5 13.5 10.5898 13.5 7C13.5 3.41023 10.5898 0.5 7 0.5ZM9.81745 5.90091C9.86933 5.84161 9.90883 5.77253 9.93362 5.69774C9.95841 5.62294 9.96799 5.54395 9.9618 5.4654C9.95561 5.38685 9.93377 5.31033 9.89757 5.24035C9.86137 5.17036 9.81154 5.10833 9.75101 5.05788C9.69047 5.00744 9.62047 4.96961 9.5451 4.94663C9.46974 4.92364 9.39054 4.91596 9.31216 4.92403C9.23378 4.93211 9.15781 4.95578 9.08871 4.99365C9.01962 5.03152 8.95879 5.08282 8.90982 5.14455L6.36891 8.19305L5.05414 6.87768C4.94269 6.77004 4.79342 6.71048 4.63849 6.71183C4.48356 6.71318 4.33535 6.77532 4.22579 6.88488C4.11623 6.99444 4.05408 7.14265 4.05274 7.29758C4.05139 7.45252 4.11095 7.60178 4.21859 7.71323L5.99132 9.48595C6.04938 9.54398 6.11889 9.58927 6.19543 9.61894C6.27196 9.64862 6.35384 9.66202 6.43584 9.65829C6.51784 9.65457 6.59817 9.6338 6.6717 9.59731C6.74523 9.56082 6.81035 9.50941 6.86291 9.44636L9.81745 5.90091Z\" fill=\"black\"/>\n    </svg>"
};

exports.iconMochiImage = iconMochiImage;
exports.avatarMochiBlueImage = avatarMochiBlueImage;
exports.avatarMochiYellowImage = avatarMochiYellowImage;
exports.logoMochiImage = logoMochiImage;
exports.mochiImageTutorial = mochiImageTutorial;
exports.mochiClose = mochiClose;
exports.mochiNotification = mochiNotification;
exports.mochiRemind = mochiRemind;
exports.mochiNotFound = mochiNotFound;
exports.mochiButtonCloseGray = mochiButtonCloseGray;
exports.mochiButtonSettings = mochiButtonSettings;
exports.mochiButtonCheckImage = mochiButtonCheckImage;
exports.urlImage = urlImage;
exports.mochiModal = mochiModal;
exports.mochiSvg = mochiSvg;

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

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(58);


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(190);


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(191);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 191:
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHtmlStrimgMochiApi = getHtmlStrimgMochiApi;

var _type = __webpack_require__(12);

var _index = __webpack_require__(1);

function getHtmlStrimgMochiApi(data, isSettingTab, isSettingTag, isDetail) {
  console.log("data", data);
  console.log("isDetail", isDetail);
  if (isSettingTag == "en-vn") {
    chrome.runtime.sendMessage(_index.listMessage.click_popup_save);
  }
  return "\n    <div style=\"display: " + (isSettingTab !== isSettingTag || data.length == 0 ? "none" : "block") + "; " + (data.length > 1 || isDetail ? "padding: 0 15px 15px!important" : "") + "\" class=\"mochi-result\" id=" + (isSettingTag == "en-vn" ? "mochi-result-en-vn" : "mochi-result-en-en") + ">\n    " + data.map(function (element, key) {
    return "<div class=\"" + (key !== 0 ? "mochi-box-view-more-" + isSettingTag : "mochi-mochi-main") + "\"><p class=\"mochi-text-title\">" + element.content + "</p>\n              " + (isSettingTag == "en-en" && element.position !== null && element.position !== "undefined" ? "\n                <i style = \"margin-bottom:5px;display:inline-block\"> (" + element.position + ")</i>\n              " : "") + "\n              " + (element.phonetic_uk !== null ? "<div class=\"mochi-ex-phonetic\">\n                  <p id=\"mochi-ex-bre-text\">BrE</p>\n                    " + (element.audio_uk !== null && typeof element.audio_uk !== "undefined" ? "<div class=\"mochi-ex-audio\" id=\"mochi-ex-bre-audio-" + key + "\" source = \"" + element.audio_uk + "\">\n                    " + _type.mochiSvg.audioBlue3 + "\n                  </div>" : "") + "\n                  <p style=\"margin-left:10px\" class=\"mochi-ex-phonetic-text\">" + element.phonetic_uk + "</p>\n                </div>" : "") + "\n              " + (element.phonetic_us !== null ? "<div class=\"mochi-ex-phonetic\">\n                  <p id=\"mochi-ex-name-text\">NAmE</p>\n                  " + (element.audio_us !== null && typeof element.audio_us !== "undefined" ? "<div class=\"mochi-ex-audio\" id=\"mochi-ex-name-audio-" + key + "\" source = \"" + element.audio_us + "\">\n                    " + _type.mochiSvg.audioRed3 + "\n                  </div>" : "") + "\n                  <p style=\"margin-left:10px\" class = \"mochi-ex-phonetic-text\">" + element.phonetic_us + "</p>\n                </div>" : "") + "\n              " + (element.detail.length == 0 ? "<div class=\"mochi-detai-translate\">\n                  " + (typeof data.position !== "undefined" ? "\n                    <p class=\"mochi-text-translate\">\n                      " + (isSettingTag == "en-vn" ? element.trans + " " : element.content + " ") + " (" + data.position + ")\n                    </p>\n                  " : "\n                    <p class=\"mochi-text-translate\">\n                      " + (isSettingTag == "en-vn" ? element.trans : element.content) + "\n                    </p>\n                  ") + "\n                  </div>" : "") + "\n              " + (key !== 0 ? "mochiLoop" : "") + "\n                " + element.detail.map(function (detail, keyDetail) {
      return " <div class=\"" + (keyDetail !== 0 ? "mochi-box-view-more-" + isSettingTag : "") + "\"><div class=\"mochi-detai-translate\">\n                      <p class=\"" + (isSettingTag == "en-vn" ? "mochi-text-translate" : "mochi-text-translate-en-en") + "\">\n                        " + (isSettingTag == "en-vn" ? detail.trans + " " + (detail.position !== null ? " (" + detail.position + ")" : "") : detail.trans) + "\n                      </p>\n                      " + (isSettingTag == "en-vn" && detail.review == 1 && typeof detail.id !== "undefined" ? "\n                      <button class=\"mochi-save-word\" id=\"mochi-save-word-detail-" + key + "-" + keyDetail + "\" value=\"" + detail.id + "\">\n                        " + _type.mochiSvg.plus + " <p style=\"margin-left: 5px;margin-bottom:0;margin-top:0;font-size:1em;color:white\">L\u01B0u t\u1EEB</p>\n                      </button>\n                      " : "") + "\n                      <button style=\"display:none!important\" class=\"mochi-save-word-has-saved\" id=\"mochi-save-word-detail-" + key + "-" + keyDetail + "-saved\">\n                      " + _type.mochiSvg.plusSaved + " <p style=\"margin-left: 5px;margin-bottom:0;margin-top:0;font-size:1em;color:#9b9b9b\">\u0110\xE3 l\u01B0u</p>\n                      </button>\n                      " + (isSettingTag == "en-vn" && detail.review == 2 && typeof detail.id !== "undefined" ? "\n                      <button class=\"mochi-save-word-has-saved\">\n                      " + _type.mochiSvg.plusSaved + " <p style=\"margin-left: 5px;margin-bottom:0;margin-top:0;font-size:1em;color:#9b9b9b\">\u0110\xE3 l\u01B0u</p>\n                      </button>\n                      " : "") + "\n                    </div>\n                   \n                    " + (detail.en_sentence !== "" && detail.en_sentence !== null ? "<div style=\"line-height: 20px; color: black; font-size: 13px\"> - " + detail.en_sentence.replaceAll("<br />", "<br/> -") + "</div>" : "") + "</div>mochiLoop";
    }) + "\n                  </div>mochiLoop";
  }) + "\n    " + (data.length > 1 || isDetail ? "\n      <div id=\"mochi-footer\"><p typeMochi = \"narrow-down\" id = \"mochi-view-more-" + isSettingTag + "\" style=\"display: " + (data.length > 1 || isDetail ? "block" : "none") + "\">" + (isSettingTag == "en-vn" ? "Xem thêm các nghĩa khác" : "See more") + "</p><img alt=\"logo-mochi\" src=" + _type.logoMochiImage + " style=\"width:80px; height: 14px\"></img></div>\n    " : "\n      <div id=\"mochi-footer-no-text\"><img alt=\"logo-mochi\" src=" + _type.logoMochiImage + " style=\"width:80px\"></img></div>\n    ") + "\n    \n    </div>";
}

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectViewMoreClick = detectViewMoreClick;
function detectViewMoreClick(id) {
  var type = id == "#mochi-view-more-en-vn" ? "en-vn" : "en-en";
  var domDetail = document.querySelectorAll(".mochi-box-view-more-" + type);
  var domClick = document.querySelector(id);
  if (domClick && domDetail.length > 0) {
    domClick.addEventListener("click", function () {
      if (domClick.getAttribute("typeMochi") == "narrow-down") {
        domClick.innerHTML = type == "en-vn" ? "Rút gọn" : "Hide";
        domClick.setAttribute("typeMochi", "extend");
        domDetail.forEach(function (element) {
          element.style.display = "block";
        });
      } else {
        domClick.innerHTML = type == "en-vn" ? "Xem thêm các nghĩa khác" : "See more";
        domClick.setAttribute("typeMochi", "narrow-down");
        domDetail.forEach(function (element) {
          element.style.display = "none";
        });
      }
    });
  }
}

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectAllButtonClick = detectAllButtonClick;

var _saveWord = __webpack_require__(195);

var _type = __webpack_require__(12);

function handleClickRadio(dom, source, type) {
  var audio = new Audio(source);
  audio.crossOrigin = "anonymous";
  audio.play();
  var delay = 100;
  var audio1 = _type.mochiSvg.audioRed1;
  var audio2 = _type.mochiSvg.audioRed2;
  var audio3 = _type.mochiSvg.audioRed3;
  if (type == "bre") {
    audio1 = _type.mochiSvg.audioBlue1;
    audio2 = _type.mochiSvg.audioBlue2;
    audio3 = _type.mochiSvg.audioBlue3;
  }
  dom.innerHTML = "";
  dom.insertAdjacentHTML("beforeend", audio1);
  setTimeout(function () {
    dom.innerHTML = "";
    dom.insertAdjacentHTML("beforeend", audio2);
    setTimeout(function () {
      dom.innerHTML = "";
      dom.insertAdjacentHTML("beforeend", audio3);
    }, delay);
  }, delay);
}
function detectAllButtonClick(data, isSettingTab) {
  var prefix = isSettingTab == "en-vn" ? "#mochi-result-en-vn " : "#mochi-result-en-en ";
  data.forEach(function (element, key) {
    //detect action audio
    var idAudioBre = prefix + "#mochi-ex-bre-audio-" + key;
    var domAudioBre = document.querySelector(idAudioBre);
    if (domAudioBre) {
      var source = domAudioBre.getAttribute("source");
      domAudioBre.addEventListener("click", function () {
        return handleClickRadio(domAudioBre, source, "bre");
      });
    }
    var idAudioName = prefix + "#mochi-ex-name-audio-" + key;
    var domAudioName = document.querySelector(idAudioName);
    if (domAudioName) {
      var _source = domAudioName.getAttribute("source");
      domAudioName.addEventListener("click", function () {
        return handleClickRadio(domAudioName, _source, "name");
      });
    }
    //detect action audio
    //detect action save word in detail
    element.detail.forEach(function (detail, keyDetail) {
      var idSaveWordDetail = prefix + "#mochi-save-word-detail-" + key + "-" + keyDetail;
      var domSaveWordDetail = document.querySelector(idSaveWordDetail);
      if (domSaveWordDetail) {
        var valueDetail = domSaveWordDetail.getAttribute("value");
        domSaveWordDetail.addEventListener("click", function () {
          return (0, _saveWord.handleClickSaveWord)(valueDetail, idSaveWordDetail);
        });
      }
    });
    //detect action save word in detail
  });
}

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleClickSaveWord = handleClickSaveWord;

var _postMochi = __webpack_require__(196);

var _postMochi2 = _interopRequireDefault(_postMochi);

var _getMochi = __webpack_require__(31);

var _getMochi2 = _interopRequireDefault(_getMochi);

var _modal = __webpack_require__(32);

var _index = __webpack_require__(1);

var _checkGG = __webpack_require__(14);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function handleClickSaveWord(id_word, idSaveWordDetail) {
  var detectLocal = localStorage.getItem("currentTime");
  console.log("time current", detectLocal);
  // Check xem co thoi gian tren local hay chua va xu ly
  if (detectLocal !== null) {
    var timeTomorrow = new Date();
    var timeTomorrow2 = timeTomorrow.toDateString();
    var Time3 = new Date(timeTomorrow2);
    var Time4 = new Date(detectLocal);
    if (Time3.getTime() !== Time4.getTime()) {
      chrome.runtime.sendMessage(_index.listMessage.saveTimeFirst);
    }
  }

  window.localStorage.setItem("saveWord", "1");
  chrome.runtime.sendMessage(_index.listMessage.save_word_button);
  if (window.mochiData.token == "notLogin") {
    chrome.runtime.sendMessage(_index.listMessage.modalLoginSaveWord);
    (0, _modal.handleOpenModal)("mochi-modal-login");
  } else {
    chrome.runtime.sendMessage(_index.listMessage.getStatusSaveFirst, function (statusSaveFirst) {
      console.log({ statusSaveFirst: statusSaveFirst });
      chrome.storage.sync.get(["gaTracking"], function (result) {
        if (result.gaTracking !== undefined) {
          (0, _postMochi2.default)(_index.URL_ROOT + "v3.1/words/dictionary-english/add-word", {
            word_id: +id_word,
            user_token: window.mochiData.token,
            uuid: result.gaTracking
          }, _index.paramsAPI, function (response) {
            var codeResponse = response.code;
            var caseResponse = response.case;
            if (typeof response.code !== "undefined" && codeResponse !== 0) {
              (0, _getMochi2.default)(_index.URL_ROOT + "v3.1/words/summary-ios", {
                lang: "en",
                user_token: window.mochiData.token
              }, _index.paramsAPI, function (dataSta) {
                if (typeof dataSta.data !== "undefined") {
                  // let dataStatictical = dataTest; //TEST
                  // let type = "free"; //TEST
                  var dataStatictical = dataSta.data;
                  // console.log('Thời gian', dataStatictical.review_time );
                  var type = dataStatictical.expired_day !== null ? "paid" : "free";
                  var review_count = dataStatictical.review_count;
                  var timeReview = new Date(dataStatictical.review_time).getTime();
                  var currentTime = new Date().getTime();
                  var dateCurrent = new Date();
                  // console.log("thời gian local", detectLocal);
                  if (detectLocal === null) {
                    // console.log("Bị rỗng rồi thêm thông tin vào local nha");
                    localStorage.setItem("currentTime", dateCurrent.toDateString());
                    // Trường hợp ấn nút lưu lần đầu tiên
                    var total = dataStatictical.total;
                    var countLV1 = 0;
                    var arrayCountLV1 = dataStatictical.statistic.filter(function (e) {
                      return e.proficiency == 1;
                    });
                    if (arrayCountLV1.length > 0) {
                      countLV1 = arrayCountLV1[0].count;
                    }
                    if (codeResponse == 1) {
                      if (response.first_save === true) {
                        chrome.runtime.sendMessage("showPopupSave");
                      }
                      // Tiến hành lưu trong trường hợp chưa có ngày trong localStorage
                      if (statusSaveFirst == true) {
                        document.querySelector(idSaveWordDetail).style.setProperty("display", "none", "important");
                        document.querySelector(idSaveWordDetail + "-saved").style.setProperty("display", "flex", "important");
                      } else {
                        chrome.runtime.sendMessage(_index.listMessage.saveFirst);
                        if (review_count > 0) {
                          // console.log("showNowReview") //show modal đến giờ ôn tập
                          (0, _modal.handleOpenModal)("mochi-modal-now-study", review_count);
                          return;
                        } else {
                          if (timeReview > currentTime) {
                            // console.log("showTDV")  //show modal thời điểm vàng
                            (0, _modal.handleOpenModal)("mochi-modal-understand");
                            return;
                          } else if (timeReview < currentTime) {
                            // console.log("showOpenWebsite") //show modal mở website
                            (0, _modal.handleOpenModal)("mochi-modal-open-web");
                            return;
                          }
                        }
                      }
                    } else if (codeResponse == 2) {
                      switch (caseResponse) {
                        case 1:
                          //  console.log("freeOver50");
                          (0, _modal.handleOpenModal)("mochi-modal-free-over-50");
                          return;
                        case 2:
                          //  console.log("freeOver30");
                          chrome.runtime.sendMessage(_index.listMessage.modalPopup30);
                          (0, _modal.handleOpenModal)("mochi-modal-free-over-30");
                          return;
                        case 3:
                          if (review_count >= 100 && type == "paid") {
                            // console.log("paidOver100");
                            (0, _modal.handleOpenModal)("mochi-modal-paid-over-100");
                            return;
                          } else if (countLV1 >= 100 && type == "paid") {
                            // console.log("paidOver100LV1");
                            (0, _modal.handleOpenModal)("mochi-modal-paid-over-100-lv1");
                            return;
                          }
                          break;
                        default:
                          setShowModal("overload");
                          break;
                      }
                    }
                  } else if (localStorage.getItem("currentTime") !== null) {
                    var timeCurrent2 = localStorage.getItem("currentTime");
                    var _timeTomorrow = new Date();
                    var _timeTomorrow2 = _timeTomorrow.toDateString();
                    var _Time = new Date(_timeTomorrow2);
                    var _Time2 = new Date(timeCurrent2);
                    // Check điều kiện để hiện ra popup luru từ
                    var _total = dataStatictical.total;
                    var _countLV = 0;
                    var _arrayCountLV = dataStatictical.statistic.filter(function (e) {
                      return e.proficiency == 1;
                    });
                    if (_arrayCountLV.length > 0) {
                      _countLV = _arrayCountLV[0].count;
                    }
                    if (codeResponse == 1) {
                      if (response.first_save === true) {
                        chrome.runtime.sendMessage("showPopupSave");
                      }
                      console.log(444444444444444444);
                      console.log("statusSaveFirst", statusSaveFirst);
                      // console.log('Set lại giá trị trên localStorage');
                      localStorage.setItem("currentTime", _timeTomorrow2);
                      if (statusSaveFirst == true) {
                        // console.log("Bắt đầu lưu từ trong trường hợp không hiện popup");
                        document.querySelector(idSaveWordDetail).style.setProperty("display", "none", "important");
                        document.querySelector(idSaveWordDetail + "-saved").style.setProperty("display", "flex", "important");
                      } else {
                        chrome.runtime.sendMessage(_index.listMessage.saveFirst);
                        if (review_count > 0) {
                          console.log("showNowReview");
                          //show modal đến giờ ôn tập
                          (0, _modal.handleOpenModal)("mochi-modal-now-study", review_count);
                          return;
                        } else {
                          if (timeReview > currentTime) {
                            // console.log("showTDV")  //show modal thời điểm vàng
                            (0, _modal.handleOpenModal)("mochi-modal-understand");
                            return;
                          } else if (timeReview < currentTime) {
                            // console.log("showOpenWebsite") //show modal mở website
                            (0, _modal.handleOpenModal)("mochi-modal-open-web");
                            return;
                          }
                        }
                      }
                    } else if (codeResponse == 2 && _Time.getTime() !== _Time2.getTime()) {
                      console.log("Tiến hành hiện popup");
                      // chrome.runtime.sendMessage("saveTimeFirst");
                      // chrome.runtime.sendMessage(listMessage.showPopupSave);
                      switch (caseResponse) {
                        case 1:
                          //  console.log("freeOver50");
                          // chrome.runtime.sendMessage(
                          //   listMessage.showPopupSave
                          // );
                          (0, _modal.handleOpenModal)("mochi-modal-free-over-50");
                          return;
                        case 2:
                          //  console.log("freeOver30");
                          // chrome.runtime.sendMessage(
                          //   listMessage.showPopupSave
                          // );
                          chrome.runtime.sendMessage(_index.listMessage.modalPopup30);
                          (0, _modal.handleOpenModal)("mochi-modal-free-over-30");
                          return;
                        case 3:
                          if (review_count >= 100 && type == "paid") {
                            // console.log("paidOver100");
                            (0, _modal.handleOpenModal)("mochi-modal-paid-over-100");
                            return;
                          } else if (_countLV >= 100 && type == "paid") {
                            // console.log("paidOver100LV1");
                            (0, _modal.handleOpenModal)("mochi-modal-paid-over-100-lv1");
                            return;
                          }
                          break;
                        default:
                          setShowModal("overload");
                          break;
                      }
                    } else if (codeResponse == 2) {
                      console.log("Chay vao TH hien popup");
                      // console.log('case', caseResponse);
                      switch (caseResponse) {
                        case 2:
                          //  console.log("freeOver30");
                          (0, _modal.handleOpenModal)("mochi-modal-free-over-30");
                          chrome.runtime.sendMessage(_index.listMessage.modalPopup30);
                          return;
                        case 3:
                          if (review_count >= 100 && type == "paid") {
                            // console.log("paidOver100");
                            (0, _modal.handleOpenModal)("mochi-modal-paid-over-100");
                            return;
                          } else if (_countLV >= 100 && type == "paid") {
                            // console.log("paidOver100LV1");
                            (0, _modal.handleOpenModal)("mochi-modal-paid-over-100-lv1");
                            return;
                          }
                          break;
                        default:
                          setShowModal("overload");
                          break;
                      }
                    }
                  }
                }
              });
            }
          });
        } else if (result.gaTracking === undefined) {
          console.log("chua co uuid");
          var myuuid = (0, _checkGG.generateUUID)();
          chrome.storage.sync.set({ gaTracking: myuuid }, function () {});
          (0, _postMochi2.default)(_index.URL_ROOT + "v3.1/words/dictionary-english/add-word", {
            word_id: +id_word,
            user_token: window.mochiData.token,
            uuid: myuuid
          }, _index.paramsAPI, function (response) {
            var codeResponse = response.code;
            var caseResponse = response.case;
            if (typeof response.code !== "undefined" && codeResponse !== 0) {
              (0, _getMochi2.default)(_index.URL_ROOT + "v3.1/words/summary-ios", {
                lang: "en",
                user_token: window.mochiData.token
              }, _index.paramsAPI, function (dataSta) {
                if (typeof dataSta.data !== "undefined") {
                  // let dataStatictical = dataTest; //TEST
                  // let type = "free"; //TEST
                  var dataStatictical = dataSta.data;
                  // console.log('Thời gian', dataStatictical.review_time );
                  var type = dataStatictical.expired_day !== null ? "paid" : "free";
                  var review_count = dataStatictical.review_count;
                  var timeReview = new Date(dataStatictical.review_time).getTime();
                  var currentTime = new Date().getTime();
                  var dateCurrent = new Date();
                  // console.log("thời gian local", detectLocal);
                  if (detectLocal === null) {
                    // console.log("Bị rỗng rồi thêm thông tin vào local nha");
                    localStorage.setItem("currentTime", dateCurrent.toDateString());
                    // Trường hợp ấn nút lưu lần đầu tiên
                    var total = dataStatictical.total;
                    var countLV1 = 0;
                    var arrayCountLV1 = dataStatictical.statistic.filter(function (e) {
                      return e.proficiency == 1;
                    });
                    if (arrayCountLV1.length > 0) {
                      countLV1 = arrayCountLV1[0].count;
                    }
                    if (codeResponse == 1) {
                      // Tiến hành lưu trong trường hợp chưa có ngày trong localStorage
                      if (response.first_save === true) {
                        chrome.runtime.sendMessage("showPopupSave");
                      }
                      if (statusSaveFirst == true) {
                        document.querySelector(idSaveWordDetail).style.setProperty("display", "none", "important");
                        document.querySelector(idSaveWordDetail + "-saved").style.setProperty("display", "flex", "important");
                      } else {
                        chrome.runtime.sendMessage(_index.listMessage.saveFirst);
                        if (review_count > 0) {
                          // console.log("showNowReview") //show modal đến giờ ôn tập
                          (0, _modal.handleOpenModal)("mochi-modal-now-study", review_count);
                          return;
                        } else {
                          if (timeReview > currentTime) {
                            // console.log("showTDV")  //show modal thời điểm vàng
                            (0, _modal.handleOpenModal)("mochi-modal-understand");
                            return;
                          } else if (timeReview < currentTime) {
                            // console.log("showOpenWebsite") //show modal mở website
                            (0, _modal.handleOpenModal)("mochi-modal-open-web");
                            return;
                          }
                        }
                      }
                    } else if (codeResponse == 2) {
                      switch (caseResponse) {
                        case 1:
                          //  console.log("freeOver50");
                          (0, _modal.handleOpenModal)("mochi-modal-free-over-50");
                          return;
                        case 2:
                          //  console.log("freeOver30");
                          chrome.runtime.sendMessage(_index.listMessage.modalPopup30);
                          (0, _modal.handleOpenModal)("mochi-modal-free-over-30");
                          return;
                        case 3:
                          if (review_count >= 100 && type == "paid") {
                            // console.log("paidOver100");
                            (0, _modal.handleOpenModal)("mochi-modal-paid-over-100");
                            return;
                          } else if (countLV1 >= 100 && type == "paid") {
                            // console.log("paidOver100LV1");
                            (0, _modal.handleOpenModal)("mochi-modal-paid-over-100-lv1");
                            return;
                          }
                          break;
                        default:
                          setShowModal("overload");
                          break;
                      }
                    }
                  } else if (localStorage.getItem("currentTime") !== null) {
                    var timeCurrent2 = localStorage.getItem("currentTime");
                    var _timeTomorrow3 = new Date();
                    var _timeTomorrow4 = _timeTomorrow3.toDateString();
                    var _Time3 = new Date(_timeTomorrow4);
                    var _Time4 = new Date(timeCurrent2);
                    // Check điều kiện để hiện ra popup luru từ
                    var _total2 = dataStatictical.total;
                    var _countLV2 = 0;
                    var _arrayCountLV2 = dataStatictical.statistic.filter(function (e) {
                      return e.proficiency == 1;
                    });
                    if (_arrayCountLV2.length > 0) {
                      _countLV2 = _arrayCountLV2[0].count;
                    }
                    if (codeResponse == 1) {
                      console.log("statusSaveFirst", statusSaveFirst);
                      // console.log('Set lại giá trị trên localStorage');
                      localStorage.setItem("currentTime", _timeTomorrow4);
                      if (statusSaveFirst == true) {
                        // console.log("Bắt đầu lưu từ trong trường hợp không hiện popup");
                        if (response.first_save === true) {
                          chrome.runtime.sendMessage("showPopupSave");
                        }
                        document.querySelector(idSaveWordDetail).style.setProperty("display", "none", "important");
                        document.querySelector(idSaveWordDetail + "-saved").style.setProperty("display", "flex", "important");
                      } else {
                        chrome.runtime.sendMessage(_index.listMessage.saveFirst);
                        if (review_count > 0) {
                          console.log("showNowReview");
                          //show modal đến giờ ôn tập
                          (0, _modal.handleOpenModal)("mochi-modal-now-study", review_count);
                          return;
                        } else {
                          if (timeReview > currentTime) {
                            // console.log("showTDV")  //show modal thời điểm vàng
                            (0, _modal.handleOpenModal)("mochi-modal-understand");
                            return;
                          } else if (timeReview < currentTime) {
                            // console.log("showOpenWebsite") //show modal mở website
                            (0, _modal.handleOpenModal)("mochi-modal-open-web");
                            return;
                          }
                        }
                      }
                    } else if (codeResponse == 2 && _Time3.getTime() !== _Time4.getTime()) {
                      console.log("Tiến hành hiện popup");
                      // chrome.runtime.sendMessage("saveTimeFirst");
                      // chrome.runtime.sendMessage(listMessage.showPopupSave);
                      switch (caseResponse) {
                        case 1:
                          //  console.log("freeOver50");
                          // chrome.runtime.sendMessage(
                          //   listMessage.showPopupSave
                          // );
                          (0, _modal.handleOpenModal)("mochi-modal-free-over-50");
                          return;
                        case 2:
                          //  console.log("freeOver30");
                          // chrome.runtime.sendMessage(
                          //   listMessage.showPopupSave
                          // );
                          chrome.runtime.sendMessage(_index.listMessage.modalPopup30);
                          (0, _modal.handleOpenModal)("mochi-modal-free-over-30");
                          return;
                        case 3:
                          if (review_count >= 100 && type == "paid") {
                            // console.log("paidOver100");
                            (0, _modal.handleOpenModal)("mochi-modal-paid-over-100");
                            return;
                          } else if (_countLV2 >= 100 && type == "paid") {
                            // console.log("paidOver100LV1");
                            (0, _modal.handleOpenModal)("mochi-modal-paid-over-100-lv1");
                            return;
                          }
                          break;
                        default:
                          setShowModal("overload");
                          break;
                      }
                    } else if (codeResponse == 2) {
                      console.log("Chay vao TH hien popup");
                      // console.log('case', caseResponse);
                      switch (caseResponse) {
                        case 2:
                          //  console.log("freeOver30");
                          (0, _modal.handleOpenModal)("mochi-modal-free-over-30");
                          chrome.runtime.sendMessage(_index.listMessage.modalPopup30);
                          return;
                        case 3:
                          if (review_count >= 100 && type == "paid") {
                            // console.log("paidOver100");
                            (0, _modal.handleOpenModal)("mochi-modal-paid-over-100");
                            return;
                          } else if (_countLV2 >= 100 && type == "paid") {
                            // console.log("paidOver100LV1");
                            (0, _modal.handleOpenModal)("mochi-modal-paid-over-100-lv1");
                            return;
                          }
                          break;
                        default:
                          setShowModal("overload");
                          break;
                      }
                    }
                  }
                }
              });
            }
          });
        }
      });
    });
  }
}

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

exports.default = fetchPostMochi;
function fetchPostMochi(url, data, headers, cb) {
  fetch(url, {
    method: 'POST', // or 'PUT'
    headers: _extends({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }, headers),
    body: JSON.stringify(data)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    cb(data);
  }).catch(function (error) {
    console.error('Error:', error);
  });
}

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectAllButtonClickSuggest = detectAllButtonClickSuggest;

var _content = __webpack_require__(58);

function detectAllButtonClickSuggest(dataSuggests) {
  dataSuggests.forEach(function (element, key) {
    var idSuggest = "#mochi-suggest-word-" + key;
    var textDom = document.querySelector(idSuggest);
    if (textDom) {
      var value = textDom.getAttribute("value");
      textDom.addEventListener("click", function () {
        return (0, _content.handleClickTextSuggest)(value);
      });
    }
  });
}

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHtmlStringGGApi = getHtmlStringGGApi;

var _type = __webpack_require__(12);

var _index = __webpack_require__(1);

function getHtmlStringGGApi(transTextGGApi, originTextGGApi) {
  var dataProfileLocal = localStorage.getItem("profile");
  var dataProfileCheck = JSON.parse(dataProfileLocal);
  chrome.runtime.sendMessage(_index.listMessage.tracking_words);
  if (window.mochiData.profile.email === "") {}
  return dataProfileLocal === null || window.mochiData.profile.email === "" && dataProfileCheck.email == "" ? "\n    <div id=\"dom-gg-search\" style=\"display:flex; align-items: center; justify-content: center;flex-direction: column; padding: 50px 0 50px; overflow-y: auto\">\n        <img style=\"width: 140px; margin: 0 0 15px\" alt=\"mochiRemind\" src=" + _type.mochiRemind + "></img>\n        <div style=\"text-align: center; margin-bottom: 10px; color: black\">\n          <b>\u0110\u0103ng nh\u1EADp t\xE0i kho\u1EA3n h\u1ECDc \u1EDF Mochimochi </b>\n          <br>\n          <b> \u0111\u1EC3 m\u1EDF kh\xF3a t\u1EA5t c\u1EA3 c\xE1c t\xEDnh n\u0103ng c\u1EE7a Mochi Dictionary</b>\n        </div>\n        <div class=\"mochi_primary_btn text-align\" id=\"btn-mochi-submit-upgrade\">\n            <a href=\"" + _index.URL_PAGE_LOGIN + "\" target=\"_blank\" style=\"cursor: pointer; color: white;\">\n              \u0110\u0103ng nh\u1EADp\n            </a>\n        </div>\n        <div class=\"mochi_primary_btn_below text-align\" id=\"btn-mochi-submit-upgrade_below\" style=\"margin-top: 16px;font-size:15px\">\n            <a href=\"" + _index.URL_PAGE_REGISTER + "\" target=\"_blank\" style=\"cursor: pointer; color: black;\">\n              T\u1EA1o t\xE0i kho\u1EA3n m\u1EDBi\n            </a>\n        </div>\n      </div>\n    " : "\n    <div id=\"dom-gg-search\" style=\"padding: 15px 15px 25px; font-weight: 600;\">\n      <div class=\"box_content_mochi_extension-scroll\" style=\"overflow-y:auto; padding: 10px; max-height: 24vh; margin-bottom: 10px; color: black; border: 1px solid #FFCB08; border-radius: 5px\">\n        <span>" + originTextGGApi + "</span>\n      </div>\n      <div class=\"box_content_mochi_extension-scroll\" style=\"background: #f5f5f5;overflow-y:auto; padding: 10px; max-height: 24vh; margin-bottom: 10px; color: black; border: 1px solid #d1cdcd; border-radius: 5px\">\n        <span>" + transTextGGApi + "</span>\n      </div>\n      <div id=\"mochi-footer-no-text\"><img alt=\"logo-mochi\" src=" + _type.logoMochiImage + " style=\"width:80px\"></img></div>\n    </div>\n  </div>\n    ";
}

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHtmlStringSuggest = getHtmlStringSuggest;

var _type = __webpack_require__(12);

function getHtmlStringSuggest(suggest, isSettingTab) {
  return "\n    <div class=\"mochi-suggest-wrapper mochi-result\">\n      <p style = \"color:black; display: " + (isSettingTab == "en-vn" ? "block" : "none") + "\" id = \"mochi-suggest-en-vn\">C\xF3 ph\u1EA3i b\u1EA1n \u0111ang t\xECm t\u1EEB n\xE0y?</p>\n      <p style = \"color:black; display: " + (isSettingTab == "en-en" ? "block" : "none") + "\" id = \"mochi-suggest-en-en\">Did you mean:</p>\n      " + suggest.map(function (item, key) {
    return "<p\n          class=\"mochi-suggest-word\"\n          id = \"mochi-suggest-word-" + key + "\"\n          value = \"" + item + "\"\n        >\n          " + item + "\n        </p>mochiLoop";
  }) + "\n      <div id=\"mochi-footer-no-text\"><img alt=\"logo-mochi\" src=" + _type.logoMochiImage + " style=\"width:80px\"></img></div>\n    </div>\n    ";
}

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleLogin = handleLogin;

var _type = __webpack_require__(12);

var _index = __webpack_require__(1);

var _getMochi = __webpack_require__(31);

var _getMochi2 = _interopRequireDefault(_getMochi);

var _setting = __webpack_require__(59);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function handleLogin() {
  chrome.runtime.sendMessage(_index.listMessage.reloadCookie, function (responseReload) {
    if (responseReload == "success") {
      setTimeout(function () {
        chrome.runtime.sendMessage(_index.listMessage.getDataSettings, function (response) {
          window.mochiData.token = response.token;

          if (response.token === "notLogin") {
            // console.log("Bạn đang ở trạng thái chưa dăng nhập");
            localStorage.removeItem("profile");
            localStorage.removeItem("timeCurrent");
            localStorage.removeItem("timeDateTime");
            // Toi uu lai phan dang nhap
            chrome.runtime.sendMessage(_index.listMessage.handleNotLogin, function (result) {});
          }
          var timeGetApi = new Date(localStorage.getItem("timeDateTime"));
          var timeCallApi = timeGetApi.getTime() !== localStorage.getItem("timeCurrent");
          if (localStorage.getItem("profile") === null && timeCallApi === true) {
            // console.log('trường hợp sẽ được call api');
            if (response.token !== "notLogin") {
              window.mochiData.isSettingTab = response.isSettingTab;
              // console.log('Đang gọi vào Api');
              (0, _getMochi2.default)(_index.URL_ROOT + "v3.0/profile", {
                user_token: response.token
              }, _index.paramsAPI, function (profile) {
                console.log("profile", profile);
                if (profile.code == 1) {
                  window.mochiData.profile = profile.data;
                  console.log('data', profile.data);
                  // set giá trị profile và thời gian gọi Api lên localStorage
                  localStorage.setItem("profile", JSON.stringify(profile.data));
                  chrome.runtime.sendMessage({
                    name: _index.listMessage.handleProfile,
                    dataProfile: profile.data,
                    dataToken: profile.data.user_token
                  });
                  chrome.runtime.sendMessage(_index.listMessage.handleReload);
                  var timeCurrent = new Date();
                  localStorage.setItem("timeDateTime", timeCurrent);
                  localStorage.setItem("timeCurrent", timeCurrent.getTime());

                  var buttonFree = document.querySelector(".mochi-login-button");
                  var header = document.querySelector("#mochi-header");
                  var settings = document.querySelector(".mochi-profile-setting");
                  if (settings) {
                    settings.style.display = "none !important";
                  }
                  if (buttonFree) {
                    buttonFree.style.display = "none";
                    // console.log('Trường hợp sẽ lấy giá trị từ Api');
                    header.insertAdjacentHTML("beforeend", "\n                            <div class=\"mochi-profile-setting\">\n                            <div class = \"mochi-profile-name\">\n                            <span class = \"mochi-text-login\">" + profile.data.display_name.slice(0, 9) + "</span>\n                            <img alt=\"avatar\"  style=\"max-width: 40px\" src=\"" + _type.avatarMochiYellowImage + "\"></img>\n                            </div>\n                            <img src=" + _type.mochiButtonSettings + " style=\"max-width:35px; margin-left:5px\" class=\"setting__popup setting__popup-3\" alt=\"setting_close\"></img>\n                            </div>");
                    var _arrSettingPopup = document.querySelectorAll(".setting__popup-3");
                    for (var i = 0; i < _arrSettingPopup.length; i++) {
                      _arrSettingPopup[i].addEventListener("click", function () {
                        (0, _setting.settingBgc)();
                        document.querySelector(".div__popup--setting").style.display = "block";
                        document.querySelector(".overlay__popup").style.display = "block";
                        document.querySelector("#box_content_mochi_extension").style.display = "none";
                        document.querySelector("#icon_mochi_extension").style.display = "none";
                      });
                    }
                    // document
                    //   .querySelector(".setting__popup-3")
                    //   .addEventListener("click", function() {
                    //     settingBgc();
                    //     document.querySelector(
                    //       ".div__popup--setting"
                    //     ).style.display = "block";
                    //     document.querySelector(
                    //       ".overlay__popup"
                    //     ).style.display = "block";
                    //     document.querySelector(
                    //       "#box_content_mochi_extension"
                    //     ).style.display = "none";
                    //     document.querySelector(
                    //       "#icon_mochi_extension"
                    //     ).style.display = "none";
                    //   });
                    document.querySelector(".mochi-profile-name").addEventListener("click", function () {
                      window.open("https://mochidemy.com/extension-page-login");
                      // checkLoginReloadPage()
                    });
                  }
                }
              });
            } else if (response.token === "notLogin") {
              var buttonFree = document.querySelector(".mochi-login-button");
              var header = document.querySelector("#mochi-header");
              var settings = document.querySelector(".mochi-profile-setting");
              if (settings) {
                settings.style.display = "none !important";
              }
              if (buttonFree) {
                buttonFree.style.display = "none";
                // console.log('Trường hợp sẽ lấy giá trị từ Api');
                header.insertAdjacentHTML("beforeend", "\n                        <div class=\"mochi-profile-setting\">\n                        <div class = \"mochi-profile-name mochi__btn--login\">\n                        <span class = \"mochi-text-login \">\u0110\u0103ng nh\u1EADp</span>\n                        <img alt=\"avatar\" style=\"max-width: 40px\" src=\"" + _type.avatarMochiBlueImage + "\"></img>\n                        </div>\n                        <img src=" + _type.mochiButtonSettings + " style=\"max-width:35px; margin-left:5px\" class=\"setting__popup setting__popup-3\" alt=\"setting_close\"></img>\n                        </div>");
                var arrLogin = document.querySelectorAll(".mochi__btn--login");
                for (var i = 0; i < arrLogin.length; i++) {
                  arrLogin[i].addEventListener("click", function () {
                    window.open("https://mochidemy.com/extension-page-login/login");
                  });
                }
              }
            }
            // Click 
            var arrSettingPopup = document.querySelectorAll(".setting__popup-3");
            for (var _i = 0; _i < arrSettingPopup.length; _i++) {
              arrSettingPopup[_i].addEventListener("click", function () {
                (0, _setting.settingBgc)();
                document.querySelector(".div__popup--setting").style.display = "block";
                document.querySelector(".overlay__popup").style.display = "block";
                document.querySelector("#box_content_mochi_extension").style.display = "none";
                document.querySelector("#icon_mochi_extension").style.display = "none";
              });
            }
          } else {
            // console.log('Trường hợp không đượcc gọi api nữa');
            // console.log('Trường hợp sẽ lấy giá trị từ LocalStorage');
            var _buttonFree = document.querySelector(".mochi-login-button");
            var _header = document.querySelector("#mochi-header");
            var _settings = document.querySelector(".mochi-profile-setting");
            if (_settings) {
              _settings.style.display = "none !important";
            }
            if (_buttonFree) {
              _buttonFree.style.display = "none";
              var profileName = localStorage.getItem("profile");
              var profile = JSON.parse(profileName);
              chrome.runtime.sendMessage(_index.listMessage.getProfile, function (result) {
                var profile = result;
                console.log("profile", result);
                // let profileName = localStorage.getItem('profile');
                // let profile = JSON.parse(profileName);
                _header.insertAdjacentHTML("beforeend", "\n                          <div class=\"mochi-profile-setting\">\n                          <div class = \"mochi-profile-name\">\n                          <span class = \"mochi-text-login\">" + profile.display_name.slice(0, 9) + "</span><img alt=\"avatar\" style=\"max-width: 40px\" src=\"" + _type.avatarMochiYellowImage + "\"></img>\n                          </div>\n                          <img src=" + _type.mochiButtonSettings + " style=\"max-width:35px ;margin-left:5px\" class=\"setting__popup setting__popup-3\" alt=\"setting_close\"></img>\n                          </div>");

                var arrSettingPopup = document.querySelectorAll(".setting__popup-3");
                for (var _i2 = 0; _i2 < arrSettingPopup.length; _i2++) {
                  arrSettingPopup[_i2].addEventListener("click", function () {
                    (0, _setting.settingBgc)();
                    document.querySelector(".div__popup--setting").style.display = "block";
                    document.querySelector(".overlay__popup").style.display = "block";
                    document.querySelector("#box_content_mochi_extension").style.display = "none";
                    document.querySelector("#icon_mochi_extension").style.display = "none";
                  });
                }
                // document
                //   .querySelector(".setting__popup-3")
                //   .addEventListener("click", function() {
                //     settingBgc();
                //     document.querySelector(
                //       ".div__popup--setting"
                //     ).style.display = "block";
                //     document.querySelector(".overlay__popup").style.display =
                //       "block";
                //     document.querySelector(
                //       "#box_content_mochi_extension"
                //     ).style.display = "none";
                //     document.querySelector(
                //       "#icon_mochi_extension"
                //     ).style.display = "none";
                //   });
                var arrProfileName = document.querySelectorAll(".mochi-profile-name");
                for (var _i3 = 0; _i3 < arrProfileName.length; _i3++) {
                  arrProfileName[_i3].addEventListener("click", function () {
                    window.open("https://mochidemy.com/extension-page-login");
                  });
                }
                // document
                //   .querySelector(".mochi-profile-name")
                //   .addEventListener("click", () => {
                //     window.open("https://mochidemy.com/extension-page-login");
                // checkLoginReloadPage()
                // });
              });
              // console.log("Đây là profileName", profile.display_name);
            }
          }
        });
      }, 200);
    }
  });
}

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showhideResultAccordingCondition = showhideResultAccordingCondition;
function showhideResultAccordingCondition(type, domButtonAnhAnh, domButtonAnhViet, isSuggest, domBoxResultSuggestAnhViet, domBoxResultSuggestAnhAnh, domBoxResultAnhAnh, domBoxResultAnhViet) {
  var classActive = "mochi-tab-active";
  if (type == "en-vn") {
    if (domButtonAnhAnh.classList.contains(classActive)) {
      domButtonAnhAnh.classList.remove(classActive);
    }
    domButtonAnhViet.classList.add(classActive);
    if (isSuggest && domBoxResultSuggestAnhViet && domBoxResultSuggestAnhAnh) {
      domBoxResultSuggestAnhViet.style.display = "block";
      domBoxResultSuggestAnhAnh.style.display = "none";
    } else {
      if (domBoxResultAnhAnh) {
        domBoxResultAnhAnh.style.display = "none";
      }
      if (domBoxResultAnhViet) {
        domBoxResultAnhViet.style.display = "block";
      }
    }
  } else if (type == "en-en") {
    if (domButtonAnhViet.classList.contains(classActive)) {
      domButtonAnhViet.classList.remove(classActive);
    }
    domButtonAnhAnh.classList.add(classActive);
    if (isSuggest && domBoxResultSuggestAnhViet && domBoxResultSuggestAnhAnh) {
      domBoxResultSuggestAnhViet.style.display = "none";
      domBoxResultSuggestAnhAnh.style.display = "block";
    } else {
      if (domBoxResultAnhViet) {
        domBoxResultAnhViet.style.display = "none";
      }
      if (domBoxResultAnhAnh) {
        domBoxResultAnhAnh.style.display = "block";
      }
    }
  }
}

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetDetailResult = resetDetailResult;
function resetDetailResult() {
  var domClickAnhViet = document.querySelector("#mochi-view-more-en-vn");
  var domClickAnhAnh = document.querySelector("#mochi-view-more-en-en");
  var domDetailAnhViet = document.querySelectorAll(".mochi-box-view-more-en-vn");
  var domDetailAnhAnh = document.querySelectorAll(".mochi-box-view-more-en-en");
  if (domDetailAnhViet && domDetailAnhAnh && domClickAnhViet && domClickAnhAnh) {
    domDetailAnhViet.forEach(function (element) {
      element.style.display = "none";
    });
    domDetailAnhAnh.forEach(function (element) {
      element.style.display = "none";
    });
    domClickAnhViet.innerHTML = "Xem thêm các nghĩa khác";
    domClickAnhViet.setAttribute("typeMochi", "narrow-down");
    domClickAnhAnh.innerHTML = "See more";
    domClickAnhAnh.setAttribute("typeMochi", "narrow-down");
  }
}

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(1);

var mochiTransition = "https://mochidemy.com/extension-bg/translate.png";
var mochiAudio = "https://mochidemy.com/extension-bg/audio_icon.png";
var mochiMochi = "https://mochidemy.com/extension-bg/Mochi_ext_2-1.png";

// document.head.insertAdjacentHTML('afterbegin',`
// <meta http-equiv="Content-Security-Policy" content="media-src 'self' https://mochien3.1-api.mochidemy.com/public/audios/question/ 'unsafe-inline'">
// `)
// Call API
var callData = function callData() {
  var currentTime = new Date().toDateString();
  var timeStampEvent = new Date(currentTime).getTime();
  var timeCallApi = window.localStorage.getItem("timeCallApi");
  var timeStampEventLocal = new Date(timeCallApi).getTime();
  if (timeStampEventLocal !== timeStampEvent) {
    var newfeedApi = _index.URL_GET_FACEBOOK;
    fetch(newfeedApi, {
      method: "GET",
      headers: _index.paramsAPI
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
      chrome.runtime.sendMessage({
        name: "saveData",
        data: data
      });
    });
  }
};

//   Hàm handle ẩn dom faceboook
function hideNewsFeedFacebook() {
  var getDomFacebook = document.querySelector(".r6ydv39a.mfclru0v");
  // if (getDomFacebook) {
  //   getDomFacebook.style.display = "none";
  // }
}

// Xử lý hiện chữ in đậm và gạch chân trong khung đáp án.
function handleBoldAnswer(wordRight, dataAnswer) {
  var lowerCaseAnswer = wordRight.toLowerCase();
  var remove = dataAnswer.slice(0, -1);
  var lowerCaseHint = remove.toLowerCase();
  var convertArr = lowerCaseHint.split(" ");
  var arrAnswer = lowerCaseAnswer.split(" ");
  if (arrAnswer.length <= 1) {
    var indexAnswer = convertArr.indexOf(lowerCaseAnswer);
    convertArr[indexAnswer] = "<span style=\"font-weight: bold;text-decoration:underline;\">" + convertArr[indexAnswer] + "</span>";
  } else if (arrAnswer.length >= 2) {
    for (var i = 0; i < arrAnswer.length; i++) {
      var _indexAnswer = convertArr.indexOf(arrAnswer[i]);
      convertArr[_indexAnswer] = "<span style=\"font-weight: bold;text-decoration:underline;\">" + convertArr[_indexAnswer] + "</span>";
    }
  }
  return convertArr.join(" ");
}

// handle html game facebook
var handleHtmlFacebook = function handleHtmlFacebook(example, audio, wordRight, phonetic, translate, textBoldAnswer, vi_hint, mochiAudio, mochiTransition, mochiMochi) {
  var getTopBar = document.querySelector(".ekq1a7f9.myo4itp8.khm9p5p9.on4d8346.b0ur3jhr");
  var getHeightHeader = void 0;
  if (getTopBar) {
    getHeightHeader = Number(getTopBar.offsetHeight);
  } else {
    var getBanner = document.querySelector("[role=banner]");
    var getDomBanner = getBanner.firstChild;
    getHeightHeader = Number(getDomBanner.offsetHeight);
  }
  return "\n  <div class=\"block__newfeed\" style=\"top:" + getHeightHeader + "px\">\n  <div class = \"mochi__facebook--container\" id=\"newfeeds__id\">\n      <div class=\"mochi__facebook--title\">\n          <p>Ch\u1ECDn t\u1EEB th\xEDch h\u1EE3p \u0111i\u1EC1n v\xE0o ch\u1ED7 tr\u1ED1ng</p>\n        <div class=\"mochi__question--input\" >\n            <div class=\"mochi__question--child\">\n              <p class = \"mochi__question--text\" id=\"input__question--id\">\n              " + example + "\n              </p>\n            </div>\n        </div>\n      </div>\n      <div class = \"mochi__list--answer\">\n      </div>\n      <div class=\"mochi__facebook--button\">\n          <button class=\"button__mochi\">Ki\u1EC3m tra</button>\n          <button class=\"button__mochi button_mochi--active\">Ki\u1EC3m tra</button>\n          <button class=\"button__mochi button_mochi--continue--web\">M\u1EDF website h\u1ECDc ti\u1EBFp</button>\n      </div>\n      <div class = \"mochi__back--newfeed\">\n          <span class = \"button__mochi--newfeed\" id=\"id__newsfeed\">M\u1EDF kh\xF3a News Feed </span>\n      </div>\n      <div class=\"answer__right\" id=\"right\">\n        <audio src=" + audio + " id=\"audio__word\" style=\"display:none\"></audio>\n        <div class = \"answer__right--container\">\n            <div class = \"answer__right--right\">\n              <p id=\"title__id\">" + wordRight + "</p>\n              <p>" + phonetic + "</p>\n              <p>" + translate + "</p>\n              <p id=\"textAnswer__id\">" + textBoldAnswer + "</p>\n              <p class = \"vi__hint--right\">" + vi_hint + " </p>\n              <div class = \"text__search\">\n                <img src=\"https://mochidemy.com/extension-bg/tips_icon.png\" width=\"24px\" height=\"24px\"/>\n                <p>B\xF4i \u0111en \u0111\u1EC3 tra c\u1EE9u t\u1EEB v\u1EF1ng trong c\xE2u</p>\n              </div>\n            </div>\n            <div class = \"answer__right--left\">\n              <img src=" + mochiAudio + " class=\"audio--word\" />\n              <img src=" + mochiTransition + " class=\"vi__audio\" />\n            </div>\n        </div>\n      </div>\n      <div class=\"answer__wrong\" id=\"wrong\">\n        <div class = \"answer__right--container\">\n            <div class = \"answer__right--right\">\n              <p id=\"id__wrong\" >" + wordRight + "</p>\n              <p>" + phonetic + "</p>\n              <p>" + translate + "</p>\n              <p id=\"id__answer\" >" + textBoldAnswer + "</p>\n              <p class = \"vi__hint--wrong\">" + vi_hint + " </p>\n              <div class = \"text__search\">\n                <img src=\"https://mochidemy.com/extension-bg/tips_icon.png\" width=\"24px\" height=\"24px\"/>\n                <p>B\xF4i \u0111en \u0111\u1EC3 tra c\u1EE9u t\u1EEB v\u1EF1ng trong c\xE2u</p>\n              </div>\n            </div>\n            <div class = \"answer__right--left\">\n              <img src=" + mochiAudio + " class=\"audio--word audio--word--play\" />\n              <img src=" + mochiTransition + " class=\"vi__wrong\" />\n            </div>\n        </div>\n      </div>\n      <div class = \"mochiMochi\">\n        <img src=" + mochiMochi + " width=\"40%\"  />\n      </div>\n  </div>\n  </div>\n  ";
};

// Ham handle html list answer
var handleListAnswer = function handleListAnswer(listAnswer) {
  return listAnswer.map(function (item, index) {
    return "\n      <div class=\"mochi__button--answer \">\n      <div class = \"mochi__button--shadow\" data-status=" + item.status + " data-content=" + item.answer + " >\n          <p class=\"mochi__button--text\" id=\"mochi__button--id\">" + item.answer + "</p>\n      </div>\n      </div>\n  ";
  });
};

// Tối ưu lại code
var handleSelectorAnswer = function handleSelectorAnswer() {
  var arrButton = document.querySelectorAll(".mochi__button--shadow");

  var _loop = function _loop(i) {
    arrButton[i].addEventListener("click", function () {
      var arrAttr = document.querySelectorAll(".mochi__button--shadow");
      var arrText = document.querySelectorAll(".mochi__button--text");
      for (var j = 0; j < arrAttr.length; j++) {
        if (arrAttr[j].className == "mochi__button--shadow mochi__button--active") {
          arrAttr[j].classList.remove("mochi__button--active");
        }
        if (arrText[j].className == "mochi__button--text mochi__text--active") {
          arrText[j].classList.remove("mochi__text--active");
        }
      }
      chrome.runtime.sendMessage("getCheckAnswer", function (response) {
        if (response === "1") {
          document.querySelectorAll(".mochi__button--text")[i].classList.add("mochi__text--active");
          document.querySelectorAll(".mochi__button--shadow")[i].classList.add("mochi__button--active");
          document.querySelector(".button__mochi").style.display = "none";
          document.querySelector(".button__mochi.button_mochi--active").style.display = "block";
        }
      });
    });
  };

  for (var i = 0; i < arrButton.length; i++) {
    _loop(i);
  }
};

// Xu ly nut kiem tra
var handleTest = function handleTest() {
  if (document.querySelector(".button__mochi.button_mochi--active")) {
    document.querySelector(".button__mochi.button_mochi--active").addEventListener("click", function () {
      // Tracking so lan click button kiem tra lan dau tien trong ngay
      var clickSearchCurrent = new Date().toDateString();
      var timeStampClick = new Date(clickSearchCurrent).getTime();
      chrome.runtime.sendMessage("getTimeTest", function (response) {
        var currentTime = response;
        // alert(response);
        // alert(clickSearchCurrent);
        var currentTimeLocal = new Date(currentTime);
        var timeStampSearch = currentTimeLocal.getTime();
        // alert(timeStampSearch !== timeStampClick);
        if (timeStampSearch !== timeStampClick) {
          chrome.runtime.sendMessage({
            name: "testFirstSearch",
            data: clickSearchCurrent
          }, function (response) {
            if (response) {
              chrome.runtime.sendMessage("testFirstDay");
            }
          });
        }
      });
      // Xử lý nut kiểm tra
      document.querySelector(".button__mochi.button_mochi--continue--web").style.display = "block";
      // Xử lý audio đưa về dạng base 64
      chrome.runtime.sendMessage(_index.listMessage.clickAllTest);
      chrome.runtime.sendMessage("checkResult");
      chrome.runtime.sendMessage("getAudio", function (response) {
        var audioStorage = response;
        var audioPlay = new Audio(audioStorage);
        var playPromise = audioPlay.play();
        console.log(playPromise);
        if (playPromise !== undefined) {
          playPromise.then(function () {
            audioPlay.play();
          }).catch(function (error) {
            console.log(error);
          });
        }
      });
      if (document.querySelector(".mochi__button--shadow.mochi__button--active").getAttribute("data-status") == "true") {
        handleRightAnswer();
      } else {
        document.querySelector(".mochi__button--shadow.mochi__button--active").classList.add("mochi__button--wrong");
        document.querySelector(".mochi__button--shadow.mochi__button--active.mochi__button--wrong").classList.remove("mochi__button--active");
        handleWrongAnswer();
      }
    });
  }
};

var handleRightAnswer = function handleRightAnswer() {
  document.querySelector(".answer__right").style.display = "block";
  document.querySelector(".button_mochi--active").style.display = "none";
  document.querySelector(".button__mochi").style.display = "none";
};
var handleWrongAnswer = function handleWrongAnswer() {
  var selectAnswer = document.querySelectorAll(".mochi__button--shadow");
  for (var i = 0; i < selectAnswer.length; i++) {
    if (selectAnswer[i].getAttribute("data-status") == "true") {
      console.log("the dung", selectAnswer[i]);
      selectAnswer[i].classList.add("mochi__button--active");
    }
  }
  document.querySelector(".answer__wrong").style.display = "block";
  document.querySelector(".button_mochi--active").style.display = "none";
  document.querySelector(".button__mochi").style.display = "none";
};

// xu ly nut back new
var handleBackNewsFeed = function handleBackNewsFeed() {
  var queryBackNewsFeed = document.querySelector(".button__mochi--newfeed");
  if (queryBackNewsFeed) {
    queryBackNewsFeed.addEventListener("click", function () {
      chrome.runtime.sendMessage({
        name: "backNewFeed"
      });
      chrome.runtime.sendMessage({
        name: "statusNewFeed"
      });
      document.querySelector(".block__newfeed").style.display = "none";
    });
  }
};
function startFacebook() {
  // console.log = function() {};
  window.addEventListener("scroll", function (e) {
    // let getTop = window.scrollHeight();
    // console.log("getTop", e);
    // if (getTop < e.offsetTop) {
    //   document.querySelector(".mochi__facebook--container").scrollTo(0, 500);
    // } else if (getTop > e.offsetTop) {
    //   document.querySelector(".mochi__facebook--container").scrollTo(0, 0);
    // }
  });
  chrome.runtime.sendMessage("checkAnswer");
  // Ẩn newfeed của facebook.
  // hideNewsFeedFacebook();
  callData();
  var checkCallData = setInterval(function () {
    chrome.runtime.sendMessage("getDatafacebook", function (response) {
      var getDomBody = document.querySelector("body");
      var getDomHead = document.querySelector("head");
      var dataAnswer = response.data.words;
      // Random cau hoi
      var randomAnswer = Math.floor(Math.random() * dataAnswer.length);
      mochiFacebook(randomAnswer);

      function mochiFacebook(randomAnswer) {
        var listPopupAnswer = {
          hint: dataAnswer[randomAnswer].hint,
          vi_hint: dataAnswer[randomAnswer].vi_hint,
          phonetic: dataAnswer[randomAnswer].phonetic,
          position: dataAnswer[randomAnswer].position,
          translate: dataAnswer[randomAnswer].trans
        };
        var regex = /-/gi;
        var example = dataAnswer[randomAnswer].example.replace(regex, "_");
        // Lấy audio
        var audio = dataAnswer[randomAnswer].audio;
        chrome.runtime.sendMessage({
          name: "audio",
          data: audio
        }, function (result) {});

        var listWords = dataAnswer[randomAnswer].answer;
        var handleListWordRight = function handleListWordRight(listWords) {
          return listWords.filter(function (item, index) {
            return item.status == true;
          });
        };
        var wordRight = handleListWordRight(listWords);
        // let wordRight = listWords.filter((item, index) => {
        //   return item.status == true;
        // });
        var textBoldAnswer = handleBoldAnswer(wordRight[0].answer, dataAnswer[randomAnswer].hint);
        var htmlFacebook = handleHtmlFacebook(example, audio, wordRight[0].answer, listPopupAnswer.phonetic, listPopupAnswer.translate, textBoldAnswer, listPopupAnswer.vi_hint, mochiAudio, mochiTransition, mochiMochi);
        console.log("list", listAnswer);
        // let getDomBody = setInterval(() => {
        if (getDomBody) {
          // console.log("dom", document.querySelector("body"));
          // let addElement = document.createElement("div");
          // addElement.className = "block__newfeed";
          // if (typeof getHeightHeader === "number") {
          //   addElement.style = `top:${getHeightHeader}px;`;
          // }
          // document.querySelector("body").appendChild(addElement);
          document.querySelector("body").insertAdjacentHTML("beforebegin", htmlFacebook);
          // document.querySelector(".block__newfeed").innerHTML = htmlFacebook;
          // clearInterval(getDomBody);
        } else if (document.querySelector("head")) {
          document.querySelector("head").insertAdjacentHTML("afterend", htmlFacebook);
        }

        // Kiem tra dieu kien co du lieu de clear interval
        if ((response !== null || response !== undefined) && (getDomBody || getDomHead)) {
          clearInterval(checkCallData);
        }
        // document.document.insertAdjacentHTML("beforebegin", htmlFacebook);
        // }, 1000);
        // Xử lý phần thêm
        // Radom cac dap an khi tra ve
        var listAnswer = dataAnswer[randomAnswer].answer.sort(function () {
          return Math.random() - 0.5;
        });
        var renderListAnswer = handleListAnswer(listAnswer);
        var htmlAnswer = renderListAnswer.join("");
        if (document.querySelector(".mochi__list--answer")) {
          document.querySelector(".mochi__list--answer").innerHTML = htmlAnswer;
        }
        handleSelectorAnswer();
        handleTest();
        // Xu ly nut audio

        document.querySelector(".audio--word").addEventListener("click", function () {
          // let audioPlay = document.querySelector("#audio__word");
          chrome.runtime.sendMessage("getAudio", function (response) {
            var audioStorage = response;
            var audioPlay = new Audio(audioStorage);
            var playPromise = audioPlay.play();
            if (playPromise !== undefined) {
              playPromise.then(function () {
                audioPlay.play();
              }).catch(function (error) {
                console.log(error);
              });
            }
          });
        });
        // Xu ly phan hien dich
        var viHintRight = document.querySelector(".vi__hint--right");
        var viHinWrong = document.querySelector(".vi__hint--wrong");
        document.querySelector(".vi__audio").addEventListener("click", function () {
          if (viHintRight.style.opacity == "1") {
            viHintRight.style.opacity = "0";
          } else {
            viHintRight.style.opacity = "1";
          }
        });
        document.querySelector(".vi__wrong").addEventListener("click", function () {
          if (viHinWrong.style.opacity == "1") {
            viHinWrong.style.opacity = "0";
          } else {
            viHinWrong.style.opacity = "1";
          }
        });

        var autoWordPlay = document.querySelector(".audio--word.audio--word--play");
        autoWordPlay.addEventListener("click", function () {
          chrome.runtime.sendMessage("getAudio", function (response) {
            var audioStorage = response;
            var audioPlay = new Audio(audioStorage);
            var playPromise = audioPlay.play();
            console.log(playPromise);
            if (playPromise !== undefined) {
              playPromise.then(function () {
                audioPlay.play();
              }).catch(function (error) {
                console.log(error);
              });
            }
          });
        });
        var buttonContinue = document.querySelector(".button_mochi--continue--web");
        var queryContinue = document.querySelector(".button__mochi.button_mochi--continue--web");
        if (buttonContinue) {
          queryContinue.addEventListener("click", function (e) {
            window.open("https://learn.mochidemy.com/");
            // chrome.runtime.sendMessage("reloadAllPage");
            chrome.storage.local.remove(["listAudio2"]);
          });
        }
        handleBackNewsFeed();
      }
    });
  }, 500);
}
exports.default = startFacebook;

//+`?`+ new URLSearchParams({
//    "user_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo1MTA0MDQsInRva2VuIjoiNjJiNTYzNDRiM2Q5MCIsImlwIjoiNTguMTg3LjE1NC4yMDYifQ.043uzmknO29dfA1o-AYT_JlL6h5dqvRDSiKegUYdlmw",
//    "offset": 20,
//    "page_level_1": 1,
//    "page_level_2": 1,
//    "page_level_3": 1,
//    "page_level_4": 1,
//    "page_level_5": 1
// })
// test
// if (document.title !== 'Facebook') {
//   document.title = 'Facebook';
// }
// // Don't do anything if the FB UI hasn't loaded yet
// const feed = document.querySelector('[role=feed]') || // For home and groups feed
//   document.querySelector('[data-pagelet=MainFeed]') || // For watch and marketplace feeds
//   document.querySelector('div[aria-label=Gaming][role=main]'); // For gaming feed
// if (feed == null) {
//   return;
// }
// const container = feed.parentNode;
// // Add News Feed Eradicator quote/info panel
// if (container && !isAlreadyInjected()) {
//   injectUI(container, store);
// }

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startSubYoutube = startSubYoutube;

var _type = __webpack_require__(12);

var imageMochiIconDisable = "https://mochidemy.com/extension-bg/295113391_413077134190035_5841703702996606525_n.webp";
// console.log = function () {};
var dataSubs = [];
var urlYoutubeLink = "";
var subtitle = [];
var urlToGetDataSub = "";
var eventChange = "yt-page-data-updated";
// Hàm xử ly them subs
// Xu ly phan delete subs
var handleDeleteSubs = function handleDeleteSubs() {
  var elementDelete = document.querySelector(".add_subs_youtube");
  if (elementDelete) {
    elementDelete.remove();
  }
};
// Kiem tra status Subs
var handleCheckStatusSubs = function handleCheckStatusSubs() {
  // Check dieu kien hien sub
  var checkDomIconMochi = document.querySelector(".button_mochi--settings > img");
  var checkDomSubs = document.querySelector(".add_subs_youtube");

  if (checkDomIconMochi && checkDomIconMochi.getAttribute("src") === imageMochiIconDisable) {
    if (checkDomSubs) {
      checkDomSubs.style.opacity = "0";
      if (document.querySelector(".ytp-caption-window-container")) {
        document.querySelector(".ytp-caption-window-container").style.display = "block";
      }
    }
  } else if (checkDomIconMochi && checkDomIconMochi.getAttribute("src") === _type.iconMochiImage) {
    if (checkDomSubs) {
      checkDomSubs.style.opacity = "1";
      if (document.querySelector(".ytp-caption-window-container")) {
        document.querySelector(".ytp-caption-window-container").style.display = "none";
      }
    }
  }
};
// Xu ly su kien khi hover vao subs
var handleCheckSubs = function handleCheckSubs() {
  var handleSubsHover = document.querySelector(".text_sub_yt");
  var videos = document.getElementsByClassName("video-stream")[0];
  if (handleSubsHover) {
    handleSubsHover.addEventListener("mouseover", function () {
      videos.pause();
    });
    handleSubsHover.addEventListener("mouseout", function () {
      if (window.localStorage.getItem("isPaused") !== "1") {
        videos.play();
        handleTimeYt();
      } else {
        videos.pause();
      }
    });
  }
};
var createElementSubtitle = function createElementSubtitle(sub, i) {
  // console.log("sub", sub);
  // console.log("i", i);
  handleDeleteSubs();
  var createDomSubs = document.createElement("div");
  createDomSubs.className = "add_subs_youtube";
  var html = "\n    <div>\n      <p start=" + sub[i].start + " class=\"ex_subtitle_i\">\n        <span \n        class=\"text_sub_yt\"\n        id = \"text_subs_id\"\n        dangerouslySetInnerHTML='__html: " + sub[i].subtitle + "'>\n        " + sub[i].subtitle + "\n        </span>\n      </p>\n    </div>\n    ";
  var addSubYt = document.querySelector(".html5-video-player.ytp-transparent.ytp-exp-bottom-control-flexbox");
  addSubYt.appendChild(createDomSubs);
  document.querySelector(".add_subs_youtube").innerHTML = html;
  handleCheckSubs();
  handleCheckStatusSubs();

  var checkWidthVideo = document.querySelector("#primary-inner");
  // console.log("checkWidthVideo:", checkWidthVideo);
  if (checkWidthVideo) {
    // console.log("checkWidthVideo: ", checkWidthVideo.offsetWidth);
    if (document.querySelector(".ex_subtitle_i") && checkWidthVideo.offsetWidth > 451 && checkWidthVideo.offsetWidth < 600) {
      document.querySelector(".ex_subtitle_i").setAttribute("style", "font-size:15px;bottom:60px");
    } else if (document.querySelector(".ex_subtitle_i") && checkWidthVideo.offsetWidth < 450) {
      document.querySelector(".ex_subtitle_i").setAttribute("style", "font-size:15px;bottom:30px");
    } else {
      // console.log("fz 30");
    }
  }
};

//  Lay thoi gian chay cua Youtube
var handleTimeYt = function handleTimeYt() {
  var oldTime = void 0;
  var timeCurrent = setInterval(function () {
    var video = document.getElementsByClassName("video-stream")[0];
    var currentTime = video.currentTime;
    if (currentTime !== oldTime && currentTime !== "") {
      oldTime = currentTime;
      for (var i = 0; i < dataSubs.length; i++) {
        var dataStart = dataSubs[i].start;
        if (Number(currentTime) < dataStart) {
          if (dataSubs && i - 1 >= 0) {
            createElementSubtitle(dataSubs, i - 1);
          }
          break;
        }
      }
    } else if (currentTime === oldTime && currentTime !== "") {
      clearInterval(timeCurrent);
    }
    //console.log("time", currentTime);
    // Xu ly hien thi sub
  }, 1000);
  window.addEventListener(eventChange, function () {
    // console.log("chuyen trang 1");
    localStorage.removeItem("isPaused");
    var checkDomIcon = document.querySelector(".button_mochi--settings > img");
    var doubleCLick = document.querySelectorAll(".ytp-subtitles-button");
    if (doubleCLick[0].ariaPressed === "false") {
      if (checkDomIcon) {
        checkDomIcon.src = imageMochiIconDisable;
      }
    } else if (doubleCLick[0].ariaPressed === "true") {
      if (checkDomIcon) {
        checkDomIcon.src = _type.iconMochiImage;
      }
    }
    // handleClickIconMochi();
    handleDeleteSubs();
    var newUrl = "";
    var listTagLink = document.getElementsByTagName("link");
    if (listTagLink) {
      for (var i = 0; i < listTagLink.length; i++) {
        if (listTagLink[i].getAttribute("rel") && listTagLink[i].getAttribute("rel") === "alternate") {
          newUrl = listTagLink[i].getAttribute("href");
          // console.log("url", urlYoutubeLink);
          break;
        }
      }
    }

    if (newUrl !== urlYoutubeLink) {
      handleDeleteSubs();
      clearInterval(timeCurrent);
      urlYoutubeLink = newUrl;
    }
    // console.log('url change');

    var getSvgSubsYt = document.querySelector(".ytp-subtitles-button-icon");
    if (getSvgSubsYt.getAttribute("fill-opacity") === "0.3") {
      if (checkDomIcon) {
        checkDomIcon.src = imageMochiIconDisable;
      }
    }
  });
};

//  Hàm kiểm tra trạng thái của videos
var handleStatusVideos = function handleStatusVideos() {
  var buttonPlayDom = document.querySelector(".ytp-play-button.ytp-button");
  if (buttonPlayDom) {
    buttonPlayDom.addEventListener("click", function (e) {
      var checkPausedVideo = document.getElementsByClassName("video-stream")[0];
      var pausedVideo = checkPausedVideo.paused;
      if (!pausedVideo) {
        handleTimeYt();
        window.localStorage.setItem("isPaused", "0");
      } else if (pausedVideo) {
        window.localStorage.setItem("isPaused", "1");
      } else {}
    });
  }
};

var apiGetSub = function apiGetSub(url) {
  fetch(url).then(function (response) {
    return response.text();
  }).then(function (text) {
    var parser = new DOMParser();
    var htmlDocument = parser.parseFromString(text, "text/html");
    var html = htmlDocument.getElementsByTagName("body");
    var lines = html[0].getElementsByTagName("text");
    var data = [];
    for (var i = 0; i < lines.length; i++) {
      var strippedString = lines[i].textContent;
      var start = lines[i].getAttribute("start");
      var end = lines[i].getAttribute("dur");
      data = data.concat([{ subtitle: strippedString, start: start, end: end }]);
    }
    subtitle = data;
    dataSubs = data;
    var url = window.location.hostname;
    if (url === "www.youtube.com") {
      handleTimeYt();
    }
  });
};

// check dieu kien khi an phim trang play
var handleEnter = function handleEnter() {
  document.addEventListener("keyup", function (e) {
    if (e.keyCode === 32) {
      var checkPausedEnter = document.getElementsByClassName("video-stream")[0];
      if (checkPausedEnter) {
        var pausedVideo = checkPausedEnter.paused;
        if (!pausedVideo) {
          handleTimeYt();
          window.localStorage.setItem("isPaused", "0");
        } else if (pausedVideo) {
          window.localStorage.setItem("isPaused", "1");
        } else {}
      }
    }
  });
};
// Check dieu kien khi click vao man hinh
var handleClickVideoYt = function handleClickVideoYt() {
  var checkPausedVideo = document.getElementsByClassName("video-stream")[0];
  if (checkPausedVideo) {
    checkPausedVideo.addEventListener("click", function () {
      var selectIconMochi = document.querySelector("#icon_mochi_extension");
      if (selectIconMochi) {
        setTimeout(function () {
          selectIconMochi.style.display = "none";
        }, 100);
      }
      var pausedVideo = checkPausedVideo.paused;
      if (pausedVideo) {
        handleTimeYt();
        window.localStorage.setItem("isPaused", "0");
      } else if (!pausedVideo) {
        window.localStorage.setItem("isPaused", "1");
      } else {}
    });
  }
};

// Kiem tra trang thai cc
var handleTestStatusVideo = function handleTestStatusVideo() {
  var checkDomIcon = document.querySelector(".button_mochi--settings > img");
  var doubleCLick = document.querySelectorAll(".ytp-subtitles-button");
  if (doubleCLick[0]) {
    if (doubleCLick[0].ariaPressed === "false") {
      checkDomIcon.src = imageMochiIconDisable;
    } else if (doubleCLick[0].ariaPressed === "true") {
      checkDomIcon.src = _type.iconMochiImage;
    }
  }
};

function startSubYoutube() {
  handleEnter();
  // Nhận respon từ background Youtube.
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // console.log(request);
    var parameter = {};
    var params = new URLSearchParams(request.url);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = params[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var param = _step.value;

        parameter[param[0]] = param[1];
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (!parameter.extension) {
      var url = request.url.replace("json3", "");
      url = url + "&extension=extension_youtube&time=" + new Date().getTime();
      urlToGetDataSub = url;
      apiGetSub(url);
    }
  });

  handleClickVideoYt();

  window.addEventListener(eventChange, function () {
    // console.log("chuyen trang 2");
    window.localStorage.removeItem('isPaused');
    var setIconMochi = setInterval(function () {
      var getDomControl = document.querySelector(".ytp-right-controls");
      if (getDomControl) {
        var checkIconMochi = document.querySelector(".button_mochi--settings > img");
        // console.log("checkIconMochi", checkIconMochi);
        if (checkIconMochi === null) {
          // console.log("icon Mochi chưa được thêm vào đâu nha");
          var mochiYoutube = document.createElement("button");
          mochiYoutube.className = "button_mochi--settings ytp-button ytp-subtitles-button";
          // console.log("getDomControl", getDomControl);
          getDomControl.prepend(mochiYoutube);
          document.querySelector(".button_mochi--settings").innerHTML = "<img src=" + imageMochiIconDisable + " width=\"24px\" height=\"24px\"/>";
          getDomControl.insertBefore(mochiYoutube, getDomControl.children[5]);
          // console.log(getDomControl);

          var checkDomIcon = document.querySelector(".button_mochi--settings > img");

          handleTestStatusVideo();

          var clickIconMochi = document.querySelector(".button_mochi--settings");
          var getSvgSubsYt = document.querySelector(".ytp-subtitles-button-icon");
          if (clickIconMochi) {
            clickIconMochi.addEventListener("click", function (e) {
              var checkDomIconMochi = document.querySelector(".button_mochi--settings > img");
              if (checkDomIconMochi.getAttribute("src") === imageMochiIconDisable) {
                checkDomIconMochi.src = _type.iconMochiImage;
                // Click icon mochi
                var doubleCLick = document.querySelectorAll(".ytp-subtitles-button");
                if (doubleCLick[0].ariaPressed === "false") {
                  doubleCLick[0].click();
                } else {
                  // console.log(false);
                }
              } else if (checkDomIconMochi.getAttribute("src") === _type.iconMochiImage) {
                checkDomIconMochi.src = imageMochiIconDisable;
              }
            });
          }
        } else {
          clearInterval(setIconMochi);
        }
      }
    }, 500);
  });
  // handleClickIconMochi();
  // Xử lý nút bật tắt sub
  handleStatusVideos();

  var idVideo = "";
  window.addEventListener(eventChange, function () {
    var eleNewId = document.getElementsByClassName("style-scope ytd-page-manager hide-skeleton");
    if (eleNewId) {
      if (eleNewId[0]) {
        var attrEleNewId = eleNewId[0].getAttribute("video-id");
        fetch("https://www.youtube.com/watch?v=" + attrEleNewId).then(function (response) {
          return response.text();
        }).then(function (text) {
          var parser = new DOMParser();
          var htmlDocument = parser.parseFromString(text, "text/html");
          var html = htmlDocument.getElementsByTagName("body");
          var body = html[0];
          var txtBody = body.textContent;
          var start = txtBody.search("playerCaptionsTracklistRenderer");
          var txtStart = "playerCaptionsTracklistRenderer\":{\"captionTracks\":[{\"baseUrl\":\"";
          start = txtBody.search("playerCaptionsTracklistRenderer") + txtStart.length;
          var txt_new = txtBody.slice(start);
          var end = txt_new.search("\"");
          var newUrl = txt_new.slice(0, end);
          newUrl = newUrl.replace(/\\u0026/g, '&');
          newUrl = newUrl.replace("json3", "");
          apiGetSub(newUrl);
        });
      }
    }
  });
}

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

exports.default = fetchGetMochi;
function fetchGetMochi(url, params, headers, cb) {
  var url = new URL(url);
  Object.keys(params).forEach(function (key) {
    return url.searchParams.append(key, params[key]);
  });
  fetch(url, {
    mode: 'cors',
    headers: _extends({}, headers),
    params: params
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    console.log("cb", cb);
    if (cb) {
      cb(response);
    }
  });
}

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleOpenModal = handleOpenModal;
exports.handleCloseModal = handleCloseModal;
function handleOpenModal(class_name) {
  var review_count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var arrayDomModal = document.querySelectorAll(".mochi-modal-main");
  var domModal = document.querySelector(".mochi-modal");
  if (class_name == "mochi-modal-now-study") {
    var domeReviewCount = document.querySelector(".mochi-append-review-count");
    if (domeReviewCount) {
      domeReviewCount.innerHTML = "";
      domeReviewCount.insertAdjacentHTML("beforeend", "\n        <strong style = \"display: block\">B\u1EA1n \u0111\xE3 l\u01B0u t\u1EEB th\xE0nh c\xF4ng.</strong>\n        <strong style = \"display: block\">v\xE0 \u0111ang c\xF3 " + review_count + " t\u1EEB \u0111\u1EBFn gi\u1EDD \xF4n t\u1EADp.</strong>\n      ");
    }
  }
  if (domModal) {
    domModal.style.display = "block";
  }
  if (arrayDomModal) {
    arrayDomModal.forEach(function (element) {
      if (element.classList.contains(class_name)) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  }
}

function handleCloseModal() {
  var arrayDomModal = document.querySelectorAll(".mochi-modal-main");
  var domModal = document.querySelector(".mochi-modal");
  if (domModal) {
    domModal.style.display = "none";
  }
  if (arrayDomModal) {
    arrayDomModal.forEach(function (element) {
      element.style.display = "none";
    });
  }
}

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(189);

var _regenerator2 = _interopRequireDefault(_regenerator);

var handle_select_text = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
    var domResult, targetElement, id_element_click, getUrlCheck, t, getUrlYoutube, timeClickCurrent, timeStampCurrentCLick, checkOffset;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            domResult = document.querySelector(".mochi-result");
            targetElement = e.target; // clicked element

            console.log("targetElement", targetElement.id);
            id_element_click = targetElement.id;
            // Tracking news feed

            getUrlCheck = window.location.hostname;

            if (getUrlCheck === "www.youtube.com" || getUrlCheck === "www.facebook.com") {
              if (id_element_click !== "icon_mochi_extension") {
                localStorage.setItem("offsetIcon", id_element_click);
                chrome.storage.sync.set({
                  offsetIcon: id_element_click
                }, function (result) {});
              }
            }

          case 6:
            if (!(targetElement == boxContentMochi || targetElement == domResult)) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return");

          case 8:
            targetElement = targetElement.parentNode;

          case 9:
            if (targetElement) {
              _context.next = 6;
              break;
            }

          case 10:
            t = "";

            t = document.all ? document.selection.createRange().text : document.getSelection();
            if (t.toString().trim() !== "" && handleCheckCharacterSelect(t.toString().trim())) {
              window.text_mochi_search = t.toString().trim();

              //  check dieu kien dung video youtube
              window.localStorage.setItem("isPaused", "1");

              // let array_text = text_mochi_search.split(' ');
              // window.text_mochi_search = array_text.slice(0, 10).join(" ");
              window.mochiData.useGGApi = window.text_mochi_search.length >= 30;

              if (e.pageX < widthIconMochi) {
                iconMochi.style.transform = "none";
                loadingMochi.style.transform = "none";
              } else {
                iconMochi.style.transform = "translateX(-100%) translateY(0%) scale(1)";
                loadingMochi.style.transform = "translateX(-100%) translateY(0%) scale(1)";
              }
              iconMochi.style.display = "block";
              if (id_element_click !== "icon_mochi_extension") {
                iconMochi.style.top = e.pageY + "px";
                iconMochi.style.left = e.pageX + "px";
                loadingMochi.style.top = e.pageY + heightIconMochi + "px";
                loadingMochi.style.left = e.pageX - 10 + "px";
                pageX = e.pageX;
                pageY = e.pageY;
                screenX = e.screenX;
                screenY = e.screenY;
              } else if (id_element_click === "icon_mochi_extension") {
                // Set ngay hien tai len localStorage
                // let clickSearchCurrent = new Date().toDateString();
                // let timeStampClick = new Date(clickSearchCurrent).getTime();
                // chrome.runtime.sendMessage(listMessage.getTimeSave, function(response) {
                //   let currentTime = response;
                //   let currentTimeLocal = new Date(currentTime);
                //   let timeStampSearch = currentTimeLocal.getTime();
                //   if (timeStampSearch !== timeStampClick || isNaN(timeStampSearch)) {
                //     chrome.runtime.sendMessage(
                //       {
                //         name: listMessage.saveFirstSearch,
                //         data: clickSearchCurrent,
                //       },
                //       function(result) {
                //         if (result) {
                //           chrome.runtime.sendMessage(listMessage.searchFirstDay);
                //         }
                //       }
                //     );
                //   }
                // });
                // Đã lick chuẩn
                // Tracking tong so lan hien thi search bang youtube
                getUrlYoutube = window.location.hostname;
                // Lay ngay hien tai

                timeClickCurrent = new Date().toDateString();
                timeStampCurrentCLick = new Date(timeClickCurrent).getTime();
                checkOffset = localStorage.getItem("offsetIcon");

                console.log("checkOffset", checkOffset);
                // Tracking NewsFeed
                chrome.storage.sync.get(["offsetIcon"], function (response) {
                  console.log("vi tri", response.offsetIcon);
                  var offset = response.offsetIcon;

                  if (getUrlYoutube === "www.facebook.com" && (offset === _index.listMessage.question || offset === _index.listMessage.button || offset === _index.listMessage.wrong || offset === _index.listMessage.idAnswer || offset === _index.listMessage.idWrong || offset === _index.listMessage.right || offset === _index.listMessage.textAnswerId || offset === _index.listMessage.titleId || offset === _index.listMessage.idNewsfeed)) {
                    chrome.runtime.sendMessage(_index.listMessage.searchFacebook);

                    // chrome.storage.sync.get(["getOffsetFacebook"], function(response) {
                    //   console.log("res", response.getOffsetFacebook);
                    //   let getLocalTime = new Date(response.getOffsetFacebook);
                    //   let timeStampLocalTime = new Date(getLocalTime).getTime();
                    //   if (timeStampLocalTime !== timeStampCurrentCLick) {
                    //     chrome.storage.sync.set({
                    //       getOffsetFacebook: timeClickCurrent,
                    //     });
                    //     chrome.runtime.sendMessage(listMessage.searchFirstFacebook);
                    //   }
                    // });
                  }
                });
                if (getUrlYoutube === "www.youtube.com" && checkOffset === "text_subs_id") {
                  chrome.runtime.sendMessage(_index.listMessage.searchYoutube);

                  chrome.runtime.sendMessage({
                    name: _index.listMessage.getSearchFirstYoutube
                  }, function (response) {});
                } else if (getUrlYoutube === "www.facebook.com") {}
                isGetApi = false;
              }
              mochiRemoveDiv(e, "content");
            } else {
              mochiRemoveDiv(e, "all");
            }

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function handle_select_text(_x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.handleClickTextSuggest = handleClickTextSuggest;

var _type = __webpack_require__(12);

var _getMochi = __webpack_require__(31);

var _getMochi2 = _interopRequireDefault(_getMochi);

var _modal = __webpack_require__(32);

var _setting = __webpack_require__(59);

var _getResult = __webpack_require__(192);

var _detectViewMoreClick = __webpack_require__(193);

var _detectAllButtonClick = __webpack_require__(194);

var _checkGG = __webpack_require__(14);

var _index = __webpack_require__(1);

var _detectAllButtonClickSuggest = __webpack_require__(197);

var _getResultGGApi = __webpack_require__(198);

var _htmlSuggest = __webpack_require__(199);

var _handleLogin = __webpack_require__(200);

var _showResult = __webpack_require__(201);

var _detailResult = __webpack_require__(202);

var _listener = __webpack_require__(18);

var _facebook = __webpack_require__(203);

var _facebook2 = _interopRequireDefault(_facebook);

var _youtube = __webpack_require__(204);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);var value = info.value;
        } catch (error) {
          reject(error);return;
        }if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }return step("next");
    });
  };
}

// import { mochiRemoveDiv } from "./Feature/removeResult.js";
console.log = function () {};
var getCheckUrlYoutube = window.location.hostname;
if (getCheckUrlYoutube === "www.youtube.com") {
  (0, _youtube.startSubYoutube)();
}

// console.log(
//   "%c Mochi Mochi ^^",
//   "text-align: center;font-size: 50px;color: yellow;letter-spacing: .05em;text-shadow: 4px 4px 0px #d5d5d5, 7px 7px 0px rgba(0, 0, 0, 0.2);height: 100px;padding-top: 40px;"
// );

var mochiWebsiteLearn = _index.URL_LEARN;
var widthBoxMochi = 370;
var widthBoxGGApi = 500;
var heightBoxMochi = 258;

var widthIconMochi = 24;
var heightIconMochi = 24;

var pageX = void 0;
var pageY = void 0;
var screenX = void 0;
var screenY = void 0;

window.mochiData = {
  token: "notLogin",
  isSettingTab: "en-vn",
  profile: {
    expired_day: null,
    display_name: "User",
    email: ""
  },
  useGGApi: true
};
window.mochiResult = {
  data: {
    us: [],
    vi: [],
    suggests: []
  }
};
window.text_mochi_search = "";
// import setting
// settingBgc();

// Nhận message từ background
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  (0, _listener.addListener)(request, sender, sendResponse);
});
// Xử lý phần newfeed
chrome.runtime.sendMessage("getStatusFacebook", function (response) {
  if (response === "1") {
    chrome.runtime.sendMessage("getStatusNewFeed", function (result) {
      console.log("result", result);
      if (result == null || result === "1" && document.querySelector("body")) {
        console.log("newfeed");
        if (getCheckUrlYoutube === "www.facebook.com") {
          (0, _facebook2.default)();
        }
      }
    });
  }
});
// Kiem tra de lay token
(0, _handleLogin.handleLogin)();

function handleClickIconMochi() {
  // Khi click vao icon mochi cap nhat settings
  if (document.querySelector(".mochi-profile-setting")) {
    var arrHead = document.querySelectorAll(".mochi-profile-setting");
    for (var i = 0; i < arrHead.length; i++) {
      arrHead[i].setAttribute("style", "display:none !important");
    }
  }
  (0, _handleLogin.handleLogin)();

  chrome.runtime.sendMessage(_index.listMessage.getLanguage, function (response) {
    if (response === "1") {
      window.mochiData.isSettingTab = "en-vn";
    } else if (response == "2") {
      window.mochiData.isSettingTab = "en-en";
    }
  });
  loadingMochi.style.display = "block";
  handleSearchDictionary(window.text_mochi_search, window.mochiData.token, function (response) {
    var domResult = document.querySelector("#mochi-box-arround-content");
    if (document.querySelector("#mochi-button-tab-en-vn")) {
      document.querySelector("#mochi-button-tab-en-vn").remove();
    }
    if (document.querySelector("#mochi-button-tab-en-en")) {
      document.querySelector("#mochi-button-tab-en-en").remove();
    }
    if (document.querySelector("#dom-gg-search")) {
      document.querySelector("#dom-gg-search").remove();
    }
    window.mochiResult = response;
    var messArr = {
      first_search: "searchFirstDay",
      first_search_yt: _index.listMessage.searchFirstYoutube,
      first_search_newsfeed: _index.listMessage.searchFirstFacebook
    };
    if (response.first_search !== undefined && response.first_search.search_position && response.first_search.first_search && messArr[response.first_search.search_position]) {
      chrome.runtime.sendMessage(messArr[response.first_search.search_position]);
    }
    // Tracking
    // if (
    //   response.first_search.first_search === true &&
    //   response.first_search.search_position === "first_search"
    // ) {
    //   chrome.runtime.sendMessage("searchFirstDay");
    // } else if (
    //   response.first_search.search_position === "first_search_yt" &&
    //   response.first_search.first_search === true
    // ) {
    //   chrome.runtime.sendMessage(listMessage.searchFirstYoutube);
    // } else if (
    //   response.first_search.first_search === true &&
    //   response.first_search.search_position === "first_search_newsfeed"
    // ) {
    //   chrome.runtime.sendMessage(listMessage.searchFirstFacebook);
    // }
    var transTextGGApi = "";
    var originTextGGApi = "";

    var htmlString = "";
    var dataAnhAnh = "";
    var dataAnhViet = "";
    var dataSuggests = "";

    console.log("----------use----------", window.mochiData.useGGApi);
    if (!window.mochiData.useGGApi) {
      dataAnhAnh = window.mochiResult.data.us;
      dataAnhViet = window.mochiResult.data.vi;
      var isDetailAnhAnh = false;
      dataAnhAnh.forEach(function (e) {
        if (e.detail.length > 1) {
          isDetailAnhAnh = true;
        }
      });
      var isDetailAnhViet = false;
      dataAnhViet.forEach(function (e) {
        if (e.detail.length > 1) {
          isDetailAnhViet = true;
        }
      });
      dataSuggests = window.mochiResult.data.suggests;

      var htmlStringAnhViet = (0, _getResult.getHtmlStrimgMochiApi)(dataAnhViet, window.mochiData.isSettingTab, "en-vn", isDetailAnhViet);
      var htmlStringAnhAnh = (0, _getResult.getHtmlStrimgMochiApi)(dataAnhAnh, window.mochiData.isSettingTab, "en-en", isDetailAnhAnh);
      var htmlSuggest = dataAnhAnh.length == 0 && dataAnhViet.length == 0 && dataSuggests.length > 0 ? (0, _htmlSuggest.getHtmlStringSuggest)(dataSuggests, window.mochiData.isSettingTab) : "";
      htmlString = htmlStringAnhViet + htmlStringAnhAnh + htmlSuggest;
      htmlString = htmlString.replace(/mochiLoop,/g, "");
      htmlString = htmlString.replace(/mochiLoop ,/g, "");
      htmlString = htmlString.replace(/mochiLoop/g, "");
      document.querySelector("#box_content_mochi_extension").style.maxHeight = "500px";
      document.querySelector("#box_content_mochi_extension").style.width = widthBoxMochi + "px";
      localStorage.setItem("popupSearch", "0");
    } else {
      console.log("<<<<<<res>>>>>>>", response);
      localStorage.setItem("popupSearch", "1");
      document.querySelector("#box_content_mochi_extension").style.maxHeight = "initial";
      document.querySelector("#box_content_mochi_extension").style.width = widthBoxGGApi + "px";

      if (Array.isArray(response.sentences)) {
        response.sentences.forEach(function (element) {
          transTextGGApi = transTextGGApi + " " + element.trans;
          originTextGGApi = originTextGGApi + " " + element.orig;
          console.log("transTextGGApi", transTextGGApi);
          console.log("originTextGGApi", originTextGGApi);
        });
      }
      htmlString = (0, _getResultGGApi.getHtmlStringGGApi)(transTextGGApi, originTextGGApi);

      // Xu ly
      if (document.querySelector("#btn-mochi-submit-upgrade")) {
        document.querySelector("#btn-mochi-submit-upgrade").addEventListener("click", function () {
          window.open(_index.URL_PAGE_LOGIN);
        });
      }
      if (document.querySelector("#btn-mochi-submit-upgrade_below")) {
        document.querySelector("#btn-mochi-submit-upgrade_below").addEventListener("click", function () {
          window.open(_index.URL_PAGE_REGISTER);
        });
      }
    }

    domResult.insertAdjacentHTML("beforeend", htmlString);
    loadingMochi.style.display = "none";
    boxContentMochi.style.display = "block";
    boxContentMochi.style.top = pageY + heightIconMochi + "px";
    boxContentMochi.style.left = pageX + "px";
    if (screen.height - screenY < boxContentMochi.offsetHeight) {
      var topPosition = pageY - boxContentMochi.offsetHeight;
      if (topPosition > 0) {
        boxContentMochi.style.top = pageY - boxContentMochi.offsetHeight + "px";
      }
    }

    if (screenX < !window.mochiData.useGGApi ? widthBoxMochi : widthBoxGGApi) {
      boxContentMochi.style.transform = "none";
      if (pageX - widthIconMochi > 0) {
        boxContentMochi.style.left = pageX - widthIconMochi + "px";
      } else {
        boxContentMochi.style.left = pageX + "px";
      }
    } else {
      boxContentMochi.style.transform = "translateX(-100%) translateY(0%) scale(1)";
    }

    if (!window.mochiData.useGGApi) {
      document.querySelector("#mochi-header").insertAdjacentHTML("afterbegin", "\n          <div id=\"mochi-button-tab-en-vn\" class = \"mochi-tab " + (window.mochiData.isSettingTab == "en-vn" ? "mochi-tab-active" : "") + "\" style=\"border-top-right-radius: 5px; font-size: 14px\"><span>Anh - Vi\u1EC7t</span></div>\n          <div id=\"mochi-button-tab-en-en\" class = \"mochi-tab " + (window.mochiData.isSettingTab == "en-en" ? "mochi-tab-active" : "") + "\" style=\"border-top-right-radius: 5px; border-top-left-radius: 5px; font-size: 14px\">Anh - Anh</div>\n        ");
      document.querySelector("#mochi-header").style.justifyContent = "initial";

      document.querySelector("#mochi-button-tab-en-vn").addEventListener("click", function () {
        return handleClickTab("en-vn", window.mochiResult);
      });
      document.querySelector("#mochi-button-tab-en-en").addEventListener("click", function () {
        return handleClickTab("en-en", window.mochiResult);
      });
      handleClickTab(window.mochiData.isSettingTab, window.mochiResult, true);
      (0, _detectAllButtonClick.detectAllButtonClick)(dataAnhAnh, "en-en");
      (0, _detectAllButtonClick.detectAllButtonClick)(dataAnhViet, "en-vn");
      (0, _detectAllButtonClickSuggest.detectAllButtonClickSuggest)(dataSuggests);
      (0, _detectViewMoreClick.detectViewMoreClick)("#mochi-view-more-en-vn");
      (0, _detectViewMoreClick.detectViewMoreClick)("#mochi-view-more-en-en");
    } else {
      document.querySelector("#mochi-header").style.justifyContent = "space-between";
      document.querySelector("#mochi-header").insertAdjacentHTML("afterbegin", "<div id=\"mochi-button-tab-en-vn\" class = \"mochi-tab " + (window.mochiData.isSettingTab == "en-vn" ? "mochi-tab-active" : "") + "\" style=\"border-top-right-radius: 5px; width: 123px\"><span style=\"margin-left: 15px; font-size: 14px\">Anh - Vi\u1EC7t</span></div>\n        ");
    }
  });
}

function handleClickTextSuggest(value) {
  document.querySelector("#mochi-box-arround-content").innerHTML = "";
  // handleSearchDictionary(value, window.mochiData.token, (response)=>{
  //   window.mochiResult = response;
  window.text_mochi_search = value;
  handleClickIconMochi();
  // })
}

document.head.insertAdjacentHTML("afterbegin", "\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n  <link href=\"https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap\" rel=\"stylesheet\">\n  <style>\n  </style>\n");

var iconMochi = document.createElement("img");
iconMochi.setAttribute("id", "icon_mochi_extension");
iconMochi.setAttribute("src", _type.iconMochiImage);
iconMochi.setAttribute("alt", "icon mochi");
iconMochi.setAttribute("style", "\n  transform-origin: right top;\n  transform: translateX(-100%) translateY(0%) scale(1);\n  display: block;\n  position: absolute;\n  height: " + widthIconMochi + "px;\n  width: " + heightIconMochi + "px;\n  z-index: 2147483000;\n  overflow: auto;\n  cursor:pointer\n");
document.body.appendChild(iconMochi);

var loadingMochi = document.createElement("div");
loadingMochi.setAttribute("class", "mochi-extension-loading loader loader-default is-active");
loadingMochi.setAttribute("alt", "icon mochi");
loadingMochi.setAttribute("style", "\n  transform-origin: right top;\n  transform: translateX(-100%) translateY(0%) scale(1);\n  display: none;\n  position: absolute;\n  z-index: 2147483000;\n");
document.body.appendChild(loadingMochi);

var boxContentMochi = document.createElement("div");
boxContentMochi.setAttribute("id", "box_content_mochi_extension");
boxContentMochi.setAttribute("style", "\n  transform-origin: right top;\n  transform: translateX(-100%) translateY(0%) scale(1);\n  display: none;\n  position: absolute;\n  max-height: 500px;\n  min-height: " + heightBoxMochi + "px;\n  width: " + widthBoxMochi + "px;\n  z-index: 2147483000;\n  background-color: white;\n");

document.body.appendChild(boxContentMochi);
boxContentMochi.insertAdjacentHTML("beforeend", "\n  <div style =\"position:relative\">\n      <img src=\"" + _type.mochiButtonCloseGray + "\" alt=\"mascot\" id = \"mochi-close-box_content_mochi_extension\"/>\n    <div id = \"mochi-header\">\n        <div class=\"mochi-login-button\">\n            <span class = \"mochi-text-login\">\u0110\u0103ng nh\u1EADp</span>\n            <img alt=\"avatar\" src=\"" + _type.avatarMochiBlueImage + "\" style=\"max-width: 40px\"></img>\n            <img src=" + _type.mochiButtonSettings + " style=\"max-width:35px; margin-left:5px\" class=\"setting__popup setting__popup-2\"></img>\n        </div>\n    </div>\n    <div id = \"mochi-box-arround-content\" style=\"overflow-y:auto; max-height: 452px\"></div>\n  </div>\n");
document.querySelector(".setting__popup-2").addEventListener("click", function () {
  (0, _setting.settingBgc)();
  document.querySelector(".div__popup--setting").style.display = "block";
  document.querySelector(".overlay__popup").style.display = "block";
  document.querySelector("#box_content_mochi_extension").style.display = "none";
  document.querySelector("#icon_mochi_extension").style.display = "none";
});

function handleClickTab(type, data) {
  var isReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  (0, _detailResult.resetDetailResult)();
  var isSuggest = data.data.vi.length == 0 && data.data.us.length == 0 && data.data.suggests.length > 0;
  var domButtonAnhViet = document.querySelector("#mochi-button-tab-en-vn");
  var domButtonAnhAnh = document.querySelector("#mochi-button-tab-en-en");

  var domBoxResultAnhViet = document.querySelector("#mochi-result-en-vn");
  var domBoxResultAnhAnh = document.querySelector("#mochi-result-en-en");
  var domBoxResultSuggestAnhViet = document.querySelector("#mochi-suggest-en-vn");
  var domBoxResultSuggestAnhAnh = document.querySelector("#mochi-suggest-en-en");

  if (isReset && domBoxResultSuggestAnhViet && domBoxResultSuggestAnhAnh) {
    domBoxResultSuggestAnhViet.style.display = "none";
    domBoxResultSuggestAnhAnh.style.display = "none";
  }
  (0, _showResult.showhideResultAccordingCondition)(type, domButtonAnhAnh, domButtonAnhViet, isSuggest, domBoxResultSuggestAnhViet, domBoxResultSuggestAnhAnh, domBoxResultAnhAnh, domBoxResultAnhViet);
}

function handleSearchDictionary(value, token, cb) {
  var getUrlYoutube = window.location.hostname;
  var checkOffset = localStorage.getItem("offsetIcon");
  if (!window.mochiData.useGGApi) {
    chrome.storage.sync.get(["gaTracking"], function (result) {
      if (result.gaTracking !== undefined) {
        var uuid = result.gaTracking;

        chrome.storage.sync.get(["offsetIcon"], function (response) {
          console.log("vi tri", response.offsetIcon);
          var offset = response.offsetIcon;
          if (getUrlYoutube === "www.facebook.com" && (offset === _index.listMessage.question || offset === _index.listMessage.button || offset === _index.listMessage.wrong || offset === _index.listMessage.idAnswer || offset === _index.listMessage.idWrong || offset === _index.listMessage.right || offset === _index.listMessage.textAnswerId || offset === _index.listMessage.titleId || offset === _index.listMessage.idNewsfeed)) {
            (0, _getMochi2.default)("" + _index.URL_GET_API_MOCHI, {
              key: value,
              user_token: token,
              uuid: uuid,
              search_positions: "first_search_newsfeed"
            }, _index.paramsAPI, cb);
          } else if (getUrlYoutube === "www.youtube.com" && checkOffset === "text_subs_id") {
            (0, _getMochi2.default)("" + _index.URL_GET_API_MOCHI, {
              key: value,
              user_token: token,
              uuid: uuid,
              search_positions: "first_search_yt"
            }, _index.paramsAPI, cb);
          } else {
            (0, _getMochi2.default)("" + _index.URL_GET_API_MOCHI, {
              key: value,
              user_token: token,
              uuid: uuid,
              search_positions: "first_search"
            }, _index.paramsAPI, cb);
          }
        });
      } else if (result.gaTracking === undefined) {
        var myuuid = (0, _checkGG.generateUUID)();
        chrome.storage.sync.set({ gaTracking: myuuid }, function () {});
        (0, _getMochi2.default)("" + _index.URL_GET_API_MOCHI, {
          key: value,
          user_token: token,
          uuid: myuuid,
          search_positions: "first_search"
        }, _index.paramsAPI, cb);
      }
    });
  } else {
    (0, _getMochi2.default)("" + _index.URL_TRANS + encodeURIComponent(value), {}, {}, cb);
  }
}

function handleCheckCharacterSelect(data) {
  var testLatinh = /[A-z\u00C0-\u00ff]+/g;
  var testUnsignedCharacter = /[àáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ]+/g;
  if (testLatinh.test(data) && data.replace(/[^a-zA-Z ]/g, "").trim() !== "" && !testUnsignedCharacter.test(data)) {
    if (data.trim() !== "") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
var isGetApi = true;

function mochiRemoveDiv(e, type) {
  var domResult = document.querySelector(".mochi-result");
  var targetElement = e.target; // clicked element
  do {
    if (targetElement == boxContentMochi || targetElement == domResult) {
      return;
    }
    targetElement = targetElement.parentNode;
  } while (targetElement);
  if (domResult) {
    domResult.remove();
  }
  if (type == "all") {
    boxContentMochi.style.display = "none";
    iconMochi.style.display = "none";
    loadingMochi.style.display = "none";
  } else {
    boxContentMochi.style.display = "none";
  }
}

document.onmouseup = handle_select_text;
if (!document.all) document.captureEvents(Event.MOUSEUP);

chrome.runtime.onMessage.addListener(function (params) {
  if (params.message === "onPageLoad") {
    window.addEventListener("DOMContentLoaded", run, false);
  }
});

chrome.runtime.sendMessage({ message: "onPageLoad" });
// click setting
document.body.insertAdjacentHTML("beforeend", _type.mochiModal);

iconMochi.addEventListener("click", handleClickIconMochi);
document.querySelector("#mochi-close-box_content_mochi_extension").addEventListener("click", function () {
  boxContentMochi.style.display = "none";
  iconMochi.style.display = "none";
  loadingMochi.style.display = "none";
});

//action modal login
document.querySelector(".mochi-login-button").addEventListener("click", function () {
  chrome.runtime.sendMessage(_index.listMessage.modalLoginSearch);
  if (localStorage.getItem("popupSearch") == "0") {
    chrome.runtime.sendMessage(_index.listMessage.popupShort);
  } else if (localStorage.getItem("popupSearch") == "1") {
    chrome.runtime.sendMessage("popupLong");
  }
  (0, _modal.handleOpenModal)("mochi-modal-login");
});
document.querySelector("#mochi-btn-login").addEventListener("click", function () {
  if (window.localStorage.getItem("saveWord") == "1") {
    chrome.runtime.sendMessage(_index.listMessage.clickSaveLoginSearch);
    window.localStorage.removeItem("saveWord");
  } else {
    chrome.runtime.sendMessage(_index.listMessage.searchWordLogin);
  }
  window.open(_index.URL_PAGE_LOGIN);
});
document.querySelector("#mochi-btn-register").addEventListener("click", function () {
  if (window.localStorage.getItem("saveWord") == "1") {
    chrome.runtime.sendMessage(_index.listMessage.clickSaveSignUpSearch);
    window.localStorage.removeItem("saveWord");
  } else {
    chrome.runtime.sendMessage(_index.listMessage.searchWordSignUp);
  }
  window.open(_index.URL_PAGE_REGISTER);
});
document.querySelector("#mochi-close-login").addEventListener("click", function () {
  return (0, _modal.handleCloseModal)();
});

//action modal free user 30 word
document.querySelector("#mochi-close-free-user-upgrade-30").addEventListener("click", function () {
  return (0, _modal.handleCloseModal)();
});
document.querySelector("#mochi-close-free-user-upgrade-50").addEventListener("click", function () {
  return (0, _modal.handleCloseModal)();
});
document.querySelector("#mochi-close-mochi-paid-user-100").addEventListener("click", function () {
  return (0, _modal.handleCloseModal)();
});
document.querySelector("#mochi-close-mochi-paid-user-100-level-1").addEventListener("click", function () {
  return (0, _modal.handleCloseModal)();
});
document.querySelector("#mochi-close-mochi-understand").addEventListener("click", function () {
  return (0, _modal.handleCloseModal)();
});
document.querySelector("#mochi-close-mochi-open-web").addEventListener("click", function () {
  return (0, _modal.handleCloseModal)();
});
document.querySelector("#mochi-close-mochi-now-study").addEventListener("click", function () {
  return (0, _modal.handleCloseModal)();
});

//action submit modal
document.querySelector("#btn-mochi-submit-free-30").addEventListener("click", function () {
  chrome.runtime.sendMessage("checkClickUpgrade");
  handleClickUpgrade();
});

document.querySelector("#btn-mochi-submit-free-50").addEventListener("click", function () {
  chrome.runtime.sendMessage("checkClickUpgrade");
  handleClickUpgrade();
});

document.querySelector("#btn-mochi-submit-100").addEventListener("click", function () {
  window.open(_index.URL_LEARN);
});
document.querySelector("#btn-mochi-submit-100-lv-1").addEventListener("click", function () {
  return window.open(_index.URL_LEARN);
});
document.querySelector("#btn-mochi-submit-understand").addEventListener("click", function () {
  return (0, _modal.handleCloseModal)();
});
document.querySelector("#btn-mochi-submit-open-web").addEventListener("click", function () {
  return window.open(mochiWebsiteLearn);
});
document.querySelector("#btn-mochi-submit-now-study").addEventListener("click", function () {
  window.open(_index.URL_LEARN);
});

function handleClickUpgrade() {
  window.open("https://mochidemy.com/extension/");
}

if (document.querySelector(".boldText.logOutText")) {
  document.querySelector(".boldText.logOutText").addEventListener("click", function () {
    chrome.runtime.sendMessage({ name: _index.listMessage.tabReloadLogin }, function (response) {});
  });
}
// document.querySelector("body").addEventListener("unload", function(e) {
//   if (window.event.clientY < 0) {
//     clearInterval(updateLanguage);
//   }
// });

window.onload = function () {
  chrome.runtime.sendMessage("getStatusReload", function (response) {
    // console.log(response);
    if (response === "0") {
      chrome.runtime.sendMessage({
        name: "newFeedOn"
      });
      chrome.runtime.sendMessage("reloadAllPage");
      chrome.runtime.sendMessage("removeLoad");
    } else {}
  });
};
document.querySelector("#icon_mochi_extension").addEventListener("click", handleClickIconMochi);
document.querySelector("#mochi-close-login").addEventListener("click", function () {
  return (0, _modal.handleCloseModal)();
});
document.querySelector(".mochi-login-button").addEventListener("click", function () {
  chrome.runtime.sendMessage(_index.listMessage.modalLoginSearch);
  if (localStorage.getItem("popupSearch") == "0") {
    chrome.runtime.sendMessage(_index.listMessage.popupShort);
  } else if (localStorage.getItem("popupSearch") == "1") {
    chrome.runtime.sendMessage("popupLong");
  }
  (0, _modal.handleOpenModal)("mochi-modal-login");
});

// page

// const urlParams = new URLSearchParams(window.location.search);
// const myParam = urlParams.get("uuid");
// const paramsUninstall = {
//   privateKey: "M0ch1M0ch1_En_$ecret_k3y",
//   appVersion: "2.2",
//   deviceType: "3",
// };
// fetch("https://mochien-test.akira.edu.vn/v3.1/extension_uninstall" + "?" + new URLSearchParams({
//   uuid: myParam
// }), {
//   method:"GET",
//   paramsUninstall
// }
// )

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.settingBgc = settingBgc;

var _type = __webpack_require__(12);

var _index = __webpack_require__(1);

var _modal = __webpack_require__(32);

function settingBgc() {
  // Phần appen lớp overlay
  var overlayPopup = document.createElement("div");
  overlayPopup.setAttribute("class", "overlay__popup");
  document.body.appendChild(overlayPopup);
  // Phần appen thẻ div của popup settings
  var elementPopup = document.createElement("div");
  elementPopup.setAttribute("class", "div__popup--setting");
  document.body.appendChild(elementPopup);

  var arrBgc = [{ index: 1, srcBgc: "bg_extension_0.a028b0e4a0cd6e188c01.jpg" }, { index: 2, srcBgc: "bg_extension_1.9ecd208e95a05c434624.jpg" }, { index: 3, srcBgc: "bg_extension_2.c92c104d9908aeed775d.jpg" }, { index: 4, srcBgc: "bg_extension_3.c0b9fd9ee3dc99a873b9.jpg" }, { index: 5, srcBgc: "bg_extension_4.684210c4336a301d4156.jpg" }, { index: 6, srcBgc: "bg_extension_5.05c3b385d6ab024ce2f4.jpg" }, { index: 7, srcBgc: "bg_extension_6.7eb891d4d13d875c6df4.png" }];
  var htmlBgc = arrBgc.map(function (item) {
    return "\n    <div class=\"setting-image\">\n      <div class=\"setting-close\">\n      </div>\n      <img src=\"" + _type.urlImage + item.srcBgc + "\" id=\"one" + item.index + "\" class=\"image__background\" alt=\"mochi-ext\" />\n    </div>\n  ";
  });
  var htmlListBgc = htmlBgc.join("");
  var htmls = "\n<div>\n    <div class=\"mochi__close\">\n       <img src=" + _type.mochiClose + " alt=\"mochi--close\" />\n    </div>\n    <h4 class=\"mochi-text-title-2\">C\xE0i \u0111\u1EB7t chung</h4>\n    <div class=\"selector-language\">\n       <p class=\"selector-title\">\n          Ch\u1ECDn t\u1EEB \u0111i\u1EC3n m\u1EB7c \u0111\u1ECBnh\n       </p>\n       <select class=\"dict-select\">\n          <option value=\"1\" class=\"option__one\"> \n          T\u1EEB \u0111i\u1EC3n Anh - Vi\u1EC7t\n          </option>\n          <option value=\"2\" selected class=\"option__two\">\n          T\u1EEB \u0111i\u1EC3n Anh - Anh\n          </option>\n       </select>\n    </div>\n    <div class=\"setting-web\">\n        <p class=\"setting-web-title\">\n              Ch\u1EE9c n\u0103ng Mochi New Tab\n        </p>\n        <div class=\"setting__label\">\n            <label class=\"switch\">\n              <input type=\"checkbox\" checked=\"false\" id=\"input-switch\">\n              <span class=\"slider round\"></span>\n            </label>\n            <div class=\"switch--label\">\n              <p>ON</p>\n            </div>    \n        </div>\n    </div>\n    <div class=\"setting-web\">\n        <p class=\"setting-web-title\">\n              Ch\u1EE9c n\u0103ng Kh\xF3a B\u1EA3ng tin Facebook\n        </p>\n        <div class=\"setting__label\">\n            <label class=\"switch switch__news--feed\">\n              <input type=\"checkbox\" checked=\"false\" id=\"input-switch-new-feed\">\n              <span class=\"slider round\"></span>\n            </label>\n            <div class=\"switch--label\">\n              <p>On</p>\n            </div>    \n        </div>\n    </div>\n    <div class=\"settings-background\"> \n       " + htmlListBgc + "\n    </div>\n</div>\n";

  document.querySelector(".div__popup--setting").innerHTML = htmls;
  // Selector Background
  chrome.runtime.sendMessage(_index.listMessage.getBackground, function (response) {
    var listElement2 = document.querySelectorAll(".image__background");
    var listElement3 = document.querySelectorAll(".setting-close");
    var image = document.createElement("img");
    image.src = "https://mochidemy.com/extension-bg/287274614_1197320181081642_3644767004924531515_n.webp";
    image.alt = "mochi-check";
    image.alt = "mochi-check";
    if (response === null) {
      listElement3[0].appendChild(image);
    }
    // console.log("test",listElement2[0].src);

    for (var i = 0; i < listElement2.length; i++) {
      var linkImage = listElement2[i].src.slice(35, listElement2[i].src.length);
      if ("./static/media/" + linkImage == response) {
        for (var j = 0; j < listElement3.length; j++) {
          if (i == j) {
            listElement3[j].appendChild(image);
          }
        }
      }
    }
    var listElement = document.querySelectorAll(".setting-close");
  });

  // Xu ly chon bgc
  var arrBgcSetting = document.querySelectorAll(".image__background");

  var _loop = function _loop(i) {
    arrBgcSetting[i].addEventListener("click", function (e) {
      var idElement = arrBgcSetting[i].getAttribute("id");
      chrome.runtime.sendMessage(_index.listMessage.reloadNewTab);
      if (window.mochiData.token === "notLogin") {
        (0, _modal.handleOpenModal)("mochi-modal-login");
      } else {
        var imgText = document.querySelector("#" + idElement).src;
        var srcBackground = imgText.slice(35, imgText.length);
        var setBgc = "./static/media/" + srcBackground;
        chrome.runtime.sendMessage({
          name: _index.listMessage.saveBackground,
          data: setBgc
        }), chrome.runtime.sendMessage(_index.listMessage.getBackground, function (response) {
          if (response === setBgc) {
            var image = document.createElement("img");
            image.src = "https://mochidemy.com/extension-bg/287274614_1197320181081642_3644767004924531515_n.webp";
            image.alt = "mochi-check";
            image.class = "setting-close-image";
            var listElement = document.querySelectorAll(".setting-close");
            for (var j = 0; j < listElement.length; j++) {
              if (listElement[j].childNodes.length >= 2) {
                listElement[j].removeChild(listElement[j].children[0]);
              }
            }
            document.querySelectorAll(".setting-close")[i].appendChild(image);
          }
        });
      }
    });
  };

  for (var i = 0; i < arrBgcSetting.length; i++) {
    _loop(i);
  }
  document.querySelector(".overlay__popup").addEventListener("click", function () {
    document.querySelector(".div__popup--setting").style.display = "none";
    document.querySelector(".overlay__popup").style.display = "none";
  });
  document.querySelector(".mochi__close>img").addEventListener("click", function () {
    document.querySelector(".div__popup--setting").style.display = "none";
    document.querySelector(".overlay__popup").style.display = "none";
  });
  // Ham xu ly input
  document.querySelector("#input-switch").addEventListener("change", function () {
    if (document.querySelector("#input-switch").checked) {
      chrome.runtime.sendMessage(_index.listMessage.newTabOn, function (response) {});
      // chrome.runtime.sendMessage(listMessage.reloadNewTabAll);
      chrome.runtime.sendMessage(_index.listMessage.removeTabDefault);
    } else {
      // chrome.runtime.sendMessage(listMessage.reloadNewTabAll);
      chrome.runtime.sendMessage(_index.listMessage.OffNewTab);
      chrome.runtime.sendMessage(_index.listMessage.removeNewTab);
      chrome.runtime.sendMessage(_index.listMessage.newTabOff, function (response) {});
    }
  });

  chrome.runtime.sendMessage(_index.listMessage.bgcNewTab, function (response) {
    if (response === false) {
      document.querySelector("#input-switch").removeAttribute("checked");
      document.querySelector(".switch--label>p").innerText = "Off";
    } else {
      document.querySelector(".switch--label>p").innerText = "On";
    }
  });
  // Hàm xử lý khóa bảng tin facebook
  document.querySelector("#input-switch-new-feed").addEventListener("change", function () {
    if (document.querySelector("#input-switch-new-feed").checked) {
      chrome.runtime.sendMessage({ name: "newFeedOn" }, function (response) {});
      chrome.runtime.sendMessage("reloadAllPage");
    } else {
      chrome.runtime.sendMessage({ name: "newFeedOff" }, function (response) {});
      chrome.runtime.sendMessage("reloadAllPage");
    }
  });

  chrome.runtime.sendMessage("getStatusNewFeed", function (response) {
    if (response === "0") {
      document.querySelector("#input-switch-new-feed").removeAttribute("checked");
      document.querySelector(".switch--label>p").innerText = "Off";
    } else {
      document.querySelector(".switch--label>p").innerText = "On";
    }
  });
  // Xu ly Select option
  document.querySelector(".dict-select").addEventListener("change", function () {
    var changeLang = document.querySelector(".dict-select").value;
    chrome.runtime.sendMessage({
      name: _index.listMessage.changeLanguage,
      data: changeLang
    });
    window.location.reload(false);
  });

  // let updateLanguage = setInterval(() => {
  chrome.runtime.sendMessage(_index.listMessage.getLanguage, function (response) {
    if (response === "1") {
      document.querySelector(".option__one").setAttribute("selected", "true");
      document.querySelector(".option__two").removeAttribute("selected");
    } else if (response === "2") {
      document.querySelector(".option__two").setAttribute("selected", "true");
      document.querySelector(".option__one").removeAttribute("selected");
    } else {
      document.querySelector(".option__one").setAttribute("selected", "true");
      document.querySelector(".option__two").removeAttribute("selected");
    }
  });
  // clearInterval(updateLanguage);
  // },1000);
}

/***/ })

/******/ });