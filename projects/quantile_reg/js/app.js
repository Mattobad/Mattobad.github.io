function dropDownSelected(dropDownName){

    var ddValue = document.getElementById(dropDownName);

    for (var i = 0; i < ddValue.options.length; i++) {
        if (ddValue.options[i].selected) {
            return ddValue.options[i].value
        }
      }
}


function onClickedPredict(){

    
    // field values
    var madeby = document.getElementById("select_manu").value
    // drop down list
    var vehicleType = dropDownSelected("select_type");
    // drop down list
    var drive = dropDownSelected("drive");
    // field values
    var built = document.getElementById("built").value
   // drop down list
   var drive = dropDownSelected("drive");
   // drop down list
   var cylinders = dropDownSelected("cylinders");
    // field values
    var odometer = document.getElementById("odometer").value
   // drop down list
   var fuel = dropDownSelected("fuel");
   // drop down list
   var condition = dropDownSelected("condition");
  
   //pattern for the year
    if (built == "" || !(built.match(/^(\d{4})$/))){
            window.alert("Please enter a valid date!!!");
            return false;
    } else if (odometer == "" || !(odometer.match(/^([0-9]*[.][0-9]+)$/))){
        window.alert("Please enter the odometer with numbers only!!!")
        return false;
    } else{

        const loader = document.querySelector(".loader");
        loader.className = "loader";


        user_data = {
            "year":parseInt(built),
            "type":vehicleType,
            "cylinders":cylinders,
            "odometer":parseFloat(odometer),
            "drive":drive,
            "fuel":fuel,
            "condition":condition,
            "manufacturer":madeby
        }
 
        const model_route = "v1/model/predict"
        const server_url = getURL();
        const url = server_url.concat(model_route);

        // const localURLroute = "http://127.0.0.1:5000/v1/model/predict"
    
        //POST 
        fetch(url,{
            //Declare what type of data we're sending
            headers:{
                'Content-Type': 'application/json'
            },
    
            //Specify the method
            method: 'POST',
    
            // A JSON payload
            body: JSON.stringify(user_data)
        }).then(function (response){
            return response.json();
        }).then(function (json){
            console.log('POST response:');
    
            //result from server
            console.log(json)
    
            var pointEstimate = document.getElementById('point_estimate');
            pointEstimate.innerHTML = "<h4><strong>Price Predicted:</strong>$" +json.mid+"</h4>"
    
            var intervalPreds = document.getElementById('interval_prediction');
            intervalPreds.innerHTML = "<h4><strong>Interval Predicted:</strong>$" +json.lower+"-$"+json.upper+"</h4>"
            // hide the loader
            loader.className += " hidden";

        });

}
}


function selectOptionGenerator(option_list){
    additionalOptions ="";

    option_list.forEach(function(element){
        additionalOptions += '<option value="'+element+'">'+element+'</option>';
    });

    return additionalOptions;
}



function onPageLoad(){
    
    const url = getURL();
    // const localURL = "http://127.0.0.1:5000/";

    $.get(url, function(response,status){
        console.log(status);
        console.log(response.results)
    });

    for (const [ key, value ] of Object.entries(feature_select_list)) {
        var selectOptions = document.getElementById(key);
        selectOptions.innerHTML = selectOptionGenerator(value);
    }


}


window.addEventListener("load", function(){

    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});

window.onload = onPageLoad;