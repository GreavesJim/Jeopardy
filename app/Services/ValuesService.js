import Store from "../store.js";
import Question from "../Models/Value.js";
// @ts-ignore
const _questionApi = axios.create({
  baseURL: "http://jservice.io/api/random", //default route
  timeout: 3000,
});

class ValuesService {
  constructor() {}
  addQuestion() {
    let newQuestion = _questionApi.get("").then((res) => {
      console.log(res.data);

      let people = res.data.map((rawPersonData) => new Question(rawPersonData));

      Store.commit("values", people);
    });
  }
}

const service = new ValuesService();
export default service;
