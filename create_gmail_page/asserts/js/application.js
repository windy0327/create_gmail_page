/**
 * Created with JetBrains RubyMine.
 * User: fmm
 * Date: 13-6-27
 * Time: 下午1:27
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function(){
    console.log(window.innerWidth);

    console.log(window.innerWidth);
    window.onresize =function(){
        if(window.innerWidth<=900){
            setTimeout(change_header_size(), 2000);
        }
    }



})


function change_header_size(){
    $(".index_head").height($('.index_head').height()*0.8);
    console.log("hello") ;
}
