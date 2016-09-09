/**
 * Interstitial Demo
 * @author Eiji Kuroda
 * @license Apache-2.0
 */

var Interstitial = require('../index.js');

document.addEventListener('DOMContentLoaded', function(){
  var target = document.querySelector('#target');
  var i = new Interstitial(target);
  target.addEventListener('click', function(){
    i.close();
  }, false);
}, false);
