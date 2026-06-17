import {Routes} from '@angular/router';
import {Home} from './home/home'; //importa los componentes de home
import {Details} from './details/details';  //importa los componentes de details

const routeConfig: Routes = [
  {
    path: '',   //define la ruta raiz de Home
    component: Home,    //En caso de coincidir, abrirá los componentes de Home, en éste caso, la ventana
    title: 'Home page',   //título de la pestaña
  },
  {
    path: 'details/:id',  //define la ruta según el tipo de casa, o en éste caso, su ID
    component: Details,
    title: 'Home details',
  },
];
export default routeConfig;