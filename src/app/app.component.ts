import { Component, OnInit, ViewEncapsulation,
   } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // Angular2 Component styles 有三種模式
  // 1. ViewEncapsulation.None: 適用於全部頁面 (No Shadow DOM)
  // 2. ViewEncapsulation.Native: 僅套用於 Shadow DOM 自己本身
  // 3. ViewEncapsulation.Emulated: 預設行為。會自動將每個 component 給予一個
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'Tony 美髮事業網站(預約功能)';

  constructor() {
  }

  ngOnInit() {

  }

}
