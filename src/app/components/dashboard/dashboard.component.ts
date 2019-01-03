import { Component, OnInit } from '@angular/core';
import { FeesService } from '../../providers/fees.service';
import { Fees } from '../../providers/fees';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  feesList: Fees[];
  constructor(private authservice: AuthService,private fees: FeesService) { }

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

  logout() {
    this.authservice.signout();
  }

}
