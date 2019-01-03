import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Fees } from '../providers/fees';

@Injectable({
  providedIn: 'root'
})
export class FeesService {
  feesList: AngularFireList<any>;
  feesSelected: Fees = new Fees();
  constructor(private db: AngularFireDatabase) { 
    this.feesList = this.db.list('/fees')
  }

  getFees() {

    return this.feesList
  }

  AddFees(fees: Fees) {
    this.feesList.push({
      studentName: fees.studentName,
      fatherName: fees.fatherName,
      class: fees.class,
      rollNo: fees.rollNo,
      section: fees.section,
      admissionFees: fees.admissionFees,
      annualFees: fees.annualFees,
      stationaryCharges: fees.stationaryCharges,
      CardCharges: fees.CardCharges,
      MonthlyFees: fees.MonthlyFees,
    })
  }

  UpdateFees(fees: Fees) {
    this.feesList.update(fees.$key, {
      studentName: fees.studentName,
      fatherName: fees.fatherName,
      class: fees.class,
      rollNo: fees.rollNo,
      section: fees.section,
      admissionFees: fees.admissionFees,
      annualFees: fees.annualFees,
      stationaryCharges: fees.stationaryCharges,
      CardCharges: fees.CardCharges,
      MonthlyFees: fees.MonthlyFees,
    })
  }

  deleteFees($key: string) {
    this.feesList.remove($key);
  }

}
