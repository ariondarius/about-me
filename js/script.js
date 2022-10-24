$(document).ready(function(){
$(window).scroll(function(){
if (this.scrollY > 5){
$('.navbar').addClass("sticky");
$('#logo').addClass("sticky");
$('#first').addClass("sticky");
$('#second').addClass("sticky");
$('#third').addClass("sticky");
$('#bars').addClass("sticky");
}
else{
$('.navbar').removeClass("sticky");
$('#logo').removeClass("sticky");
$('#first').removeClass("sticky");
$('#second').removeClass("sticky");
$('#third').removeClass("sticky");
$('#bars').removeClass("sticky");
}
});
$(".menu-btn").click(function(){
  $(".navbar .menu").toggleClass("active");
  $('#bars').toggleClass("sticky");
});
});
