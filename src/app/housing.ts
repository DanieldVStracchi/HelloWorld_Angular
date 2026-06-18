import { Injectable } from '@angular/core';
import {HousingLocationInfo} from './housinglocation';


@Injectable({
  providedIn: 'root',
})


export class HousingService { //Clase que contiene el servidor .json con los detalles de las casas, nada visual
   
  url = 'http://localhost:3000/locations';  //enlace localcost, de el extraerá la información a modo de base de datos

  async getAllHousingLocations(): Promise<HousingLocationInfo[]> { //async permite esperar a respuestas de operaciones sin congelar la operación, permite hacer otras cosas mientras tanto
    const data = await fetch(this.url);      //al ser async, SIEMPRE devuelve un Promise. una vez resuelto, devolverá una posición del array de HousingLocationInfo
    return (await data.json()) ?? [];        //convierte el texto plano del .json en un objeto o array de Typescript. El await se pone debido al async
  } //el ?? es el operador null. En caso de que no devuelva información, no rompería el programa, lo consideraría null


  async getHousingLocationById(id: number): Promise<HousingLocationInfo | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    const locationJson = await data.json();
    return locationJson ?? {};
  }
  
  
  submitApplication(firstName: string, lastName: string, email: string) {     
    console.log(
    `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,   //método para poner los datos por teclado del formulario
  );
  }
}
