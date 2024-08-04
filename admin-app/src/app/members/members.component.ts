import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MEMBERS } from '../mock-members';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members = MEMBERS; // 社員のリスト
  member: Member = {
    id: 1,
    name: '田中太郎'
  };
  selectedMember: Member; // 現在選択されている社員

  constructor() { }

  ngOnInit(): void { // ライフサイクルメソッド：  コンポーネントが初期化する時に起動するメソッド
  }

  // 社員を選択するメソッド
  onSelect(member: Member): void {
    this.selectedMember = member;
  }

}
