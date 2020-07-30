import React, { useState } from 'react'
import { Button, Input } from '@material-ui/core'
import Link from 'next/link'
import isEmpty from 'lodash/isEmpty'
import Router from 'next/router'

const Login = () => {
  const [emailOrMobile, setEmailOrMobile] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="login">
    <h2 style={{ textAlign: 'center' }}> 欢迎登录！</h2>
    <form>
      <div style={{ textAlign: 'center' }}>
        <label for="inputMobileorEmail">手机或邮箱: </label>
        <Input type="text" id="inputMobileorEmail" placeholder="手机或邮箱" value={emailOrMobile} required minlength="1" onChange={e => setEmailOrMobile(e.target.value)} /> 
      </div>
      <div style={{ textAlign: 'center' }}>
        <label for="inputPassword" style={{ marginLeft: 20, marginRight: 15 }}>密码： </label>
        <Input type="password" id="inputPassword" placeholder="密码" style={{ marginTop: 25 }} value={password} required minlength="1" onChange={e => setPassword(e.target.value)} />
      </div>
      <div style={{ textAlign: 'center' }}>
          <Button 
            color="lightblue" 
            variant="contained"
            disabled={isEmpty(emailOrMobile) || isEmpty(password)}
            style={{ height: 30, marginTop: 30 }}
            onClick={() => Router.push('/')} 
          >
            登录
          </Button>
      </div>
    </form>
  </div>
  ) 
}

export default Login
