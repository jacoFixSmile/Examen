import React, { Component } from 'react'
import axios from 'axios'
import TableRow from './TableRow'
import { Container, Col, Form, FormGroup, Label, Input } from 'reactstrap'
  
export default class SearchOvertredingen extends Component {  
  
  constructor(props) {  
      super(props)
      this.state = { name: '', 
                      products : [],
                     opnameplaats_straat:'',
                     aantal_overtredingen_snelheid:''}
      // bind class methods, alternative is arrow function: 
      // searchAll = ()=> {} OR <button onClick={(e) => this.handleInputChange(e)}>
      // https://stackoverflow.com/questions/53846717/this-handlechange-this-handlechange-bindthis
      this.handleInputChange = this.handleInputChange.bind(this)
  }  
    
  searchAll = ()=> {
    axios.post('http://localhost:4000/users/searchOne', { opnameplaats_straat: this.state.opnameplaats_straat })  // leave out the products array
      .then(json => {  
        //console.log(json.data)
        const products = json.data
        this.setState({ products: products })
      })  
      .catch(function (error) {  
        console.log(error)  
      }) 
  }  
  searchOnSpeed = ()=> {
    console.log("searchOn speed called")
    axios.post('http://localhost:4000/users/searchSpeedNonGTE', { aantal_overtredingen_snelheid: this.state.aantal_overtredingen_snelheid })  // leave out the products array
      .then(json => {  
        console.log("result searchOn speed called"+ json.data)
        //console.log(json.data)
        const products = json.data
        this.setState({ products: products })
      })  
      .catch(function (error) {  
        console.log(error)  
      }) 
  }  

  handleInputChange(event) {
    // possibility to check on target.type of target.name for
    // multiple inputs
    this.setState({ [event.target.name]: event.target.value })
  }
 
  
  tableRows(){  
    return this.state.products.map((row, i) => { 
      console.log(this.state.products) 
        return <TableRow obj={ row } key={ i } /> 
    })
  } 

  render() {  
    return (  
       <Container className='App'>  
        <h1 className='display-4'>Search Overtreding</h1>
        <br/>
        <Form className='form-group w-50'>  
          <Col>  
            <FormGroup row>  
              <Label for='name'>opnameplaats straat</Label>  
                <Input type='text' className='form-control' name='opnameplaats_straat' value={ this.state.opnameplaats_straat } 
                      onChange={ this.handleInputChange } placeholder='Enter straat name' />  
            </FormGroup>  
          </Col>  
          <Col>  
            <FormGroup row>  
              <button type='button' onClick={ this.searchAll } className='btn btn-outline-primary'>Search</button>  
             </FormGroup>  
          </Col>  
        </Form>
        <Form className='form-group w-50'>  
          <Col>  
            <FormGroup row>  
              <Label for='name'>Snelheid hoger dan of gelijk</Label>  
                <Input type='text' className='form-control' name='aantal_overtredingen_snelheid' value={ this.state.aantal_overtredingen_snelheid } 
                      onChange={ this.handleInputChange } placeholder='Enter snelheid name' />  
            </FormGroup>  
          </Col>  
          <Col>  
            <FormGroup row>  
              <button type='button' onClick={ this.searchOnSpeed } className='btn btn-outline-primary'>Search</button>  
             </FormGroup>  
          </Col>  
        </Form>
        <br/>
        <div>  
          <h1 className='display-4'>Results</h1>
          <br/><br/>
          <table className='table table-striped'>  
            <thead>  
              <tr>  
                <th>Name</th>  
                <th>Brand</th>  
                <th>Description</th>  
                <th>Price</th>  
              </tr>  
            </thead>  
            <tbody>  
              { this.tableRows() }   
            </tbody>  
          </table>  
        </div>  
      </Container>
    )
    }  
  }  
