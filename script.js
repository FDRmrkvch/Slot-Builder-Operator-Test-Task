function PlaySound() {
    var sound = document.getElementById("audio");
    sound.play()
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





    var a = document.getElementById('auto_box');
    var b = document.getElementById('spinselect_box');
    a.addEventListener('mouseover', function () {
        // a.style.background = 'red';
        b.classList.add('spinselect_box_show');
    });
    a.addEventListener('mouseleave', function () {
        b.classList.remove('spinselect_box_show');
        // a.style.background = 'yellow';
    });
    b.addEventListener('mouseover', function () {
        // a.style.background = 'red';
        b.classList.add('spinselect_box_show');
    });
    b.addEventListener('mouseleave', function () {
        b.classList.remove('spinselect_box_show');
        // a.style.background = 'yellow';
    });