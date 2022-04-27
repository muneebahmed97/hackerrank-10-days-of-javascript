/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    const [a, p] = expressions;

    const s1 = (p + Math.sqrt(p ** 2 - (16 * a))) / 4
    const s2 = (p - Math.sqrt(p ** 2 - (16 * a))) / 4

    return ([s2, s1])
}