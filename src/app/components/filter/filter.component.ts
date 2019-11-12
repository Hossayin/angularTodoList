import { Component, OnInit } from "@angular/core";
import { TodoService } from "../../services/todo.service";
@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onChange(e) {
    // TodoService.filterTodos(e)
  }
}
