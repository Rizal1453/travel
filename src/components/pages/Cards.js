 import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"
 
 function Cards() {
   return (
     <div className="cart">
       <h1> check out thse Epic Destination</h1>
       <div className="cart__container">
         <div className="cart__wrapper">
           <ul className="cart__items">
             <CardItem
               src="images/img-9.jpg"
               text="Explore the hidden waterfall deep inside the Amazon Jungle"
               label="Adventure"
               path="/services"
             />
             <CardItem
               src="images/img-2.jpg"
               text="Explore the hidden waterfall deep inside the Amazon Jungle"
               label="Adventure"
               path="/services"
             />
           </ul>
           <ul className="cart__items">
             <CardItem
               src="images/img-3.jpg"
               text="Explore the hidden waterfall deep inside the Amazon Jungle"
               label="Adventure"
               path="/services"
             />
             <CardItem
               src="images/img-4.jpg"
               text="Explore the hidden waterfall deep inside the Amazon Jungle"
               label="Adventure"
               path="/services"
             />
             <CardItem
               src="images/img-8.jpg"
               text="Explore the hidden waterfall deep inside the Amazon Jungle"
               label="Adventure"
               path="/services"
             />
           </ul>
         </div>
       </div>
     </div>
   );
 }
 
 export default Cards