const sideBar = document.getElementById("sidebar");

// function addElementToSidebar(id) {
//   let unit = [];
//   //filter out unit data
//   for (let i = 0; i <= side1.length; i++) {
//     if (side1[i] === id) {
//       unit.push(side1[i].name);
//       unit.push(side1[i].type);
//       unit.push(side1[i].strength);
//       unit.push(side1[i].moral);
//       break;
//     }
//   }

//   const container=document.createElement("div");
//   const unitImage = document.createElement("img");
//   if (unit[id] === "infantry") {
//     unitImage.src="./images/units/infantry.png"
//     unitImage.classList.add("unitImage")
//     unitImage.setAttribute("id", id);
//     container.appendChild(unitImage);
//   }

//   //show details on hover
//   const element = document.createElement("div");
//   element.classList.add("sideBarItem");
//   element.setAttribute("id", id);
//   unitImage.appendChild(element);

//   unit.map((detail) => {
//     const p = document.createElement("p");
//     const node = document.createTextNode(detail);
//     p.appendChild(node);
//     element.appendChild(p);
//   });
// }

function addElementToSidebar(id, side, unitType) {
    //create elements
    const container=document.createElement("div")
    const unitImage=document.createElement("img")
    const hoverElement=document.createElement("div")

    container.classList.add("unit")

    unitImage.src=`./images/units/${side}/${unitType}.png`
    unitImage.classList.add("unitImage")
    unitImage.setAttribute("id", id)

    hoverElement.classList.add("onHover")
    hoverElement.hidden=true

    //append elements
    container.append(hoverElement)
    container.append(unitImage)
    sideBar.append(container)
  }