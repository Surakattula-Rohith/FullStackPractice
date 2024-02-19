console.log("Hello") ;
let age : number = 123_456_789 ;

let n; // type is any
n = 1 ;
n = "hi" ;

let num : number[] = [1,2,4] ;
num.forEach(n => n.toString()) ;

//tuple
let user : [number,string] = [1,"Rohith"];
console.log(user[0] + " " + user[1]) ;

//enums
enum size{Small=1 , Medium , Large} 
let mySize:size = size.Medium ;
console.log(mySize) ;

//functions
function cal(a:number, b ?:number):number{ // ?: optional
    console.log(b) ;
    if(typeof b == "number"){
        return a*b ;
    }
    return a*2;
}
console.log(10,20) ;
console.log(100) ;

//Objects
let emp :Employee={
    id :  0,
    name:"Rohith"
};

//Type Alias
type Employee ={
    readonly id:number,
    name : string ;
}

//Intersection TYpes
type Draggalbe= {
    drag:() => void
}
type Resizeable={
    resize:() => void
}
type UIWidget = Draggalbe & Resizeable ;
let textBox : UIWidget ={
    drag : () => {}, 
    resize : () => {}
}

//Literal Type
type Metric = 'cm' | 'inch' ;