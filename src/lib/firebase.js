import * as firebase from 'firebase';
// class Firebase{
//   static init(){
//     firebase.initializeApp({
//       apiKey: "AIzaSyC1jfN7z57RSZzBvxogDGrj4jp9ECYOceo",
//       authDomain: "appdemo2-71552.firebaseapp.com",
//       databaseURL: "https://appdemo2-71552.firebaseio.com",
//       storageBucket: "appdemo2-71552.appspot.com"
//     });
//   }
// }
const firebaseConfig = {
  apiKey: "AIzaSyD6MIgMuH9qmLvDAPcINOIwnPZsEBhP7yY",
  authDomain: "apphoteles-b3717.firebaseapp.com",
  databaseURL: "https://apphoteles-b3717.firebaseio.com",
  storageBucket: "apphoteles-b3717.appspot.com"
};
const Firebase = firebase.initializeApp(firebaseConfig);
module.exports = Firebase;
