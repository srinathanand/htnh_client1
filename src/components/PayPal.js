import React, { useRef, useEffect } from 'react'

export default function PayPal(props) {
    console.log(props.value)
    const paypal = useRef();

    useEffect(() => {
        console.log(props.value)
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [
                        {
                            description: 'Donate to the Temple',
                            amount: {
                                currency_code: 'USD',
                                value: props.value
                            }
                        }
                    ]
                })
            },
            onApprove: async(data, actions) => {
                const order = await (actions.order.capture())
                console.log("Successful order", order)
            },
            onError: (err) => console.log(err)
        }).render(paypal.current)
    }, [])
    
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}
