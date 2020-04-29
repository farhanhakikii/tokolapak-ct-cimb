import React from "react";
import "./Cart.css"
import { connect } from "react-redux";
import Axios from "axios"
import { API_URL } from "../../../constants/API";

class Cart extends React.Component{
    state = {
        cart: [],
        productName: "",
        price: "",
        isCart: false
    }
    
    componentWillMount(){
        Axios.get(`${API_URL}/cart`, {
            params: {
                userId: this.props.user.id,
                _expand: "product"
            }
        })
        .then(res => {
            this.setState({cart: res.data[0], isCart: true})
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
        <>
        <h1 className="text-center">Cart</h1>
        <table className="table ">
            <thead>
                <tr>
                    <th>Images</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                    {
                        this.state.isCart?
                        <tr>
                            <td><img src={`${this.state.cart.product.image}`} alt="" height="100px" width="100px"/></td>
                            <td>{this.state.cart.product.productName}</td>
                            <td>{this.state.cart.product.price}</td>
                            <td>{this.state.cart.quantity} </td>
                            <td><button className="btn btn-danger">Delete</button></td>
                        </tr> : null
                    }
            </tbody>
        </table>
        </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart)