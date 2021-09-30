import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
          <header>
        <ul class="navbar">
            <li>
                <img class="logo" src="./media/logo.png" alt="Logo Pagina" />
            </li>
            <li>
                <button class="button mainButton">Nuevo Post</button>
            </li>
            <li>
                <div class = "buscar">
                    <input type="text" placeholder="Buscar una Raza" />
                    <i class="fas fa-search button"></i>
                </div>
            </li>
            <li>
                <button class="button secondaryButton">Login</button>
            </li>
            <li>
                <button class="button mainButton">Registro</button>
            </li>
        </ul>  
    </header>
    <main>
        <section>
            <h1 class="titulo">RAZAS DE PERROS</h1>
            <ul class="breedCardContainer">
                <li class="breedCard">
                    <div class="contenedorImagen">
                        <img src="./media/Border Collie.jpg" alt="Border Collie" />
                    </div>
                    <span class="breedTitle">Border Colie</span> <br/>
                    <div class="interactionCard interactionContainer">
                        <i class="fas fa-heart">150</i>                       
                        <i class="far fa-comment-alt">1.5k</i>                       
                        <i class="fas fa-eye">120</i>                      
                    </div>
                    
                </li>
                
                <li class="breedCard">
                    <div class="contenedorImagen">
                        <img src="./media/Golden Retriever.jpg" alt="Golden Retriever" /> 
                    </div>
                    <span class="breedTitle">Golden Retriever</span> 
                    <div class="interactionCard interactionContainer">
                        <i class="fas fa-heart">450</i>                       
                        <i class="far fa-comment-alt">1.1k</i>                       
                        <i class="fas fa-eye">850</i>                      
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
