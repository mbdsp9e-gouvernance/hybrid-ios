import React from "react";
import {
  IonApp,
  IonContent,
} from '@ionic/react';
import Menu from "../components/Menu";

const Acceuil: React.FC = () => {
  return (
    <IonApp>
      <IonContent>
        <Menu />
      </IonContent>
    </IonApp>
  );
};

export default Acceuil;
