    import React, { Component } from 'react'
    import { Link } from 'react-router-dom'
    
    
    export default class TableRow extends Component {

      render() {  
        return ( 
          <table className='table table-striped' class="table">  
 
            <tr>  
              <td>  
                { this.props.obj.datum_vaststelling }
              </td>  
              <td>  
                { this.props.obj.opnameplaats_straat }  
              </td>  
              <td>  
                { this.props.obj.aantal_overtredingen_snelheid }  
              </td>  
            </tr>  
            </table>
        )
      }  
    }  
