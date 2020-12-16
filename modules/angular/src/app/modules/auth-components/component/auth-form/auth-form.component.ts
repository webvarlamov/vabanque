import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface LoginPassword {
  login: string;
  password: string;
}

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  @Input() process: boolean;
  @Output() onSignIn: EventEmitter<LoginPassword> = new EventEmitter<LoginPassword>();
  constructor() { }

  ngOnInit(): void {
  }

  public onSingIn(login: string, password: string): void {
    this.onSignIn.emit({
      login,
      password
    });
  }
}
