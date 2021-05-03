import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  { path:'home' , component: DummyComponent },
  { path:'callforpaper' , component: DummyComponent },
  { path:'papersubmission' , component: DummyComponent },
  { path:'indexing' , component: DummyComponent },
  { path:'ssrgjournals' , component: DummyComponent },
  { path:'editorialboard' , component: DummyComponent },
  { path:'contactus' , component: DummyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
