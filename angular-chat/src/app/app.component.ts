import { Component } from '@angular/core';

import { Comment } from './class/comment';
import { User } from './class/user';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

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
  // comments = COMMENTS;
  comments$: Observable<Comment[]>;
  commentsRef: AngularFireList<Comment>;
  currentUser = CURRENT_USER;
  comment = '';
  item$: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    this.item$ = db.object('/item').valueChanges();
    this.commentsRef = db.list('/comments');
    this.comments$ = this.commentsRef.valueChanges();
  }

  addComment(comment: string): void {
    this.commentsRef.push(new Comment(this.currentUser, comment));
    this.comment = '';
  }
}
