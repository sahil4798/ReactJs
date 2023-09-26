//Primitives --> Numnber String Bollean
//Non-primitives or Complex --> Array Object
//Function types , Parameters

//Primitives
let age : number =21;
let userName : string;
userName = "sahil"  
let isPass : boolean;
isPass = true;
// let score : null;
// score =10;


//Non-Primitives
let hobbies : string[];
hobbies : ["Anime" , "Gym" , "Music"   , 90];

//type aliases
type a = {name : string , age : number}

// let person : {name : string , age : number}
let person : a;
// person = { name : "Sahil" , age :21}
// person = { DOB :"13:11:2001"}

let people  : {name : string , age : number }[];
people = [{name : "sahil" , age: 21} , {name: "Verma" , age: 28}]


//Inference
let nameOfAdmin  = "Sahil";
// nameOfAdmin = 90;  //throw an error

//Union of Types
let course : string | number = "React-Javascript"
course = 12345;


//function and type
function add(a :number , b :number):number{
return a+b ;
}

function printValue(value :any){
console.log(value);
}


//Generics
function addInBegining <T>(array :T[] , value:T){
  const res  = [value , ...array]
  return res
}

const demoArray = [1 , 2, 3];
const updatedDemoArray = addInBegining(demoArray  , 0 );

// const words= updatedDemoArray[0].split(" "); // throw error