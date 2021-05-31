element = document.getElementById("query")

const input = () => {
    queryInput = prompt("Enter the String or an Integer")
    parsing = parseInt(queryInput)
    type = isNaN(parsing) ? "string" : "int"
}

input()

const write = () => {
    type === "string" ? (() => {
        queryInput = queryInput.search(/[aeiou]/i)
        element.innerHTML = "The position in the string of the left-most vowel is: " + (queryInput + 1)
    })() : (
        element.innerHTML = "The number with its digits in the reverse order is: " + queryInput.split("").reverse().join("")
    )
}

write()