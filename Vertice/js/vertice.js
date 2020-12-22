$('#carouselConoce').carousel({
    interval: 2000
})

$('#carouselConoce').click(function () {
    pauseCarousel();
}); 

$('#carouselModalConoce').carousel({
    interval: false
})

function pauseCarousel(){
    $('#carouselConoce').carousel('pause');
    console.log('se ha pausado el carousel');
}