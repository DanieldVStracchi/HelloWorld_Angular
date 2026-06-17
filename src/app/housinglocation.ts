export interface HousingLocationInfo { //interfaz con los atributos que compone los detalles de una casa

  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}