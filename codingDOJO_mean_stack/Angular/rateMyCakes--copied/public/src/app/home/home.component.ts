import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { CakeComponent } from "../cake/cake.component";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  allCakes: any;
  oneCake: any;
  wrong: boolean;
  newCake: any;
  newComment: any;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.allCakes = [];
    // this.oneCake = {};
    this.wrong = false;
    this.newComment = { rate: "", comment: "" };
    this.newCake = { baker_name: "", image: "" };
    this.getCakesFromService();
  }

  getCakesFromService(): void {
    let obs = this._httpService.getCakes();
    obs.subscribe((data: any) => {
      this.allCakes = data.results;
    });
  }

  getDetails(cake_id): void {
    this.oneCake = null;
    let obs_one = this._httpService.getOneCake(cake_id);
    obs_one.subscribe((data: any) => {
      console.log(data.results);
      this.oneCake = data.results;
    });
  }

  createCake(cakeToCreate) {
    console.log(cakeToCreate);
    let obs = this._httpService.addCake(cakeToCreate);
    obs.subscribe((data: any) => {
      if (data.message == "success") {
        this.wrong = false;
        this.getCakesFromService();
        this.newCake = { baker_name: "", image: "" };
      } else {
        this.wrong = true;
      }
    });
  }

  createComment(commentToCreate, cake_id) {
    console.log(commentToCreate);
    let obs = this._httpService.addComment(commentToCreate, cake_id);
    obs.subscribe((data: any) => {
      if (data.message == "success") {
        this.wrong = false;
        this.getDetails(cake_id);
        this.newComment = { rate: "", comment: "" };
      } else {
        this.wrong = true;
      }
    });
  }
}
