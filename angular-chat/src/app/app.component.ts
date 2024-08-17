import { Component } from '@angular/core';

import { Comment } from './class/comment';
import { User } from './class/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList, SnapshotAction } from '@angular/fire/database';

const CURRENT_USER: User = new User(1, 'Kou Ackerman');
const ANOTHER_USER: User = new User(2, 'Levi Ackerman');

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments$: Observable<Comment[]>;
  commentsRef: AngularFireList<Comment>;
  currentUser = CURRENT_USER;
  comment = '';
  item$: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    this.item$ = db.object('/item').valueChanges();
    this.commentsRef = db.list('/comments');
    this.comments$ = this.commentsRef.snapshotChanges()
      .pipe(
        map((snapshots: SnapshotAction<Comment>[]) => {
          return snapshots.map(snapshot => {
            const value = snapshot.payload.val();
            return new Comment({ key: snapshot.payload.key, ...value });
          })
        })
      )
  }

  addComment(comment: string): void {
    this.commentsRef.push(new Comment({ user: this.currentUser, message: comment }));
    this.comment = '';
  }
}
