import { useState } from "react"

export  function Anudeep(){
    const [data,setData]=useState({"id":"1","name":"Bharat"})
    const [inputkey,setInputkey]=useState("")
    const [inputd,setInputd]=useState("")
    
    const onhandle=()=>{
        setData({...data,[inputkey]:inputd})
      
    }
    const changeinput=(e)=>{
     setInputd(e.target.value)
    
    }
    const changeinputkey=(e)=>{
      setInputkey(e.target.value)
    
    }

    return(
        <>
        <div>
           
            
            
            
            <input type="text" value={inputkey} placeholder="enter the Key" onChange={changeinputkey}/>
            <input type="text" value={inputd} placeholder="ehter the value" onChange={changeinput}/>
            <button onClick={onhandle}>Add data</button>
           {
            Object.entries(data).map(([key,value])=>(
                <p key={key}>{key}:{value}</p>
            ))
           }
            
            
            
        </div>
        </>
    )
}


export function Loginform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    if (name === "bharat" && password === "123456") {
      alert(" Successful login");
    } else {
      alert(" Invalid Credentials");
    }
  };

  return (
    <>
      <h1>Login Details</h1>
      <fieldset>
        <legend>User login</legend>

        <form onSubmit={handlesubmit}>
          <label htmlFor="name">Username:</label>&nbsp;
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter the username"
            required
          />
          <br />

          <label htmlFor="password">Password:</label>&nbsp;
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter the password"
            required
          />
          <br />

          <label htmlFor="email">Email:</label>&nbsp;
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter the email"
          />
          <br />

          <button type="submit">Submit</button>
        </form>
      </fieldset>
    </>
  );
}


export function Controll(){
  const [formdata,setFormdata]=useState({
    username:"",
    email:"",
    password:"",
    address:"",
  })


  const [submittedData, setSubmittedData] = useState(null);

  const inputhandle=(e)=>{
   const {name,value}=e.target;
   setFormdata({...formdata,[name]:value})
  }

  const buttonsubmit=(e)=>{
     e.preventDefault();
     setSubmittedData(formdata); 
  }

  return(
    <>
    <h1 align="center">Controlled form</h1>
    <fieldset>
      <legend>form data</legend>
      <form onSubmit={buttonsubmit}>
        <label htmlFor="username">Username:&nbsp;</label>
        <input type="text" name="username" id="username" value={formdata.username} onChange={inputhandle} /><br />
        
        <label htmlFor="email">Email:&nbsp;</label>
        <input type="email" name="email" id="email" value={formdata.email} onChange={inputhandle} /><br />
        
        <label htmlFor="password">Password:&nbsp;</label>
        <input type="password" name="password" id="password" value={formdata.password}  onChange={inputhandle}/><br />
        
        <label htmlFor="address">Address:&nbsp;</label>
        <textarea name="address" id="address" value={formdata.address} onChange={inputhandle} /><br />
        
        <button type="submit"> Submit</button>
      </form>
    </fieldset>


    {submittedData && (
      <div>
        <h3>Submitted Data:</h3>
        {Object.entries(submittedData).map(([key, value]) => (
          <p key={key}>{key}: {value}</p>
        ))}
      </div>
    )}
    </>
  )
}
