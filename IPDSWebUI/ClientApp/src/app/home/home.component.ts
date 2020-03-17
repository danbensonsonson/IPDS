import { Component } from '@angular/core';
import { IpdsPropertiesService } from '../shared/ipds-properties.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private service: IpdsPropertiesService) { }

  searchTerms: string;

  onSubmit(value) {
    this.searchTerms = value;
    this.service.getProperties(this.searchTerms);
    //console.log(this.searchTerms);
  }
}
