import React, { Component } from 'react'

export default class demo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            excel: []
        }
        
    }

    DisplayExcel(id){
        this.props.history.push(`/displayexcel/${id}`);
      }

      
  render() {
    return (
      <div>demo</div>
    )
  }
}
