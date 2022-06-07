let i = 0;
let hexcolor = " ";

const changeColor = () =>{
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
const changeIndex = () => {
    propertyValue.innerHTML = hexcolor.slice(0,7);
}
const coppyToClip = () => {
    let coppyText = propertyValue.innerHTML;
    navigator.clipboard.writeText(coppyText).then(() => {       
        alert("Đã coppy màu " + coppyText + " vào clipboard!");
    });
}

const body = document.getElementById("body");
const button = document.getElementById("btn2");
const propertyValue = document.getElementById("propertyValue");
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");

const generateImage = () => {
    const direction = Math.round(Math.random() * 360); 
    const r1 = Math.round(Math.random() * 255); 
    const g1 = Math.round(Math.random() * 255); 
    const b1 = Math.round(Math.random() * 255);
  
    const a1 = Math.round(Math.random() * 10) / 10; 
  
    const r2 = Math.round(Math.random() * 255);
    const g2 = Math.round(Math.random() * 255);
    const b2 = Math.round(Math.random() * 255);
  
    const a2 = Math.round(Math.random() * 10) / 10;
  
    const background = (body.style.background = `linear-gradient(${direction}deg, rgba(${r1},${g1},${b1},${a1}), rgba(${r2},${g2},${b2},${a2}))`);
    propertyValue.textContent = `${background};`;
  };

const setGradient = () => {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  };

const coppyToclip2 =() => {
    let coppyText2 = propertyValue.textContent;
    navigator.clipboard.writeText(coppyText2).then(() => {       
        alert("Đã coppy màu " + coppyText2 + " vào clipboard!");
    });
  }

btn.addEventListener("click", changeColor)
btn.addEventListener("click", changeIndex)
btn.addEventListener("click", coppyToClip)

btn2.addEventListener("click", generateImage);
btn2.addEventListener("click", coppyToclip2);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
