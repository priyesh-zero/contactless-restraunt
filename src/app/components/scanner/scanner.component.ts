import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onDecode(result) {
    console.log(result)
    this._router.navigate(['/menu/'+result])
  }

}
