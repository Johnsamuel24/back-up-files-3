
let a = document.createElement('div');

a.setAttribute("class","container-fluid");
a.setAttribute("style","margin-top:250px;padding:10px;");

let a1 = document.createElement("div");

a1.setAttribute("style","text-align:center;font-family:Times New Roman;font-size:200px;background: -webkit-linear-gradient(#9966ff, #00ffcc);-webkit-background-clip: text;-webkit-text-fill-color: transparent;");

a1.innerText="1";

let a2 = document.createElement("div");

a2.setAttribute("style","text-align:center;font-family:Times New Roman;font-size:200px;background: -webkit-linear-gradient(#9966ff, #00ffcc);-webkit-background-clip: text;-webkit-text-fill-color: transparent;");

a2.innerText="2";

let a3 = document.createElement("div");

a3.setAttribute("style","text-align:center;font-family:Times New Roman;font-size:200px;background: -webkit-linear-gradient(#9966ff, #00ffcc);-webkit-background-clip: text;-webkit-text-fill-color: transparent;");

a3.innerText="3";

let a4 = document.createElement("div");

a4.setAttribute("style","text-align:center;font-family:Times New Roman;font-size:200px;background: -webkit-linear-gradient(#9966ff, #00ffcc);-webkit-background-clip: text;-webkit-text-fill-color: transparent;");

a4.innerText="4";

let a5 = document.createElement("div");

a5.setAttribute("style","text-align:center;font-family:Times New Roman;font-size:200px;background: -webkit-linear-gradient(#9966ff, #00ffcc);-webkit-background-clip: text;-webkit-text-fill-color: transparent;");

a5.innerText="5";

let a6 = document.createElement("div");

a6.setAttribute("style","text-align:center;font-family:Times New Roman;font-size:200px;background: -webkit-linear-gradient(#9966ff, #00ffcc);-webkit-background-clip: text;-webkit-text-fill-color: transparent;");

a6.innerText="6";

let a7 = document.createElement("div");

a7.setAttribute("style","text-align:center;font-family:Times New Roman;font-size:200px;background: -webkit-linear-gradient(#9966ff, #00ffcc);-webkit-background-clip: text;-webkit-text-fill-color: transparent;");

a7.innerText="7";

let a8 = document.createElement("div");

a8.setAttribute("style","text-align:center;font-family:Times New Roman;font-size:200px;background: -webkit-linear-gradient(#9966ff, #00ffcc);-webkit-background-clip: text;-webkit-text-fill-color: transparent;");

a8.innerText="8";

let a9 = document.createElement("div");

a9.setAttribute("style","text-align:center;font-family:Times New Roman;font-size:200px;background: -webkit-linear-gradient(#9966ff, #00ffcc);-webkit-background-clip: text;-webkit-text-fill-color: transparent;");

a9.innerText="9";

let a10 = document.createElement("div");

a10.setAttribute("style","text-align:center;font-family:Times New Roman;font-size:200px;background: -webkit-linear-gradient(#9966ff, #00ffcc);-webkit-background-clip: text;-webkit-text-fill-color: transparent;");

a10.innerText="10";

let a11 = document.createElement("div");

a11.setAttribute("style","text-align:center;font-family:Times New Roman;font-size:200px;background: -webkit-linear-gradient(#ff99cc,#66ffcc);-webkit-background-clip: text;-webkit-text-fill-color: transparent;");

a11.innerText="Happy Independence Day";

document.body.style.backgroundImage="url('img1.jpg')";
document.body.style.backgroundSize="cover";
document.body.style.backgroundPosition="center";
document.body.style.backgroundRepeat="no-repeat";
document.body.style.backgroundAttachment="fixed";

let callback1 = (x) =>{a.append(x);
    document.body.append(a);}


let callback = (x,y) =>{y.parentNode.replaceChild(x,y)
document.body.append(a);}




let y = (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,callback,callback1) => {

setTimeout(() => {callback1(a10);
    setTimeout(() =>{callback(a9,a10);
        setTimeout(() =>{callback(a8,a9);
            setTimeout(() =>{callback(a7,a8);
                setTimeout(() =>{callback(a6,a7);
                    setTimeout(() =>{callback(a5,a6);
                        setTimeout(() =>{callback(a4,a5);
                            setTimeout(() =>{callback(a3,a4);
                                setTimeout(() =>{callback(a2,a3);
                                    setTimeout(() =>{callback(a1,a2);
                                        setTimeout(() =>{callback(a11,a1);
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000);

}



y(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,callback,callback1);