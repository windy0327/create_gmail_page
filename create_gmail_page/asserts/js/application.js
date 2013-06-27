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
            //noinspection JSCheckFunctionSignatures
            setTimeout(decrease_element_height(), 200);
            setTimeout(up_google_icon,200);
            up_header_text();
            up_search_field();
            up_search_button();
        }
        else{
            setTimeout(revert_element_height(),200);
            setTimeout(down_google_icon(),200);
            down_header_text();
            down_search_field();

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

function up_google_icon(){
    $(".google_icon").css("bottom","10px");
}

function down_google_icon(){
    $(".google_icon").css("top","0px");
}

function up_header_text(){
       $("ul").css("top","-12px");
}

function down_header_text(){
      $("ul").css("top","-10px");
}

function up_search_field(){
    $(".search_content").css("bottom","25px");
    $(".show_search_tips_picture").css("top","51px");
}

function down_search_field(){
    $(".search_content").css("bottom","16px");
    $(".show_search_tips_picture").css("top","65px");
}

function up_search_button(){
    $(".search_button").css("bottom","30px");
    $(".search_picture").css("top","47px");
}