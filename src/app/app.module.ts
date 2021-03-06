import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule} from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import { AppRoutingModule } from './shared/routing/app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FaqComponent } from './components/faq/faq.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { RocketComponent } from './components/rocket/rocket.component';
import { BannerComponent } from './components/banner/banner.component';
import { QuestionsComponent } from './components/questions/questions.component';
import {ClickOutsideModule} from 'ng4-click-outside';
import { QuestionsOverviewComponent } from './components/questions/questions-overview/questions-overview.component';
import { QuestionsWhatIsNonprofitComponent } from './components/questions/questions-what-is-nonprofit/questions-what-is-nonprofit.component';
import { QuestionsIsNonprofitGoodComponent } from './components/questions/questions-is-nonprofit-good/questions-is-nonprofit-good.component';
import { QuestionsAdvantagesDisadvantagesComponent } from './components/questions/questions-advantages-disadvantages/questions-advantages-disadvantages.component';
import { QuestionsNonprofitTypesComponent } from './components/questions/questions-nonprofit-types/questions-nonprofit-types.component';
import { QuestionsStatusComponent } from './components/questions/questions-status/questions-status.component';
import { QuestionsStartNonprofitComponent } from './components/questions/questions-start-nonprofit/questions-start-nonprofit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IncfileCarouselComponent } from './components/incfile-carousel/incfile-carousel.component';
import {ClickDirectiveModule} from './shared/directives/click.directive';
// import 'hammerjs';

@Injectable()
// export class MyHammerConfig extends HammerGestureConfig {
//   overrides = <any> {
//     pan: {threshold: 5, direction: 6},
//     swipe: {
//       velocity: 0.4,
//       threshold: 20,
//       direction: 6,
//       touchAction: 'auto'
//     },
//     pinch: {enable: false},
//     rotate: {enable: false}
//   };
// }

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    FaqComponent,
    ArticlesComponent,
    RocketComponent,
    BannerComponent,
    QuestionsComponent,
    QuestionsOverviewComponent,
    QuestionsWhatIsNonprofitComponent,
    QuestionsIsNonprofitGoodComponent,
    QuestionsAdvantagesDisadvantagesComponent,
    QuestionsNonprofitTypesComponent,
    QuestionsStatusComponent,
    QuestionsStartNonprofitComponent,
    IncfileCarouselComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ClickOutsideModule,
    BrowserAnimationsModule,
    ClickDirectiveModule,
   // HammerModule

  ],
  providers: [ //   {
 //   provide: HAMMER_GESTURE_CONFIG,
  //  useClass: MyHammerConfig
//  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
