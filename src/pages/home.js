import { Link } from '@mui/material';
import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div style={{position: "absolute", width: "75%", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
                <div style={{width: "100%",textAlign: 'center'}}>
                    <img src="assets/icon_large.png" style={{ width: "300px"}} alt="icon_large" />
                </div>
                <br/>
                I never thought in 2023 people would fall for some basic scams, but here we are, I guess...
                I decided to stop complaining about the fact that people were falling for them, and instead
                devote hundreds of hours into my time into making a course for VTubers like YOU to educate
                you on what <b>actually</b> happens in these scams, how to avoid getting them, and the red
                flags that come with them.

                <h3 style={{textAlign: 'center'}}>Course Links</h3>
                <div style={{width: "230px", position: "absolute", left: "50%", transform: "translateX(-50%)"}}>
                    <Link href="/twitter" sx={{float: "left"}}>Twitter Scams</Link>
                    <Link href="/discord" sx={{float: "right"}}>Discord Scams</Link>
                </div>
                
            </div>
        )
    }
}