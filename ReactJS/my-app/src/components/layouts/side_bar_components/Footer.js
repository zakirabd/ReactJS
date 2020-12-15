import React, { Component } from 'react';
import {connect} from 'react-redux';

export class Footer extends Component {
    render() {
        const {step1, step2, step3} = this.props;
        
        return (
            
            <div className="side-bar-footer">
                <i className="fas fa-quote-left"></i>
                <div className="side-bar-text-container">
                    {
                        step1 ?
                        <p>We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete</p>:
                        step2 ?
                        <p>Save from thousands to millions on your deal. Secure the best possible. And get independent, unbiased advice for free</p>:
                        step3 ?
                        <p>United Properties is about fast & easy searching, buying, selling and investing ever — online, with an expert by our side</p>:
                        <p>We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete</p>
                    }
                   
                    <div className="personal-name">
                        {
                            step1 ?
                            <div className="column">
                                <h3>William Mac</h3>
                                <div className="row">
                                    <h3>CO-FOUNDER, INVESTOR</h3>
                                    <h2><b>U</b>P</h2>
                                </div>
                            </div>:
                            step2 ?
                            <div className="column">
                                <h3>Jodie Sears</h3>
                                <div className="row">
                                    <h3>UNITEDPROPERTIES’ AGENT</h3>
                                    <h2><b>U</b>P</h2>
                                </div>
                            </div>:
                            step3 ?
                            <div className="column">
                                <h3>Ollie Mcmahon</h3>
                                <div className="row">
                                    <h3>MANAGING DIRECTOR</h3>
                                    <h2><b>U</b>P</h2>
                                </div>
                            </div>:
                            <div className="column">
                                <h3>William Mac</h3>
                                <div className="row">
                                    <h3>CO-FOUNDER, INVESTOR</h3>
                                    <h2><b>U</b>P</h2>
                                </div>
                            </div>
                        }
                       
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


export default connect(mapStateToProps)(Footer)
