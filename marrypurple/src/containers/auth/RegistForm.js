import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, register } from "../../modules/auth";
import Register from "../../components/auth/regist";
import { check } from "../../modules/user";
import { withRouter } from "react-router-dom";
import axios from 'axios';

const RegisterForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const fileSelectHandler = (event) =>{

    imgbbUploader(event.target.files[0]).then(resp => {
      
      console.log(resp.data.data.url);
       
    })
    
    const {  name } = event.target;
    const  { value } = event.target.files[0];
      dispatch(
        changeField({
          form: "register",
          key: name,
          value,
        }),
      );
      
}


const imgbbUploader = ( img ) => {
    let body = new FormData()
    body.set('key', 'fc932c3718be04e605f6d38678fc9533')
    body.append('image', img)

    return axios({
        url: 'https://api.imgbb.com/1/upload',
        method: 'post',
        timeout: 0,
        processData: false,
        mimeType: "multipart/form-data",
        contentType: false,
        data: body
    })
}


  const onChange = (event) => {
    const {  value,name } = event.target;
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      }),
    );
  };

  //회원가입 등록 이벤트 핸들러
  const onSubmit = (event) => {
    console.log("회원가입시도")
    event.preventDefault();
    const { user_email, user_pw, user_gender,user_age,user_nick,profile_pic} = form;
    if ([user_email, user_pw, user_gender,user_age,user_nick].includes("")) {
      setError("빈 칸을 모두 입력하세요");
      return;
    }
    // if 이메일인증 여기다가 넣기!

    dispatch(register({ user_email, user_pw, user_gender,user_age,user_nick,profile_pic}));
  };

  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        setError("이미 존재하는 계정명입니다.");
        return;
      }
      console.log(`error!`);
      console.log(authError);
      setError("회원가입 실패");
      return;
    }
  }, [ authError, dispatch, error]);
  useEffect(()=>{
    if (auth) {
      console.log("성공");
      console.log(auth);
      dispatch(check());
      return;
    }
  }, [auth])
  useEffect(() => {
    if (user) {
      console.log(`check API success`);
      console.log(user);
      history.push("/");
      try {
        localStorage.getItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("localStorage error");
      }
    }
  }, [user, history]);
  return (
    <Register
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      fileSelectHandler={fileSelectHandler}
      error={error}
    />
  );
};



export default withRouter(RegisterForm);
