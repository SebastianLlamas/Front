import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Device } from '../../models/device';
import { DevicesService } from '../../services/devices.service';
import Chart from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  public aTem = 0;
  public dataTem: number;
  public dataHum: number;
  public chart;
  public device: Device;
  public userModel: User;
  constructor(
    private userService: UsersService,
    private  deviceService: DevicesService) {
      this.userModel = new User('', '', '', '', '', '');
      this.device = new Device('', '', '', '');
  }

  ngOnInit(): void {
    const Nuser = JSON.parse(localStorage.getItem('user'));
    const name = `${Nuser.name.firstname}  ${Nuser.name.lastname}`;
    document.getElementById('Usuario').innerHTML = name;
    document.getElementById('avar').setAttribute('src', `http://localhost:3000/${Nuser.image}`);


    this.chart = new Chart('chart1', {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Temperatura',
            borderColor: 'rgb(102, 203, 244)',
           // backgroundColor: 'rgb(102, 203, 244)',
            data: [33, 31, 32, 30]
          },
          {
            label: 'Humedad',
            borderColor: 'rgb(60, 179, 113)',
           // backgroundColor: 'rgb(60, 179, 113)',
            data: [27, 25, 27, 26]
          }
        ]
      },

      options: {
        responsive: true,
        legend: {
          display: true
        },
        tooltips: {
          enabled: false
        },
        scales: {
          yAxes: [
            {
              display: true
            }
          ],
          xAxes: [
            {
              display: true
            }
          ]
        }
      }
    });
    setInterval(() => {this.getLecture(); }, 4000);
  }




  closeModal(id){
    document.getElementById(id).style.display = 'none';

  }
  modal(id){
    document.getElementById(id).style.display = 'block';
  }
  newUser(){
    this.userService.addUser(this.userModel).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  newDevice(){
    this.deviceService.AddDevice(this.device).subscribe(
      res => {
      console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
  getLecture(){
    this.deviceService.lecture().subscribe(
      res => {
        this.dataTem = res[0].tem;
        this.dataHum = res[0].tem;
        this.removeData(this.chart);
        this.addData(this.chart, 0, this.dataTem);
        this.addData(this.chart, 1, this.dataHum);
        const color = (this.aTem < this.dataTem ? 'ff8800' : 'fff');
        const log = `<div class="log" style="color:#${color}">['${Date.now()}'] #${res[0].node} - Temperature has changed to ${this.dataTem}</div>`;
        const parent = document.getElementById('log');
        const logs = document.getElementsByClassName('log');
        parent.insertAdjacentHTML('beforeend', log);
        if (logs.length > 21){
          logs[0].remove();
        }
        this.aTem = this.dataTem;

      },
      error => {
        console.log(error);
      }
    );
  }

  addData(chart, dataSetIndex,  data) {
    chart.data.datasets[dataSetIndex].data.push(data);
    chart.update();
  }

  removeData(chart) {

    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
  }

  updateChartData(chart, data, dataSetIndex){
    chart.data.datasets[dataSetIndex].data = data;
    chart.update();
  }

}
