import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  man = 'ALL';

  constructor(private act_route: ActivatedRoute) { }

  ngOnInit() {
    this.act_route.url.subscribe(x => {
      this.man = x[0].path;
       console.log(x[0].path);
    });
  }


  public get isAll(): boolean {
    return this.man === 'ALL';
  }

  public get isTony(): boolean {
    return this.man === 'Tony';
  }

  public get isABC(): boolean {
    return this.man === 'ABC';
  }

}
