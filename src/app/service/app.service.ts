import { Injectable } from '@angular/core';
import db from '../../db'
@Injectable({
  providedIn: 'root'
})
export class AppService {

  private app_data: any
  public orders: any[] = []

  constructor() {
    this.app_data = db
  }

  getRestrauntList() {
    return this.app_data.restraunts.map(restraunt => ({ id: restraunt.id, name: restraunt.name }))
  }

  getMenuItems(restrauntId) {
    return this.app_data.restraunts.find(restraunt => restraunt.id == restrauntId).menu
  }

  getTableList(restrauntId) {
    return this.app_data.restraunts.find(restraunt => restraunt.id == restrauntId).tables
  }

  getTableNumber(rid, tid) {
    let restraunt = this.app_data.restraunts.find(restraunt => restraunt.id == rid)
    let table = restraunt.tables.find(table => table.id == tid)
    return [restraunt.name, table.tableNo]
  }

  placeOrder(restrauntId, tableId, order) {
    let orderExist = this.orders.find(order => order.restrauntId == restrauntId && order.tableId == tableId) 
    if (orderExist) {
      this.orders = this.orders.map(order => {
        if (order.tableId == orderExist.tableId) {
          order.order = order
        }
        return order
      })
    } else {
      const [rName, tNo] = this.getTableNumber(restrauntId, tableId)
      this.orders = [ ...this.orders, { restrauntId, tableId, order, tableNo: tNo, restrauntName: rName } ]
    }
  }
}
