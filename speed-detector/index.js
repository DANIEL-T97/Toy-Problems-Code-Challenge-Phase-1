
function calculateDemeritPoints(speed) { //create a function that takes the car's speed limit as input
    const speedLimit = 70; //declares the legal fixed speed limit using const
    const kmPerDemeritPoints = 5; //for every 5km/s above speed limit one demerit point is given
  
    if (speed <= speedLimit) {
      console.log("Ok"); //returns OK if the speed limit is equal to 70km/s or less
    } else {
      const excessSpeed = speed - speedLimit; //calculates the excess speed passed the 70km/s mark
      const demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoints);// calculates the total number of demerit points to be given
  
      if (demeritPoints >= 12) {
        console.log("License suspended"); //returns the value Licence suspended if the demerit points excceed 12 points
      } else {
        console.log(`Demerit points: ${demeritPoints}`);
      }
  }
}

//example
const carSpeed = 200;
calculateDemeritPoints(carSpeed)


