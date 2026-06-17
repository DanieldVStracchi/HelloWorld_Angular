import {ChangeDetectorRef ,Component, inject } from '@angular/core';
import {HousingLocation} from '../housing-location/housing-location';
import {HousingLocationInfo} from '../housinglocation';
import {HousingService} from '../housing';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styles: ``,
  styleUrls: ['./home.css'],
  
})

export class Home {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

   housingLocationList: HousingLocationInfo[] = [] 
    
   housingService: HousingService = inject(HousingService);

  isAvailable: boolean = false;

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocationInfo[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
        this.changeDetectorRef.markForCheck();
      });
  }

  onKeyUp(event: Event)
  {
    this.isAvailable= true;
  };
  
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
    this.isAvailable= false;
  }

  filteredLocationList: HousingLocationInfo[] = [];

}
