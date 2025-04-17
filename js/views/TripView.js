export class TripView{

    constructor(trip){
        this.trip = trip;
    }

    render(){
        return `
            <tr class="text-center">
                <td>${this.trip.passenger}</td>
                <td>${this.trip.origin}</td>
                <td>${this.trip.destination}</td>
                <td>${this.formatarData(this.trip.date)}</td>
                <td>${this.trip.driver}</td>
                <td>${this.trip.value}</td>
                <td>
                    <button class="btn btn-sm  btn-outline-danger btn-no-hover">
                        <i class="fa-solid fa-trash text-danger fa-lg"></i>
                    </button>
                </td>
            </tr>
        `
    }

   formatarData(dataPadrao) {
        const data = new Date(dataPadrao);
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0'); // meses começam em 0
        const ano = data.getFullYear();
      
        return `${dia}/${mes}/${ano}`;
      }
}