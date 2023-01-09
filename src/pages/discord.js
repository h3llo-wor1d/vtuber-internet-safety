import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Component } from "react";
import Page1 from './subpages/discord/1';
import Page2 from "./subpages/discord/2";


const pageMap = [
    <Page1 />,
    <Page2 />
]

export default class Discord extends Component {
    state = {pageNumber: 0}
    
    render() {
        return (
            <div>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link 
                        underline="hover" 
                        color={this.state.pageNumber === 0 ? "text.primary" : "inherit"}
                        onClick={() => {this.setState({pageNumber: 0})}}
                    >
                        Getting Started
                    </Link>
                    <Link
                        underline="hover"
                        color={this.state.pageNumber === 1 ? "text.primary" : "inherit"}
                        onClick={() => {this.setState({pageNumber: 1})}}
                    >
                        QR Code Scams
                    </Link>
                </Breadcrumbs>
                {pageMap[this.state.pageNumber]}
            </div>
        )
    }
}