function GameOverPopup(result){
    const container=document.createElement("div");
    const outcome=document.createElement("p")
    const button=document.createElement("div")
    const buttonText=document.createElement("p");
    const outcomeNode=document.createTextNode(result)
    const buttonNode=document.createTextNode("Return to Main Menu")

    container.classList.add("gameOver")
    button.classList.add("button")

    button.setAttribute("id", "endButton")
    buttonText.appendChild(buttonNode)
    outcome.appendChild(outcomeNode)

    button.appendChild(buttonText)
    container.appendChild(outcome);
    container.appendChild(button)
    popup.appendChild(container)
}

function DeploymentPopup(){
    const container=document.createElement("div");
    const header=document.createElement("p");
    const button=document.createElement("div");
    const buttonText=document.createElement("p")
    const buttonNode=document.createTextNode("End Deployment")
    const headerNode=document.createTextNode("Deployment Phase")

    container.classList.add("deployment");
    button.classList.add("button")

    button.setAttribute("id", "startButton");
    buttonText.appendChild(buttonNode);
    header.appendChild(headerNode)

    button.appendChild(buttonText)
    container.appendChild(header);
    container.appendChild(button)
    popup.appendChild(container)
}