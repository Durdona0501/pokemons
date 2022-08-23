pokemons.forEach(function (pokemon) {
  let elList = $(".js-list");
  let elItem = createElement("li", "card ms-4 mb-4");
  let elImg = createElement("img", "card-img-top");
  let elDiv = createElement("div", "card-body");
  let elTitle = createElement("h5", "card-title", pokemon.name);
  let elP = createElement("p", "card-text fw-bold text-bg-secondary", "Abilities:");
  let elPSpan = createElement("span", "fw-normal ms-2", pokemon.weaknesses)

  elItem.setAttribute("style", "width: 18rem;");
  elImg.setAttribute("src", pokemon.img);
  elImg.setAttribute("alt", pokemon.name);

  elList.appendChild(elItem);
  elItem.append(elImg, elDiv);
  elDiv.append(elTitle, elP);
  elP.appendChild(elPSpan);
})