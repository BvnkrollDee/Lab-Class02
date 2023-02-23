function Question() {
    let array = ["how old am I?", "how much college did I complete?", "What am I working on becoming?", "What are two of my hobbies?", "what is one of the retail jobs I worked?"]
    console.log(array.length);

let usersAge = prompt(array[0])
if(usersAge === "22"){ 
    alert("You're Correct!")
}
else{ 
    alert("incorrect")
} 
let userCollegeLevel = prompt(array[1])
if(userCollegeLevel === "some"){ 
    alert("You're Correct!")
}
else{ 
    alert("incorrect")
} 
let userGoal = prompt(array[2])
if(userGoal === "a software developer"){
    alert("You're Correct!")
}
else{
    alert("incorrect")
}
let userHobby = prompt(array[3])
if(userHobby === "exercising and playing video games"){
    alert("You're Correct!")
}
else{
    alert("incorrect")
}
let userWorkHistory = prompt(array[4])
if(userWorkHistory === "Bed Bath and Beyond" || userWorkHistory === "JCPenney" || userWorkHistory === "Skechers"){
    alert("You're Correct!")
}
else{
    alert("incorrect")
}


//     for (let index = 0; index <= array.length; index++) {
//         const element = array[index];
// console.log("this is my" + element)
//    return(alert(array[index]));
//  } 
    // long as index is less than array . length it will continue to iterate through my array
} 
// Question();

//add comments inline to explain what your code is doing. For example if a function is craring a new html element then make a comment that says that.