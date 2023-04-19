import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('logIn') logIn!: TemplateRef<any>;
  @ViewChild('signUp') signUp!: TemplateRef<any>;
  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {}
  DialogLogIn() {
    const dialog = this.dialog.open(this.logIn, {
      width: '500px',
      height: '450px',
      disableClose: false,
    });
  }
  DialogSignUp() {
    const dialog = this.dialog.open(this.signUp, {
      width: '600px',
      height: '600px',
      disableClose: false,
    });
  }
}
