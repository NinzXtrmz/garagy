import { Component, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./bootstrap.min.css', './parking.component.css'],
})
export class ParkingComponent {
  constructor(private http: HttpClient, private elementRef: ElementRef) {}

  isSearchClicked = false;
  found: boolean = false;
  checked: boolean = false;
  book: boolean = true;
  price = 0.0;
  firstHour: number = 0.0;
  lastHour: number = 0.0;
  firstMinute: number = 0.0;
  lastMinute: number = 0.0;
  timeSpent: number = 0.0;
  firstAM: boolean = false;
  firstPM: boolean = false;
  lastAM: boolean = false;
  lastPM: boolean = false;

  private endpoint1: string = 'getallfree';
  private endpoint2: string = 'updateparkvalue';
  private _URL: string = `https://0a5a-62-193-67-178.ngrok.io/`;

  str1: string = '';
  str2: string = '';
  str3: string = '';
  str4: string = '';
  str5: string = '';
  str6: string = '';

  isempty: Number = 1;
  Id: Number = 0;

  getAvailableparks(name: string) {
    console.log(name);

    this.http
      .get<any[]>(this._URL + this.endpoint1)
      .pipe(
        map((result: any[]) =>
          result.map((item) => {
            if (name == item.city && item.isEmpty == 1) {
              console.log(item.city);
              console.log(item.parkid);
              this.str1 = item.city;
              this.str2 = item.address;
              this.str3 = item.area;
              this.str4 = item.parkid;
              this.str5 = item.hours;
              this.str6 = item.isEmpty;
              this.isempty = item.isEmpty;
              this.Id = item.id;
              this.isSearchClicked = true;
              this.found = true;
              console.log(this.Id);
              console.log(this.isempty);
            }
          })
        )
      )
      .subscribe(() => {
        if (this.found) {
          alert('Place found'); // Display "Place found" alert if an item is found
        } else {
          alert('Not found'); // Display "Not found" alert if no items match the search criteria
        }
      });
  }

  postData(url: string, data: any): Promise<any> {
    console.log(data);
    return fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((error) => console.error('Error:', error));
  }
  openForm() {
    this.book = true;
  }
  updatePark() {
    this.isempty = 0;
    const data: { isEmpty: Number; id: Number } = {
      isEmpty: this.isempty,
      id: this.Id,
    };
    this.postData(this._URL + this.endpoint2, data);
    console.log(this._URL + this.endpoint2);
    this.book = false;
  }
  getPrice() {
    if (this.firstPM && this.firstHour != 12) {
      this.firstHour = +12 + +this.firstHour;
    }
    if (this.lastPM && this.lastHour != 12) {
      this.lastHour = +12 + +this.lastHour;
    }
    console.log(this.firstHour);
    this.timeSpent =
      (this.lastHour +
        this.lastMinute / 6 -
        (this.firstHour + this.firstMinute / 6)) /
      10;

    this.price = 50 + Math.ceil(this.timeSpent - 1) * 40;
    this.checked = true;
    return this.price;
  }
  closeForm() {
    this.book = false;
  }
}
