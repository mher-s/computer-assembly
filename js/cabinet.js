let factorStatus = document.querySelector(".factorStatus");

factorStatus.addEventListener("click", () => {
  if (factorStatus.classList.contains("factor__status-active")) {
    factorStatus.classList.add("factor__status-disable");
    factorStatus.classList.remove("factor__status-active");
    factorStatus.innerHTML = "Disabled";
  } else {
    factorStatus.classList.remove("factor__status-disable");
    factorStatus.classList.add("factor__status-active");
    factorStatus.innerHTML = "Activated";
  }
});

let cabinetBurger = document.querySelector(".cabinet-burger");

cabinetBurger.addEventListener("click", () => {
  let burgerOpened = document.querySelector(".burger-opened");
  let centerLine = document.querySelector(".center-line");
  let body = document.querySelector("body");
  let closeBtn = document.querySelector(".fa-times");

  if (burgerOpened.classList.contains("active")) {
    burgerOpened.style.display = "none";
    burgerOpened.classList.remove("active");
    body.style.overflow = "";
    centerLine.style.display = "block";
    closeBtn.classList.add("close");
  } else {
    burgerOpened.style.display = "block";
    burgerOpened.classList.add("active");
    body.style.overflow = "hidden";
    centerLine.style.display = "none";
    closeBtn.classList.remove("close");
  }
});

const cabinetTabs = document.querySelectorAll(".tab-btn");

function eventListener(elem) {
  elem.addEventListener("click", () => {
    const clickedAttr = elem.getAttribute("data-btn");
    const findBlock = document.getElementById(clickedAttr);
    const tabContent = document.querySelectorAll(".tab-content");

    tabContent.forEach((item) => {
      item.classList.remove("active-tab");
    });

    findBlock.classList.add("active-tab");
  });
}

cabinetTabs.forEach((elem) => {
  eventListener(elem);
});
