export default class Question {
  constructor(data) {
    this.question = data.question;
    this.answer = data.answer;
    this.catagory = data.category.title || data.catagory;
  }

  get Template() {
    return /*html*/ `
        <div class="col-3 m-3 p-2 border rounded">
        <h5>${this.catagory}</h5>
        <p>${this.question}</p>
        <button onclick="app.valuesController.showAnswer()">Reveal Anwer</button>
        <p id="answer" class="hidden">${this.answer}</p>
        <button type="button" class="btn btn-primary" onclick="app.valuesController.addQuestion()">Next Question</button>
        
        
        `;
  }
}
