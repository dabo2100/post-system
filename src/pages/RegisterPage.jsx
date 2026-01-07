import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function RegisterPage() {
  const navigate = useNavigate();

  const theSchema = Yup.object({
    userEmail: Yup.string().required().email(),
    userPassword: Yup.string().required().min(6),
    userName: Yup.string().required().min(4),
  });

  const regesterUser = (valuesOfUser) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let hasRegister = users.some((el) => {
      return el.userEmail == valuesOfUser.userEmail;
    });
    if (hasRegister) {
      toast.error('User Already Registered , Please Login');
    } else {
      toast.success('Success Register');
      users.push(valuesOfUser);
      localStorage.setItem('currentUser', valuesOfUser.userEmail);
      localStorage.setItem('users', JSON.stringify(users));
      navigate('/');
    }
  };
  return (
    <div className="w-full h-dvh flex items-center justify-center bg-gray-950">
      <Formik validationSchema={theSchema} onSubmit={regesterUser} initialValues={{ userName: '', userEmail: '', userPassword: '' }}>
        <Form className="fieldset flex flex-col gap-5 bg-base-200 border-base-300 rounded-box w-125 border p-4">
          <h1 className="font-normal text-red-950 text-xl capitalize text-center">Welcome , Please register to our app</h1>
          <fieldset className="fieldset">
            <label htmlFor="usName" className="cursor-pointer">
              Username
            </label>
            <Field name="userName" id="usName" type="text" className="input  w-full" placeholder=" Enter your name" required />
            <ErrorMessage component={'p'} className="text-red-800 capitalize " name="userName" />
          </fieldset>
          <fieldset className="fieldset">
            <label htmlFor="usemail" className="cursor-pointer">
              User Email
            </label>
            <Field name="userEmail" id="usemail" type="email" className="input  w-full" placeholder=" Enter your Email" required />
            <ErrorMessage component={'p'} className="text-red-800 capitalize " name="userEmail" />
          </fieldset>

          <label className="fieldset">
            <label htmlFor="uspassword" className="cursor-pointer">
              Username Password
            </label>
            <Field name="userPassword" id="uspassword" type="password" className="input  w-full" placeholder=" Enter your Password" required />
            <ErrorMessage component={'p'} className="text-red-800 capitalize " name="userPassword" />
          </label>
          <Link to="/login" className="btn btn-primary w-full">
            Login
          </Link>
          <button className="btn btn-neutral mt-4" type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
