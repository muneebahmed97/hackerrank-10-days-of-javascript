/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {    
    try {
        let reverseString = s.split("").reverse().join("")
        console.log(reverseString)
    }
    catch (e) {
        console.log(e.message)
        console.log(s)
    }
}