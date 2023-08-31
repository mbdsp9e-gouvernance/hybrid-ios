import { Redirect, Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { IonApp, IonRouterOutlet } from "@ionic/react";

import {
  setupIonicReact,
} from '@ionic/react';


import Login from './pages/Login';

// import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import Acceuil from './pages/Acceuil';
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Redirect to="/" />
        <Route path="/" component={Login} exact />
        <Route path="/Login" component={Login} exact />
        <Route path="/Acceuil" component={Acceuil} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
