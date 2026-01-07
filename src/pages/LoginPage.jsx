import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function LoginPage() {
  const navigate = useNavigate();

  const theSchema = Yup.object({
    userEmail: Yup.string().required().email(),
    userPassword: Yup.string().required().min(6),
  });

  const loginUser = (valuesOfUser) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let hasLogged = users.some((el) => {
      return el.userEmail == valuesOfUser.userEmail && el.userPassword == valuesOfUser.userPassword;
    });

    if (hasLogged) {
      toast.success('Success Login');
      localStorage.setItem('currentUser', valuesOfUser.userEmail);
      navigate('/');
    } else {
      toast.error('Wrong username or password');
    }
  };
  return (
    <div className="w-full h-dvh flex items-center justify-center bg-gray-950">
      <Formik validationSchema={theSchema} onSubmit={loginUser} initialValues={{ userEmail: '', userPassword: '' }}>
        <Form className="fieldset flex flex-col gap-5 bg-base-200 border-base-300 rounded-box w-125 border p-4">
          <h1 className="font-normal text-white text-xl capitalize text-center">Welcome , Please login to our app</h1>
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

          <button className="btn btn-neutral mt-4" type="submit">
            Login
          </button>

          <Link to="/register" className="btn btn-primary w-full">Register</Link>
        </Form>
      </Formik>
    </div>
  );
}
