//Configuración inicial de los carouseles
$('.carouselNoModal').carousel({
    interval: 3500
})
$('.carouselModal').carousel({
    interval: false
})

$('.modal').on('show.bs.modal', function (e) {
    //Cuando ocurre un evento de abrir un carousel
    //Mostrar modal de imagen de carousel pantalla pequeña en el índice actual
    if(screen.width < 993){
        const nameHashtag = '#carousel' + this.dataset.target.slice(6);
        const name = this.dataset.target.substring(1);
        const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
        let carouselTarget = '#carousel' + nameCapitalized;
        $(carouselTarget).carousel($(nameHashtag).find('.active').index());
    }
})

$('.carousel-trigger').on('click', function(){
    //Cuando se clickea una imagen de la card
    //Mostrar modal de imagen de carousel pantalla grande en el índicie actual
    if(screen.width > 992){
        let current = parseInt(this.dataset.slideTo);
        const name = this.dataset.target.substring(1);
        const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
        let carouselTarget = '#carousel' + nameCapitalized;
        //seguir el formato '#carouselModalName'
        $(carouselTarget).carousel(current);
    }
});