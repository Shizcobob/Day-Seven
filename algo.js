/* 
    Given a string containing space separated words
    Reverse each word in the string.

    If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";


function reverseWords(str) {
    // declare empty string for result
    let reversed = '';
    // splitting string into array with strings
    let words = str.split(' ');
    // loop through array
    for (var i =0; i < words.length; i++){
        // iterate through string at index
        for (var j = 0; j < words[i].length; j++){
            // iterate backwards through string and push into result
            reversed += words[i][words[i].length - 1 - j];
        }
        // add space between words if there is more words to addd
        if (i < words.length-1){
            reversed += " ";
        }
    }
    return reversed
}

console.log(reverseWords(str1));
console.log(reverseWords(str2));
console.log(reverseWords(str3));

/*****************************************************************************/

/* 
    Reverse Word Order

    Given a string of words (with spaces)
    return a new string with words in reverse sequence.
*/






/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
const str3_1 = "   This  is a   test  ";
const expected3_1 = "test a is This";

const str2_1 = "hello";
const expected2_1 = "hello";

const str1_1 = "This is a test";
const expected1_1 = "test a is This";

function reverseWordOrder(wordsStr) {
    // split string into array
    let words = wordsStr.split(' ');
    // empty variable to store strings
    let result = ''
    // new array for words to be stored in
    let words2 = [];
    let j = 0;
    // loop through split array of string to remove empty strings
    for (var i = 0; i < words.length; i++){
        if (words[i] != '') {
            words2[j] = words[i];
            j++;
        }
    }
    // iterate backwards through new array to reverse word order
    for (var i = words2.length - 1; i >=0; i--){
        if (words2[i] != ' ') {
            result += words2[i];
            // add space between words if there are more words to add
            if (i > 0){
                result += " ";
            }
        }
    }
    
    return result
}

/*****************************************************************************/