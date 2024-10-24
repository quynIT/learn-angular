import { Routes } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';

export const routes: Routes = [
    { path: 'child', component:  ChildComponent } ,
    { path: 'parent', component:  ParentComponent } 
];
