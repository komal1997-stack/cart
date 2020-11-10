import React, { useState } from 'react';
import axios from 'axios';

 
function LoginScreen(props) {
 
  // handle button click of login form
  const handleLogin = () => {
   
    axios.post('http://localhost:8080/springrest/authenticate/Admin').then(response => {
      
      
      props.history.push('/');
    });
  }
 
  return (
      
    <div class="details">
      Login<br /><br />
      <div>
        Username<br />
        <input type="text"  autoComplete="new-password" name="username"/>
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password"   autoComplete="new-password" id="password"/>
      </div>
     
      <input type="button" value="Submit" onClick ={handleLogin} /><br />
    </div>
    
  );
}
 
// const useFormInput = initialValue => {
//   const [value, setValue] = useState(initialValue);
 
//   const handleChange = e => {
//     setValue(e.target.value);
//   }
//   return {
//     value,
//     onChange: handleChange
//   }
// }
 
export default LoginScreen;