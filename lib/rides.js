module.exports = {



  isTallEnough: function(child, ride){

    return child.height >= ride.minHeight;
    //return car.milesPerGallon * car.gallonsInTank > route.miles
    // if (car.milesPerGallon * car.gallonsInTank > route.miles){
    //   return true;
    // }
    // else {return false;}

  }
}
