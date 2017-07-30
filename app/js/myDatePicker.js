                        //For show or hide movie
var counter=0;
function movie(){
    if(!counter){
        $('<div class = "movie" onclick = "movie()"><iframe width="50%" height="50%" src="https://www.youtube.com/embed/po_by8sugBA?autoplay=1" frameborder="0" allowfullscreen></iframe></div>').appendTo('body');
            
        $('body').css("overflow","hidden");
        counter++;
        
    }else{
        $("body").css("overflow","visible");
        $('.movie').remove();
        counter--;
        
    }
}


                            //My Date Picker
$(function () {
    $('.sandbox-one').datepicker({
        language: "ru",
        format: 'd',
        datesDisabled: ['9','10','12','13','14','16','17','18','25','26','30']
    });
});