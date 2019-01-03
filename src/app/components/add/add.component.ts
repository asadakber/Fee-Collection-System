import { Component, OnInit } from '@angular/core';
import { FeesService } from '../../providers/fees.service'
import { Fees } from '../../providers/fees';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private fees: FeesService) { }

  ngOnInit() {
    this.resetForm()
  }

  onSubmit(addform: NgForm) {
    if(addform.value.$key == null) {
      this.fees.AddFees(addform.value)
    }
    else {
      this.fees.UpdateFees(addform.value)
      this.resetForm(addform)
    }
  }

  resetForm(addform?: NgForm) {
    if(addform != null) 
    addform.reset();
    this.fees.feesSelected = {
      $key: null,
      studentName: '',
      fatherName: '',
      class: '',
      rollNo: 0,
      section: '',
      admissionFees: 0,
      annualFees: 0 ,
      stationaryCharges: 0,
      CardCharges: 0,
      MonthlyFees: 0,
    }
  }

  

}
