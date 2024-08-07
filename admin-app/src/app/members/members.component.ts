import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[];
  selectedMember: Member; // 現在選択されている社員

  constructor(private memberService: MemberService) { }

  ngOnInit(): void { // ライフサイクルメソッド：  コンポーネントが初期化する時に起動するメソッド
    this.getMembers();
  }

  // 社員を選択するメソッド
  onSelect(member: Member): void {
    this.selectedMember = member;
  }

  getMembers() :void { // 社員のリスト
    this.memberService.getMembers() // Observable
      .subscribe(members => this.members = members);
  }

}
