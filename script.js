//task 1
const palindrom = document.getElementById('palindrome_input');
const palindrom_span = document.getElementById('palindrome_res');

function checkPalindrome(){
    // get value from input to str and then call isPalindrome(str)
    let str = palindrom.value;
    str.split("");
    console.log(str.split(""));
    for(let i = 0; i <= (str.length-1)/2; i++){

        // console.log(str[i]);
        // console.log(str[str.length-1-i]);
        // console.log(str[i] === str[str.length-1-i]);

        if(str[i] == str[str.length-1-i]){
            palindrom_span.textContent = 'true';
        } else {
            palindrom_span.textContent = 'false';
        }
    }
}


//task 2

const reverse_input = document.getElementById('reverse_input');
const reverse_result = document.getElementById('reverse_result');


function reverseString(){
    let str2 = reverse_input.value;
    str2.split("");
    let res = '';
    for(let i = str2.length-1; i >= 0; i--){
        res = res + str2[i];
        reverse_result.textContent = res;
    }
}


//task 3

const string_value = document.getElementById('string_value');
const character_value = document.getElementById('character_value');
const res_calc = document.getElementById('res_calc');

function getCount(){
        let str3 = string_value.value;
        str3.split('');
        let count = 0;
        const character = character_value.value;
        for(let i = 0; i <= str3.length-1; i++){
            if(str3[i].includes(character)){
                count = count + 1;
            }
            res_calc.textContent = count;
        }
    }