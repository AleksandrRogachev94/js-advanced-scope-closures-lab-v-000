function produceDrivingRange(blockRange){
  return function(startPoint, endPoint){
    let start = parseInt(startPoint);
    let end = parseInt(endPoint)
    let diff = Math.abs(end - start)
    let difference = blockRange - diff
    if(difference > 0){
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage){
  return function(fare){
    return fare * percentage
  }
}
