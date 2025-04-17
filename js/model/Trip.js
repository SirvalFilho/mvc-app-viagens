export class Trip{
    constructor(apiResponse) {
        this.id = apiResponse.id || Math.floor(Math.random() * 1000);
        this.passenger = apiResponse.passenger;
        this.originAddress = apiResponse.originAddress || apiResponse.oringin_address;
        this.destinationAddress = apiResponse.destinationAddress || apiResponse.destination_addres;
        this.createdAt = apiResponse.createdAt || new Date();
        this.driver = apiResponse.driver;
        this.fee = apiResponse.fee;
    }
}