import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getTasks() {
    let tempObservable = this._http.get("api/tasks");
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get("/api/tasks");
  }

  addTask(newTask) {
    return this._http.post("/api/tasks", newTask);
  }

  getOneTask(task_id) {
    return this._http.get(`/api/tasks/${task_id}`);
  }

  deleteTask(task_id) {
    return this._http.delete(`/api/tasks/${task_id}`);
  }

  updateTask(updatedTask) {
    return this._http.put(`/api/tasks/${updatedTask._id}`, updatedTask);
  }
}
