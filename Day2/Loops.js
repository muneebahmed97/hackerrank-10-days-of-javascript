function vowelsAndConsonants(s) {
    const vowels = []
    const consonants = []
     
    for (let value of s) {
        if(value === 'a'
        || value === 'e' 
        || value === 'i' 
        || value === 'o'
        || value === 'u'
        ) vowels.push(value)
        else consonants.push(value)
    }
     
    vowels.map((value) => (console.log(value)))
    consonants.map((value) => (console.log(value)))
}