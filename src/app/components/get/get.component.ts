import { Component, OnInit } from '@angular/core';
import { FeesService } from '../../providers/fees.service';
import { Fees } from '../../providers/fees';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  feesList: Fees[];
  constructor(private router: Router,private fees: FeesService) { }

  ngOnInit() {
    var x = this.fees.getFees();
    x.snapshotChanges().subscribe(item => {
      this.feesList = []
      item.forEach(element => {
        var y = element.payload.toJSON()
        y["$key"] = element.key;
        this.feesList.push(y as Fees)
      })
    })

  }

  OnUpdate(fee: Fees) {
    this.fees.feesSelected = Object.assign({}, fee)
    this.router.navigate(['/add'])
  }

  onDelete(key: string) {
    this.fees.deleteFees(key);
  }



}
