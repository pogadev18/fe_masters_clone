import React, { FC, useState } from 'react';

import Wrapper from '../../sharedComponents/Wrapper/Wrapper';
import { BASE_API_URL } from '../../config';

import './Login.scss';

const Login: FC = () => {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_API_URL}/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
      });

      const data = await res.json();
      // dispatch(loginUser(data.userName));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper customClass='login'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='login__formGroup'>
          <label htmlFor='email'>Email</label>
          <input
            value={email}
            type='email'
            name='email'
            required
            onChange={e => setEmail(e.target.value)}
          />
          <div className='email error'/>
        </div>

        <div className='login__formGroup'>
          <label htmlFor='password'>Password</label>
          <input
            value={password}
            type='password'
            name='password'
            required
            onChange={e => setPassword(e.target.value)}
          />
          <div className='password error'/>
        </div>
        <button type='submit'>submit</button>
      </form>
    </Wrapper>
  );
};

export default Login;
