import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('thanks') thanks!: TemplateRef<any>;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog() {
    const dialog = this.dialog.open(this.thanks, {
      width: '500px',
      height: '500px',
      disableClose: false,
    });
  }
}
