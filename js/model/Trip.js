export class Trip{
    constructor(apiResponse) {
        this.id = apiResponse.id;
        this.passenger = apiResponse.passenger;
        this.origin = apiResponse.oringin_address;
        this.destination = apiResponse.destination_addres;
        this.date = apiResponse.createdAt;
        this.driver = apiResponse.driver;
        this.value = apiResponse.fee;
    }
}