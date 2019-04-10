
var config = {
    apiKey: "AIzaSyA3MFI80hU4EZX7hZ4gewJul5hUIIsGJMk",
    authDomain: "frieght-35672.firebaseapp.com",
    databaseURL: "https://frieght-35672.firebaseio.com",
    projectId: "frieght-35672",
    storageBucket: "frieght-35672.appspot.com",
    messagingSenderId: "72856372416"
  };
  
  firebase.initializeApp(config);

  var freightData = firebase.database();

  // 2. Populate Firebase Database with initial data (in this case, I did this via Firebase GUI)
// 3. Button for adding company's
$("#add-company-btn").on("click", function() {

  // Grabs user input
  var company = $("#company-input").val().trim();
  var specialty = $("#specialty-input").val().trim();
  var email = $("#email-input").val().trim();
  var phone = $("#phone-input").val().trim();

  // Creates local "temporary" object for holding company data
  var newcompany = {

    name: company,
    specialty: specialty,
    email: email,
    phone: phone
  };

  // Uploads company data to the database
  freightData.ref().push(newcompany);

    // function to take in ads submitted from id on button in advertise html page
    adsubmit.addeventlistener("click", function(){
      const textToSave = database.value;
      console.log("banner ad submitted" + textToSave  + "to freightdata")
    })
  // function to search on frieght html page to bring companies by specialty or region
    search.addeventlistener("click", function(){
      const specialty = database.value;
      document.getElementById("company, specialty").innerhtml = "freight forwarder result"
      console.log("search results" +specialty + "from freightdata")
    })
 
  });