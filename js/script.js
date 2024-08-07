// MANIPULATED DATA INPUT ELEMENTS
let userInput = document.querySelector("#input")
let encryptButton = document.querySelector(".encrypt")
let decryptButton = document.querySelector(".decrypt")

// MANIPULATED DATA OUTPUT ELEMENTS
let dataResult = document.querySelector(".data__result")
let textDecrypt = document.querySelector(".text__decrypt")
let copyDataOutput = document.querySelector(".btn__copy")

// ENCRYPT TEXT FUNCTION
encryptButton.addEventListener("click", () => {
    let typedText = userInput.value
    let typedTextArray = typedText.split("")
    const substitutions = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    }

    if (typedText == "") {
        alert("Digite um texto para ser criptografado!")
    } else {
        for (let i = 0; i < typedTextArray.length; i++) {
            if (substitutions[typedTextArray[i]]) {
                typedTextArray[i] = substitutions[typedTextArray[i]]
            }

            userInput.value = ""
            copyDataOutput.innerHTML = "Copiar"
            console.log(typedTextArray[i])
        }
    }

    if (typedText != "") {
        textDecrypt.innerHTML = typedTextArray.join("")
        dataResult.classList.add("active")
        textDecrypt.classList.add("active")
        copyDataOutput.classList.add("active")
        cleanOutputData()
    }

    console.log(typedTextArray)
    copyDataOutput.classList.remove("active2")
})

// DECRYPT TEXT FUNCTION
decryptButton.addEventListener("click", () => {
    let typedText = userInput.value
    
    if (typedText == "") {
        alert("Não existe para descriptografar!")
    } else {
        let decryptedText = typedText
            .replaceAll("ai", "a")
            .replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");

        textDecrypt.innerHTML = decryptedText
        userInput.value = ""
        copyDataOutput.classList.remove("active2")
        copyDataOutput.innerHTML = "Copiar"
        cleanOutputData()
    }
})

// CLIPBOARD API FUNCTION
copyDataOutput.addEventListener("click", () => {
    navigator.clipboard.writeText(textDecrypt.innerHTML)
    console.log("Copied")
})

function cleanOutputData() {
    let cleanImage = document.querySelector(".character__img").remove()
    let cleanInfo = document.querySelector(".data__result-info").remove()
}