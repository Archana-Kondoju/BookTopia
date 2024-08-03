import React, {useState} from 'react';
import { LoginContainer,LoginMainContainer, Page ,Input,Button,Label,Form} from './styledLogin';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
function Register() {
    const navigate=useNavigate();
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState();

    const handleSubmit = async(event) => {
        event.preventDefault();
        try{
            const data = await axios.post('http://localhost:3000/register',{
                username:username, 
                email:email,
                password:password
            });
            console.log("data",data);
            if(!data){
                console.log(data.message);
            }
            navigate('/logIn');
        }
        catch(err){
            console.log("error occurred",err.response.data);
            const {message}= err.response.data;
            setError(message);
        }
      };
        return (
            <LoginMainContainer>
                <LoginContainer>
                <Page>
                {/* <h1>Register</h1> */}
                <Form onSubmit={handleSubmit}>
                    <Label>Username:</Label>
                    <Input type='text' required={true} name='username' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/><br/>
                    <Label>Email:</Label>
                    <Input type='email' required={true} name='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                    <Label>Password:</Label>
                    <Input type='password' required={true} name='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
                    {error && <div style={{backgroundColor:'#a09fa6',
                    display:'flex',justifyContent:'center',
                    alignItems:'center',borderRadius:5,padding:5}}>
                    <h5 style={{textAlign:'center', color:'red',margin:'auto'}}>{error}</h5>
                    <button style={{border:'none',marginLeft:12,marginRight:8,
                    background:'none',color:'green',fontWeight:"bold",
                    cursor:'pointer'}} onClick={()=>setError('')}>X</button></div>}
                    <Button onClick={handleSubmit}>Register</Button>  
                    <p>Already have an account? <Link to='/logIn' style={{color:'blue'}}>Login</Link></p>
                </Form>
                </Page>
            </LoginContainer>
        </LoginMainContainer>
    );
}
 
export default Register;
// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// // import {User} from '../bookApi/user';
// class Register extends Component {
//     // state = {
//     //     username: '',
//     //     password: ''
//     // }
//     // handleUsername = (e) => {
//     //     this.setState({username: e.target.value});
//     // }
//     // handlePassword = (e) => {
//     //     this.setState({password: e.target.value});
//     // }
//     // handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     const {username, password} = this.state;
//     //     User({username, password});
//     //     this.setState({username: '', password: ''});
//     // }
//     render() {
//         // const { username, password } = this.state
//         return (
//             <div>
//                 <h1>Register</h1>
//                 {/* onSubmit={this.handleSubmit} */}
//                 <form >
//                     <label htmlFor="username">Username</label>
//                     {/* onChange={this.handleUsernameChange} value={username} value={password} onChange={this.handlePasswordChange}   */}
//                     <input type="text" name="username"  />
//                     <br/>
//                     <label htmlFor="password">Password</label>
//                     <input type="password" name="password" />
//                     <br/><br/>
//                     <button type="submit" className='btn btn-primary'>Register</button>
//                 </form>
//                 <p>Already have an account? <Link to='/logIn'>Login</Link></p>
//             </div>
//         )
//     }
//     // handleUsernameChange = ({ target: { value } }) => this.setState({ username: value })
//     // handlePasswordChange = ({ target: { value } }) => this.setState({ password: value })
// }
 
// export default Register;