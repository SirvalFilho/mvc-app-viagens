export class Controller{
    constructor(appElement){
       this.app = appElement;
       this.currentView = null;
    }

    init(){
        this.loadView("TableView");
    }

    loadView(view){
        fetch(`./views/${view}.html`)
        .then(response => response.text())
        .then(html => {
            this.app.innerHTML = html;
            this.currentView = view;
            this.attachEvents();
        })
        .catch(error => {
            this.app.innerHTML = `<p class="text-danger">Erro ao carregar a view: ${view}</p>`;
            console.error(error);
          });
    }

    attachEvents() {
        const addBtn = document.getElementById("add-btn");
        const backBtn = document.getElementById("back-btn");
    
        if (addBtn) {
          addBtn.addEventListener("click", () => this.loadView("AddTripView"));
        }
    
        if (backBtn) {
          backBtn.addEventListener("click", () => this.loadView("TableView"));
        }
    
        const form = document.querySelector("form");
        if (form) {
          form.addEventListener("submit", (e) => {
            e.preventDefault();
            //TODO - Implementar lógica de cadastro
           
          });
        }
      }
}