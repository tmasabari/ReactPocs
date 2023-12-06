import React from "react";


export default class ProductDetails extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state =
        {
            productName: 'Sample Product Name',
            unitPrice: 10,
            quantity: 1,
            totalAmount: 10
        };

        this.productNameChanged = this.productNameChanged.bind(this);
        this.unitPriceChanged = this.unitPriceChanged.bind(this);
        this.quantityChanged = this.quantityChanged.bind(this);
    }
    productNameChanged(event) { this.setState({ productName: event.target.value }); }
    unitPriceChanged(event) { 
        this.setState({ unitPrice: event.target.value });
        this.calculateTotalAmount(this.state.quantity, event.target.value); 
    }
    quantityChanged(event) { 
        this.setState({ quantity: event.target.value });
        this.calculateTotalAmount(event.target.value, this.state.unitPrice); 
    }

    calculateTotalAmount(quantityInput, unitPriceInput) {
        const quantity = parseFloat(quantityInput)
        var amount = quantity * parseFloat(unitPriceInput);
        if (quantity > 10) {
            const discount = amount * .1;  //10%
            amount -= discount;
        }
            
        this.setState({ totalAmount: amount }); 
    }

    render() {
        return (
            <div style={{ marginLeft: "25%", marginRight: "25%", width: "50%" }}>
                <h5 align="center">Product Details - 10% discount if quantity is more than 10 units </h5>

                Product Name <input type="text" value={this.state.productName} onChange={this.productNameChanged}></input><br />
                Unit Price <input type="number" value={this.state.unitPrice} onChange={this.unitPriceChanged}></input><br />
                Quantity <input type="number" value={this.state.quantity} onChange={this.quantityChanged}></input><br />
                
                <br/>
                Product '{this.state.productName}', Total Amount: {this.state.totalAmount}
            </div>
        );
    }
}