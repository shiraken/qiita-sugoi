window.onload = function(){
  [].forEach.call(document.getElementsByClassName("commentHeader_likeButton"),function(val){
	   val.innerHTML = val.innerHTML.replace(/いいね/g, 'すごーい！');
   });
}();
