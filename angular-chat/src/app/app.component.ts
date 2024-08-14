import { Component } from '@angular/core';

import { Comment } from './class/comment';

const  COMMENTS: Comment[] = [
  { name: 'Kou Ackerman', message: 'Hi'},
  { name: 'Kou Ackerman', message: 'Long time no see!'},
  { name: 'Kou Ackerman', message: 'Did u finish reading all these AOT manga?'},
]

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = COMMENTS;
}
