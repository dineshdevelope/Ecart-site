const formEl = document.getElementById("formEl");
const formInput = document.getElementById("formInput");
const itemList = document.getElementById("itemList");
const filterItem = document.getElementById("filterItem");
const clearItem = document.getElementById("clearItem");

function addItem(e) {
  e.preventDefault();
  let newItem = formInput.value;
  console.log(newItem);

  const devEl = document.createElement("dev");
  devEl.className = "flex justify-center items-center p-3";

  const li = document.createElement("li");
  li.textContent = newItem;

  const btnEl = document.createElement("button");
  btnEl.className = "ml-32";
  btnEl.innerHTML =
    ' <img src="./src/photos/x.svg" alt="Delete" class="bg-red-800" />';

  itemList.appendChild(devEl);
  devEl.appendChild(li);
  li.appendChild(btnEl);

  formEl.reset();
}
formEl.addEventListener("submit", addItem);
