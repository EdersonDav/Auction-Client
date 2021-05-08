import {useState, ChangeEvent} from 'react';
import {AiFillCloseCircle} from 'react-icons/ai';

import toReal from 'helpers/toReal';
import {ModalWrapper} from './style'
import api from 'service/api'

interface IBidInformation {
  price?: number;
  amount?: number;
}

interface BidModalProps{
  close: () => void;
  type: string;
  product_id: string;
  currentValue: number;
}

const BidModal = ({close, type, product_id, currentValue}:BidModalProps) =>{

  const [informations, setInformations] = useState<IBidInformation>();

  const handleInformations = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInformations({ ...informations, [name]: value });
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user_id = await  localStorage.getItem('-action-');
    try{
      console.log({...informations, product_id, user_id })
      const url = type === 'automatic' ? 'bidAutomatic' : 'bid'
      const response = await api.post(`${url}`, {...informations, product_id, user_id });
      alert('Bid success')
      close()
    }catch(err){
      alert(err.response.data.message);
    }
    
  };
  return(
    <ModalWrapper>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>{type === 'automatic' ? 'Automatic bidding' : 'Bid'}</h1>
          <p>Minimum Bid {toReal(currentValue + 1)}</p>
          <input type="number" placeholder="BidValue" name={ type === 'automatic' ? 'balance' : 'price'} onChange={handleInformations}/>
          <button type="submit">Bid</button>
          <button type="button" onClick={close}><AiFillCloseCircle/></button>
        </form>
      </div>
    </ModalWrapper>
  )
}

export default BidModal;