import React from 'react';
import NavigationBar from '../../components/navbar';
import Footer from '../../components/footer';
import { Form, Button } from 'react-bootstrap';
import './homepage.css';


class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      username : '',
      password:'',
      loggedIn:false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
}

async handleSubmit(e) {
    e.preventDefault();
    let auth=await fetch('/api/test')
    let name=await auth.json()
    name.forEach((val)=>{
      if(val.username==this.state.username && val.pwd==this.state.password)
      {
        this.setState({loggedIn:true})
        return
      }
    })
    if(this.state.loggedIn==true)
    {
      alert('Login Sucessfull')
    }
    else{
      alert('Login Unsucessfull')
    }
    this.setState({username : '',password:''})
}
    render() {
      const { username, password } = this.state;
      return (
        <div>
          <NavigationBar/>
          <div className="container">
          <div className="centering border border-primary">
          <div className="heading bg-primary p-2">
              <h3 className="text-center text-white font-weight-bolder">Login</h3>
            </div>
          <div className="">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formbasicUser">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" name="username"  value={username} onChange={this.handleChange}/>
                <Form.Text className="text-muted">
                  Max 20 characters.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange}/>
              </Form.Group>
              <Button variant="primary w-100" type="submit" disabled={password.length==0 || username.length==0}>
                Submit
              </Button>
            </Form>
          </div>
          </div>
          </div>
          <Footer/>
        </div>
      );
    }
  }

export default Homepage;
