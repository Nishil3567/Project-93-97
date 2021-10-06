const firebaseConfig = {
      apiKey: "AIzaSyAUPyiYpfLObSPR2u47iMJ3P02-vrtzPXA",
      authDomain: "kwitter-4ead3.firebaseapp.com",
      databaseURL: "https://kwitter-4ead3-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "kwitter-4ead3",
      storageBucket: "kwitter-4ead3.appspot.com",
      messagingSenderId: "177471014062",
      appId: "1:177471014062:web:049b5b733ab2bbf015993f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
