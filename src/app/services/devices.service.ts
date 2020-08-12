import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  private URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getDevices(){
    return this.http.get(this.URL + 'devices');
  }
  AddDevice(device){
    return this.http.post<any>(this.URL + 'addDevice', device);
  }
}
