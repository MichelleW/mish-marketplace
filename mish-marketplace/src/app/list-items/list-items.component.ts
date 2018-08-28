import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  items: any;
  item: any;
  msg: any

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.items = [];
    this.msg = "";
    this.getAllItems();
  }


  

  getAllItems() {
    this._dataService.getAllItems()
      .subscribe(
        (response) => {
          console.log('response :', response);
          this.items = response;
          this._router.navigate(['/listing']);
        },
        (err) => { console.log('product component err :', err); }
      )
  }


}
