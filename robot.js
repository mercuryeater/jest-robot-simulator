function createRobot(coordinates, direction) {
  let [x, y] = coordinates;
  let orientation = direction;

  return {
    getPosition: () => {
      return { coordinates: [x, y], orientation };
    },
    advance: () => {
      try {
        switch (orientation) {
          case "North":
            coordinates[1] = coordinates[1] + 1;
            break;
          case "South":
            coordinates[1] = coordinates[1] - 1;
            break;
          case "East":
            coordinates[0] = coordinates[0] + 1;
            break;
          case "West":
            coordinates[0] = coordinates[0] - 1;
            break;
        }
        if (
          coordinates[0] < 0 ||
          coordinates[0] > 10 ||
          coordinates[1] < 0 ||
          coordinates[1] > 10
        ) {
          throw new Error("No more space to move");
        }
        return { coordinates: coordinates, orientation };
      } catch (error) {
        return error.message;
      }
    },
    turnRight: () => {
      switch (orientation) {
        case "North":
          orientation = "East";
          break;
        case "East":
          orientation = "South";
          break;
        case "South":
          orientation = "West";
          break;
        case "West":
          orientation = "North";
          break;
      }
      return { coordinates: [x, y], orientation: orientation };
    },
    turnLeft: () => {
      switch (orientation) {
        case "North":
          orientation = "West";
          break;
        case "West":
          orientation = "South";
          break;
        case "South":
          orientation = "East";
          break;
        case "East":
          orientation = "North";
          break;
      }
      return { coordinates: [x, y], orientation: orientation };
    },
    instructions: function (stringInstructions) {
      try {
        instructions = stringInstructions.split("");
        instructions.forEach((instruction) => {
          switch (instruction) {
            case "R":
              // console.log("TurnRight");
              this.turnRight();
              // console.log({ coordinates: coordinates, orientation: orientation })
              break;
            case "A":
              // console.log("Avanza");
              this.advance();
              // console.log({ coordinates: coordinates, orientation: orientation })
              break;
            case "L":
              // console.log("TurnLeft");
              this.turnLeft();
              // console.log({ coordinates: coordinates, orientation: orientation })
              break;
            default:
              throw new Error("Only known instructions are supported");
          }
        });
        return { coordinates: coordinates, orientation: orientation };
      } catch (error) {
        return error.message;
      }
    },
  };
}

module.exports = { createRobot };

const robot = createRobot([7, 3], "North");

console.log(robot.turnLeft());
