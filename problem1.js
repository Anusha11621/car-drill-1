
function p1(inventory){
  if (inventory.length === 0){
    return inventory
  }
    for (let i=0 ; i<inventory.length; i++){
        if (inventory[i].id === 33){
          return (`Car 33 is a ${inventory[i].car_year} ${inventory[i].car_make} ${inventory[i].car_model}`)
        }
        
      }
}

module.exports.problem1 = p1



//functions name should be proper (Problem1)
// handling test cases (if it is empty we have to return empty array)
