import { useEffect, useState } from "react"
import { Input,Space,Button,message } from 'antd';
import styles from "./login.module.scss"
import initLoginBg from "./init.js"
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './login.less'
import { useNavigate } from "react-router-dom"
import {LoginAPI} from "@/request/api"
const Login = ()=>{
  let navigateTo = useNavigate();
  // 加载完这个组件之后，加载背景
  useEffect(()=>{
    initLoginBg();
    window.onresize = function(){initLoginBg()};
    
  },[]);
  // 获取用户输入的信息
  const [usernameVal,setUsernameVal] = useState(""); // 定义用户输入用户名这个变量
  const [passwordVal,setPasswordVal] = useState(""); // 定义用户输入密码这个变量

  const usernameChange = (e)=>{
    // 获取用户输入的用户名
    setUsernameVal(e.target.value);
  }
  const passwordChange = (e)=>{
    setPasswordVal(e.target.value);
  }
  
  // 点击登录按钮的事件函数
  const gotoLogin = async ()=>{
    // console.log("用户输入的用户名，密码，验证码分别是：",usernameVal,passwordVal);
    // 验证是否有空值
    if(!usernameVal.trim() || !passwordVal.trim()){
      message.warning("请完整输入信息！")
      return
    }
    // 发起登录请求
    let loginAPIRes =  await LoginAPI({
        username:usernameVal,
        password:passwordVal,
    })
    // console.log(loginAPIRes,'loginAPIRes')
    if(loginAPIRes.code==='REQ001'){
      // 1、提示登录成功
      message.success("登录成功！")
      // 2、保存token
      sessionStorage.setItem("token",loginAPIRes.token)
      sessionStorage.setItem("userInfo",JSON.stringify(loginAPIRes.data))
      // 3、跳转到/page1
      navigateTo("/IndexPage")
    }else if(loginAPIRes.code === 'REQ002'){
        message.warning(loginAPIRes.msg)
    }

  }



  return (
    <div className={styles.loginPage}>
      {/* 存放背景 */}
      <canvas id="canvas" style={{display:"block"}}></canvas>
      {/* 登录盒子 */}
      <div className={styles.loginBox+ " loginbox"}>
          {/* 标题部分 */}
          <div className={styles.title}>
              <h1>数字大屏·登录</h1>
          </div>
          {/* 表单部分 */}
          <div className="form">
            <Space direction="vertical" size="large" style={{ display: 'flex' }}>
              <Input placeholder="用户名" onChange={usernameChange}/>
              <Input.Password placeholder="密码" onChange={passwordChange}/>
              <Button type="primary" className="loginBtn" block onClick={gotoLogin}>登录</Button>
            </Space>
          </div>
      </div>
    </div>
  )
}
export default Login