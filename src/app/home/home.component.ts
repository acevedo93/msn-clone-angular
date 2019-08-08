import { Component, OnInit } from '@angular/core';
//interfactes
import { User } from '../interfaces/user'
import { UserService } from '../services/user.service';
     //algunos tipos de typeScript
    // let c: number = 1;
    // let b: number = 3;
    // let j: boolean [] = [true, false]
    // let k: object [] = [{}, {}]
    // let f: any [] = [1234, "1234", {id:1}, []]
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuarios: User[];
  query: string = '';
  constructor(private userService: UserService) {
    userService.getUsers().valueChanges()
      .subscribe((info: User[])=>{
        this.usuarios = info
      },
      (err)=> {
        console.log(err)
      })

  }
  ngOnInit() {
  }

}
