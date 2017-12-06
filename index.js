function produceDrivingRange(blockRange){
  return function(startPoint, endPoint){
    let start = parseInt(startPoint);
    let end = parseInt(endBlock)
    let diff = Math.abs(end - start)
    let difference = blockRange - diff
    if(difference > 0){
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}
