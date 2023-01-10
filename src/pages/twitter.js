import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Component } from "react";
import Page1 from './subpages/twitter/1';
import Page2 from "./subpages/twitter/2";


const pageMap = [
    <Page1 />,
    <Page2 />
]

export default class Twitter extends Component {
    state = {pageNumber: 0}
    
    render() {
        return (
            <div>
                <Link href="/">Back to home</Link>
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
                        Instagram "Hack"
                    </Link>
                </Breadcrumbs>
                {pageMap[this.state.pageNumber]}
            </div>
        )
    }
}