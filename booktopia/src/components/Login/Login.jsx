import React, {useState} from 'react';
import { LoginContainer,LoginMainContainer, Page ,Input,Button,Label,Form} from './styledLogin'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
// import Form from '../../navigation/form';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import Input from './input';
function Login() {
    const history=useNavigate();
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    const [error,setError]= useState('');

    const handleSubmit=async(event) => {
        event.preventDefault();
        if(!event.target.password==='' || event.target.username.value===''){
            toast.error("Please enter username and password");
            setError("Please enter username and password");
            return;
        }
        const cookies=new Cookies();
        try{
            const {data} =await axios.post('http://localhost:3000/logIn',{
                username:username,
                // email:username,
                password:password
            });
            toast.success("Login Successful");
            cookies.set('jwtToken',data);
            history('/Home');
        }
        catch(err){
            console.log(err);
            toast.error(err.response.data);
            setError("Invalid username or password!");
            return;
        }
        setUsername('');
        setPassword('');
        history('/Home');
    }      
    return (<LoginMainContainer>
        <LoginContainer>
            <ToastContainer/>
            <Page>
        <Form onSubmit={handleSubmit}>
            <Label>Username:</Label>
            <Input type="text" name="username" required={true} value={username} onChange={(e)=>setUsername(e.target.value)}/><br/>
            <Label>Password:</Label>
            <Input type="password" name="password" required={true} value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
            {error && <div style={{backgroundColor:'#a09fa6',
                    display:'flex',justifyContent:'center',alignItems:'center',borderRadius:5}}>
                        <h5 style={{textAlign:'center', color:'red',margin:'auto',padding:8}}>{error}</h5>
                        
                        <button style={{marginLeft:12,marginRight:10,
                        background:'none',color:'green',fontWeight:"bold",
                        cursor:'pointer'}} onClick={()=>setError('')}>X</button></div>}
                    <Button>Login</Button>
                    <p>Don't have an account?  <Link to='/register' style={{color:'blue'}}> Register</Link></p>
            </Form>
        </Page>
        </LoginContainer>        
    </LoginMainContainer>);
};
 
export default Login;
// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import Form from './../../navigation/form';
// class Login extends Component {
//     // state = {  } 
//     render() { 
//         return (
//             <div>
//                 <h1>Login Page</h1>
//                 <form onSubmit={this.handle
//                 }>
//                     <label htmlFor="username">Username</label>
//                     <input type="text" name="username" id="username" />
//                     <br/>
//                     <label htmlFor="password">Password</label>
//                     <input type="password" name="password" id="password" />
//                     <br/><br/>
//                     <button type="submit" className='btn btn-primary'>LogIn</button>
//                 </form>
//             </div>
//         );
//     }
// }
 
// export default Login;