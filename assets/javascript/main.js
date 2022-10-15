const featuresDropdown = document.querySelector(".dropdown-content");

const companyDropdown = document.querySelector(".dropdown-content-c");

let companySvg = document.getElementById("company-svg");
companySvg.innerHTML = `<i class="fas fa-angle-down"></i>`;

let featureSvg = document.getElementById("features-svg");
featureSvg.innerHTML = `<i class="fas fa-angle-down"></i>`;

function dropdownContent2() {
  if (companySvg.innerHTML === `<i class="fas fa-angle-down"></i>`) {
    companyDropdown.style.display = "flex";
    companySvg.innerHTML = `<i class="fas fa-angle-up"></i>`;
    return false;
  }

  if (companySvg.innerHTML === `<i class="fas fa-angle-up"></i>`) {
    companyDropdown.style.display = "none";
    companySvg.innerHTML = `<i class="fas fa-angle-down"></i>`;
    return false;
  }
}

function dropdownContent() {
  if (featureSvg.innerHTML === `<i class="fas fa-angle-down"></i>`) {
    featuresDropdown.style.display = "flex";
    featureSvg.innerHTML = `<i class="fas fa-angle-up"></i>`;
    return false;
  }

  if (featureSvg.innerHTML === `<i class="fas fa-angle-up"></i>`) {
    featuresDropdown.style.display = "none";
    featureSvg.innerHTML = `<i class="fas fa-angle-down"></i>`;
    return false;
  }
}

let menuBar = document.getElementById("menu-bar");
let menuBar2 = document.getElementById("menu-bar2");
let navLink = document.querySelector(".nav-wrapper");
menuBar2.style.display = "none";

let isMenu = true;
function getMenu() {
  if (isMenu) {
    menuBar.style.display = "none";
    navLink.style.display = "flex";
    menuBar2.style.display = "flex";
    isMenu = false;
    return isMenu;
  }
  if (!isMenu) {
    navLink.style.display = "none";
    menuBar.style.display = "flex";
    menuBar2.style.display = "none";
    isMenu = true;
    return false;
  }
}
