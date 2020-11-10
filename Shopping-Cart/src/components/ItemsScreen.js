import React from 'react';
import {Link} from 'react-router-dom'
import data from '../data';
import  {addToCart}  from './actions/cartActions'
import cartReducer from './reducers/cartReducer';


function ItemsScreen (props){ 
   const handleClick = (id)=>{
        addToCart(id); 
    }

    var first=data.products;
    var len=first.length;
    var productObj;
  ;
  
    
  // alert(productObj.name);
    return ( 
        <div class='details'>
  {first.filter(item => item.category.includes(props.match.params.category)).map(filteredName => (
     <div>
         
     <div className="details">
         <div className="details-image">
         <img src={filteredName.image} alt="product" ></img>
         </div>
     <div className="details-info">
     <ul>
         <li>
       <h4>{filteredName.name}</h4>
       </li>

       <li>
       {filteredName.brand}
       </li>

       <li>
        <b>{filteredName.rating}</b>
       </li>
    </ul>
    
    </div>

   
    </div>
    </div>
        

      
    
  ))}
</div>
        );
        
             
         
    }
            
      

export default ItemsScreen;