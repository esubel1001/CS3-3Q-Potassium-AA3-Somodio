function verifyMessage() {
    let message = prompt("Enter the message to verify:");

    if (message.includes("FR") || (message.includes("FR") && message.includes("AI"))) {
        if (message.includes("aI") || message.includes("Ai")){  
            document.getElementById('result').innerHTML = "The message " + '"' + message + '"' + " is fake!";
        } else {    
            document.getElementById('result').innerHTML = "The message " + '"' + message + '"' + " is legitimate!";
        }
    } else if (message.includes("AI") || message.includes("aI") || message.includes("Ai")) {
        document.getElementById('result').innerHTML = "The message " + '"' + message + '"' + " is tampered!";
    } else {
        document.getElementById('result').innerHTML = "The message " + '"' + message + '"' + " is not yet encoded.";
    }
}
