import { Link} from 'react-router-dom';
import { useState} from 'react'
import axios from 'axios';

const SignIn:React.FC = () => {

    const [formData, setFormData] = useState<SignInFormState> ({
        email: '',
        password: ''
      })

    interface SignInFormState  {
        email: string;
        password: string
      }
    // const nav :Navigation= useNavigation();
   
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}))
      }
      const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:3003/users/login', formData);
          console.log(response);
        }catch (error) {
          console.error(error);
        }
      }
return (
    <div className="w-[100%] bg-black  h-[500px]">

 <div className="rounded-xl border border-orange-400  bg-slate-400 w-[60%] h-[300px] p-9 mx-auto my-9">
    <h1 className="text-center text-3xl">Sign in </h1>
        <form onSubmit={handleSubmit} className="form text-center" action="">
            <div className="my-3">
<label className="text-xl" htmlFor="">Name : </label>
            <input onChange={handleChange} className="input h-8" type="text" />
            </div>
            <div className="my-3">
<label className="text-xl" htmlFor="">Password:</label>
            <input onChange={handleChange} className="input h-8" type="text" />
            </div>
            <div className=''>
            <Link   to="/home" />
            <button   type="submit" className="btn btn-sm  btn-warning">Sign In</button>
          </div>
        </form>
    </div>   
    </div>
)
}

export default SignIn;