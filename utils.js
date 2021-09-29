function findLocalItems (query) {
    var i, results = [];
    for (i in localStorage) {
        if (localStorage.hasOwnProperty(i)) {
        if (i.match(query) || (!query && typeof i === 'string')) {
            value = JSON.parse(localStorage.getItem(i));
            results.push({key:i,val:value});
        }
        }
    }
    return results;
}

function hi () {
    "use strict";
  
      // type 'hi' on your keyboard
      var key = [72,73];
      var ck = 0;
      var max = key.length;
  
      var hi = function() {
  
        var shock = document.createElement('div');
        var img = new Image;
        img.src = data;
        img.style.pointerEvents = "none";
        img.style.width = '300px';
        img.style.height = '300px';
        img.style.transition = '1s all';
        img.style.position = 'fixed';
        img.style.left = 'calc(50% - 150px)';
        img.style.bottom = '-100px';
        img.style.zIndex = 999999;
  
        document.body.appendChild(img);
  
        window.setTimeout(function(){
          img.style.bottom = '-50px';
        },30);
  
        window.setTimeout(function(){
          img.style.bottom = '-300px';
        }, 4300);
        window.setTimeout(function(){
          img.parentNode.removeChild(img);
        }, 5400);
  
      };
  
      var record = function(e) {
  
        if ( e.which === key[ck] ) {
          ck++;
        } else {
          ck = 0;
        }
  
        if ( ck >= max ) {
          hi();
          ck = 0;
        }
  
      };
  
      var init = function(data) {
        document.addEventListener('keyup', record);
      };
  
      var data = 'https://weichiachang.github.io/easter-eggs-mobile/images/hi.gif';
  
      init(data);
  }
  function walk () {
    "use strict"
  
    // type 'walk' on your keyboard
    let key = [74,79,74,79]
    let ck = 0
    let max = key.length
  
    let walk = function () {
  
      var shock = document.createElement('div')
      var img = new Image()
      img.src = data
      img.style.pointerEvents = "none";
      img.style.width = '350px'
      img.style.height = '350px'
      img.style.transition = '6s all linear'
      img.style.position = 'fixed'
      img.style.left = '-400px'
      img.style.bottom = '-40px'
      img.style.zIndex = 999999
  
      document.body.appendChild(img)
  
      // window.setTimeout(function(){
      //   img.style.left = 'calc(50% - 200px)'
      // },50)
  
      window.setTimeout(function(){
        img.style.left = 'calc(100% + 500px)'
      }, 50)
  
      window.setTimeout(function(){
        img.parentNode.removeChild(img)
      }, 6000)
  
    }
  
    let record = function(e) {
  
      if ( e.which === key[ck] ) {
        ck++
      } else {
        ck = 0
      }
  
      if ( ck >= max ) {
        walk()
        ck = 0
      }
  
    }
  
    let init = function (data) {
      document.addEventListener('keyup', record)
    }
  
    let data = './images/walk.gif'
  
    init(data)
  }
hi();
walk();