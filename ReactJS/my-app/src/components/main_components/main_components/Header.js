import React, { Component } from 'react';
import {connect} from 'react-redux';


export class Header extends Component {
    render() {
        const {step1, step2, step3} = this.props;
        return (
            <div className="main-header">
                <div className="row">
                    {
                        step1 ?
                        <h3 className="steps">STEP 1 OF 3</h3>:
                        step2 ?
                        <h3 className="steps">STEP 2 OF 3</h3>:
                        step3 ?
                        <h3 className="steps">STEP 3 OF 3</h3>:
                        <h3 className="steps">STEP 1 OF 3</h3>
                    }
                    
                    <div className="header-help">
                        <p>Lost or have trouble?</p>
                        <a href="#">Get help</a>
                        <i className="fa fa-long-arrow-right"></i>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    step1: state.Data.step1,
    step2: state.Data.step2,
    step3: state.Data.step3
})



export default connect(mapStateToProps)(Header)
