import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Glasses!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden Tom Ford TF5512 Sunglasses in the shiny black color '
              label='CAT EYE 3905'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='This premium quality frame comes with round acetate rims and a glossy tortoiseshell finish.'
              label='Hugo Boss'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Arms feature the brand logo in bold capital letters with subtle gold embossing on the acetate arm tips.'
              label='Mystery Curvy Glasses'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience The curved frontal design of Dita Marseilles Sunglasses adds the perfect fusion of tradition'
              label='Dita Marseilles Sunglasses'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='The boldly vintage design of Dita Freebird will set all eyes on you at once.'
              label='Dita Freebird'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;