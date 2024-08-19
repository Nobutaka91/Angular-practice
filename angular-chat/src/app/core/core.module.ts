import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from '../../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { NotFuundComponent } from './components/not-fuund/not-fuund.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, NotFuundComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
