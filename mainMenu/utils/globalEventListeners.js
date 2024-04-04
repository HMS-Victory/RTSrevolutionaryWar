infantryIncrementButton.addEventListener("click", () => {
  if (menuData.gold >= 20) {
    menuData.units.infantry++;
    menuData.goldSpent += 20;
    goldInput.value = menuData.gold -= 20;
    infantryCount1.textContent = menuData.units.infantry;
  }
});
infantryDecrementButton.addEventListener("click", () => {
  if (menuData.units.infantry > 0) {
    menuData.units.infantry--;
    menuData.goldSpent -= 20;
    goldInput.value = menuData.gold += 20;
    infantryCount1.textContent = menuData.units.infantry;
  }
});
cavalryIncrementButton.addEventListener("click", () => {
  if (menuData.gold >= 30) {
    menuData.units.cavalry++;
    menuData.goldSpent += 30;
    goldInput.value = menuData.gold -= 30;
    cavalryCount1.textContent = menuData.units.cavalry;
  }
});
cavalryDecrementButton.addEventListener("click", () => {
  if (menuData.units.cavalry > 0) {
    menuData.units.cavalry--;
    menuData.goldSpent -= 30;
    goldInput.value = menuData.gold += 30;
    cavalryCount1.textContent = menuData.units.cavalry;
  }
});
artilleryIncrementButton.addEventListener("click", () => {
  if (menuData.gold >= 50) {
    menuData.units.artillery++;
    menuData.goldSpent += 50;
    goldInput.value = menuData.gold -= 50;
    artilleryCount1.textContent = menuData.units.artillery;
  }
});
artilleryDecrementButton.addEventListener("click", () => {
  if (menuData.units.artillery > 0) {
    menuData.units.artillery--;
    menuData.goldSpent -= 50;
    goldInput.value = menuData.gold += 50;
    artilleryCount1.textContent = menuData.units.artillery;
  }
});


//joining game unit event listeners
infantryIncrementButton1.addEventListener("click", () => {
  if (menuData.gold >= 20) {
    menuData.units.infantry++;
    menuData.goldSpent += 20;
    goldDisplay.textContent = menuData.gold -= 20;
    infantryCount2.textContent = menuData.units.infantry;
  }
});
infantryDecrementButton1.addEventListener("click", () => {
  if (menuData.units.infantry > 0) {
    menuData.units.infantry--;
    menuData.goldSpent -= 20;
    goldDisplay.textContent = menuData.gold += 20;
    infantryCount2.textContent = menuData.units.infantry;
  }
});
cavalryIncrementButton1.addEventListener("click", () => {
  if (menuData.gold >= 30) {
    menuData.units.cavalry++;
    menuData.goldSpent += 30;
    goldDisplay.textContent = menuData.gold -= 30;
    cavalryCount2.textContent = menuData.units.cavalry;
  }
});
cavalryDecrementButton1.addEventListener("click", () => {
  if (menuData.units.cavalry > 0) {
    menuData.units.cavalry--;
    menuData.goldSpent -= 30;
    goldDisplay.textContent = menuData.gold += 30;
    cavalryCount2.textContent = menuData.units.cavalry;
  }
});
artilleryIncrementButton1.addEventListener("click", () => {
  if (menuData.gold >= 50) {
    menuData.units.artillery++;
    menuData.goldSpent += 50;
    goldDisplay.textContent = menuData.gold -= 50;
    artilleryCount2.textContent = menuData.units.artillery;
  }
});
artilleryDecrementButton1.addEventListener("click", () => {
  if (menuData.units.artillery > 0) {
    menuData.units.artillery--;
    menuData.goldSpent -= 50;
    goldDisplay.textContent = menuData.gold += 50;
    artilleryCount2.textContent = menuData.units.artillery;
  }
});