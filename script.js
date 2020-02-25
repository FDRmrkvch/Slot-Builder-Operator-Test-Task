function PlaySound() {
    var sound = document.getElementById("audio");
    sound.play()
}

function InfoButtonClick(){
    var link = document.getElementById("style");
    link.setAttribute("href", "infoPanel.css");
}

function CloseButtonClick(){
    var link = document.getElementById("style");
    link.setAttribute("href", "mainPanel.css");
}



    //SPINSELECT_BOX SHOWING

var auto_box = document.getElementById('auto_box');
var spinselect_box = document.getElementById('spinselect_box');

    auto_box.addEventListener('mouseover', function () {
        spinselect_box.classList.add('spinselect_box_show');
    });
    auto_box.addEventListener('mouseleave', function () {
        spinselect_box.classList.remove('spinselect_box_show');
    });
    spinselect_box.addEventListener('mouseover', function () {
        spinselect_box.classList.add('spinselect_box_show');
    });
    spinselect_box.addEventListener('mouseleave', function () {
        spinselect_box.classList.remove('spinselect_box_show');
    });



    //UNTIL FEATURE + ICON COLORING

var feature = document.getElementById('feature');
var txt_feature = document.getElementById('txt_feature');
var icon_feature = document.getElementById('icon_feature');

    feature.addEventListener('mouseover', function () {
        txt_feature.classList.add('txt_feature_hover');
        icon_feature.classList.add('icon_feature_hover');
    });
    feature.addEventListener('mouseleave', function () {
        txt_feature.classList.remove('txt_feature_hover');
        icon_feature.classList.remove('icon_feature_hover');
    });

    feature.addEventListener('mousedown', function () {
        txt_feature.classList.add('txt_feature_active');
        icon_feature.classList.add('icon_feature_active');
    });
    feature.addEventListener('mouseup', function () {
        txt_feature.classList.remove('txt_feature_active');
        icon_feature.classList.remove('icon_feature_active');
    });



    //PLUS/MINUS BUTTONS DISABLE

var count = 1.50;
// var count = 0.15;
var totalbetCounter = document.getElementById("totalbetCounter");
    totalbetCounter.innerHTML = "$" + count.toFixed(2);
var coin = 0.10;
// var coin = 0.01;
var coinboxCounter = document.getElementById("coinboxCounter");
    coinboxCounter.innerHTML = "$" + coin.toFixed(2);

var btn_plus = document.getElementById('btn_plus');
var btn_minus = document.getElementById('btn_minus');
    
    function Plus(){
        console.log(count)
        if(count < 0.75){
            count = count + 0.15;
            totalbetCounter.innerHTML = "$" + count.toFixed(2);

            coin = coin + 0.01;
            coinboxCounter.innerHTML = "$" + coin.toFixed(2);

            btn_minus.classList.remove('btn_minus_disable');
            btn_minus.classList.add('btn_minus');

            PlaySound();
        }
        else if(count < 1.2){
            count = count + 0.45;
            totalbetCounter.innerHTML = "$" + count.toFixed(2);

            coin = coin + 0.03;
            coinboxCounter.innerHTML = "$" + coin.toFixed(2);

            PlaySound();
        }
        else if(count < 1.5){
            count = count + 0.30;
            totalbetCounter.innerHTML = "$" + count.toFixed(2);

            coin = coin + 0.02;
            coinboxCounter.innerHTML = "$" + coin.toFixed(2);

            PlaySound();
        }
        else if(count < 3){
            count = count + 1.5;
            totalbetCounter.innerHTML = "$" + count.toFixed();

            coin = coin + 0.10;
            coinboxCounter.innerHTML = "$" + coin.toFixed(2);

            PlaySound();
        }
        else if(count < 4.5){
            count = count + 1.5;
            totalbetCounter.innerHTML = "$" + count.toFixed(1);

            coin = coin + 0.10;
            coinboxCounter.innerHTML = "$" + coin.toFixed(2);

            btn_plus.classList.add('btn_plus_disable');
            btn_plus.classList.remove('btn_plus');
        }
    }
    
    function Minus(){
        if(count > 3){
            count = count - 1.5;
            totalbetCounter.innerHTML = "$" + count.toFixed();

            coin = coin - 0.10;
            coinboxCounter.innerHTML = "$" + coin.toFixed(2);

            btn_plus.classList.remove('btn_plus_disable');
            btn_plus.classList.add('btn_plus');

            PlaySound();
        }
        else if(count > 1.5){
            count = count - 1.5;
            totalbetCounter.innerHTML = "$" + count.toFixed(2);

            coin = coin - 0.10;
            coinboxCounter.innerHTML = "$" + coin.toFixed(2);

            PlaySound();
        }
        else if(count > 1.2){
            count = count - 0.30;
            totalbetCounter.innerHTML = "$" + count.toFixed(2);

            coin = coin - 0.02;
            coinboxCounter.innerHTML = "$" + coin.toFixed(2);

            PlaySound();
        }
        else if(count > 0.75){
            count = count - 0.45;
            totalbetCounter.innerHTML = "$" + count.toFixed(2);

            coin = coin - 0.03;
            coinboxCounter.innerHTML = "$" + coin.toFixed(2);

            PlaySound();
        }
        else if(count > 0.15){
            count = count - 0.15;
            totalbetCounter.innerHTML = "$" + count.toFixed(2);

            coin = coin - 0.01;
            coinboxCounter.innerHTML = "$" + coin.toFixed(2);

            PlaySound();
        }
        else if(count < 0.30){
            btn_minus.classList.add('btn_minus_disable');
            btn_minus.classList.remove('btn_minus');
        }
    }



    //LEFT/CLOSE/RIGHT BUTTONS DISABLE

var screen = 1;    
var btn_left = document.getElementById('btn_left');
var btn_close = document.getElementById('btn_minus');
var btn_right = document.getElementById('btn_right');
    btn_left.classList.add('btn_left_disable');  
    btn_left.classList.remove('btn_left');
        
    function Left(){

        if(screen === 1){ 
            btn_left.classList.add('btn_left_disable');  
            btn_left.classList.remove('btn_left');
        }
        else if(screen <= 4){
            screen = screen - 1;
            btn_left.classList.remove('btn_left_disable');  
            btn_left.classList.add('btn_left');
            btn_right.classList.remove('btn_right_disable');  
            btn_right.classList.add('btn_right');
            PlaySound();
        }
    }
    function Right(){

        if(screen === 4){ 
            btn_right.classList.add('btn_right_disable');  
            btn_right.classList.remove('btn_right');
        }
        else if(screen >= 1){
            screen = screen + 1;  
            btn_left.classList.remove('btn_left_disable');  
            btn_left.classList.add('btn_left');
            PlaySound();
            }
    }



    //FEATURE CLICK + DISABLE

var sign = document.getElementById('sign');
var auto_box = document.getElementById('auto_box');
var stop_box = document.getElementById('stop_box');

var btn_info = document.getElementById('btn_info');
var btn_info_disable = document.getElementById('btn_info_disable');

var checkbox = document.getElementById('checkbox');
var checkboxInput = document.getElementById('checkboxInput');
var btn_info_disable = document.getElementById('btn_info_disable');

var span = document.getElementById('span');
var span_disable = document.getElementById('span_disable');

var spinner = document.getElementById('spinner');

var btn_spin = document.getElementById('btn_spin');

function showAgain(){
    spinner.classList.remove('spinner_stop_once');
    spinner.classList.add('spinner');
}

function spinnerClick(){
    spinner.classList.remove('spinner');
    spinner.classList.add('spinner_stop_once');

    setTimeout(showAgain, 2000);
}

function featureClick(){
    
    btn_spin.setAttribute("onclick", "");
    
    auto_box.classList.remove('auto_box');
    stop_box.classList.add('stop_box');
    sign.classList.add('sign');
    stop_box_red.classList.remove('stop_box_red');
    timer.classList.remove('timer');
    timer.classList.remove('timerStep');
    timer.innerHTML = "";

    spinner.classList.remove('spinner');
    spinner.classList.add('spinner_stop');

    btn_info.classList.remove('btn_info');
    btn_info_disable.classList.add('btn_info_disable');

    btn_minus.classList.remove('btn_minus');
    btn_minus.classList.add('btn_minus_disable');

    btn_plus.classList.remove('btn_plus');
    btn_plus.classList.add('btn_plus_disable');

    if(checkboxInput.checked){
        span.classList.remove('span');
        span.classList.add('span_disable_pos');

        checkbox.classList.remove('checkbox');
        checkbox.classList.add('checkbox_dis');
    }
    else{
        span.classList.remove('span');
        span.classList.add('span_disable');

        checkbox.classList.remove('checkbox');
        checkbox.classList.add('checkbox_dis');
    }

}

function stopClick(){

    btn_spin.setAttribute("onclick", "PlaySound()");

    spinner.classList.remove('spinner_stop');
    spinner.classList.add('spinner');
    
    stop_box.classList.remove('stop_box');
    sign.classList.remove('sign');
    auto_box.classList.add('auto_box');

    btn_info.classList.add('btn_info');
    btn_info_disable.classList.remove('btn_info_disable');

    btn_minus.classList.remove('btn_minus_disable');
    btn_minus.classList.add('btn_minus');

    btn_plus.classList.add('btn_plus');
    btn_plus.classList.remove('btn_plus_disable');

    if(checkboxInput.checked){
        span.classList.add('span');
        span.classList.remove('span_disable_pos');

        checkbox.classList.remove('checkbox_dis');
        checkbox.classList.add('checkbox');
    }
    else{
        span.classList.add('span');
        span.classList.remove('span_disable');

        checkbox.classList.remove('checkbox_dis');
        checkbox.classList.add('checkbox');
    }
}


var li_25 = document.getElementById('li_25');
var li_20 = document.getElementById('li_20');
var li_15 = document.getElementById('li_15');
var li_10 = document.getElementById('li_10');
var li_5 = document.getElementById('li_5');


var auto_box = document.getElementById('auto_box');
var stop_box_red = document.getElementById('stop_box_red');

var timer = document.getElementById('timer');
var timerCounter = document.getElementById('timerCounter');
timer.classList.remove('timer');


function stopredClick(){

    btn_spin.setAttribute("onclick", "PlaySound()");

    stop_box_red.classList.remove('stop_box_red');
    timer.classList.remove('timer');
    timer.classList.remove('timerStep');
    auto_box.classList.add('auto_box');
    timer.classList.add('timerNone');
    timer.innerHTML = "";

    spinner.classList.remove('spinner_stop');
    spinner.classList.add('spinner');
    
    stop_box.classList.remove('stop_box');
    sign.classList.remove('sign');
    auto_box.classList.add('auto_box');

    btn_info.classList.add('btn_info');
    btn_info_disable.classList.remove('btn_info_disable');

    btn_minus.classList.remove('btn_minus_disable');
    btn_minus.classList.add('btn_minus');

    btn_plus.classList.add('btn_plus');
    btn_plus.classList.remove('btn_plus_disable');

    if(checkboxInput.checked){
        span.classList.add('span');
        span.classList.remove('span_disable_pos');

        checkbox.classList.remove('checkbox_dis');
        checkbox.classList.add('checkbox');
    }
    else{
        span.classList.add('span');
        span.classList.remove('span_disable');

        checkbox.classList.remove('checkbox_dis');
        checkbox.classList.add('checkbox');
    }
}

function spin25Click(){   

    btn_spin.setAttribute("onclick", "");

    auto_box.classList.remove('auto_box');
    stop_box_red.classList.add('stop_box_red');
    timer.classList.add('timer');
    timer.innerHTML = 25;
    stop_box.classList.remove('stop_box');
    sign.classList.remove('sign');
    timer.classList.remove('timerStep');

    spinner.classList.remove('spinner');
    spinner.classList.add('spinner_stop');

    btn_info.classList.remove('btn_info');
    btn_info_disable.classList.add('btn_info_disable');

    btn_minus.classList.remove('btn_minus');
    btn_minus.classList.add('btn_minus_disable');

    btn_plus.classList.remove('btn_plus');
    btn_plus.classList.add('btn_plus_disable');

    if(checkboxInput.checked){
        span.classList.remove('span');
        span.classList.add('span_disable_pos');

        checkbox.classList.remove('checkbox');
        checkbox.classList.add('checkbox_dis');
    }
    else{
        span.classList.remove('span');
        span.classList.add('span_disable');

        checkbox.classList.remove('checkbox');
        checkbox.classList.add('checkbox_dis');
    }
}
function spin20Click(){   
    
    btn_spin.setAttribute("onclick", "");

    auto_box.classList.remove('auto_box');
    stop_box_red.classList.add('stop_box_red');
    timer.classList.add('timer');
    timer.innerHTML = 20;
    stop_box.classList.remove('stop_box');
    sign.classList.remove('sign');
    timer.classList.remove('timerStep');

    spinner.classList.remove('spinner');
    spinner.classList.add('spinner_stop');

    btn_info.classList.remove('btn_info');
    btn_info_disable.classList.add('btn_info_disable');

    btn_minus.classList.remove('btn_minus');
    btn_minus.classList.add('btn_minus_disable');

    btn_plus.classList.remove('btn_plus');
    btn_plus.classList.add('btn_plus_disable');

    if(checkboxInput.checked){
        span.classList.remove('span');
        span.classList.add('span_disable_pos');

        checkbox.classList.remove('checkbox');
        checkbox.classList.add('checkbox_dis');
    }
    else{
        span.classList.remove('span');
        span.classList.add('span_disable');

        checkbox.classList.remove('checkbox');
        checkbox.classList.add('checkbox_dis');
    }
}
function spin15Click(){  
    
    btn_spin.setAttribute("onclick", "");

    auto_box.classList.remove('auto_box');
    stop_box_red.classList.add('stop_box_red');
    timer.classList.add('timer');
    timer.innerHTML = 15;
    stop_box.classList.remove('stop_box');
    sign.classList.remove('sign');
    timer.classList.remove('timerStep');

    spinner.classList.remove('spinner');
    spinner.classList.add('spinner_stop');

    btn_info.classList.remove('btn_info');
    btn_info_disable.classList.add('btn_info_disable');

    btn_minus.classList.remove('btn_minus');
    btn_minus.classList.add('btn_minus_disable');

    btn_plus.classList.remove('btn_plus');
    btn_plus.classList.add('btn_plus_disable');

    if(checkboxInput.checked){
        span.classList.remove('span');
        span.classList.add('span_disable_pos');

        checkbox.classList.remove('checkbox');
        checkbox.classList.add('checkbox_dis');
    }
    else{
        span.classList.remove('span');
        span.classList.add('span_disable');

        checkbox.classList.remove('checkbox');
        checkbox.classList.add('checkbox_dis');
    }
}
function spin10Click(){   
    
    btn_spin.setAttribute("onclick", "");

    auto_box.classList.remove('auto_box');
    stop_box_red.classList.add('stop_box_red');
    timer.classList.add('timer');
    timer.innerHTML = 10;
    stop_box.classList.remove('stop_box');
    sign.classList.remove('sign');
    timer.classList.remove('timerStep');

    spinner.classList.remove('spinner');
    spinner.classList.add('spinner_stop');

    btn_info.classList.remove('btn_info');
    btn_info_disable.classList.add('btn_info_disable');

    btn_minus.classList.remove('btn_minus');
    btn_minus.classList.add('btn_minus_disable');

    btn_plus.classList.remove('btn_plus');
    btn_plus.classList.add('btn_plus_disable');

    if(checkboxInput.checked){
        span.classList.remove('span');
        span.classList.add('span_disable_pos');

        checkbox.classList.remove('checkbox');
        checkbox.classList.add('checkbox_dis');
    }
    else{
        span.classList.remove('span');
        span.classList.add('span_disable');

        checkbox.classList.remove('checkbox');
        checkbox.classList.add('checkbox_dis');
    }
}
function spin5Click(){    

    btn_spin.setAttribute("onclick", "");

    auto_box.classList.remove('auto_box');
    stop_box_red.classList.add('stop_box_red');
    timer.classList.add('timerStep');
    timer.innerHTML = 5;
    stop_box.classList.remove('stop_box');
    sign.classList.remove('sign');

    spinner.classList.remove('spinner');
    spinner.classList.add('spinner_stop');

    btn_info.classList.remove('btn_info');
    btn_info_disable.classList.add('btn_info_disable');

    btn_minus.classList.remove('btn_minus');
    btn_minus.classList.add('btn_minus_disable');

    btn_plus.classList.remove('btn_plus');
    btn_plus.classList.add('btn_plus_disable');

    if(checkboxInput.checked){
        span.classList.remove('span');
        span.classList.add('span_disable_pos');

        checkbox.classList.remove('checkbox');
        checkbox.classList.add('checkbox_dis');
    }
    else{
        span.classList.remove('span');
        span.classList.add('span_disable');

        checkbox.classList.remove('checkbox');
        checkbox.classList.add('checkbox_dis');
    }
}









// function timer1(sec){
//     var second = sec;
//     if(second<=9){
//         timer.classList.remove('timer');
//         timer.classList.add('timerStep');
//     }
//     if(second==0){
//         return false;
//     }
//     timer.innerHTML = second;
//     second--;
//     setTimeout("timer1()", 1000);
// }

// function timer2(sec) {
//     if(sec <= 10){
//             timer.classList.remove('timer');
//             timer.classList.add('timerStep');
//         }
//     sec--
//     timer.innerHTML = sec;
//     if (sec){
//       setInterval(timer2.bind(0, sec), 1000);
//     } 
//   }

// window.onload = function getNumberOfLi()
// {
//     spinselect_box_ul = document.getElementById('spinselect_box_ul');
//     items = spinselect_box_ul.getElementsByTagName('li');
    
//     for(i = 0; i < items.length; i++){
//         items[i].i = i;
//         items[i].onclick = function(){
//             alert(this.i)
//         }
//     }
// }


// function Show() {
//     var block = document.getElementsByClassName('spinselect_box'),
//         block_height = parseInt(getCSS(block, 'height')),
//         cur_block_height = 0,
//     function getCSS(node, prop) {
//         return getComputedStyle(node).getPropertyValue(prop);
//     }
//     onmousemove = function() {
//         block.style.height = '0px';
//         block.style.display = 'block';
//         var interval = window.setInterval(function() {
//             ++ cur_block_height;
//             block.style.height = cur_block_height + 'px';
//             if (cur_block_height >= block_height) {
//                 window.clearInterval(interval);
//             }
//         }, 10);
//     };
// }

// var block = document.querySelector('.panel');

// block.addEventListener('mouseover', function () {
//     block.classList.add('color1');
// });
// block.addEventListener('mouseleave', function () {
//     block.classList.remove('color1');
// });