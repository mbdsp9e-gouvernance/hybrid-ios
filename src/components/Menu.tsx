import React from "react";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonSplitPane,
  IonMenu,
  IonRouterOutlet,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonButtons,
  IonMenuButton,
  IonButton,
  useIonRouter,
} from '@ionic/react';
import { closeOutline, locateOutline, logOutOutline, menuOutline, notificationsOutline, reloadOutline } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import Soumission from "../pages/Soumission";
import Map from "../pages/Map";
import '../theme/css/Menu.css';
import DetailSoumission from "../pages/DetailSoumission";
import { deleteFileInExternalStorage } from "./function/deleteFileInExternalStorage";

const Menu: React.FC = () => {

  const paths = [
    { name: 'Mes soumissions', url: '/Acceuil/Soumission', icon: reloadOutline },
    { name: 'Notifications', url: '/Acceuil/Map', icon: notificationsOutline },
    { name: 'Localisation des lieux de travaux', url: '/Acceuil/Map', icon: locateOutline }
  ]
  const navigation = useIonRouter();
  const logOut = async () => {
    const fileName = 'user_data.json';
    await deleteFileInExternalStorage(fileName).then((value) => {
      navigation.push('/', 'root', 'replace');
    });
  }
  return (
    <IonPage>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main" className="custom-mety">
          <IonHeader className="custom-header-menu">
            <IonToolbar className="custom-menu my-custom-toolbar">
              {/* <IonIcon slot="start" icon={closeOutline} /> */}
              <IonButtons slot="start">
                <IonMenuButton className="bouton-menu2"></IonMenuButton>
              </IonButtons>
              <IonTitle className="custom-header-menu" >Menu</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            {paths.map((item, index) => (
              <IonMenuToggle key={index}>
                <IonItem routerLink={item.url} routerDirection="none" className="item-custom">
                  <IonIcon slot="start" icon={item.icon} />
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}
            <IonButton expand="full" className="custom-button2" onClick={() => logOut()}>
              <IonIcon slot="start" icon={logOutOutline} />
              Se deconnecter
            </IonButton>
          </IonContent>
        </IonMenu>

        <IonRouterOutlet id="main">
          <Route path="/Acceuil/Soumission" component={Soumission} />
          <Route path="/Acceuil/Map" component={Map} />
          <Route path="/Acceuil/DetailSoumission" component={DetailSoumission} />

          <Route exact path="/Acceuil">
            <Redirect to="/Acceuil/Soumission" />
          </Route>
        </IonRouterOutlet>

      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;
