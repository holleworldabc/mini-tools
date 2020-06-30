// ==UserScript==
// @name         FastGitCode
// @namespace    https://github.com/holleworldabc/browser-tools
// @version      1.0.0
// @description  fast show git ccode!
// @author       wm
// @match        https://github.com/*
// @grant        none
// ==/UserScript==

(function () {
  window.fgc.version = '1.0.0';
  window.fgc.updateDate = '20200311';
  //-------------------------------------------
  const fileNav = document.getElementsByClassName('file-navigation')[0];
  const btn = document.createElement("span");
  btn.className = "btn btn-sm btn-blue";
  btn.innerText = "Source Graph";
  btn.style.marginLeft = '8px';
  btn.style.height = '32px';
  btn.onclick = function () {
    const url = window.location.href;
    const sourceGraph = 'https://sourcegraph.com/'
    const last = url.split('://')[1];
    if(last.indexOf("\/tree\/") != -1){
      var last2=last.replace('\/tree\/', '@');
    }else{
      var last2=last;
    }
    window.open(sourceGraph + last2);
  }
  fileNav.appendChild(btn);
  //------------------------------------
//  console.log("load FastGitCode ok!");
//  console.log("version:" + version);
//  console.log("lastUpdateDate:" + updateDate);
})()
