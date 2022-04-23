import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../Screen/Splash/splash';
import Intro from '../Screen/Intro/intro';
import Login from '../Screen/Login/login';
import CreateAccount from '../Screen/CreateAccount/account';
import ResetPassword from '../Screen/ResetPassword/resetPassword';
import Resend from '../Screen/Resend/resend';
import CreatePassword from '../Screen/CreatePassword/createPassword';
import AccountType from '../Screen/AccountType/accounttype';
import SetupBusiness from '../Screen/Setupbusiness/setupbusiness';
import Congrats from '../Screen/Congrats/congrats';
import CustomerInfo from '../Screen/CustomerInfo/customerinfo';
import Revenue from '../Screen/Revenue/revenue';
import Refundsuccess from '../Screen/RefundSuccess/refundsuccess';
import Refundhistory from '../Screen/Refundhistory/refundhistory';
import Tabs from '../BottomTab/Tab/tab';
import {LogBox} from 'react-native';
import EditProfile from '../BottomTab/EditProfile/EditProfile';
import Payment from '../BottomTab/Payments/Payment';
import EditDetails from '../BottomTab/Edit Details/EditDetails';
import ManageCards from '../BottomTab/Manage Cards/ManageCards';
import AddCard from '../BottomTab/Add Card/AddCard';
import EditCard from '../BottomTab/Edit Card/EditCard';
import NotificationScreen from '../BottomTab/Notification/NotificationScreen';
import NotificationList from '../BottomTab/Notofication List/NotificationList';
import ChangePass from '../BottomTab/ChangePassword/ChangePass';
import SubscriptionScreen from '../BottomTab/Subscription/SubscriptionScreen';
import MorningWorkOut from '../BottomTab/MorningWorkOut/MorningWorkOut';
import FacilityCustomerInfo from '../BottomTab/CustomerInfoFacility/FacilityCustomerInfo';
import ChatScreen from '../BottomTab/Messages/Chat/ChatScreen';
import AddNew from '../BottomTab/Office/AddNew/AddNew';
import Experience from '../BottomTab/Experience/Experience';
import AddService from '../BottomTab/AddService/AddService';
import ServiceSchedule from '../BottomTab/ServiceSchedule/ServiceSchedule';
import AddedScheduling from '../BottomTab/ServiceSchedule/AddedSchedule/AddedScheduling';
import AddFacility from '../BottomTab/AddFacility/AddFacility';
import ServiceImages from '../BottomTab/ServiceSchedule/ServiceImages/ServiceImages';
import ExperienceImageScreen from '../BottomTab/Experience/ExperienceImageScreen/ExperienceImageScreen';
import FacilitySchedule from '../BottomTab/FacilitySchedule/FacilitySchedule';
import AddSubFacility from '../BottomTab/Add-Sub-facility/AddSubFacility';
import ServiceWorkOut from '../BottomTab/ServiceSchedule/ServiceWorkOut/ServiceWorkOut';
import FacilityImageScreen from '../BottomTab/FacilitySchedule/FacilityImageScreen/FacilityImageScreen';
import ExperienceMorningWorkOut from '../BottomTab/ExperienceMorningWorkOut/ExperienceMorningWorkOut';
import FacilityMorningWorkOut from '../BottomTab/FacilityMorningWorkOut/FacilityMorningWorkOut';
LogBox.ignoreAllLogs();
const Stack: React.FC<any> = () => {
  const stack = createStackNavigator();

  return (
    <stack.Navigator>
      <stack.Screen
        name="splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="intro"
        component={Intro}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="account"
        component={CreateAccount}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="resetPassword"
        component={ResetPassword}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="resend"
        component={Resend}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="createPassword"
        component={CreatePassword}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="accounttype"
        component={AccountType}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="setupbusiness"
        component={SetupBusiness}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="congrats"
        component={Congrats}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="customerinfo"
        component={CustomerInfo}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="revenue"
        component={Revenue}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="refundsuccess"
        component={Refundsuccess}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="refundhistory"
        component={Refundhistory}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="payment"
        component={Payment}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="EditDetails"
        component={EditDetails}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="ManageCards"
        component={ManageCards}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="notification"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="notificationList"
        component={NotificationList}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="editCard"
        component={EditCard}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="addCard"
        component={AddCard}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="changePass"
        component={ChangePass}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="subscription"
        component={SubscriptionScreen}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="morningWorkOut"
        component={MorningWorkOut}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="editFacility"
        component={AddFacility}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="facilityCustomerInfo"
        component={FacilityCustomerInfo}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="chatScreen"
        component={ChatScreen}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="addNew"
        component={AddNew}
        options={{headerShown: false}}
      />
      <stack.Screen
        options={{headerShown: false}}
        name="experience"
        component={Experience}
      />

      <stack.Screen
        name="addService"
        component={AddService}
        options={{headerShown: false}}
      />

      <stack.Screen
        name="addFacility"
        component={AddFacility}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="facilitySchedule"
        component={FacilitySchedule}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="addSubFacility"
        component={AddSubFacility}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="addedScheduling"
        component={AddedScheduling}
        options={{headerShown: false}}
      />

      <stack.Screen
        name="serviceImages"
        component={ServiceImages}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="serviceSchedule"
        component={ServiceSchedule}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="serviceWorkout"
        component={ServiceWorkOut}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="imageScreen"
        component={ExperienceImageScreen}
        options={{headerShown: false}}
      />

      <stack.Screen
        name="facilityImage"
        component={FacilityImageScreen}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="experienceWorkOut"
        component={ExperienceMorningWorkOut}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="facilityWorkOut"
        component={FacilityMorningWorkOut}
        options={{headerShown: false}}
      />

      <stack.Screen
        name="tab"
        component={Tabs}
        options={{headerShown: false}}
      />
    </stack.Navigator>
  );
};

export default Stack;
