import React from "react";
import {
  IonApp,
  IonContent,
} from '@ionic/react';
import Menu from "../components/Menu";

const Accueil: React.FC = () => {
  return (
    <IonApp>
      <IonContent>
        <Menu />
      </IonContent>
    </IonApp>
  );
};

export default Accueil;
