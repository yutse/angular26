import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Sub1Component} from './sub1/sub1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Sub1Component],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'Tony 美髮事業網站(預約功能)';
  items$: FirebaseListObservable<any[]>;
  item$: FirebaseObjectObservable<any>;
  // public timeLength: number = 17;
  // public timearr: string[] = [];
  // public favoriteSeason: string = '染髮(1.5H)';
  // public typeArr: string[] = ['剪髮(1H)', '染髮(1.5H)', '燙髮(2H)'];


  constructor(af: AngularFire) {
    this.items$ = af.database.list('tonyitems');
    this.item$ = af.database.object('tonyitems/ttt');
  }

  ngOnInit() {
    // let data = this.items$.push({
    //   name: 'tony',
    //   descript: 'Hello World'
    // });

    // let key = data.key;
    // this.timearr = this.YCoor();
  }

  /**
   * 星期轉換
   */
  public WeekToWord(J: number): string {
    const str = '星期';
    const word = ['一', '二', '三', '四', '五', '六', '天'];
    return str + word[J];
  }

  /**
   * 時間軸
   */
  // public YCoor(): string[] {
  //   let arr: string[] = [];
  //   for (let i = 0; i < this.timeLength; i++) {
  //     let date = new Date(2017, 0, 1, 8, 30 * i);
  //     let date1 = new Date(2017, 0, 1, 8, 30 * (i + 1));
  //     arr.push(`${date.getHours()}點${date.getMinutes()}分 至 ${date1.getHours()}點${date1.getMinutes()}分`);
  //   }
  //   return arr;
  // }

  /**
   * selectCheck
   */
  // public selectCheck(I: number, J: number, clickI: number, clickJ: number): string {
  //   //  ['剪髮(1H)', '染髮(1.5H)', '燙髮(2H)']
  //   let index = 0;
  //   switch (this.favoriteSeason) {
  //     case '剪髮(1H)':
  //       index = 2;
  //       break;
  //     case '染髮(1.5H)':
  //       index = 3;
  //       break;
  //     case '燙髮(2H)':
  //       index = 4;
  //       break;
  //   }
  //   let check = I === clickI;
  //   for (let i = 1; i < index; i++) {
  //     check = check || I === (clickI + i);
  //   }
  //   return check && J === clickJ ? 'red' : 'black';
  // }



}
