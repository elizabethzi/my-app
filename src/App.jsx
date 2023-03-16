import './App.css';
import './Login/login.css';
import './Home/home.css';
import { useState } from 'react';
import { Home } from './Home/Home'
import { Formulario } from './Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
 //Importamos todos los paquetes o archivos requeridos


function App() {
//en nuestra funcion app declaramos la variable user, que tendra un valor vacio, se llenara en base a nuestro usuario ingresddo y previamente validado
const [user, setUser] = useState([]);


  return (
    <div className='App'>


{

/* //aqui indicamos que si el valor user ha sido llenado,es decir, es mayor o diferente a 0 su longitud, entonces que me muestre el form, sino, si el usuario es ingresado
  // y validado, entonces que me redireccione a Home */
!user.length > 0
?<Formulario setUser={setUser}/>   
:<Home user={user} setUser={setUser}/>


     

 
}
  
   
    </div>
  );
}


export default App;
