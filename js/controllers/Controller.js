import { Trip } from "../model/Trip.js";
import { TripView } from "../views/TripView.js";
export class Controller{
    constructor(){
      this.attachEvents();
      this.fetchData();
    }


    async fetchData() {
      let url = "https://65f2497c034bdbecc7648b04.mockapi.io/api/v1/alimentos";
      let response = await fetch(url); 
      let data = await response.json();
      data = data.map( (e) => {
          return new Trip(e);
      })
      for(let trip of data) {
          this.adicionarTrip(trip);
      }
  }

  adicionarTrip(trip) {
    let view = new TripView(trip);
    this.table.innerHTML += view.render();
}
    attachEvents() {
        const addBtn = document.getElementById("add-btn");
        const backBtn = document.getElementById("back-btn");
        let showTabela = document.getElementById("show-tabela");
        let addTrip = document.getElementById("add-trip");
        
        addBtn.addEventListener("click", () => showTabela.classList.add("d-none"));
        addBtn.addEventListener("click", () => addTrip.classList.remove("d-none"));
         
        backBtn.addEventListener("click", () => showTabela.classList.remove("d-none"));
        backBtn.addEventListener("click", () => addTrip.classList.add("d-none"));

        this.table = document.getElementById("body-tabela");
      }
}