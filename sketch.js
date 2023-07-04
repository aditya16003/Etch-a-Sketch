const nav = document.querySelector('.nav');
const grid = document.querySelector('#grid');

const eraser = document.getElementById('eraser');
const rainbow = document.getElementById('rainbow');
const clear = document.getElementById('clear');
var slider = document.getElementById('myRange');
var colorPicker = document.getElementById('colorPicker');
var output = document.getElementById('demo');
output.innerText = slider.value;

slider.oninput = function(){
    output.innerText = this.value;
}

function get_rand_color()
{
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}




  document.addEventListener('DOMContentLoaded', function() {
    // Code for creating grid_box elements and attaching event listener
    slider.addEventListener('change', function(){
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
          }
    
        for(let i=0; i<slider.value*slider.value; i++){
            let w = 100/(slider.value);
            var grid_box = document.createElement('div');
            grid_box.classList.add('grid-box');
            grid_box.style.width = `${w}%`;
            
            grid.appendChild(grid_box);
    
            (function(box) {
                box.addEventListener('mouseenter', function() {
                    var color;
                    if(eraser.classList.contains('selected')) color = "white";
                    else if(rainbow.classList.contains('selected')){
                        color = get_rand_color();
                    }
                    else{
                        color = colorPicker.value;
                    }
                    this.style.background = color;
                });
              })(grid_box);
        }

        var gridBoxes = grid.childNodes;

        clear.addEventListener('click', function(){
            gridBoxes.forEach(function(box){
                box.style.background = 'white';
            })
        })
    })

    slider.dispatchEvent(new Event('change'));
  });

var btn = document.getElementsByClassName('btn');

var addSelectClass = function(){
    removeSelectClass();
    this.classList.add('selected');
}

var removeSelectClass = function(){
    for(var i=0; i<btn.length; i++){
        btn[i].classList.remove('selected');
    }
}

for (var i =0; i < btn.length; i++) {
    btn[i].addEventListener("click",addSelectClass);
}


