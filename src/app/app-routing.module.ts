import { IntroductionMenuComponent } from './introduction-menu/introduction-menu.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Sub1Component } from './sub1/sub1.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'sub1', component: Sub1Component },
    {
        path: 'introduction', component: IntroductionMenuComponent, children: [
            { path: '', redirectTo: 'ALL', pathMatch: 'full' },
            { path: 'ALL', component: IntroductionComponent, data: { man: 'ALL' } },
            { path: 'Tony', component: IntroductionComponent, data: { man: 'Tony' } },
            { path: 'ABC', component: IntroductionComponent, data: { man: 'ABC' } }
        ]
    },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }