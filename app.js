
function Alert() {

    alert("Hello there I'm using JavaScript");

}

Alert();


const Name = function (nameArr) {
    return nameArr.length;
}

let set = Name(["Shubho", "Ashit", "Gate"]);

console.log(set);




function sum(numArr) {

    let total = 0;

    for (let i=0; i <numArr.length; i++) 
    
    {
        total += numArr[i];
     }
    
    return total;
}

console.log(sum([1,2,3,4,5,6,7,8]));




