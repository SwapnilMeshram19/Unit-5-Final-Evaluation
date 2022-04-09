import React,{useState} from "react";
import './Registration.css';

const Registration =()=>{
    const [name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[userName, setUserName]=useState('');
    const[mobileNumber, setMobileNumber]=useState('');
    const[description, setDiscription]=useState('');

    const handleName =(e)=>{

    }
    const handleEmail =(e)=>{

    }
    const handlePassword =(e)=>{

    }
    const handleUserName =(e)=>{

    }
    const handleMobileNumber =(e)=>{

    }
    const handleDescription =(e)=>{

    }

    const handleSubmit =()=>{

    }

    return (
        <div>
            <form class="form">
                <label>Name</label><br/>
                <input class='name'value={name} type="string"onChange={handleName}/>
                <br/><label>Email</label><br/>
                <input class='email'value={email}type="email" onChange={handleEmail}/>
                <br/><label>Password</label><br/>
                <input class='password'value={password} type='password' onChange={handlePassword}/>
                <br></br><label>User Name</label><br/>
                <input class='userName'value={userName} type='username' onChange={handleUserName}/>
                <br/><label>Mobile Number</label><br/>
                <input class='mobileNumber'value={mobileNumber} type='number' onChange={handleMobileNumber}/>
                <br/><label>Description</label><br/>
                <input class='description'value={description} type="string" onChange={handleDescription}/>
                
                <br/><button onClick={handleSubmit} className= 'submitButton' type="submit">Submit</button>
            </form>

        </div>
    );
};

export default Registration;