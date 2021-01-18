import React, { Component } from 'react'
import axios from 'axios'
import TableRow from './TableRow'
    
export default class ListOvertredingen extends Component {  
    
    constructor(props) {  
        super(props)
        this.state = { products: [] }
    }  
      
    componentDidMount() {
        //debugger
        axios.get('http://localhost:4000/users/')  
          .then(response => {  
            this.setState({ products: response.data })  
          })  
          .catch(function (error) {  
            console.log(error)  
          })
    }  
        
    tableRows(){  
        return this.state.products.map((row, i) => {  
            return <TableRow obj={ row } key={ i }/> 
        })
    }
    
    render() {  
        return (  
          <div>  
            <h1 className='display-4'>All Products</h1>
            <br/><br/>
            <table className='table table-striped'>  
              <thead>  
                <tr>  
                  <th>datum_vaststelling</th> 
                  <th>opnameplaats_straat</th> 
                  <th>aantal_overtredingen_snelheid</th> 
                </tr>  
              </thead>  
              <tbody>  
               { this.tableRows() }
              </tbody>  
            </table>  
          </div>  
        )
      }  
  }
