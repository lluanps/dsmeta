import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
    return(
        <header>
        <div className="cabecalho-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1 className="titulo">Controle de vendas</h1>
        </div>
    </header>
    )
 } 
  export default Header