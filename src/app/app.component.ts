import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tony 美髮事業網站';
  items$: FirebaseListObservable<any[]>;
  item$: FirebaseObjectObservable<any>;

  constructor(af: AngularFire) {
   this.items$ =  af.database.list('tonyitems');
   this.item$ =  af.database.object('tonyitems/ttt');
  }

  ngOnInit() {
    // let data = this.items$.push({
    //   name: 'tony',
    //   descript: 'Hello World'
    // });

    // let key = data.key;
  }

}
