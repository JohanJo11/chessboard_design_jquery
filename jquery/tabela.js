$(document).ready(function shfaqTabelen() {
    var tabeleShahu = $('#tabeleShahu');
    
    for (var row = 0; row < 8; row++) {
        var tableRow = $('<tr></tr>');
        
        for (var col = 0; col < 8; col++) {
            var tableCol = $('<td></td>');
            
            if ((row + col) % 2 === 0) {
                tableCol.addClass('white');
            } else {
                tableCol.addClass('black');
            }
            
            tableRow.append(tableCol);
        }
        
        tabeleShahu.append(tableRow);

    
        }

        //Guret e bardhe

        var rreshti7 = $('#tabeleShahu tr').eq(7); //White king 
        rreshti7.find('td').eq(4).html('♔'); 
    
        var rreshti7 = $('#tabeleShahu tr').eq(7); //White queen 
        rreshti7.find('td').eq(3).html('♕'); 
    
        var rreshti7 = $('#tabeleShahu tr').eq(7); //Torja e bardhe left 
        rreshti7.find('td').eq(0).html('♖'); 
    
        var rreshti7 = $('#tabeleShahu tr').eq(7); //Torja e bardhe right 
        rreshti7.find('td').eq(7).html('♖'); 
    
        var rreshti7 = $('#tabeleShahu tr').eq(7); //Oficeri i bardhe left 
        rreshti7.find('td').eq(2).html('♗'); 
    
        var rreshti7 = $('#tabeleShahu tr').eq(7); //Oficeri i bardhe right 
        rreshti7.find('td').eq(5).html('♗'); 
    
        var rreshti7 = $('#tabeleShahu tr').eq(7); //Kali i bardhe left 
        rreshti7.find('td').eq(1).html('♘'); 
    
        var rreshti7 = $('#tabeleShahu tr').eq(7); //Kali i bardhe right 
        rreshti7.find('td').eq(6).html('♘'); 
    
        var ushtaretEBardhe = $('#tabeleShahu tr').eq(6);
        ushtaretEBardhe.find('td').each(function() {
            $(this).html('♙'); // Ushtaret e bardhe
    
        //Guret e zinj
    
        var ushtaretEZinj = $('#tabeleShahu tr').eq(1);
        ushtaretEZinj.find('td').each(function() {
            $(this).html('♟'); // Ushtaret e zinj
    
            var rreshti0 = $('#tabeleShahu tr').eq(0); //Black king 
            rreshti0.find('td').eq(4).html('♚'); 
        
            var rreshti0 = $('#tabeleShahu tr').eq(0); //Black queen 
            rreshti0.find('td').eq(3).html('♛'); 
        
            var rreshti0 = $('#tabeleShahu tr').eq(0); //Torja e zeze left 
            rreshti0.find('td').eq(0).html('♜'); 
        
            var rreshti0 = $('#tabeleShahu tr').eq(0); //Torja e zeze right 
            rreshti0.find('td').eq(7).html('♜'); 
        
            var rreshti0 = $('#tabeleShahu tr').eq(0); //Oficeri i zi left 
            rreshti0.find('td').eq(2).html('♝'); 
        
            var rreshti0 = $('#tabeleShahu tr').eq(0); //Oficeri i zi right 
            rreshti0.find('td').eq(5).html('♝'); 
        
            var rreshti0 = $('#tabeleShahu tr').eq(0); //Kali i zi left 
            rreshti0.find('td').eq(1).html('♞'); 
        
            var rreshti0 = $('#tabeleShahu tr').eq(0); //Kali i zi right 
            rreshti0.find('td').eq(6).html('♞'); 
        })
    })

  function shfaqGuret(){
    var rreshti7 = $('#tabeleShahu tr').eq(7); //White king 
        rreshti7.find('td').eq(4).html('♔'); 
    
        var rreshti7 = $('#tabeleShahu tr').eq(7); //White queen 
        rreshti7.find('td').eq(3).html('♕'); 
    
        var rreshti7 = $('#tabeleShahu tr').eq(7); //Torja e bardhe left 
        rreshti7.find('td').eq(0).html('♖'); 
    
        var rreshti7 = $('#tabeleShahu tr').eq(7); //Torja e bardhe right 
        rreshti7.find('td').eq(7).html('♖'); 
    
        var rreshti7 = $('#tabeleShahu tr').eq(7); //Oficeri i bardhe left 
        rreshti7.find('td').eq(2).html('♗'); 
    
        var rreshti7 = $('#tabeleShahu tr').eq(7); //Oficeri i bardhe right 
        rreshti7.find('td').eq(5).html('♗'); 
    
        var rreshti7 = $('#tabeleShahu tr').eq(7); //Kali i bardhe left 
        rreshti7.find('td').eq(1).html('♘'); 
    
        var rreshti7 = $('#tabeleShahu tr').eq(7); //Kali i bardhe right 
        rreshti7.find('td').eq(6).html('♘'); 
    
        var ushtaretEBardhe = $('#tabeleShahu tr').eq(6);
        ushtaretEBardhe.find('td').each(function() {
            $(this).html('♙'); // Ushtaret e bardhe
    
        //Guret e zinj
    
        var ushtaretEZinj = $('#tabeleShahu tr').eq(1);
        ushtaretEZinj.find('td').each(function() {
            $(this).html('♟'); // Ushtaret e zinj
    
            var rreshti0 = $('#tabeleShahu tr').eq(0); //Black king 
            rreshti0.find('td').eq(4).html('♚'); 
        
            var rreshti0 = $('#tabeleShahu tr').eq(0); //Black queen 
            rreshti0.find('td').eq(3).html('♛'); 
        
            var rreshti0 = $('#tabeleShahu tr').eq(0); //Torja e zeze left 
            rreshti0.find('td').eq(0).html('♜'); 
        
            var rreshti0 = $('#tabeleShahu tr').eq(0); //Torja e zeze right 
            rreshti0.find('td').eq(7).html('♜'); 
        
            var rreshti0 = $('#tabeleShahu tr').eq(0); //Oficeri i zi left 
            rreshti0.find('td').eq(2).html('♝'); 
        
            var rreshti0 = $('#tabeleShahu tr').eq(0); //Oficeri i zi right 
            rreshti0.find('td').eq(5).html('♝'); 
        
            var rreshti0 = $('#tabeleShahu tr').eq(0); //Kali i zi left 
            rreshti0.find('td').eq(1).html('♞'); 
        
            var rreshti0 = $('#tabeleShahu tr').eq(0); //Kali i zi right 
            rreshti0.find('td').eq(6).html('♞'); 
        })
  })}
  
      //Clear Button
      $("#clearBtn").click(function(){
        $("#tabeleShahu td").empty();
      });
    

      //Reset Button
      $("#resetBtn").click(function(){
        shfaqGuret();
    });
});
