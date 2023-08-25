//Global variables
let value;
let element;
let text;
let newText;

/*---------------------------- 
String Methods
----------------------------*/
//replace method
value = 225
element = document.getElementById("replace")
text = "12345"
newText = text.replace("12345", value)
element.textContent = element.textContent + " text was " + text + " now it is " + newText;

//replaceAll method
value = 225
element = document.getElementById("replaceAll")
text = "12345 45645 12345 dvevv 12345"
newText = text.replaceAll("12345", value)
element.textContent = element.textContent = element.textContent + " text was - " + text + " - NOW IT IS - " + newText + " -";

//toUpperCase method
value = "mjx"
element = document.getElementById("toUpperCase")
element.textContent = element.textContent + value.toUpperCase()

//toLowerCase method
value = "MJX"
element = document.getElementById("toLowerCase")
element.textContent = element.textContent + value.toLowerCase()

//concat method
text = "Hello"
newText = "World!"
value = text.concat(" ", newText)
element = document.getElementById("concat")
element.textContent = element.textContent + value

/*---------------------------- 
Number Methods
----------------------------*/
//toString method
value = 225
element = document.getElementById("tostring")
element.textContent = element.textContent +  `"${value.toString()}"`

//parseInt method
value = "5"
element = document.getElementById("parseInt")
element.textContent = element.textContent + parseInt(value)

//toExponential method
value = 5.343
element = document.getElementById("toExponential")
element.textContent = element.textContent + value.toExponential(5)

//toFixed method
value = 5.343
element = document.getElementById("toFixed")
element.textContent = element.textContent + value.toFixed(2)

//toPrecision method
value = 5.343
element = document.getElementById("toPrecision")
element.textContent = element.textContent + value.toPrecision(5)

/*---------------------------- 
Array Methods
----------------------------*/
//Array.length method
value = ["Test1", "Test2", "Test3", "Test4", "Test5"]
element = document.getElementById("arrayLength")
element.textContent = element.textContent + value.length

//Array.Pop method
value = ["Test1", "Test2", "Test3", "Test4", "Test5"]
element = document.getElementById("pop")
value.pop()
element.textContent = element.textContent + value

//Array.Push method
value = ["Test1", "Test2", "Test3", "Test4", "Test5"]
element = document.getElementById("push")
value.push("Test6")
element.textContent = element.textContent + value

//Array.shift method
value = ["Test1", "Test2", "Test3", "Test4", "Test5"]
element = document.getElementById("shift")
value = value.shift()
element.textContent = element.textContent + value

//Array.unshift method
value = ["Test1", "Test2", "Test3", "Test4", "Test5"]
element = document.getElementById("unshift")
value = value.unshift("Test0")
element.textContent = element.textContent + value

/*---------------------------- 
Date Methods
----------------------------*/
//Year Month method
value = new Date(2018, 11)
element = document.getElementById("yearMonth")
element.textContent = element.textContent + value

//Year Month Day method
value = new Date(2018, 11, 2)
element = document.getElementById("yearMonthDay")
element.textContent = element.textContent + value

//24 hour time method
value = new Date(24 * 60 * 60 * 1000);
element = document.getElementById("24hourTime")
element.textContent = element.textContent + value

/*---------------------------- 
Function Methods
----------------------------*/
//Basic Fuction method
value = writeWelcomeMessage()
function writeWelcomeMessage()
{
    newText = " Good job on your search!"

    return newText
}
element = document.getElementById("basicFunction")
element.textContent = element.textContent +  value;

//Arrow Fuction method
value = () => " Arrow Function!"
element = document.getElementById("arrowFunction")
element.textContent = element.textContent +  value;