// Basic 1

x = []
console.log(x);
x.push("coding");
console.log(x);
x.push("dojo");
console.log(x);
x.push("rocks");
console.log(x);
x.pop();
console.log(x + "<-------<<<<" + " Is the final value");

// Basic 2

const y = [];
console.log(y);
y.push(88);
console.log(y) //no error...the push was allowed

// Basic 3
    
let z = [9, 10, 6, 5, -1, 20, 13, 2]

    for(let i = 0; i < z.length; i++ ){
        console.log(z[i]);
    }

// Basic 4

let names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
        for(let i = 0; i < names.length; i++ ){
            if(names[i].length ===5){
                console.log(names[i]);
            }
        }

function yell(str){
    return str.toUpperCase();
    console.log(yell(str));
}
console.log(yell("beat it!"));


