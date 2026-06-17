import { Component, input, linkedSignal } from '@angular/core';
import {HousingLocationInfo} from '../housinglocation'; //para llamar a otros archivos y poderlos utilizar en éste archivo, pensar como una clase al llamar distintos métodos
import {RouterLink} from '@angular/router';

@Component({  //Componente que decine el thumbnail de cada casa, con foto,localización y enlace para acceder a los detalles de la casa en cuestión
  selector: 'app-housing-location',
  imports: [RouterLink], 
  template: ` 
    <section class="listing"> 
      <img
        class="listing-photo"
        [src]="housingLocation().photo"
        alt="Exterior photo of {{ housingLocation().name }}"
        crossorigin
      />
      
      <h2 class="listing-heading">{{ housingLocation().name }}</h2>   <!-- cabecera con el nombre de la casa-->
      <p class="listing-location">{{ housingLocation().city }}, {{ housingLocation().state }}</p> <!-- localización -->
      <a [routerLink]="['/details', housingLocation().id]">Learn More</a> <!-- enlace para acceder a los detalles -->
    </section>
  `,
  styles: ``,
  styleUrls: ['./housing-location.css'],  //hace referencia a la hora de estilos css 

})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
