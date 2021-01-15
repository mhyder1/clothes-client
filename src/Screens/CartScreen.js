import React, {useContext} from 'react';

import AppContext from '../AppContext'

function CartScreen (props){
    const context = useContext(AppContext)
    console.log(context)
    const productId = props.match.params.id;
    return(
        <div className='cart'>
            <div className='cart-list'>
                <ul>
                    <li>
                        <h3>
                            Shopping Cart
                        </h3>
                        <div>
                            Price
                        </div>
                    </li>
                    <div>
                        {/* Cart is empty */}
                    {
                        context.cart.map(item=>(
                            item.price
                        ))
                    }
                    </div>
                </ul>

            </div>
        </div>
    )
}

export default CartScreen;