var fsblock = document.getElementById("povna_img");
var fsimg = document.getElementById("pvimg");
var fstext = document.getElementById("txt");

document.addEventListener("click", function(e){
	const target = e.target.closest(".gallery-imgs img");
	const outoftarget = e.target.closest("#povna_img");

	if(target){
		fsblock.hidden = false;
  		fsimg.src = target.getAttribute("src").valueOf();
  		fstext.innerHTML = target.getAttribute("alt").valueOf();
	}
	else if(outoftarget){
		fsblock.hidden = true;
	} 
});