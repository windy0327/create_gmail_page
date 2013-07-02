/**
 * Created with JetBrains RubyMine.
 * User: fmm
 * Date: 13-6-27
 * Time: 下午1:27
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function(){

    console.log(window.innerWidth);
    console.log($(".guang_gao_field").width());
    console.log($(".show_guang_gao").width());
    console.log($(".guang_gao_content").width());
    window.onresize =function(){

        if(window.innerWidth<1075){
            //noinspection JSCheckFunctionSignatures
            decrease_element_height();
            up_element();
            left_index();
            down_guang_gao_table();
            down_tips_picture();
            reset_search_field_width();
        }
        else if(window.innerWidth>1075||window.innerWidth==1075){
            revert_element_height();
            down_element();
            up_tips_picture();
            revert_index();
            up_guang_gao_table();

        }
    //    console.log(window.innerWidth);
      //  console.log($(".search_field").height());
    }

})


function decrease_element_height(){
         decrease_header_height();
         decrease_search_field_height();
         decrease_operate_field_height();
         decrease_table_line_height();
         decrease_sidebar_line_height();

}

function revert_element_height(){
         revert_header_height();
         revert_search_field_height();
         revert_operate_field_height();
         revert_table_line_height();
         revert_sidebar_line_height();
}

function up_element(){

    up_header_text();
    up_search_field();
    up_search_button();
    up_gmail_name();
    up_operate_field_buttons();
    up_gmail_container();
    up_more_tips_line();
    up_right_arrow_icon();
    up_google_icon();
}

function down_element(){
    down_google_icon();
    down_header_text();
    down_search_field();
    down_search_button();
    down_gmail_name();
    down_operate_field_buttons();
    down_gmail_container();
    down_more_tips_line();
    down_right_arrow_icon();
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
    $("td").height(18);
    $("td").css("line-height","18px");

}

function revert_table_line_height(){
    $("td").height(30);
    $("td").css("line-height","30px");
}

function up_google_icon(){
    $(".google_icon").css("bottom","10px");
    console.log("ketty");
}

function down_google_icon(){
    $(".google_icon").css("bottom","0px");
}

function up_header_text(){
       $("ul").css("top","-12px");
}

function down_header_text(){
      $("ul").css("top","-10px");
}

function up_search_field(){
    $(".search_content").css("bottom","25px");
    $(".picture_inside_input").css("bottom","27px");
}

function down_search_field(){
    $(".search_content").css("bottom","16px");
    $(".picture_inside_input").css("bottom","18px");
}

function up_search_button(){
    $(".search_picture").css("bottom","12px");
}

function down_search_button(){
    $(".search_picture").css("bottom","3px");
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
    $(".checkbox_image").css("top","77px");
    $(".show_more_operations").css("top","80px");
    $(".gmail_number").css("top","86px");
    $(".model_picture").css("top","73px");

}

function down_operate_field_buttons(){
    $(".show_gmail").css("bottom","0px");
    $(".image").css("bottom","6px");
    $(".refresh_operation").css("top","121px");
    $(".checkbox_image").css("top","120px");
    $(".show_more_operations").css("top","124px");
    $(".gmail_number").css("top","125px");
    $(".model_picture").css("top","114px");
}

function up_gmail_container(){
    $(".gmail_container").css("top","130px");
}

function down_gmail_container(){
    $(".gmail_container").css("top","180px");
}

function decrease_sidebar_line_height(){
    $(".sidebar").css("line-height","18px");
    $(".blank").css("height","6px");
}

function revert_sidebar_line_height(){
    $(".sidebar").css("line-height","22px");
    $(".blank").css("height","12px");
}

function up_more_tips_line(){
    $(".more_tips_line").css("top","275px");
}

function down_more_tips_line(){
    $(".more_tips_line").css("top","355px");
}

function up_right_arrow_icon(){
    $(".right_arrow_icon").css("top","77px");
}

function down_right_arrow_icon(){
    $(".right_arrow_icon").css("top","94px");
}

function left_index(){
    $(".index").css("margin-left","-20px");
}
function revert_index(){
    $(".index").css("margin-left","0px");
}

function down_guang_gao_table(){
    $(".guang_gao_info").css("bottom","-1px");
}

function up_guang_gao_table(){
    $(".guang_gao_info").css("bottom","5px");
}

function reset_search_field_width(){
    $(".search_content").css("width","38%");
}

function down_tips_picture(){
    $(".show_tips_picture").css("bottom","15px");
}

function up_tips_picture(){
    $(".show_tips_picture").css("bottom","19px");
}