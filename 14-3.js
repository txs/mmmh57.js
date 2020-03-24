let a = setInterval(function(){
    console.log("Hello"); 
}, 300);
//清掉 Interval
setTimeout(function(){
    console.log("Done!");
    
    clearInterval(a)  
},2000)