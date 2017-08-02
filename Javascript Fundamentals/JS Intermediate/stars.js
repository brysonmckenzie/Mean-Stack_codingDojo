// Problem 1       

function starString(num){
let star = ""
    for(let i = 0; i<num; i++){
        star += "*"
    }
    return star; 
}
// let stars = starString(8)
// console.log(stars)

// Problem 2   

function drawStars(arr){
star = []
new_string = ""

    for(let i = 0; i<arr.length; i++){
        if(typeof arr[i] === 'number'){
            star.push(starString(arr[i]))
            console.log(star[i])
        }
        else if(typeof arr[i] === 'string'){
            new_str =""
            for(let j = 0; j < arr[i].length; j++){
                new_str += arr[i][0].toLowerCase();
            }
            star.push(new_str);
        }
    }  
    return star
    
}
let y = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"];
let z = [4, 6, 1, 3, 5, 7, 25]

console.log(drawStars(y));
console.log(drawStars(z));

