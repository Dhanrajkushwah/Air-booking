import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  constructor(private _http: HttpClient) { }
//Add User----------------------------------->
  addNotes(obj: any) {
    return this._http.post<any>(environment._api + "/api/user/travel/create", obj)
  }
 // Method to get travel information
 listTravelInfo(): Observable<any> {
  return this._http.get(`${environment._api}/api/user/travel/list`);
}

// Method to create travel information
addTravelInfo(travelData: any): Observable<any> {
  return this._http.post(`${environment._api}/api/user/travel/create`, travelData);
}
 
}
