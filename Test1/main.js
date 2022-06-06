let a = prompt("Nhập vào số khởi đầu a: ");
let b = prompt("Nhập vào số kết thúc b: ");
let result = []
a = parseInt(a);
b = parseInt(b);

function checkscp(a)
{ 
    if (Math.sqrt(a) % 1 == 0){
        return true;
    }
    else return false;
}

function lietkescp(a,b){
    for( let i=a;i<=b;i++){
        if(checkscp(i)){
            result.push(i);
            document.querySelector("#result").innerHTML = result;
        }
    }

}
lietkescp(a,b);