import axios from 'axios';
import { toast } from 'react-toastify';
import icon from 'C:/projetos/dsmeta/frontend/src/assets/img/Vector.svg';
import { BASE_URL } from '../../utils/request';

import './styles.css';

type Props = {
  saleId: number;
}

function handleClick(id :number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response =>{
          toast.info("SMS enviado com sucesso!")
        })
}

function NotificationButton( {saleId} : Props) {
    return(
      <div className="vendas-botao" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="notificar" />
  </div>
    )
  }
  
  export default NotificationButton
  