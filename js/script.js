/* jQuery functions */
$(document).ready(function()
{      
    $(".search__btn-close").click(function()
    {
        $('.search__input').val("");      
    });

    $(".popup-header__close").click(function()
    {
        $('.search__input').val("");  
        $('.search__button').css("visibility", "visible");      
    });
}); 