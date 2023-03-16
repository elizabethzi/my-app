
import { useState } from 'react';

//Creamos una function para el formulario y llamamos como parametro nuestro setUser, que validara nuestro ingreso al Home
export function Formulario({setUser}) {

    //declaramos variables y su valor inicial
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState(false);


    //Declaramos funciones flechas y sus eventos
    const handleUsuarioChange = (event) => {
        setUsuario(event.target.value);
  };

  const handleContrasenaChange = (event) => {
    setContrasena(event.target.value);
  };

  //En esta funcion flecha validamos que el usuario este registrado, en este caso siendo usuario 'admin' y contraseña 1234
  const handleSubmit = (event) => {
    event.preventDefault();
  
//Si el usuario es correcto no arroja un mensaje por el Set Error y procede a llenar nuestro setUser con el usuario ingresado
  if (usuario === 'admin' && contrasena == 1234) {
    // Iniciar sesión exitoso
    setError('');
    setUser([usuario]);
  } else {
    // Error de inicio de sesión, indicamos que mensaje de error tendria
    setError('Usuario o contraseña incorrectos');
  }
}


    return (
      <body class='body-login'>
        <section>
            <div class='box'>
                <form class='formulario' onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div class='input-box'>
                        <span>Usuario</span>
                        {/* Con nuestro require hacemos validacion de si el campo es llenado o no con el formato correcto */}
                        {/* A su vez le indicamos que su valor o value ingresado, dicho dato sera llenado y leido por y para usuario */}
                        {/* A su vez con nuestro evento Onchange se activara cada que se ingresa usuario o contraseña para validar en funcion al dato ingresado */}
                        <input type='text' required='required' value={usuario} onChange={handleUsuarioChange} />
                        <i></i>
                    </div>
                    <div class='input-box'>
                        <span>Contraseña</span>
                        <input type='password' required='required' value={contrasena} onChange={handleContrasenaChange} />

                        <i></i>
                    </div>
                    <div class='link'>
                        <a href='#'>Registrate</a>
                    </div>
                    <button type="submit" class='login'>Ingresar</button>
<br />
                    {/* //Imprimimos nuestro mensaje de error */}
                   {error && <p align='center'>{error}</p>}
                </form>
                
            </div>
        </section>
        </body>
    )

    }

export default Formulario;