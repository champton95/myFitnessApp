$(document).ready(function(){
    var routine = [];
    var i = 0;
    $('.item').click(function(){
        
            contents = $(this).text();
            setTime = prompt("What time did you perform this exercise?", "12pm");
            routine.push(contents + ' @ ' + setTime + '<br />');
            $('#list').append(routine[i++]);
        
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