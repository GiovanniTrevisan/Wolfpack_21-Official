$(document).ready(function(){

    $('.sidenav').sidenav();
 

    $('.nav-wrapper > #logo-container,.nav-wrapper > ul > li > a ').on("click",function(){
       funcao($(this));
      })
});

funcao = (obj) =>{
    const menu = (obj.data('menu'));

    $('.content > div').addClass('hide');

    $('#'+menu).toggleClass('hide');
}