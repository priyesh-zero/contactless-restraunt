import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AppService } from '../../service/app.service'
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit {

  constructor(private _route: ActivatedRoute, public service: AppService) { }

  restrauntId: string = ''

  ngOnInit() {
    this._route.paramMap.subscribe(param => {
      this.restrauntId = param.get('id')
    })
  }

  sortOrder(orders) {
    return orders.filter(order => order.restrauntId == this.restrauntId)
  }
}
