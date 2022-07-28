import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  getUserTest(id: any){
    return this.http.get(`${environment.baseUrl}/users/${id}`, {headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }});
  }

  getAllUsersTest(){
    return this.http.get(`${environment.baseUrl}/users`, {headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }});
  }

  getAllUsersPaginated(page: any, size: any){
    return this.http.get(`${environment.baseUrl}/users?page=${page}&per_page=${size}`, {headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }});
  }

  addUser(payload: any){
    return this.http.post<any>(`${environment.baseUrl}/users`, payload, {headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }});
  }

  updateUser(payload: any, id: any){
    return this.http.put<any>(`${environment.baseUrl}/users/${id}`, payload, {headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }});
  }

  deleteUser(id: any){
    return this.http.delete(`${environment.baseUrl}/users/${id}`, {headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }});
  }

  // get location
  getPosition(): Promise<any>{
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });
  }

  //get place in location
  getPlace(long: any, latt: any){
    return this.http.get(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=${long},${latt}`)
  }

}
