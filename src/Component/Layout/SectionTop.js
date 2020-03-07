import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import LogCat from '../img/list.png'
import { searchProduct } from "../redux/actions/Product";
import { connect } from 'react-redux';
import { getCategory } from '../redux/actions/Category'
import logocart from '../img/order.png'
import { sortProduct } from '../redux/actions/Product'
import { orderBy } from '../redux/actions/Product'
import { withRouter } from "react-router";

class SectionTop extends Component {
    state = {
        categorys: [],
        microcontroller: '',
        komponen: '',
        searchName: '',
        idCategory: '',
        sortBy: ''

    }
    sortProduct = (event) => {
        this.setState({
            idCategory: event
        })

        this.props.history.push(`/pos?name=${this.state.searchName}&idCat=${event}&orderBy=ASC`);
        console.log(this.state.idCategory)
        console.log(event)
        console.log(`ini state ${this.state.idCategory}`)
        this.props.dispatch(searchProduct(this.state.searchName, event));
    }

    searchProduct = (event) => {
        this.setState({
            searchName: event.target.value,
        })

        this.props.history.push(`/pos?name=${event.target.value}&idCat=${this.state.idCategory}&orderBy=ASC`);
        console.log(event.target.value)
        console.log(`ini state ${this.state.searchName}`)
        this.props.dispatch(searchProduct(event.target.value, this.state.idCategory));
    }

    getCategory = async () => {
        await this.props.dispatch(getCategory())
    }

    componentDidMount() {
        this.getCategory();
    }

    render() {
        const { categorys } = this.props;
        // console.log(categorys);
        return (
            <Row>
                <Col sm={8} className="p-4">
                    <Row>
                        <Col>

                            <Dropdown style={{ marginLeft: "20px", display: "inline" }}>
                                <Dropdown.Toggle variant="white" id="dropdown-basic" style={{ border: "1px solid rgba(0, 0, 0, 0.3)", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", boxSizing: "border-box", width: "150px" }}>
                                    <img src={LogCat} style={{ position: "absolute", width: "20px", height: "20px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)", marginLeft: "-25px", marginTop: "2px" }} />
                                    Category
  </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => this.sortProduct('')} >All</Dropdown.Item>
                                    {categorys.map((category, index) =>
                                        <Dropdown.Item onClick={() => this.sortProduct(category.id)} key={index} value={category.id}>{category.name}</Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{ border: "1px solid #000000", borderRadius: "5px", boxSizing: "border-box", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", marginLeft: "-30px", marginTop: "5px" }} onChange={this.searchProduct} />
                        </Col>
                    </Row>

                </Col>
                <Col sm={4} style={{ marginLeft: "-14px", width: "15px", backgroundColor: "#FFFFFF", padding: "5px", marginTop: "20px" }} >
                </Col>
            </Row >
        )
    }
}
// const categoryget = (state) => {
//     // console.log(state)
//     return {
//         categorys: state.categorys.categorys
//     }
// }

const searchStateToProps = (state) => {
    return {
        products: state.products.products,
        categorys: state.categorys.categorys,

    }
}

export default withRouter(connect(searchStateToProps)(SectionTop));