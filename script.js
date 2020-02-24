function PlaySound() {
    var sound = document.getElementById("audio");
    sound.play()
}

function InfoButtonClick(){
    var link = document.getElementById("style");
    link.setAttribute("href", "infoPanel.css");
    // console.log("cllicckk")
}

function CloseButtonClick(){
    var link = document.getElementById("style");
    link.setAttribute("href", "mainPanel.css");
    // console.log("cllicckk")
}

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
    // var totalbetCounter = document.getElementById("totalbetCounter");
    //     totalbetCounter.innerHTML = "$" + count.toFixed(2);
    // var coin = 0.10;
    // // var coin = 0.01;
    // var coinboxCounter = document.getElementById("coinboxCounter");
    //     coinboxCounter.innerHTML = "$" + coin.toFixed(2);
    
    var btn_left = document.getElementById('btn_left');
    var btn_close = document.getElementById('btn_minus');
    var btn_right = document.getElementById('btn_right');

    btn_left.classList.add('btn_left_disable');  
    btn_left.classList.remove('btn_left');
        
        function Left(){
            console.log(screen)
            if(screen === 1){ 
                btn_left.classList.add('btn_left_disable');  
                btn_left.classList.remove('btn_left');
                // PlaySound();
            }
            // else if(screen === 2){
            //     screen = screen - 1;
            //     btn_left.classList.remove('btn_left_disable');  
            //     btn_left.classList.add('btn_left');
            //     PlaySound();
            // }
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
            console.log(screen)
            if(screen === 4){ 
                btn_right.classList.add('btn_right_disable');  
                btn_right.classList.remove('btn_right');
                // PlaySound();
            }
            else if(screen >= 1){
                screen = screen + 1;  
                btn_left.classList.remove('btn_left_disable');  
                btn_left.classList.add('btn_left');
                PlaySound();
            }
        }