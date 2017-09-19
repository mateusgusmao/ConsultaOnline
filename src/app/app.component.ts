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
      label: 'Consultas',
      icon: 'fa-calendar',
      items: [{
        label: 'Nova consulta',
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
      label: 'Perfil',
      icon: 'fa-user-circle',
      items: [
        {label: 'Undo', icon: 'fa-mail-forward'},
        {label: 'Redo', icon: 'fa-mail-reply'}
      ]
    },
    {
      label: 'Redes Sociais',
      icon: 'fa-facebook',
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
      label: 'Contato',
      icon: 'fa-phone',
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








