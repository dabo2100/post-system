import { useEffect, useState } from 'react';
import Post from '../componenets/Post';
import { useNavigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';

export default function HomePage() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    // all Things with Login
    let currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
      let allPosts = JSON.parse(localStorage.getItem('posts') || []);

      let users = JSON.parse(localStorage.getItem('users')) || [];

      let myPosts = allPosts.filter((el) => {
        return el.postBy == currentUser;
      });

      setMyPosts(myPosts);

      let currentInfo = users.find((el) => {
        return el.userEmail == currentUser;
      });

      setUserInfo(currentInfo);
    } else {
      navigate('/login');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  const handlePost = (postValues) => {
    let allPosts = JSON.parse(localStorage.getItem('posts') || []);
    let post = { ...postValues, postBy: userInfo.userEmail };
    allPosts.push(post);
    localStorage.setItem('posts', JSON.stringify(allPosts));
    let copy = [...myPosts];
    copy.push(post);
    setMyPosts(copy);
  };
  return (
    <div className="w-full flex  flex-col items-center">
      <h1 className="text-3xl font-bold">Welcome {userInfo.userName}, Check Your Posts</h1>
      <div className="w-full p-4">
        <Formik onSubmit={handlePost} initialValues={{ content: '', title: '' }}>
          <Form className="w-full p-4 flex flex-col gap-4">
            <Field name="title" placeholder="Enter Post Title" />
            <Field name="content" placeholder="Enter Post Content" />
            <button className="btn btn-primary w-full" type="submit">
              Post Now
            </button>
          </Form>
        </Formik>
      </div>
      <button onClick={handleLogout} className="btn btn-error">
        Logout
      </button>
      <div className="container flex flex-col gap-4">
        {myPosts.map((el, index) => {
          return <Post key={index} bgColor={'bg-white'} content={el.content} title={el.title} />;
        })}
      </div>
    </div>
  );
}
