// File: src/services/types.ts
export interface Vehicle {
    id: number;
    name: string;
    brand: string;
    model: string;
    year: number;
    price_per_day: number;
    image_url?: string;
    seats?: number;
    transmission?: string;
    fuel_type?: string;
}

export interface Booking {
    id: number;
    vehicle_id: number;
    start_date: string;
    end_date: string;
    total_price: number;
    status: string;
}