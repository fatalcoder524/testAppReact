import React, { Component } from 'react'
import '../footer/footer.css';
export default class Footer extends Component {
    render() {
        return (
            <div class="fixed-bottom text-center d-flex flex-column bg-dark text-white">
            <footer class="footer">
                <div class="footer-content">
                <a href="https://www.linkedin.com/in/fatalcoder524/" target="_blank">
                	fatalcoder524
                </a><span>&copy; 2020</span>
                </div>
            </footer>
            </div>
        )
    }
}
