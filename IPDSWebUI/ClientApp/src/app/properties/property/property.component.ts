import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { IpdsPropertiesService } from '../../shared/ipds-properties.service';
import { Property } from '../../shared/property.model';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styles: []
})
export class PropertyComponent implements OnInit {

  prop: Property;

  constructor(private service: IpdsPropertiesService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      if (id > 0) {
        this.getProperty(id);
        this.prop = this.service.property;
      }
      else
        this.prop == null;
        
    }
  }

  getProperty(id: number) {
    this.service.getProperty(id);
  }

  onSubmit(form: NgForm) {
    if (this.service.property == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    else
      this.service.property = null;
  }
   
  updateRecord(form: NgForm) {
    this.service.putProperty().subscribe(
      res => {
        //this.resetForm(form);
        this.toastr.success('Updated successfully', 'Property Code: ' + this.service.property.PropertyCode);
      },
      err => {
        console.log(err);
      });
  }

  insertRecord(form: NgForm) {
    this.service.postProperty().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'New Property');
      },
      err => {
        console.log(err);
      });
  }

  onBack(): void {
    this.router.navigate(['/properties']);
  }

}
