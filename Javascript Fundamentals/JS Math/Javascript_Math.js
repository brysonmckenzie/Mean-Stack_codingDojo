// Math 1

function zero_negativity(arr){
    for(let i = 0; i< arr.length; i++){
        if(arr[i] < 0){
            return false;
        }
    }
    return true;
}

// Math 2

function is_even(num){
    if(num % 2 === 0)
        return true;
    else
        {
        return false;
    }
}

// Math 3

function how_many_even(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(is_even(arr[i])){
            sum += 1;
        }
    }
    if(sum > 0){
        return "There are " + sum + " even numbers."
    }
    else{
        return "There's no even numbers."
    }
    
}

// Math 4
function create_dummy_array(n){
    let arr = [];
    for(let i = 0; i<num; i++){
        arr.push(Math.floor(Math.random()*10));
    }
    return arr;
}

// Math 5
function random_choice(arr){
    let index = Math.floor(Math.random()*arr.length);
    return arr[index];
}


let test1 = zero_negativity([1,2,-5,3,-8,2,])
console.log(test1)
let test2 = zero_negativity([1,2,5,3,8,2,])
console.log(test2)

let test3 = is_even(1)
console.log(test3)
let test4 = is_even(12)
console.log(test4)

let test5 = how_many_even([1,2,3,4,5,6])
console.log(test5)
let test6 = how_many_even([1,3,5,7,9])
console.log(test6)

