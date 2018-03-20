import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}
