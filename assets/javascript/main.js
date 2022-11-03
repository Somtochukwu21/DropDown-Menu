const idArray = [];

class GetId {
  getId(...id) {
    for (const props of id) {
      const element = document.getElementById(props);
      idArray.push(element);
    }
  }

  classToggler(id) {
    id.onclick = () => {
      return id.classList.toggle("add-remove");
    };
  }
}

const getElement = new GetId();

getElement.getId("menu-bar", "features", "company", "close-bar", "nav");

const [mainBar, features, company, close, nav] = idArray;

getElement.classToggler(features);
getElement.classToggler(company);
getElement.classToggler(mainBar);

mainBar.onclick = () => {
  nav.style.display = "flex";
};

close.onclick = () => {
  nav.style.display = "none";
};
