// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCzm-Tbn5R_iKuGIX_wuqjQ_uSvWMvGvRU",
    authDomain: "fir-demo-dc571.firebaseapp.com",
    databaseURL: "https://fir-demo-dc571.firebaseio.com",
    projectId: "fir-demo-dc571",
    storageBucket: "fir-demo-dc571.appspot.com",
    messagingSenderId: "881603671773",
    appId: "1:881603671773:web:2250bbf294d2d9844a0d34"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

firebase.database().ref('/Me/').once('value').then(function (snapshot) {
    $('.my-name').text(snapshot.val().Name);
    $('.head-line').text(snapshot.val().HeadLine);
    $('.address').html(snapshot.val().Address);
    $('.phone-num').html(snapshot.val().Phone);
    $('.email-id').html(snapshot.val().Email);
    $('.skype').html(snapshot.val().Skype);
});