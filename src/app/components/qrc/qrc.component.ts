import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AppService } from './../../service/app.service'
@Component({
  selector: 'app-qrc',
  templateUrl: './qrc.component.html',
  styleUrls: ['./qrc.component.scss']
})
export class QrcComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _service: AppService) { }

  restrauntId: string = ''
  tables: any[]

  ngOnInit() {
    this._route.paramMap.subscribe(param => {
      this.restrauntId = param.get('id')
      this.tables = this._service.getTableList(param.get('id'))
    })
  }

  getMenuUrl(tableId) {
    return `${this.restrauntId}/${tableId}`
  }

}
