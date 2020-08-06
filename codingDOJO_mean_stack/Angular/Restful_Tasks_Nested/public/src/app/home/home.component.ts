import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  allTasks: any;
  oneTask: any;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.allTasks = [];
    this.oneTask = {};

    // this.getTasksFromService();
  }

  getTasksFromService(): void {
    let obs = this._httpService.getTasks();
    obs.subscribe((data: any) => {
      this.allTasks = data.results;
    });
  }

  getDetails(task_id): void {
    let obs_one = this._httpService.getOneTask(task_id);
    obs_one.subscribe((data: any) => {
      this.oneTask = data.results;
    });
  }

  // onButtonClick(): void {
  //   console.log(`Click event is working`);
  // }
  // onButtonClickParam(num: Number): void {
  //   console.log(`Click event is working with num param: ${num}`);
  // }
  // onButtonClickParams(num: Number, str: String): void {
  //   console.log(
  //     `Click event is working with num param: ${num} and str param: ${str}`
  //   );
  // }
  // onButtonClickEvent(event: any): void {
  //   console.log(`Click event is working with event: ${event}`);
  // }
}
