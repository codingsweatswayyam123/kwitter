
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyBO4_E_sjJmGd8WbSdcqLnZWtypk1WM2eQ",
  authDomain: "project-kwitter-a801f.firebaseapp.com",
  databaseURL: "https://project-kwitter-a801f-default-rtdb.firebaseio.com",
  projectId: "project-kwitter-a801f",
  storageBucket: "project-kwitter-a801f.appspot.com",
  messagingSenderId: "505842421821",
  appId: "1:505842421821:web:e0fbb34e64df8589f71a54"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 });
    document.getElementById("msg").value = "";
}

funtion getData(){
    firebase.database().ref("/"+room_name).on('value', function(snapshot) 
                                              { document.getElementById("output").innerHTML = ""; 
                                               snapshot.forEach(function(childSnapshot) 
                                                                { childKey = childSnapshot.key;
                                                                 childData = childSnapshot.val(); 
                                                                 if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData;
}