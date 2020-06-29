import React, { Component } from 'react'
import Numbers from './Numbers';
import buttonRef from './buttonRef'

export default class Calculator extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             display: ''
        }
    }

    handleNumbers(event) {
        const value = event.target.va;
        console.log(value);
        
    }
    
    render() {
        return (
            <div>

                <div id="numbers">
                    {
                        buttonRef.map( button => {
                            return(
                                <Numbers 
                                    key={button.id}
                                    value={button.value}
                                    onClick={ () => this.handleNumbers(event)}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
