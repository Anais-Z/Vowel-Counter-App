//accessing the input
const textInput = document.querySelector('input[name=enterText]')

//declaring a variable to access the button
const submit = document.querySelector('.submit')

//creating the array of vowels
const vowels = ['a','e','i','o','u']

let modal = document.getElementById("myModal");

let theResult = document.getElementById("result-vowels")

//creating the event listener for the button
submit.addEventListener('click', () =>{
   // debugger
    let checkBool = checkInput(textInput.value)
    let num = 0
    //debugger

    if(checkBool)
    {
         num = countVowels(textInput.value)
    }

    let result = `The string ${textInput.value} contains ${num} values.`
    theResult.innerText = result
    
    console.log(result)

})

let checkInput = (theValue) => {
    if(theValue.count == 0)
    {
        return false
    } else{
        return true
    }
}

let countVowels = (currentString) => {
    //debugger
    let count = 0
    for (let currentChar in currentString)
    {
        vowels.forEach( (currentValue) => {
            if(currentString[currentChar] == currentValue)
            {
                count++
            }
        })
    }
    return count
}

