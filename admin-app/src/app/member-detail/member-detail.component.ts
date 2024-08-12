import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../member';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../member.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})

export class MemberDetailComponent implements OnInit {
  @Input() member: Member;

  constructor(
    private route: ActivatedRoute, // URLのパラメータやハッシュフラグメントを取得
    private MemberService: MemberService,
    private location: Location //ブラウザバックや進むなどのサービス
  ) { }

  ngOnInit(): void {
    this.getMember();
  }

  getMember(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // +をつけると文字列から数字に変換される
    this.MemberService.getMember(id)
      .subscribe(member => this.member = this.member);
  }

  goBack(): void {
    this.location.back();
  }

}
