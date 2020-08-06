import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getCakes() {
    let tempObservable = this._http.get("api/cakes");
    tempObservable.subscribe(data => console.log("Got our cakes!", data));
    return this._http.get("/api/cakes");
  }
  getOneCake(cake_id) {
    return this._http.get(`/api/cakes/${cake_id}`);
  }
  addCake(newCake) {
    console.log(newCake);
    return this._http.post("/api/cakes", newCake);
  }
  addComment(newComment, cake_id) {
    return this._http.post(`/api/comments/${cake_id}`, newComment);
  }
}
