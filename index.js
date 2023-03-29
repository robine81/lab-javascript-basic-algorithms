// Iteration 1: Names and Input
let hacker1 = "ABobbie"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Bill"
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}

else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

else {
    console.log(` Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// // Iteration 3: Loops
let driverInCapitals = ""

for(let i=0;i<hacker1.length;i++) {
    driverInCapitals += (hacker1[i].toUpperCase())
}
console.log(driverInCapitals)

let driverReverse = ""

for(let i=hacker1.length-1; i>=0; i--)
{
    driverReverse += hacker1[i]
}

console.log(driverReverse)

/* Option 1 for exercise 3.1:
let compareValue = hacker1.localeCompare(hacker2)
switch (compareValue) {
    case -1: 
    console.log("The driver's name goes first.")
    break;
    case 1: 
    console.log("Yo, the navigator goes first, definitely.")
    break;
    case 0: 
    console.log("What?! You both have the same name?")
    break;
    default: 
    console.log("Something went wrong")
} */

//Option 2 for exercise 3.3:

if(hacker1 === hacker2) {
    console.log("What?! You both have the same name?")
} 
else { 
    for(let i=0;i<hacker1.length;i++){    
        if(hacker1[i]<hacker2[i])
        {
            console.log("The driver's name goes first.") 
            break;
        }
        else if(hacker1[i]>hacker2[i]){
        console.log("Yo, the navigator goes first")  
        break; 
        } 
    }
}

//Bonus 1
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan sed ante condimentum rutrum. In interdum fringilla dictum. Nunc hendrerit arcu id dui porta, malesuada efficitur quam gravida. Sed sagittis nunc ac elit cursus, ac porttitor mi ultricies. Integer finibus lobortis orci a molestie. Aliquam feugiat ante nunc, at egestas lacus semper ut. Ut consectetur porttitor faucibus. Vestibulum condimentum ac libero et finibus. Quisque pulvinar odio eget mollis dictum. Fusce efficitur quam non libero posuere, vel pretium arcu maximus. Nam tincidunt vel sem sed tristique. Nullam eget cursus orci. Sed feugiat neque rhoncus tempus feugiat. Donec augue odio, posuere non malesuada non, condimentum eu metus. Nulla blandit, magna et faucibus pretium, mauris odio tincidunt augue, non interdum purus nibh id lectus. Fusce in tristique elit, ut gravida sem. Aenean luctus augue enim, et placerat lectus molestie bibendum. Quisque hendrerit maximus ex vitae iaculis. Etiam sollicitudin eros eget tortor euismod, nec dictum augue mollis. Integer finibus sapien felis, nec hendrerit ante pharetra ac. Vivamus ac neque sapien. Aenean a efficitur metus, non blandit magna. Fusce blandit non nisi eu pretium. Fusce ligula elit, dignissim vel justo at, efficitur tempus mi. Etiam imperdiet diam nec nisi vehicula iaculis. Maecenas lobortis nisl libero, sit amet facilisis odio posuere at. Sed vel luctus urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc scelerisque pellentesque volutpat. Nunc ullamcorper urna id malesuada congue. Fusce in ipsum ac leo pharetra commodo vel elementum tellus. Cras convallis lorem vitae porttitor pharetra. Aliquam tristique ex in viverra lacinia. Suspendisse felis enim, pharetra ut efficitur at, tempor id lorem."    
console.log(longText.split(" ").length)   
console.log(longText.split("et ").length)
