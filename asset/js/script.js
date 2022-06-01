/*------------------------------------------------------------------------|
	Theme name: Tree-plan app 
	Author: Md.Enjamul Islam
	Author URI: http://enjamul.ga
	Description: 

    Tags: 


    text-color: #213e3b;
    menu-color: #69a6ab;
    botton-color: #ff7e67;
    background-color: #00656c;
||--------------------------------------------------------------------------*/

/*------------------------------------------------------------------------|
	[ Table of column ]

	1.0. Google font
	2.0. Common css
	3.0. Body
    4.0. Header 


||--------------------------------------------------------------------------*/


/*------------------------------------------------------------------------|
    Product gallery filter 
||--------------------------------------------------------------------------*/
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});















