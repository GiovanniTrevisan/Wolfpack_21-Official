$(document).ready(function(){

    $('.sidenav').sidenav();
    var sidenav = M.Sidenav.getInstance($('.sidenav'));

    $('.nav-wrapper > #logo-container,.nav-wrapper > ul > li > a').on("click",function(){
       funcao($(this));
      })

      $('.sidenav > div > li > a ').on("click",function(){
        funcao($(this));
        sidenav.close();
       })
});

funcao = (obj) =>{
    const menu = (obj.data('menu'));

    $('.content > div').addClass('hide');

    $('#'+menu).toggleClass('hide');
}