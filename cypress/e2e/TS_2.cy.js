import { SignupData } from "../utils/data";
import { signUpPage } from "../pages/SignUp";
import { data, signUpData } from "../utils/data";

describe("SignUp", () => {
  it("Verify sign up functionality with valid credentials", () => {
      signUpPage.visit();
      signUpPage.getFirstName(signUpData.FirstName);
      signUpPage.getLastName(signUpData.LastName);
      signUpPage.getAddress(signUpData.Address);
      signUpPage.getCity(signUpData.City);
      signUpPage.getState(signUpData.State);
      signUpPage.getZipcode(signUpData.Zipcode);
      signUpPage.getPhone(signUpData.Phone);
      signUpPage.getSSN(signUpData.SSN);
      signUpPage.getUserName(signUpData.UserName);
      signUpPage.getPassword(signUpData.Password);
      signUpPage.getConfirm(signUpData.Confirm);
      signUpPage.submit ();
       //signupPage.register().contains('REGISTER');
  });
});

describe("signup", function () {
  it("Verify sign up functionality with username and password and empty credentials", () => {
    signUpPage.visit();
    signUpPage.getFirstName(data.emptyString);
    signUpPage.getLastName(data.emptyString);
    signUpPage.getAddress(data.emptyString);
    signUpPage.getCity(data.emptyString);
    signUpPage.getState(data.emptyString);
    signUpPage.getZipcode(data.emptyString);
    signUpPage.getPhone(data.emptyString);
    signUpPage.getPhone(data.emptyString);
    signUpPage.getSSN(data.emptyString);
    signUpPage.getUserName(data.UserName);
    signUpPage.getPassword(data.Password);
    signUpPage.getConfirm(data.Confirm);
    signUpPage.submit();
 });
});
