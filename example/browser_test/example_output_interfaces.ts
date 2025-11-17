/* Do not change, this code is generated from Golang structs */


export interface AddressMain {
    city: string;
    number: number;
    country?: string;
}
export interface PersonMain {
    name: string;
    personal_info: PersonalInfoMain;
    nicknames: string[];
    addresses: AddressMain[];
    address?: AddressMain;
    metadata: {[key:string]:string};
    friends: PersonMain[];
}
export interface PersonalInfoMain {
    hobby: string[];
    pet_name: string;
}