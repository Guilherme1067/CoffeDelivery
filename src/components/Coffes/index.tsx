import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import expresso from '../../assets/expresso.png'
import { Card, CardContainer, Description, Title } from './styles';

interface itemCardapiosProps {
  img: any;
  title: string;
  name: string;
  description: string;
  price: number
}

const itemsCardapios: itemCardapiosProps[] = [{
  img: expresso,
  title: 'Tradicional',
  name: "Expresso Tradicional",
  description: "O tradicional café feito com água quente e grãos moídos",
  price: 9.90
},
{
  img: expresso,
  title: 'Tradicional',
  name: "Expresso Tradicional",
  description: "O tradicional café feito com água quente e grãos moídos",
  price: 9.90
}]
export const Coffes = () => {
  return (
    <CardContainer>
      {itemsCardapios.map(coffe => (<Card>
        <div>

          <img src={coffe.img} alt="" />
        </div>
        <div>
          <Title>{coffe.title}</Title>
          <h2>{coffe.name}</h2>
          <Description>{coffe.description}</Description>
        </div>

        <footer>
          <p>R$ {coffe.price}</p>
          <div>
            <Plus /><p> 1 </p><Minus />
          </div>

          <ShoppingCart />
        </footer>

      </Card>))}
    </CardContainer>

  )
}