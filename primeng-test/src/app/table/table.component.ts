import { Component, OnInit } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { DropdownModule } from 'primeng/dropdown';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, interval, switchMap } from 'rxjs';
import { PictureService } from '../service/picture.service';

interface Tab {
  label: string
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TabViewModule, AvatarModule, AvatarGroupModule, BadgeModule, DropdownModule, TabMenuModule, TableModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {

  tabs?: Tab[];
  activeTab?: Tab;

  constructor(public pictureService: PictureService) {}

  ngOnInit(): void {
    this.tabs = [
      { label: 'Chưa đọc' },
      { label: 'Đã đọc' }
    ];
    this.activeTab = this.tabs[0];

    // this.pictureService.unreadCount$.subscribe()

    interval(5000).pipe(switchMap((val) => this.pictureService.getOnePicture(val.toString())))
      .subscribe(res => this.pictureService.unreadCount$.next(res))
  }

  handleChangeTab(tab: any) {
    this.activeTab = tab;
  }

}
