import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  userId: any;
  userInfo: User;
  price: Number =  78.9876869869687;
  today: any = Date.now()
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {

    this.userId = this.activatedRoute.snapshot.params['uid']
    this.userService.getUserById(this.userId)
      .valueChanges()
      .subscribe(
        (info : User[]) => {
          console.log(info)
        },
        ( err) => {
          console.log(err)
        }
      )
  }

  ngOnInit() {
  }

}
