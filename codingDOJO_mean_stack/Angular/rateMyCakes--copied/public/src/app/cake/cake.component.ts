import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-cake",
  templateUrl: "./cake.component.html",
  styleUrls: ["./cake.component.css"]
})
export class CakeComponent implements OnInit {
  @Input() cakeDetailFromHome: any;
  average_rating: number;
  constructor() {}

  ngOnInit() {
    this.average_rating = 0;
    // this.cakeDetailFromHome.comment = [];
    this.calculateAverage();
  }

  calculateAverage(): void {
    if (this.cakeDetailFromHome) {
      var comment_list = this.cakeDetailFromHome.comment;
      console.log("this.cakeDetailFromHome: ", this.cakeDetailFromHome);
      var sum: number = 0;
      for (var i in comment_list) {
        sum += comment_list[i].rate;
      }
      console.log(sum);
      console.log(comment_list);
      var result = sum / comment_list.length;
      result *= 10;
      result = Math.round(result);
      result /= 10;
      this.average_rating = result;
    }
  }
}
