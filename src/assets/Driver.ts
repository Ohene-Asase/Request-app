export interface IDriver {
    Id: number,
    name: string,
    contact: string,
    address: string
}


export interface IHistory {
    Name:number,
    place: string,
    reason: string,
    number: string,
    Date : string
}


export interface IGet {
    id:number,
    Name:string,
    phone_no:number,
    email: string
}

export interface ICar {
car_brand: string,
car_model: string,
car_no: string

}
