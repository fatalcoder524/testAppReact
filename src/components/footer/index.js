import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Footer extends Component {
    render() {
        return (
            <div class="fixed-bottom text-center d-flex flex-column bg-dark text-white">
            <footer class="footer">
                <div>
                fatalcoder524
                <span>&copy; 2020</span>
                </div>
            </footer>
            </div>
        )
    }
}
