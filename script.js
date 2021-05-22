let addbutton = document.querySelector("#add");
let removebutton = document.querySelector("#remove");
let msg = document.querySelector(".p");
let form = document.querySelector("form");

// Adding TODO to the list
const addItem = () => {
  //   console.log("It's working");
  let input = document.querySelector("#todo").value;
  //   console.log(input);
  if (input !== "") {
    msg.style.display = "none";
    let ul = document.querySelector(".list");
    let li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" id="check" />
      <label>${input}</label>`;
    li.classList.add("list-item");
    ul.insertBefore(li, ul.childNodes[0]);

    setTimeout(() => {
      li.classList.add("visual");
    }, 2);
    form.reset();
  } else {
    msg.style.display = "block";
  }
};

//Removing done todo from the list
const removeItem = () => {
  let ul = document.querySelector(".list");
  let li = ul.children;
  for (let i = 0; i < li.length; i++) {
    while (li[i] && li[i].children[0].checked) {
      ul.removeChild(li[i]);
    }
  }
};

addbutton.addEventListener("click", addItem);
removebutton.addEventListener("click", removeItem);
