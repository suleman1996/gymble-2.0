import {post_request, get_request} from './Requests';

const Login_api = async body => {
  const Test = await post_request({target: '/v2/login', body: body});
  return Test;
};

const Signup_api = async body => {
  const Test = await post_request({target: '/v2/business/vendor-signup', body: body});
  return Test;
};

const ForgotPassword_api = async body => {
  const Test = await post_request({target: '/v2/business/forgot-password', body: body});
  return Test;
};




export {Login_api,Signup_api,ForgotPassword_api};
