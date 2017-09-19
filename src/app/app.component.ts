import { Component } from '@angular/core';
import {PanelMenuModule, MenuItem} from 'primeng/primeng';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'app';
  items: MenuItem[];

ngOnInit() {
  this.items = [
    {
      label: 'File',
      icon: 'fa-file-o',
      items: [{
        label: 'New',
        icon: 'fa-plus',
        items: [
          {label: 'Project'},
          {label: 'Other'},
        ]
      },
        {label: 'Open'},
        {label: 'Quit'}
      ]
    },
    {
      label: 'Edit',
      icon: 'fa-edit',
      items: [
        {label: 'Undo', icon: 'fa-mail-forward'},
        {label: 'Redo', icon: 'fa-mail-reply'}
      ]
    },
    {
      label: 'Help',
      icon: 'fa-question',
      items: [
        {
          label: 'Contents'
        },
        {
          label: 'Search',
          icon: 'fa-search',
          items: [
            {
              label: 'Text',
              items: [
                {
                  label: 'Workspace'
                }
              ]
            },
            {
              label: 'File'
            }
          ]}
      ]
    },
    {
      label: 'Actions',
      icon: 'fa-gear',
      items: [
        {
          label: 'Edit',
          icon: 'fa-refresh',
          items: [
            {label: 'Save', icon: 'fa-save'},
            {label: 'Update', icon: 'fa-save'},
          ]
        },
        {
          label: 'Other',
          icon: 'fa-phone',
          items: [
            {label: 'Delete', icon: 'fa-minus'}
          ]
        }
      ]
    }
  ]
}

}








