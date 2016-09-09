/**
 * Interstitial module
 * @author Eiji Kuroda
 * @license Apache-2.0
 */
/* globals $sf , __DEVELOP__ */
var Interstitial = function Interstitial(target){
  var __ = target;

  /* */
  __.build = function(){
    __.style.position = 'fixed';
    __.style.top = '0px';
    __.style.left = '0px';
    __.style.backgroundColor = 'rgba(0,0,0,0.8)';
    __.style.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) + 'px';
    __.style.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) + 'px';
    __.style.zIndex = 6000000;
    __.child.style.position = 'absolute';
    __.child.style.top = '50%';
    __.child.style.left = '50%';
    __.child.style.marginRight = '-50%';
    __.child.style.transform = 'translate(-50%, -50%)';
    __.child.style.zIndex = 6000001;
    window.addEventListener('resize', __.resize, false);
  };

  /* */
  __.close = function(){
    __.style.position = __.currStyle.position;
    __.style.top = __.currStyle.top;
    __.style.left = __.currStyle.left;
    __.style.backgroundColor = __.currStyle.backgroundColor;
    __.style.width = __.currStyle.width;
    __.style.height = __.currStyle.height;
    __.style.zIndex = __.currStyle.zIndex;
    __.child.style.position = __.childStyle.position;
    __.child.style.top = __.childStyle.top;
    __.child.style.left = __.childStyle.left;
    __.child.style.marginRight = __.childStyle.marginRight;
    __.child.style.transform = __.childStyle.transform;
    __.child.style.zIndex = __.childStyle.zIndex;
    window.removeEventListener('resize', __.resize, false);
  };

  /* */
  __.resize = function(){
    __.style.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) + 'px';
    __.style.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) + 'px';
  };

  /* */
  (function init(){
    if(typeof __DEVELOP__ === 'undefined'){
      __.log = function(msg){return;};
    }else{
      __.log = function(msg){window.console.log(msg);};
    }
    __.currStyle = {};
    __.currStyle.top = __.style.top;
    __.currStyle.left = __.style.left;
    __.currStyle.position = __.style.position;
    __.currStyle.backgroundColor = __.style.backgroundColor;
    __.currStyle.opacity = __.style.opacity;
    __.currStyle.width = __.style.width;
    __.currStyle.height = __.style.height;
    __.currStyle.zIndex = __.style.zIndex;
    __.child = target.firstElementChild;
    __.childStyle = {};
    __.childStyle.position = __.child.style.position;
    __.childStyle.top = __.child.style.top;
    __.childStyle.left = __.child.style.left;
    __.childStyle.marginRight = __.child.style.marginRight;
    __.childStyle.transform = __.child.style.transform;
    __.childStyle.zIndex = __.child.style.zIndex;
    __.build();
  })();

  return __;
};

module.exports = Interstitial;
