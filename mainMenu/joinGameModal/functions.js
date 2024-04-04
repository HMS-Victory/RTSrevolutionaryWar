function generateListItem(players, gold, map, id) {
    // create a containing element
    const container = document.createElement("div");
    container.classList.add("radioBtn");
    container.setAttribute("id", id);
    const element = document.getElementById("availableGameList");
    element.appendChild(container);
  
    let data = [players, gold, map];
    data.map((item) => {
      const p = document.createElement("p");
      const node = document.createTextNode(item);
      p.appendChild(node);
      container.appendChild(p);
    });
  }