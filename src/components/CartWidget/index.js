// import React from 'react';

// export const CartWidget = () => {
//     return (
//         <i className="bi bi-cart3"></i>
//     );
// }

// export default CartWidget;





import { BsFillCartFill } from 'react-icons/bs';
import './styles.scss';

function CartWidget() {
    return (
        
        <a href="#" className="cart-widget">
            {<BsFillCartFill className="icon" />}
            <span className="badge">3</span>
        </a>
        
    );
}

export default CartWidget;