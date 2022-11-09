// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function p3(inventory){
    
    let array = [];
    for(let i = 0; i < inventory.length; i++){
        array.push(inventory[i].car_model)
    }
    return (array).sort();
}

module.exports.p3 = p3