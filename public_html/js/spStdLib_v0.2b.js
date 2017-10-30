if ( spStdLib !== undefined ) throw new Error("I don't will redefine the spStdLib variable!!!" );

/** @namespace spStdLib */
var spStdLib = {
  /** Check if a value exists in an array
   * @function inArray
   * @memberof spStdLib
   * @author Kevin van Zonneveld {@link http://kevin.vanzonneveld.net}
   
   * @param {mixed} needle
   * @param {array} haystack
   * @param {boolean} strict - If true then use "===" else use "=="
   
   * @returns {boolean} If found then true else false
  */
  inArray : function (needle, haystack, strict) {
    var found = false, key, strict = !!strict;

    for (key in haystack) {
      if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
        found = true;
        break;
      }
    }
    return found;
  },
  /** Delete values from all input HTML elments in the HTML form
   * @function clearForm
   * @memberof spStdLib
   
   * @param {HTMLFormElement} form
  */
  clearForm : function (form){
    for (var i in form.elements){
      form.elements[i].value = '';
    }
  },
  /** Check if variable is defined
   * @function isSet
   * @memberof spStdLib
   
   * @param {mixed} variable
   * @returns {boolean} if the variable is defined then return true else return false
  */
  isSet : function (variable){
    if (typeof(variable) !== 'undefined') return true;
    return false;
  },
  /** Get an array of the _GET params from window.location.search
   * @function getArrayUriSearch
   * @memberof spStdLib
   
   * @returns {array}
  */
  getArrayUriSearch : function (){
    if (window.location.search == '') return [];

    var sUriSearch = window.location.search;
    var arrSearch = (sUriSearch.substr(1)).split('&');
    var arrResult = [];

    arrSearch.forEach(function (sItem, iIndx, arr) {
      arrTemp = sItem.split('=');
      arrTemp[0] = decodeURIComponent(arrTemp[0]);
      arrTemp[1] = decodeURIComponent(arrTemp[1]);
      arrResult[arrTemp[0]] = arrTemp[1];
    });

    return arrResult;
  }
}