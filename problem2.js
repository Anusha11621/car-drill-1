

function p2(inventory){
  if (inventory.length === 0){
    return inventory
  }
    for (let i=0 ; i<inventory.length; i++){
        if (inventory[i].id === inventory.length){
          return (`Last car is a ${inventory[i].car_make} ${inventory[i].car_model}`)
        }
        
      }
}

module.exports.p2 = p2


