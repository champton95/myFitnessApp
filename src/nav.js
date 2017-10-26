$(function(){
    
    $("#header-placeholder").load("src/_header.html", function() {
        $("#nav-placeholder").load(navProperties.mainNav, function() {
            $(".nav-link").removeClass("active");
            $(`#${navProperties.currentSection}-link`).addClass("active");
        });
    });

    $("#calendar-placeholder").load("src/_cal.html");
    
    $(".btn-primary").click(function(){
        $(this).closest(".col").css({ 'max-width': 'none' })
        .animate({ 'flex-basis': '100%' })
    });
    
});