import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  member = '田中太郎';

  constructor() { }

  ngOnInit(): void { // ライフサイクルメソッド：  コンポーネントが初期化する時に起動するメソッド
  }

}
