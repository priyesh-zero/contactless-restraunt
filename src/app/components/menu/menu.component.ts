import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AppService } from '../../service/app.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _service: AppService) { }

  menuItems: any[]
  selectedItems = []
  placeItems = []
  totalPrice = 0
  restrauntId: string = ''
  tableId: string = ''
  ngOnInit() {
    this._route.paramMap.subscribe(param => {
      this.restrauntId = param.get('id')
      this.tableId = param.get('tid')
      this.menuItems = this._service.getMenuItems(this.restrauntId)
    })
  }

  onSelectionChange({option}) {
    this.selectedItems = option.selectionList.selectedOptions.selected.map(opt => opt.value)
  }

  onOrderPlace() {
    this.selectedItems.forEach(item => {
      let exitItem = this.placeItems.find(pItem => pItem.id == item)
      if (exitItem) {
        this.placeItems = this.placeItems.map(pItem => {
          if (pItem.id == exitItem.id) {
            let unitPrice = pItem.price / pItem.count
            pItem.count++
            pItem.price = unitPrice*pItem.count
          }
          return pItem
        })
      } else {
        let menuItem = this.menuItems.find(i => i.id == item)
        this.placeItems = [...this.placeItems, { id: menuItem.id, name: menuItem.name, count: 1, price: menuItem.price}]
      }
    })
    this.totalPrice = this.placeItems.reduce((a, i) => a + i.price, 0)
    this._service.placeOrder(this.restrauntId, this.tableId, this.placeItems)
  }

}
