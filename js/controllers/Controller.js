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

        //Eventos do formulário
        const form = document.getElementById("form-trip");

        form.addEventListener("submit", (event) => this.validadeForm(event));
          
      }

    validadeForm(event){
          event.preventDefault();
      
          const passengerInput = document.getElementById("passenger");
          const originInput = document.getElementById("origin");
          const destinationInput = document.getElementById("destination");
          const dateInput = document.getElementById("date");
          const driverInput = document.getElementById("driver");
          const valueInput = document.getElementById("value");
          
          let isValid = true;
          
          clearValidation(); // Remove classes anteriores
          
          if (!passengerInput.value.trim()) {
            markInvalid(passengerInput);
            isValid = false;
          }
          if (!originInput.value.trim()) {
            markInvalid(originInput);
            isValid = false;
          }
          if (!destinationInput.value.trim()) {
            markInvalid(destinationInput);
            isValid = false;
          }
          if (!dateInput.value) {
            markInvalid(dateInput);
            isValid = false;
          }
          if (!driverInput.value.trim()) {
            markInvalid(driverInput);
            isValid = false;
          }
          if (!valueInput.value.trim() || isNaN(parseFloat(valueInput.value))) {
            markInvalid(valueInput);
            isValid = false;
          }
          
          if (isValid) {
            alert("Formulário enviado com sucesso!");
          }
          
          function markInvalid(input) {
            input.classList.add("is-invalid");
            input.focus(); // opcional: para ir direto ao campo inválido
          }
          function clearValidation() {
            const inputs = document.querySelectorAll("input");
            inputs.forEach(input => input.classList.remove("is-invalid"));
          }
        };
    }
