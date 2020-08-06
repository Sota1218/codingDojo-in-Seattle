import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getPets() {
    let tempObservable = this._http.get("api/Pets");
    tempObservable.subscribe(data => console.log("Got our Pets!", data));
    return this._http.get("/api/Pets");
  }
  getOnePet(Pet_id) {
    return this._http.get(`/api/Pets/${Pet_id}`);
  }
  addPet(newPet) {
    console.log(newPet);
    return this._http.post("/api/Pets", newPet);
  }
  updatePet(updatedPet, id) {
    return this._http.put(`/api/Pets/${id}`, updatedPet);
  }
  deletePet(id: any) {
    console.log(id);
    return this._http.delete(`/api/Pets/${id}`);
  }
}
