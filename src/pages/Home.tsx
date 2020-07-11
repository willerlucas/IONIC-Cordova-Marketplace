import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonImg, IonLabel, IonAvatar, IonItemSliding, IonItemOption, IonItemOptions } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import firebaseDb from '../firebaseConfig';
import { render } from '@testing-library/react';

const Home: React.FC = () => {


  //não é a melhor opção utilizar tipo any
  var [productsObjects, setproductsObjects]: any = useState({})

  //recuperando os objetos do firebase
  useEffect(() => {
    firebaseDb.child('products').on('value', snapshot => {
      if (snapshot.val() != null)
        setproductsObjects({
          ...snapshot.val()
        })
    })
  }, [])

  //função de decremento da quantidade ("comprar")
  function buy(key: string, amount: number) {
    let qntatual: number = productsObjects[key].amount

    if (qntatual <= 0) {
      alert('product out of stock');
    }
    else {
      firebaseDb.child(`products/${key}/amount`).set(qntatual - 1)
      alert('successful purchase');
    }

  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Marketplace</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {
            Object.keys(productsObjects).map(id => (
              <IonItemSliding key={id}>
                <IonItem>
                  <IonAvatar>
                    <img src={productsObjects[id].image}></img>
                  </IonAvatar>
                  <IonLabel className="ion-padding">
                    <h2>{productsObjects[id].productName}</h2>
                    <p><h3>R$: {productsObjects[id].price}</h3>
                      {
                        //verifica se o produto está em estoque (>0), caso não: exibe a tag
                        productsObjects[id].amount == 0 ? <h4>Out of stock!</h4> : null
                      }
                    </p>
                  </IonLabel>
                </IonItem>

                <IonItemOptions side="end">
                  <IonItemOption onClick={() => { buy(id, productsObjects[id].amount) }}>Buy</IonItemOption>
                </IonItemOptions>

                <IonItemOptions side="start">
                  <IonItemOption>Wish List</IonItemOption>
                </IonItemOptions>


              </IonItemSliding>
            ))
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
