$(function(){
    $(".subbtn").on("click", function () {
        $(".share-lay").fadeIn(300);
    });
    $(".share-lay .bg").on("click",function(){
        $(this).parent().fadeOut(300);
    });
});