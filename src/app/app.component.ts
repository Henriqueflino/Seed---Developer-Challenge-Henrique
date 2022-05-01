import { Component, OnInit, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if (display == 'none') document.getElementById(el).style.display = 'block';
  }

  ngOnInit() {
    // Simple GET request with response type <any>
    this.http
      .get<any>('http://localhost:3000/?busca=CMRG1')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
