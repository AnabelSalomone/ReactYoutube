const unescapeHTML = (string, tag) => {
  var elt = document.createElement(`${tag}`);
  elt.innerHTML = string;
  return elt.innerText;
}

export default unescapeHTML