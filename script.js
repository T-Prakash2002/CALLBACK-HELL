
let display=document.getElementById('count');

/*
setTimeout(()=>{
    display.innerText='10';
    setTimeout(()=>{
        display.innerText='9';
        setTimeout(()=>{
            display.innerText='8';
            setTimeout(()=>{
                display.innerText='7';
                setTimeout(()=>{
                    display.innerText='6';
                    setTimeout(()=>{
                        display.innerText='5';
                        setTimeout(()=>{
                            display.innerText='4';
                            setTimeout(()=>{
                                display.innerText='3';
                                setTimeout(()=>{
                                    display.innerText='2';
                                    setTimeout(()=>{
                                        display.innerText='1';
                                        setTimeout(()=>{
                                            display.innerText=`Happy Independence Day!!`;
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
},1000)

*/

let firsttask=(callback)=>{
    setTimeout(()=>{
        display.innerText='10';
        callback();
    },1000)
}
let secondtask=(callback)=>{
    setTimeout(()=>{
        display.innerText='9';
        callback();
    },1000)
}

let thirdtask=(callback)=>{
    setTimeout(()=>{
        display.innerText='8';
        callback();
    },1000)
}
let fourthtask=(callback)=>{
    setTimeout(()=>{
        display.innerText='7';
        callback();
    },1000)
}

let fifthtask=(callback)=>{
    setTimeout(()=>{
        display.innerText='6';
        callback();
    },1000)
}

let sixthtask=(callback)=>{
    setTimeout(()=>{
        display.innerText='5';
        callback();
    },1000)
}

let seventhtask=(callback)=>{
    setTimeout(()=>{
        display.innerText='4';
        callback();
    },1000)
}

let eighthtask=(callback)=>{
    setTimeout(()=>{
        display.innerText='3';
        callback();
    },1000)
}

let ninthtask=(callback)=>{
    setTimeout(()=>{
        display.innerText='2';
        callback();
    },1000)
}

let tenthtask=(callback)=>{
    setTimeout(()=>{
        display.innerText='1';
        callback();
    },1000)
}










firsttask(function(){
    secondtask(function(){
        thirdtask(function(){
            fourthtask(function(){
                fifthtask(function(){
                    sixthtask(function(){
                        seventhtask(function(){
                            eighthtask(function(){
                                ninthtask(function(){
                                    tenthtask(function(){
                                        setTimeout(()=>display.innerText=`Happy Independence Day!!`,1000);
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
