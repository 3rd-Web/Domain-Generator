import "bootstrap";
import "./style.css";

window.onload = function() {
  let fullUrl = [];
  let pronoun = ["the", "our", "a"];
  let adjective = ["great", "big", "old", "silly", "small"];
  let noun = ["dog", "earth", "beard", "peace", "cartoon"];
  let domain = [".com", ".org", ".us", ".org"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          fullUrl.push(pronoun[i] + adjective[j] + noun[k] + domain[l]);
          console.log(fullUrl[fullUrl.length - 1]);
        }
      }
    }
  }
};
