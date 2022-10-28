import React, {useState} from 'react';

function Contador() {

    const [count,setCount] = useState(10);

    return (

    <div>
         <p> Você clicou {count} vezes </p>

         <button  onClick={() => setCount(count + 1 )}>
         Clique aqui

         </button>
<Button variant="warning">Warning</Button>{' '}

    </div>
    )
}
export default Contador;





