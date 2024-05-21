import axios from 'axios';

const SampleUrl = 'http://localhost:5000';

// Retrieve token and password from localStorage
const ecomdata = JSON.parse(localStorage.getItem("persist:ecomdata"));
const loginInfo = ecomdata?.login && JSON.parse(ecomdata.login)?.LoginInformation?.[0];
const adminLoginInfo = ecomdata?.adminlogin && JSON.parse(ecomdata.adminlogin)?.LoginInformations?.[0];
const companyLoginInfo = ecomdata?.companylogin && JSON.parse(ecomdata.companylogin)?.LoginInformationss?.[0];

// Check if token and password exist
const Token = loginInfo?.token;
const Pass = adminLoginInfo?.pass;
const Tokens = companyLoginInfo?.tokens;

// Function to check if admin password is correct
const isAdminPassCorrect = () => {
    // Implement your logic here to check if the admin password is correct
    // For now, returning true always
    return true;
};

// Log token and admin pass
console.log("************", Token);
console.log("Admin Pass", Pass);
console.log("company tokens", Tokens);

// Export Axios instances
export const basicRequest = axios.create({
    baseURL: SampleUrl
});

export const TokenRequest = axios.create({
    baseURL: SampleUrl,
    headers: { token: Token }
});

export const PassRequest = axios.create({
    baseURL: SampleUrl,
    headers: { pass: Pass }
});
export const TokenRequests = axios.create({
    baseURL: SampleUrl,
    headers: { tokens: Tokens }
});

// Check if admin password is correct before using PassRequest
if (!Pass || !isAdminPassCorrect()) {
    console.error("Admin password is incorrect or missing.");
}

