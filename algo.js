// 2325. Decode the Message



// You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

// 1. Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// 2. Align the substitution table with the regular English alphabet.
// 3. Each letter in message is then substituted using the table.
// 4. Spaces ' ' are transformed to themselves.
// For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
// Return the decoded message.


/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let codedMap = new Map()
    let a = 0

    for(let i = 0; i < key.length; i++){

        if(key[i] == " "){
            continue
        }else{
            if(codedMap.has(key[i])){
                continue
            }else{
                codedMap.set(key[i], alphabet[a])
                a++
            }
        }
    }

    let decoded = ""

    for(let i = 0; i < message.length; i++){

        let letter = codedMap.get(message[i])

        if(message[i] == " "){
            decoded += " "
        }else{
            decoded += "" + letter + ""
        }
    }

    return decoded
};