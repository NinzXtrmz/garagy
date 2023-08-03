import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  apiUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) {}
  /*getAvailableparks(name:string)
  {
    console.log(name);

    this.http.get<any[]>(this.apiURL).pipe(
      map((result: any[]) =>
        result.map((item) => {
          if(name==item.city)
          {
            console.log(item.city);
            console.log(item.parkid)
            alert("place found")
            this.str1=item.city;
            this.str2=item.address;
            this.str3=item.area;
            this.str4=item.parkid;
            this.str5=item.hours;
          }
          else
          {
            alert('not found')
          }
        })
      )
    ).subscribe();*/
}
