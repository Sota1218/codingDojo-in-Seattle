import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private _httpService: HttpService) {}

  ngOnInit() {}
  // getCityWeatherFromService(){
  //   let obs = this._httpService.getCakes();
  //   obs.subscribe((data: any) => {
  //     this.allCakes = data.results;
  //   });
  // }
}
