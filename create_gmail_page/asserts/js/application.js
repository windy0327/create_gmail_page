/**
 * Created with JetBrains RubyMine.
 * User: fmm
 * Date: 13-6-27
 * Time: 下午1:27
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function(){

    console.log($("tr").height());
    window.onresize =function(){
        if(window.innerWidth<900){
            setTimeout(decrease_element_height(), 200);
        }
        else{
            setTimeout(revert_element_height(),200);

        }
        console.log(window.innerWidth);
        console.log($(".search_field").height());
    }



})


function decrease_element_height(){
         decrease_header_height();
         decrease_search_field_height();
         decrease_operate_field_height();
         decrease_table_line_height();
}

function revert_element_height(){
         revert_header_height();
         revert_search_field_height();
         revert_operate_field_height();
         revert_table_line_height();
}
function decrease_header_height(){
    $(".index_head").height(12);
}

function revert_header_height(){
    $(".index_head").height(19);
}

function decrease_search_field_height(){
    $(".search_field").height(34);
}

function revert_search_field_height(){
    $(".search_field").height(60);
}

function decrease_operate_field_height(){
    $(".operate_field").height(34);
}

function revert_operate_field_height(){
    $(".operate_field").height(60);
}

function decrease_table_line_height(){
    $("tr").height(30);

}

function revert_table_line_height(){
    $("tr").height(37);
}