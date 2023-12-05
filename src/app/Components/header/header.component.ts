import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidenavService } from 'src/app/service/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  actualPage = ''

  constructor(private sideNavService: SidenavService, private route: ActivatedRoute ) {
    this.route.params.subscribe(params => {
      this.actualPage = params['page']
    })
  }

  toggleDrawer() {
    this.sideNavService.toggleShowFiller();
  }
}
