$(document).ready(function() {
    console.log("****** I'm Ready: ******");


<script src="https://www.gstatic.com/firebasejs/5.9.3/firebase.js"></script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB-E9BVqr_B701CRCVesFGP2-AcRfUYPRQ",
    authDomain: "frieght-10951.firebaseapp.com",
    databaseURL: "https://frieght-10951.firebaseio.com",
    projectId: "frieght-10951",
    storageBucket: "frieght-10951.appspot.com",
    messagingSenderId: "816640231677"
  };
  firebase.initializeApp(config);

  
  firebase.initializeApp(config);

    var dataRef = firebase.database();
    console.log("****** This is my dataRef: ******");
    console.log(dataRef);

    // Initial Values
    var name = "";
    var email = "";
    var phone = "";
    var specialty = "";

    // Capture Button Click
    $("#adsubmit").on("click", function(event) {
        console.log("****** My #adsubmit button fired: ******");
      event.preventDefault();

      // YOUR TASK!!!
      // Code in the logic for storing and retrieving the most recent user.
      // Don't forget to provide initial data to your Firebase database.
      name = $("#name-input").val().trim();
      email = $("#email-input").val().trim();
      phone = $("#phone-input").val().trim();
      specialty = $("#specialty-input").val().trim();

      // Code for the push
      dataRef.ref().push({

        company: name,
        email: email,
        phone: phone,
        specialty: specialty,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
    });

    // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
    dataRef.ref().on("child_added", function(childSnapshot) {

      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val().company);
      console.log(childSnapshot.val().company);
      console.log(childSnapshot.val().email);
      console.log(childSnapshot.val().phone);
      console.log(childSnapshot.val().specialty);
      console.log(childSnapshot.val().joinDate);

      // full list of items to the well
      $("#full-member-list").append("<div class='well'><span class='member-name'> " +
        childSnapshot.val().company +
        " </span><span class='member-email'> " + childSnapshot.val().email +
        " </span><span class='member-phone'> " + childSnapshot.val().phone +
        " </span><span class='member-specialty'> " + childSnapshot.val().specialty +
        " </span></div>");

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

    dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
      // Change the HTML to reflect
      $("#name-display").text(snapshot.val().company);
      $("#email-display").text(snapshot.val().email);
      $("#phone-display").text(snapshot.val().phone);
      $("#specialty-display").text(snapshot.val().specialty);
    });


});
