import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import React from "react";


//Aqui exportamos los parametros user y setUser, validando asi que estos campos esten llenados brevemente con los datos tomados del form (usuario, setUsuario)
export function Home({ user, setUser }){

    //Aqui le indicamos en la funcion flecha, que queremos que setUser este nuevamente vacio
    var handleLogout= ()=>{
        setUser([])

    }

    var  [coins, setCoins] = useState([]);
  var [search, setSearch] = useState("");

  var getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
    return(
        <body class="body-home">
          
        <header>
          <a>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD60lEQVR4nO2dP28URxjGxxLQQDo3EFKQ0kWas2fu5j1zFVCERKJIF+H3PdlXWImCQFQkiqCAT0BhSyFVXLvA+QJJkcQOfyqMoLHTOikiQeEoMpqzkMzuzNln3zIzq+cnTeO72bl9ft6bP7u3qxQAAAAAAAAAAAAAAADUhUanN66JfzRW1qoomviBayP2fmaDdjJIdiotVn6IvZ/ZYIhXKxdCvBp7P7PBuK+W6o+Qtdj7mQ0GQqrH2u4HU225bOzMnGlLb2CxsvEejpCN/T/HzJxudT91n13VCU1yTRP/W32/IJWU3c/O36g6YEi+ix2oGVnhb1XOTLblY0O8XSMh23p69pzKFW27N+OHKKMuN1SuaCv3EwhwZ5TF7ZPKFWN5IXaAZtTF8oLKFQhJDAhJDAhJDAjJWIgm/sq0Zxp7S7MtHU3y0l+HXzWJPyvWMbb7uSZ5HWjjxVSre77Ujp35Gp16ISyl1JhPqiZZDAw//wz9I7jX/EJkMVBlDELKQoY7ygYsnwdXiwcMWSEEQtLuQ4behsURUqmQTuf7Y75tuAsSAl8/T0LtastPhzmP7trGV5YnLFM6QcTXtZV/AqOs/w3x7WIdbfnO7mveUdbfbpulOsNcVIGlE4m/fgUhEj94CEkgbAhJIGCCkPihEoTED5IgZKh5SKvFtjw/mD+liX8P1NmytnumWKfZvPphf3jrqaMt//bJhS9PluZLJG30IYWwhp5cWszUhwZLJ4kBIYkBIVkvLs6fCmxjyV+H18PtyvNAv/OT7/3uYmp06sURkBtNWV4olCVt+b9QWJpkpVhHW/45HC5vOymldkj+gJBci8WFcjvRJUCIxA8eQhIIG0ISCJggJBTCVulH/sTrg78+ZNNzY4DNQXU0ybNyO7KFI6QQlG+h0NEf2gZkNBq946qA+1tYCj/0tqFnz0JIISwVwGBxcXRg6SQxICQxICRjIe5Mn/IQXJsKdOoTE1+cMMR/BUZYK742Jqf5I3TqVQ17yS9jz0hr3XP/LO8pX3+bWMvaiT4ZhBCJHzyEJBA2hCQQMEFI/FAJQuIHSRCC36mnBm4ckBgQUnMh2ndyab+y32wfo6zDhsHek0sHIXiSC0KOHkSj0xsv3d8kUN7e332kRyrWsuSdIPo/ZT5oeG3pQUhVfYiFkCMDIYkBIYkBIYkBIYkBIYkBIYkBIYmhLd+r3zxE7qpcmWrxpboJ0bZ7UWXMmLbya12EaMu/hG5nmw2N6d5pQ/I4dyGa+JHbF1UH+pd3uoeBkSz3n1F4uCd03nLbmiK5ctA67r2ujqt7qDZ3n6e43LQ86/Yhdo4AAAAAAAAAAAAAAKiEeAOU0H0huNvM0QAAAABJRU5ErkJggg==" class='logo-img' />
        </a>
            <nav>
              {/* Aqui llamamos el user ingresado y logueado */ }
                <span>Bienvenido, {user}!</span>
             
             
                 {/* Aqui le damos la funcion Onclick, que al dar click, nos accede a la funcion flecha, vaciando nuestro setUser y por ende, cerrado la sesión */}
            <button onClick={handleLogout} class='logout'>Cerrar sesión </button>
             
              
             
    
            </nav>
        
           
        
          </header>
        
        
   
          <div class='container'>
      <div class='row'>
        <input
          type="text"
          placeholder="Buscar"
          class='search'
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />

      
<TableCoins coins={coins} search={search} />
      </div>
    </div>
         
    </body>
    
              

            
            
           
    
    )
}



const TableCoins = ({ coins, search }) => {
  const titles = ["#", "Coin", "Price", "Price Change","24h Volume"];
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!coins) return <div>no coins</div>

  return (
    <table className="table table-dark mt-4 table-hover" class="table">
      <thead>
        <tr>
          {titles.map((title, i) => (
            <th key={i}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow key={coin.id} coin={coin} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

var CoinRow = ({ coin, index }) => {
  return (
    <tr>
      <td className="text-muted">{index}</td>
      <td>
        <img
          src={coin.image}
          alt=""
          className="img-fluid me-4"
          style={{ width: "3%" }}
        />
        <span>{coin.name}</span>
        <span className="ms-3 text-muted">{coin.symbol}</span>
      </td>

      <td>${coin.current_price.toLocaleString()}</td>

      <td
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }
      >
        {coin.price_change_percentage_24h}
      </td>

      <td>
        ${coin.total_volume.toLocaleString()}
      </td>
    </tr>
  );
};


export default Home;