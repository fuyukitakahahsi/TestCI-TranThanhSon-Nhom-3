let i = 0;
let hexcolor = " ";


let changeColor = () =>{
    let body = document.querySelector("body");
    let r = Math.random()*256;
    let g = Math.random()*256;
    let b = Math.random()*256;
    body.style.backgroundColor = `rgb(${r},${g},${b})`;
    hexcolor = rgbToHex(r,g,b);
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
let changeIndex = () =>{
    let btn = document.querySelector('#btn');
    btn.innerHTML = hexcolor.slice(0,7);
}

function coppyToClip(){
    let coppyText = document.querySelector('#btn').innerHTML;
    navigator.clipboard.writeText(coppyText).then(() => {       
        alert("Đã coppy màu " + coppyText + " vào clipboard!");
    });
}

btn.addEventListener("click", () =>{
    changeColor();
})
btn.addEventListener("click", () =>{
    changeIndex();
})
btn.addEventListener("click", () =>{
    coppyToClip();
})

