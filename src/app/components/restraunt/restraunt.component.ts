import { Component, OnInit } from '@angular/core';

import {AppService} from '../../service/app.service'

@Component({
  selector: 'app-restraunt',
  templateUrl: './restraunt.component.html',
  styleUrls: ['./restraunt.component.scss']
})
export class RestrauntComponent implements OnInit {

  Restraunts: any[]

  constructor(private service: AppService) { }

  ngOnInit() {
    this.Restraunts = this.service.getRestrauntList()
  }

}
