import { AuthService } from './authentication/services/auth.service';
import { IdleService } from './authentication/services/idle.service';
import { Component } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnePayUserAdmin';


  constructor(
    private idleService: IdleService,
    private authService: AuthService,
    private notification: NzNotificationService
  ) {
    this.loadScripts()
  }

  ngOnInit(): void {
    this.initialIdleSettings();
  }

  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [
       'assets/js/bundle5b75.js?ver=3.0.2',
       'assets/js/scripts5b75.js?ver=3.0.2',
       'assets/js/demo-settings5b75.js?ver=3.0.2',
       'assets/js/charts/gd-default5b75.js?ver=3.0.2'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
 }

  private initialIdleSettings() {
    const idleTimeoutInSeconds: number = environment.idleTimeInMinutes * 120;
    this.idleService.startWatching(idleTimeoutInSeconds).subscribe((isTimeOut: boolean) => {
      if (isTimeOut) {
          this.authService.logout()
          this.notification.error( 'Session', 'Session time-out, Please login !!' );
      }
    });
  }

}
