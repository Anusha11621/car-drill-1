// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.
function p4(inventory){
  if (inventory.length === 0){
    return inventory
  }
  let array = []

  for (let i = 0; i<inventory.length; i++){
    array.push(inventory[i].car_year)
  }
return array
}

module.exports.p4 = p4