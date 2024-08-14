import { Component } from '@angular/core';

import { Comment } from './class/comment';
import { User } from './class/user';

const CURRENT_USER: User = new User(1, 'Kou Ackerman');
const ANOTHER_USER: User = new User(2, 'Levi Ackerman');

const  COMMENTS: Comment[] = [
  new Comment( CURRENT_USER, 'Hi'),
  new Comment( CURRENT_USER, 'Long time no see!'),
  new Comment( ANOTHER_USER, 'Hello again!'),
  new Comment( ANOTHER_USER, 'Did u finish reading all these AOT manga?'),
]

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = COMMENTS;
  currentUser = CURRENT_USER;
}
