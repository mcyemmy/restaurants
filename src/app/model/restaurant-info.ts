export interface RestaurantInfo {
    name: string;
    backgroundImageURL: string;
    category: string;
    contact: Contact;
    location: Location;
}

export interface Contact {
    formattedPhone : any;
    phone: any;
    twitter: string;
}

export interface Location {
    address: string;
    cc: string;
    city: string;
    country: string;
    crossStreet: string;
    formattedAddress: any[];
    lat: number;
    lng: number;
    postalCode: string;
    state: string;
}