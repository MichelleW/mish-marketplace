import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  }

}
