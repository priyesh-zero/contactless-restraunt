import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScannerComponent } from './components/scanner/scanner.component'
import { RestrauntComponent } from './components/restraunt/restraunt.component'
import { QrcComponent } from './components/qrc/qrc.component'
import { OrderComponent } from './components/order/order.component'
import { MenuComponent } from './components/menu/menu.component'

const routes: Routes = [
  {
    path: '',
    component: ScannerComponent,
  },
  {
    path: 'menu',
    component: RestrauntComponent,
  },
  {
    path: 'menu/:id',
    component: QrcComponent
  },
  {
    path: 'menu/:id/:tid',
    component: MenuComponent
  },
  {
    path: 'kitchen',
    component: RestrauntComponent,
  },
  {
    path: 'kitchen/:id',
    component: OrderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
