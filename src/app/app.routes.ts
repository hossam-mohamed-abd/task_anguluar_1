import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:'Home'
    },
    {
        path:'home',
        component:HomeComponent,
        title:'Home'
    },
    {
        path:'about',
        component:AboutComponent,
        title:'about'
    },
    {
        path:'contact',
        component:ContactComponent,
        title:'contact'
    },
    {
        path:'portfolio',
        component:PortfolioComponent,
        title:'portfolio'
    },
    {
        path:'**',
        component:HomeComponent,
        title:'home'
    },

];
