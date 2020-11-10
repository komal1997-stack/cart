import React from 'react';
import {Link} from 'react-router-dom'
import data from '../data';
import home from './Home';
import cartReducer from './reducers/cartReducer';
import  {addToCart}  from './actions/cartActions'


function ProductScreen (props){ 
   const handleClick = (id)=>{
        addToCart(id); 
    }


    var first=data.products;

    var len=first.length;
    var productObj;
    var productObj1;
   // alert(len);
    for(var i=0;i<len;i++){
        if(first[i].id==props.match.params.id)
            productObj=first[i];
       
    }
    
  // alert(productObj.name);
    return ( <div>
         
         <div className="details">
             <div className="details-image">
             <img src={productObj.image} alt="product" ></img>
             </div>
         <div className="details-info">
         <ul>
             <li>
           <h4>{productObj.name}</h4>
           </li>

           <li>
           {productObj.brand}
           </li>

           <li>
            <b>{productObj.rating}</b>
           </li>
           <li>
               <button onClick={()=>{handleClick(productObj.id)}} value="Add to cart"> addToCart</button>
           </li>
        </ul>
        
        </div>

       
        </div>
        </div>
        );
        
             
         
    }
            
      

export default ProductScreen;