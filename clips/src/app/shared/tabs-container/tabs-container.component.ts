import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.css'
})
export class TabsContainerComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList()

  constructor() {}

  ngAfterContentInit(): void {
    const activeTab = this.tabs.filter(tab => tab.active)
    if (!activeTab || activeTab.length === 0)
      this.selectTab(this.tabs.first)
  }

  ngOnInit(): void {

  }

  selectTab(tab: TabComponent): boolean {
    this.tabs.forEach(tab => tab.active = false)
    tab.active = true
    // prevent default behavior
    return false
  }

}
