
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room names-"+Room_names);
row="<div class='room_name'id="+Room_name+"onclick='redirectToRoomName(this.id)'>#"+room_name+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").ariaValueMax;
      firebase.database().ref("/").child("room_name").update({
            purpose:"adding room name"
      })
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_room.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location(kwitter_room.html);
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}