import { post_request, get_request } from './Requests';

const Login_api = async body => {
  const response = await post_request({ target: '/v2/business/login', body: body });
  return response;
};
const ForgotPassword_api = async body => {
  const response = await post_request({ target: '/v2/business/forgot-password', body: body });
  return response;
};
const Signup_api = async body => {
  const response = await post_request({ target: '/v2/business/vendor-signup', body: body });
  return response;
};
const getBookUserApi = async ({ page, limit, facilityId }) => {
  const response = await get_request({ target: '/v2/business/get-booking-users/' + facilityId + '?page=' + page + '&limit=' + limit, body: { facilityId: 2 } });
  return response;
}
const Update_Password = async body => {
  const response = await post_request({ target: '/v2/me/password-update', body: body });
  return response;
};

export {
  Login_api,
  Signup_api,
  Update_Password,
  ForgotPassword_api,
  getBookUserApi,
};
