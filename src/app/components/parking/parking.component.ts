import { Component, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./bootstrap.min.css', './parking.component.css'],
})
export class ParkingComponent {
  constructor(private http: HttpClient, private elementRef: ElementRef) {}

  isSearchClicked = false;
  found: boolean = false;

  private endpoint1: string = 'getallfree';
  private endpoint2: string = 'updateparkvalue';
  private _URL: string = `http://localhost:4000/`;

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

  updatePark() {
    this.isempty = 0;
    const data: { isEmpty: Number; id: Number } = {
      isEmpty: this.isempty,
      id: this.Id,
    };
    this.postData(this._URL + this.endpoint2, data);
    console.log(this._URL + this.endpoint2);
  }
}
