const repeat =(str,num)=>{
   let c=0
   let s=""
    while(c<num){
       c++
       s=s+ str
    }
    return s
}

console.log(repeat('hehehe', 0))