import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { ChartsComponent } from './components/charts/charts.component';
import { NewsComponent } from './components/news/news.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SavednewsComponent } from './savednews/savednews.component';
const routes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'technical-charts', component: ChartsComponent },
  { path: 'saved-news', component: SavednewsComponent},
  { path: 'article/:title', component: ArticleComponent},
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
