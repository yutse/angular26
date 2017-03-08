import { Component, OnInit, ViewEncapsulation,
   trigger, style, state, transition, animate // 動畫物件
   } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
// import { Sub1Component} from './sub1/sub1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [Sub1Component],
  // Angular2 Component styles 有三種模式
  // 1. ViewEncapsulation.None: 適用於全部頁面 (No Shadow DOM)
  // 2. ViewEncapsulation.Native: 僅套用於 Shadow DOM 自己本身
  // 3. ViewEncapsulation.Emulated: 預設行為。會自動將每個 component 給予一個
  encapsulation: ViewEncapsulation.None,
  // https://www.youtube.com/watch?v=IpfP-eR0amM
  animations:[
    // trigger('ative',[state()] )
  ]
})
export class AppComponent implements OnInit {
  title = 'Tony 美髮事業網站(預約功能)';
  items$: FirebaseListObservable<any[]>;
  item$: FirebaseObjectObservable<any>;

  constructor(af: AngularFire) {
    this.items$ = af.database.list('tonyitems');
    this.item$ = af.database.object('tonyitems/ttt');
  }

  ngOnInit() {

  }

}
