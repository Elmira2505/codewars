function danspower(num, power) {
    let result = Math.pow(num, power)
    console.log(num, power)
    return  num === 0 ? 0 : (result % 2 !== 0) ? Math.round(result /10) * 10 : result

}
