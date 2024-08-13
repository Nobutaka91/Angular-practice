import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[];

  constructor(
    private memberService: MemberService,
  ) { }

  ngOnInit(): void { // ライフサイクルメソッド：  コンポーネントが初期化する時に起動するメソッド
    this.getMembers();
  }

  getMembers() :void { // 社員のリスト
    this.memberService.getMembers() // Observable
      .subscribe(members => this.members = members);
  }

  add(name: string): void {
    name = name.trim(); // 前後の空白スペースがあったら取り除く
    if (!name) { return;} // nameがから文字列の場合は何もせずにメソッドを終了
    this.memberService.addMember({ name } as Member)
      .subscribe(member => this.members.push(member));
  }

  delete(member: Member): void {
    this.members = this.members.filter(m => m !== member);
    this.memberService.deleteMember(member).subscribe();
  }
}
