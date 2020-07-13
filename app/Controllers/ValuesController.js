import ValuesService from "../Services/ValuesService.js";
import store from "../store.js";

//Private
function _drawQuestion() {
  let template = "";
  let value = store.State.values;
  value.forEach((e) => (template += e.Template));
  document.getElementById("Question").innerHTML = template;
}

//Public
export default class ValuesController {
  constructor() {
    store.subscribe("values", _drawQuestion);
    ValuesService.addQuestion();
  }
  addQuestion() {
    ValuesService.addQuestion();
  }
  showAnswer() {
    document.getElementById("answer").classList.remove("hidden");
  }
}
