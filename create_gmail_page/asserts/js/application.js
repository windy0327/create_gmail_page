/**
 * Created with JetBrains RubyMine.
 * User: fmm
 * Date: 13-6-27
 * Time: 下午1:27
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function(){

    console.log(window.innerWidth);
    window.onresize =function(){
        if(window.innerWidth<1075){
            //noinspection JSCheckFunctionSignatures
            setTimeout(decrease_element_height(), 200);
            up_element();
        }
        else{
            setTimeout(revert_element_height(),200);
            down_element();

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

function up_element(){
    setTimeout(up_google_icon,200);
    up_header_text();
    up_search_field();
    up_search_button();
    up_gmail_name();
    up_operate_field_buttons();
}

function down_element(){
    setTimeout(down_google_icon(),200);
    down_header_text();
    down_search_field();
    down_search_button();
    down_gmail_name();
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
    $(".operate_field").height(43);
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
    $(".search_picture").css("top","45px");
}

function down_search_button(){
    $(".search_button").css("bottom","22px");
    $(".search_picture").css("top","60px");
}

function up_gmail_name(){
    $(".gmail_name").css("top","40px");
    $(".show_gmail_information").css("top","47px");
}

function down_gmail_name(){
    $(".gmail_name").css("top","55px");
    $(".show_gmail_information").css("top","62px");
}

function up_operate_field_buttons(){
    $(".show_gmail").css("bottom","11px");
    $(".image").css("bottom","6px");
    $(".refresh_operation").css("top","78px");

}