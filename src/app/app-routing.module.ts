import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FadeComponent } from './components/fade/fade.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { SlideComponent } from './components/slide/slide.component';

const routes: Routes = [
  {
    path: 'parallax',
    component: ParallaxComponent
  },
  {
    path: 'slide',
    component: SlideComponent
  },
  {
    path: 'fade',
    component: FadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
