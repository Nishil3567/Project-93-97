var  firebaseConfig = {
      apiKey: "AIzaSyCVvldfjG253UnT_YO4DgJPkPwLJmIyeOI",
      authDomain: "lets-chat-app-2c851.firebaseapp.com",
      databaseURL: "https://lets-chat-app-2c851-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "lets-chat-app-2c851",
      storageBucket: "lets-chat-app-2c851.appspot.com",
      messagingSenderId: "37120888187",
      appId: "1:37120888187:web:c1a80f6a4c081203f941de"
    };
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+ user_name;

 function addRoom(){
  room_name = document.getElementById("room_name").value;
  localStorage.setItem("room_name",room_name);
  firebase.database().ref("/").child(room_name).update({
      purpose:"adding roomname"
  });
  window.location = "kwitter_page.html";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+"onclick='RedirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function RedirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout(){
window.location = "index.html";
}