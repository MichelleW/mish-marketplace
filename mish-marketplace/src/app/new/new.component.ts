import { DataService } from './../data.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  //declear a var to hold the newly created product
  newItemObj: any;
  //var to hold a single item
  newItem: any;
  msg:any


  constructor(private _route:ActivatedRoute, private _router: Router, private _dataService: DataService) { }

  ngOnInit() {
    // create a dummy newItemObj for the inital data loading on html page

    this.newItemObj = { name: "", description: "",price: 0,imgUrl: "", likes:10, comments:88  };   
    
    this.msg = "";
  }


  addNewItem(){
    //first line gets an observable, second line: subscribe to the observable
    this._dataService.addNewItem(this.newItemObj)
    .subscribe(
      (response)=>{
        if(response['errors']){
          console.log('res in addNewItem()',response);
          this.msg = response['errors'];
          console.log('err msg ', this.msg)
          // response['errors']['errors']['desciption'];
        }
        else{
          console.log('err in addNewItem:');
          this._router.navigate(['/listing']);
          // this.goToPets();
        }
        
      },
      (error) => {
        console.log('here', error);
        this.msg = error;
      }
    );
  }









}
