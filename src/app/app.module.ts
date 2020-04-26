import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { ZXingScannerModule } from '@zxing/ngx-scanner';
// import { NgxKjuaModule } from 'ngx-kjua';
// import { QRCodeModule } from 'angularx-qrcode';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Modules
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list';
import { ScannerComponent } from './components/scanner/scanner.component';
import { RestrauntComponent } from './components/restraunt/restraunt.component';
import { QrcComponent } from './components/qrc/qrc.component';
import { OrderComponent } from './components/order/order.component';
import { MenuComponent } from './components/menu/menu.component'
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    ScannerComponent,
    RestrauntComponent,
    QrcComponent,
    OrderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZXingScannerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    NgxQRCodeModule
    // NgxKjuaModule,
    // QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
