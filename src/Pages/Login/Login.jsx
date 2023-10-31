import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
// import { useContext } from 'react';
// import { AuthContext } from '../../providers/AuthProvider';
// import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const {signInUser} = useAuth()

  // const {signInUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()
  console.log(location);


    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
        .then(result => {
          const loggedInUser = result.user;
          console.log(loggedInUser);
          // const user = {email}
         
          // get acces token
          // axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
          // .then(res => {
          //   console.log(res.data);
          //   if(res.data.success){
          //      navigate(location?.state? location?.state : '/')
          //   }
          // })
        })
        .catch(error => console.log(error))
       
    }

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-3xl font-bold text-center">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <p className='my-4 text-center'>New to Car Doctors? <Link className='m text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
