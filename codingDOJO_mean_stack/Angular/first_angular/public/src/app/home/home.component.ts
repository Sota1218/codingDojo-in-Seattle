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
  wrong: boolean;
  newTask: any;
  editTask: any;
  isVisible: boolean;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.allTasks = [];
    this.oneTask = {};
    this.wrong = false;
    this.newTask = { title: "", description: "" };
    this.isVisible = false;
    this.editTask = { _id: "", title: "", description: "" };
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

  createTask(taskToCreate) {
    console.log(taskToCreate);
    let obs = this._httpService.addTask(taskToCreate);
    obs.subscribe((data: any) => {
      if (data.message == "success") {
        this.wrong = false;
        this.getTasksFromService();
        // this.newTask = { title: "", description: "" };
      } else {
        this.wrong = true;
      }
    });
  }
  updateTask(taskToEdit) {
    console.log(taskToEdit);
    this.editTask.title = taskToEdit.title;
    this.editTask.description = taskToEdit.description;
    let obs = this._httpService.updateTask(this.editTask);
    obs.subscribe((data: any) => {
      if (data.message == "success") {
        this.wrong = false;
        this.getTasksFromService();
        // this.newTask = { title: "", description: "" };
      } else {
        this.wrong = true;
      }
    });
  }
  deleteTask(id) {
    let obs = this._httpService.deleteTask(id);
    obs.subscribe((data: any) => {
      if (data.message == "success") {
        this.wrong = false;
        this.getTasksFromService();
      } else {
        this.wrong = true;
      }
    });
  }

  makeVisible(id) {
    this.getDetails(id);
    this.editTask._id = id;
    this.isVisible = true;
  }

  // deleteOne(task_id): void{

  // }

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
