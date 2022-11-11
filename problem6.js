// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
function p6(inventory){
  if (inventory.length === 0){
    return inventory
  }
let arr = []
for (let j = 0; j<inventory.length; j++){
  if (inventory[j].car_make === "BMW" || inventory[j].car_make === "Audi"){
    arr.push(inventory[j])
  }
}
 return arr
}
 
module.exports.p6 = p6