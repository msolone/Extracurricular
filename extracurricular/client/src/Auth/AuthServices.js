
import auth0 from "auth0-js";
// import { AUTH_CONFIG } from "./auth0-variables";
import EventEmitter from "eventemitter3";
import router from "./../router";

export default class AuthService {
  authenticated = this.isAuthenticated();
  authNotifier = new EventEmitter();
  userProfile;

  constructor() {
    this.login = this.login.bind(this);
    this.setSession = this.setSession.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    // Got from authO's react documentation
    this.getAccessToken = this.getAccessToken.bind(this);
    // Got from authO's react documentation
    this.getProfile = this.getProfile.bind(this);
  }

  auth0 = new auth0.WebAuth({
    domain: "michaelsolone.auth0.com",
    clientID: "UGUByEkhEARxvxFIfnAOnTwc6G2VbWBX",
    redirectUri: "http://extracurricular.site/callback",
    responseType: "token id_token",
    scope: "openid profile"
  });

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
      console.log("here")
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        router.replace('Home');
      } else if (err) {
        router.replace("Home");
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    this.authNotifier.emit("authChange", { authenticated: true });
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.userProfile = null;
    this.authNotifier.emit("authChange", false);
    // navigate to the home route
    router.replace("Home");
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }

  // Got from the authO React Documentation
  getAccessToken() {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      throw new Error("No Access Token found");
    }
    return accessToken;
  }

  // Got from the authO React Documentation
  getProfile(cb) {
    let accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }
}