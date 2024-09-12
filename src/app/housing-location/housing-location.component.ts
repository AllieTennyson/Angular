import { Component, Input } from '@angular/core';
import {HousingLocation} from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: `
    <p>
      housing-location works!
    </p>
  `,
  styles: ``
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
