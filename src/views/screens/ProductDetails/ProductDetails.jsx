import React from "react";
import Axios from "axios"
import './ProductDetails.css'
import ButtonUI from "../../components/Button/Button";
import { API_URL } from "../../../constants/API";
import { connect } from "react-redux";
import swal from 'sweetalert'


class ProductDetails extends React.Component{
    state = {
        getProductDetails: [],
    }
    addToCart = () => {
        Axios.post(`${API_URL}/cart`, {
            userId: this.props.user.id,
            productId: this.state.getProductDetails.id,
            quantity: 1
        })
        .then(res => {
            console.log(res);
            swal("Add To Cart", "Success")            
        })
        .catch(err => {
            console.log(err);
        })
    }
    componentDidMount(){
        Axios.get(`${API_URL}/products/${this.props.match.params.id}`)
          .then((res) => {
            this.setState({ getProductDetails: res.data });
          })
          .catch((err) => {
            console.log(err);
          });
      };
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className="col-6 text-center">
                        <img 
                            style={{ width: "100%", objectFit: "contain", height: "550px"}}
                            src={this.state.getProductDetails.image}
                            alt=""></img>
                    </div>
                    <div className='col-6 d-flex flex-column justify-content-center'>
                        <h2>{this.state.getProductDetails.productName}</h2>
                        <h4>
                            {
                                new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(this.state.getProductDetails.price)
                            }
                        </h4>
                        <p className="mt-4">{this.state.getProductDetails.desc}</p>
                        <div className="d-flex mt-4">
                            <ButtonUI onClick={this.addToCart}>Add to Cart</ButtonUI>
                            <ButtonUI className="ml-4" type="outlined">Add to Wish</ButtonUI>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(ProductDetails)