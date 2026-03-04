export type Status = "free" | "reserved" | "sold";

export interface Apartment {
  id: number;
  building: string;
  floor: number;
  number: string;
  area: number;
  rooms: number;
  layout: string;
  priceM2: number;
  status: Status;
}
