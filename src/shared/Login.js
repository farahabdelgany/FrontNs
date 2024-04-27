import FrameComponent from "../components/FrameComponent";
import React, { useState } from "react";
import styles from "./Login.module.css";
import { setAuthUser } from "../helper/storage";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {

    const navigate =useNavigate();
    const [login,setLogin] = useState({
      email : '',
      password : '',
      loading :false,
      err:[], 
    });
    const LoginFun=(e)=>
    {
        e.preventDefault();
        setLogin({...login,loading :true,err:[]});
        axios.post("http://localhost:4000/auth/login",{
          email: login.email,
          password:login.password,
        }).then((resp)=>{
  
          setLogin({...login,loading :false,err:[]});        
          setAuthUser(resp.data);
  
          navigate("/");
            
        }).catch((errors)=>{
          
          setLogin({...login,
          loading :false,
          err:errors.response.data.errors,
        });
  
        });
        
    }

  return (
    <div className={styles.login}>
      <div className={styles.christinHumeHcfwew744z4Unsp} />
      <main className={styles.wrapperVector1Parent}>
        <div className={styles.wrapperVector1}>
          <img
            className={styles.wrapperVector1Child}
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <img className={styles.frameChild} alt="" src="/vector-2.svg" />
      </main>
      <div className={styles.logo1} />
      <FrameComponent onSubmit={LoginFun} />
      </div>
  );
};

export default Login;
