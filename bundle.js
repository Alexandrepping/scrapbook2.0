class Tasklist {
  constructor() {
    this.titleImput = document.getElementById("messageTitle");
    this.messageimput = document.getElementById("messageBody");
    this.addButton = document.getElementById("addutton");
    this.scrapsfield = document.getElementById("scrapsField");
    this.scraps = [];
    this.registerEvennts();
  }

  renderScraps() {
    this.scrapsfield.innerHTML = "";

    for (const scrap of this.scraps) {
      this.scrapsfield.innerHTML += this.createScrapCard(scrap.title, scrap.message);
    }
  }

  createScrapCard(title, message) {}

}

new Tasklist();
