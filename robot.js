function createRobot(coordinates, direction) {
  let [x, y] = coordinates
  let orientation = direction 

  return {
    getPosition: () => {
      return { coordinates: [x, y], orientation }
    },
    advance: () => {
      // función para avanzar
    },
    turnRight: () => {
      // función para girar a la derecha
    },
    turnLeft: () => {
      // función para girar a la izquierda
    },
    instructions: (stringInstructions) => {
      // función para recibir una serie de instrucciones Ejm: "RAALAL"
      // En este metodo se va crear 
    }
  }
}

module.exports = createRobot


console.log(createRobot([2,3], "North").getPosition());