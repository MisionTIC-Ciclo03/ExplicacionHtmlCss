import logo from './logo.svg';
import './styles/styles.css';
import logotipo from './media/logo.png';
import borderCollie from './media/Border Collie.jpg';
import goldenRetriever from './media/Golden Retriever.jpg';


function App() {
  return (
    <div className="App">
          <header>
        <ul className="navbar">
            <li>
                <img src={logotipo} alt="Logo Pagina" className="logo" />
            </li>
            <li>
                <button className="button mainButton">Nuevo Post</button>
            </li>
            <li>
                <div className = "buscar">
                    <input type="text" placeholder="Buscar una Raza" />
                    <i className="fas fa-search button"></i>
                </div>
            </li>
            <li>
                <button className="button secondaryButton">Login</button>
            </li>
            <li>
                <button className="button mainButton">Registro</button>
            </li>
        </ul>  
    </header>
    <main>
        <section>
            <h1 className="titulo">RAZAS DE PERROS</h1>
            <ul className="breedCardContainer">
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={borderCollie} alt="Border Collie" />
                    </div>
                    <span className="breedTitle">Border Colie</span> <br/>
                    <div className="interactionCard interactionContainer">
                        <i className="fas fa-heart">150</i>                       
                        <i className="far fa-comment-alt">1.5k</i>                       
                        <i className="fas fa-eye">120</i>                      
                    </div>
                    
                </li>
                
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src= {goldenRetriever} alt="Golden Retriever" /> 
                    </div>
                    <span className="breedTitle">Golden Retriever</span> 
                    <div className="interactionCard interactionContainer">
                        <i className="fas fa-heart">450</i>                       
                        <i className="far fa-comment-alt">1.1k</i>                       
                        <i className="fas fa-eye">850</i>                      
                    </div>
                </li>
            </ul>
        </section>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
