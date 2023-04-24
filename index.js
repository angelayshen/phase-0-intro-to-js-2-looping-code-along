// Code your solutions in this file

const names = ["Archer", "Simon", "Aiden"];
const eventName = "wedding"
const newArray = [];

function writeCards(names, eventName) {
    const messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    
    return messages;
}

console.log(writeCards(names, eventName))


function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i--)
    }
}

console.log(countDown(20))