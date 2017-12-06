function produceDrivingRange(range){
  return function(startPoint, endPoint){
    let start = parseInt(startPoint);
    let end = parseInt(endBlock)
    let diff = Math.abs(end - start)
    let difference = range - diff
    if(difference > 0){
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}
