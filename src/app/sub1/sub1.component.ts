import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component implements OnInit {
    public timeLength: number = 17;
  public timearr: string[] = [];
  public favoriteSeason: string = '染髮(1.5H)';
  public typeArr: string[] = ['剪髮(1H)', '染髮(1.5H)', '燙髮(2H)'];


  constructor() { }

  ngOnInit() {
        this.timearr = this.YCoor();
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
  public YCoor(): string[] {
    const arr: string[] = [];
    for (let i = 0; i < this.timeLength; i++) {
      const date = new Date(2017, 0, 1, 8, 30 * i);
      const date1 = new Date(2017, 0, 1, 8, 30 * (i + 1));
      arr.push(`${date.getHours()}點${date.getMinutes()}分 至 ${date1.getHours()}點${date1.getMinutes()}分`);
    }
    return arr;
  }


 /**
   * selectCheck
   */
  public selectCheck(I: number, J: number, clickI: number, clickJ: number): string {
    //  ['剪髮(1H)', '染髮(1.5H)', '燙髮(2H)']
    let index = 0;
    switch (this.favoriteSeason) {
      case '剪髮(1H)':
        index = 2;
        break;
      case '染髮(1.5H)':
        index = 3;
        break;
      case '燙髮(2H)':
        index = 4;
        break;
    }
    let check = I === clickI;
    for (let i = 1; i < index; i++) {
      check = check || I === (clickI + i);
    }
    return check && J === clickJ ? 'red' : 'black';
  }
}
