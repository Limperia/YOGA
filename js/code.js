document.getElementById('left_sl').onclick=leftSl;
autoSlider();
 var left=0;
//задать left 0 чтобы сладер не останавливался
var timer;

function autoSlider(){
    timer=setTimeout(leftSl, 3000);
}

function leftSl(){
    
    var polosa=document.getElementById('polosa');
    
   left=left-594;

    
    if(left<-1188){

        left=0;
        clearTimeout(timer);
    }
    
    polosa.style.left=left+'px';

    autoSlider();

}


$('.slider').slick({
    autoplay: false,  
//    автоматическое перем слайда
    autoplaySpeed: 2000,
//    время перемотки слайдера
    dots:true,
//    индикаторы
    vertical:true,
//    слайдер листает вертикально
    arrows:false,
});




window.onload = function () {
	var imgArr = document.getElementsByClassName('my__img');
	var modalWindow = document.getElementById('my__modal');
	var modalImg = document.getElementById('img01');
	var span = document.getElementById('close');
	var modalBlock = document.getElementById('modal__block');

	for(i=0;i<imgArr.length;i++){
		var picture = imgArr[i];
		picture.onclick = function(){
			openImg(this);
		}
	}
    
	function openImg(pic){
		modalWindow.style.display='block';
		modalBlock.style.transform = 'translateY(0%)';
		modalImg.src = pic.src;
		modalImg.alt = pic.alt;

	}

	function close(){
		modalWindow.style.display ='none';
	}
	span.onclick = function(){
		modalBlock.style.transform = 'translateY(-500%)';
		setTimeout(	close, 500);
	}
}




