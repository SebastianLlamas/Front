import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  private URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getDevices(user){
    return this.http.get(this.URL + `devices/${user}`);
  }
  AddDevice(device){
    return this.http.post<any>(this.URL + `addDevice`, device);
  }

  lecture(){
    return this.http.get(this.URL + 'getLecture');
  }
}
