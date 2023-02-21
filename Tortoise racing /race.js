// https://www.codewars.com/kata/55e2adece53b4cdcb900006c/solutions/javascript?filter=me&sort=best_practice&invalids=false

function race(v1, v2, g) {
    if (v1>v2) return null
    let hours=0, mins=0, sec = 0

    const minut = 60
    let time = g*60/(v2-v1)

    hours = Math.trunc(time/minut)
    mins = Math.trunc(time - hours*minut)
    sec= Math.trunc((time - hours*minut - mins)*minut)

    return [hours, mins, sec]
}
