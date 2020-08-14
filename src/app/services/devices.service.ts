import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  private URL = 'https://simvu.herokuapp.com/api/sim/';
  constructor(private http: HttpClient) { }

  getDevice(user){
    return this.http.get(this.URL + `devices/${user}`);
  }

  getDevices(){
    return this.http.get(this.URL + `devices`);
  }
  AddDevice(device){
    return this.http.post<any>(this.URL + `addDevice`, device);
  }

  lecture(){
    return this.http.get(this.URL + 'getLecture');
  }
}
