import { Component } from '@angular/core';
import { CommonService } from './common.service';
import { Transform } from 'stream';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
   IsChangeLocation=false;
  TodayDate: Date;
  weatherData: any;
  cityName: any;


  constructor(private service:CommonService){
   this.TodayDate=new Date();
  }
  changeLocation(){
    this.IsChangeLocation=this.IsChangeLocation==true?false:true;
  }
  getWeatherDataByCity(){
    debugger
  
var city=$("#CityName").val();
this.service.getWeatherData(city).subscribe(data=>{
  this.cityName=city;
   console.log('data',data)
   this.weatherData=data;
  })
}
transform(value:number):number{
  return Math.round(value);
}
  
}
