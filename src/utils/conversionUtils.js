//functions that take a numeric value of one unit (Meter/Feet) and convert it to the other

function mToF(m) {
    return Math.round(m * 3.2808);
}
function fToM(f) {
    return Math.round(f / 3.2808);
}

export { mToF, fToM };