const submitButton = $("input[type='submit']");

submitButton.click(function(e) {
  e.preventDefault();
  makeGrid();
});
var size=$("#sizePicker")

var reset = $("#pixelCanvas").html();
function rst() {
    $("#pixelCanvas").html(reset);
}

function makeGrid() {
    var height;
    var width;
    var i;
    var j;
    height=$('#inputHeight').val();
    width=$('#inputWeight').val();
    
     $('tr').remove();
     for(i=1;i<=height;i++)
     {   $('#pixelCanvas').append('<tr id=canvas'+i+'></tr>');
        for(j=1;j<=width;j++)
        {  
             $('#canvas'+i).append('<td></td>');
        }
    }
    $('td').on('click',function() {
        var color=$('#colorPicker').val();
        if($(this).attr('style')){
            $(this).removeAttr('style');
            }
            else{
                $(this).attr('style','background-color:'+color);
            }
    });
     
}

