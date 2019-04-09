var config = {
    apiKey: "AIzaSyA3MFI80hU4EZX7hZ4gewJul5hUIIsGJMk",
    authDomain: "frieght-35672.firebaseapp.com",
    databaseURL: "https://frieght-35672.firebaseio.com",
    projectId: "frieght-35672",
    storageBucket: "frieght-35672.appspot.com",
    messagingSenderId: "72856372416"
  };
  
  firebase.initializeApp(config);

  const company = document.querySelector("name, email, phone, specialty")
  const adsubmit = document.querySelector("adsubmit")
  const search = document.querySelector("search")
  const specialty = document.querySelector("specialty")
  // function to take in ads submitted from id on button in advertise html page
  adsubmit.addeventlistener("click", function(){
    const textToSave = database.value;
    console.log("banner ad submitted" + textToSave  + "to Firestore")
  })
// function to search on frieght html page to bring companies by specialty or region
  search.addeventlistener("click", function(){
    const specialty = database.value;
    document.getElementById("company, specialty").innerhtml = "freight forwarder result"
    console.log("search results" +specialty + "from firestore")
  })
 


  
