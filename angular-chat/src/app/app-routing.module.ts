import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { NotFuundComponent } from './core/components/not-fuund/not-fuund.component';

const routes: Routes = [
  { path: '', component: ChatComponent },
  { path: '**', component: NotFuundComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
  ,exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
