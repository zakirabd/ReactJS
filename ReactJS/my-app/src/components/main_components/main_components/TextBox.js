import React, { Component } from 'react';
import {connect} from 'react-redux';

export class TextBox extends Component {
    render() {
        const {step1, step2, step3} = this.props;
        return (
            <div>
                {
                    step1 ?
                    <div className="main-text-box">
                        <h2>Сontact details</h2>
                        <p>Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you</p>
                    </div> :
                    step2 ?
                    <div className="main-text-box">
                        <h2>Investment plans</h2>
                        <p>Let us know about your investment plans. This will help us get you to the right expert who will help you further</p>
                    </div>:
                    step3 ?
                    <div className="main-text-box">
                        <h2>Investment preferences</h2>
                        <p>This will help us figure out what your investment options are so that we can show you only possibly intresting for you deals</p>
                    </div>:
                    <div className="main-text-box">
                        <h2>Сontact details</h2>
                        <p>Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you</p>
                    </div>
                }
                
            </div>  
        )
    }
}

const mapStateToProps = (state) => ({
    step1: state.Data.step1,
    step2: state.Data.step2,
    step3: state.Data.step3
})



export default connect(mapStateToProps)(TextBox)
