var body = document.querySelector('body');

body.addEventListener('mousemove',(event)=>{
    var x = event.offsetX;
    var y = event.offsetY;
    var ele = document.createElement('span');
    var size = Math.random()*100;
    ele.style.left = x + 'px';
    ele.style.top = y + 'px';
    ele.style.height = size + 'px';
    ele.style.width = size + 'px';
    body.appendChild(ele);
    setTimeout(()=>{
        ele.remove();
    },2000)
});

body.addEventListener('touchmove',function(){
    var x = event.touches[0].pageX;
    var y = event.touches[0].pageY;
    console.log(x + "  " + y);
    var ele = document.createElement('span');
    var size = Math.random()*100;
    ele.style.left = x + 'px';
    ele.style.top = y + 'px';
    ele.style.height = size + 'px';
    ele.style.width = size + 'px';
    body.appendChild(ele);
    setTimeout(()=>{
        ele.remove();
    },2000)
});
