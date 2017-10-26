$(document).ready(function(){

    $('.item').click(function(){
        
            contents = $(this).text();
            setTime = prompt("What time did you perform this exercise?", "12pm");
        
            $('#list').append(contents + ' @ ' + setTime + '<br />');
        
    });
    /*
    $('li').draggable({ containment: 'document', revert: true,
    start: function() {
        contents = $(this).text();
    }
    });

    $('#list').droppable({ hoverClass: 'border', accept: '.item',
    drop: function() {
        $('#list').append(contents + '<br />');
    }
    });
    */
});