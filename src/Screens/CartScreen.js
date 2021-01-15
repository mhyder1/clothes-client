import React from 'react';

function CartScreen (props){
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
                        Cart is empty
                    </div>
                </ul>

            </div>
        </div>
    )
}

export default CartScreen;