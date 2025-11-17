/* Do not change, this code is generated from Golang structs */


export class AddressMain {
    city: string;
    number: number;
    country?: string;

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.city = source["city"];
        this.number = source["number"];
        this.country = source["country"];
    }
}
export class PersonMain {
    name: string;
    personal_info: PersonalInfoMain;
    nicknames: string[];
    addresses: AddressMain[];
    address?: AddressMain;
    metadata: {[key:string]:string};
    friends: PersonMain[];

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.name = source["name"];
        this.personal_info = this.convertValues(source["personal_info"], PersonalInfoMain);
        this.nicknames = source["nicknames"];
        this.addresses = this.convertValues(source["addresses"], AddressMain);
        this.address = this.convertValues(source["address"], AddressMain);
        this.metadata = source["metadata"];
        this.friends = this.convertValues(source["friends"], PersonMain);
    }

	convertValues(a: any, classs: any, asMap: boolean = false): any {
	    if (!a) {
	        return a;
	    }
	    if (a.slice) {
	        return (a as any[]).map(elem => this.convertValues(elem, classs));
	    } else if ("object" === typeof a) {
	        if (asMap) {
	            for (const key of Object.keys(a)) {
	                a[key] = new classs(a[key]);
	            }
	            return a;
	        }
	        return new classs(a);
	    }
	    return a;
	}
}
export class PersonalInfoMain {
    hobby: string[];
    pet_name: string;

    constructor(source: any = {}) {
        if ('string' === typeof source) source = JSON.parse(source);
        this.hobby = source["hobby"];
        this.pet_name = source["pet_name"];
    }
}