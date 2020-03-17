import { Inject, Injectable } from '@angular/core';
import { Property } from './property.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IpdsPropertiesService {
  property: Property | undefined;
  properties: Property[];
  constructor(private http: HttpClient, @Inject('API_URL') private baseUrl: string) { }
  request: string;

  getProperties(searchTerms?: string) {
    this.request = "properties";
    if (searchTerms != null && searchTerms.length > 0) {
      this.request += "?search=" + searchTerms;
    }
    this.http.get<Property[]>(this.baseUrl + this.request).subscribe(result => {
      this.properties = result;
    }, error => console.error(error));
    
  }

  //searchProperties(searchTerms: string) {
  //  this.request = "properties";
  //  if (searchTerms != null && searchTerms.length > 0) {
  //    this.request += "?search=" + searchTerms;
  //  }
  //  this.http.get<Property[]>(this.baseUrl + this.request).subscribe(result => {
  //    this.properties = result;
  //  }, error => console.error(error));
  //}

  getProperty(id: number) {
    this.http.get<Property>(this.baseUrl + 'properties/' + id).subscribe(result => {
      this.property = result;
    }, error => console.error(error));
  }

  putProperty() {
    return this.http.put(this.baseUrl + 'properties/' + this.property.PropertyID, this.property);
  }

  postProperty() {
    return this.http.post(this.baseUrl + 'properties', this.property);
  }

}
