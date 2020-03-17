import { Component, OnInit } from '@angular/core';
import { IpdsPropertiesService } from '../shared/ipds-properties.service';
import { Property } from '../shared/property.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  display = 'none';

  constructor(private service: IpdsPropertiesService,
    private router: Router) { }

  ngOnInit() {
    this.service.getProperties();
  }

  onClick(property: Property) {
    //this.service.property = property;
    this.service.getProperty(property.PropertyID);
    this.display = 'block';
  }

  hideProperty() {
    this.display = 'none';
  }

  public goToPropertyDetails(url, id) {

    var myurl = `${url}/${id}`;
    this.router.navigateByUrl(myurl).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

}
