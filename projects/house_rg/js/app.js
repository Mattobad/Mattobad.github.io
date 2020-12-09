
function radioButtonSelected(radioBtnName){
    var radioValue = document.getElementsByName(radioBtnName);

    for(i = 0; i < radioValue.length; i++) { 
        if(radioValue[i].checked) 
        return radioValue[i].value
    }    
    
}

function dropDownSelected(dropDownName){

    var ddValue = document.getElementById(dropDownName);

    for (var i = 0; i < ddValue.options.length; i++) {
        if (ddValue.options[i].selected) {
            return ddValue.options[i].value
        }
      }
}



function onClickedPredict(){

    // radio btn values
    var pavedSelected = radioButtonSelected("paved");
    console.log("Type of paved selected: "+pavedSelected)

    var roofSelected = radioButtonSelected("roof");
    console.log("Type of roof selected: "+roofSelected)

    // field values
    var grLivedValue = document.getElementById("uiGrLivArea").value
    console.log("grLivedValue: "+grLivedValue)

    var garageCarsValue = document.getElementById("uiGarageCars").value
    console.log("garageCarsValue: "+garageCarsValue)


    var totalBsmtSFValue = document.getElementById("uiTotalBsmtSF").value
    console.log("totalBsmtSFValue: "+totalBsmtSFValue)

    var bsmtFinSF1Value = document.getElementById("uiBsmtFinSF1").value
    console.log("bsmtFinSF1Value: "+bsmtFinSF1Value)

    var secondFlrSFValue = document.getElementById("ui2ndFlrSF").value
    console.log("secondFlrSF: "+secondFlrSFValue)

    // radio btn values
    var exteriorSelected = radioButtonSelected("exterior");
    console.log("Type of exterior selected: "+exteriorSelected)

    // field values
    var lotAreaValue = document.getElementById("uiLotArea").value
    console.log("lotAreaValue: "+lotAreaValue)


    var fullBathValue = document.getElementById("uiFullBath").value
    console.log("fullBathValue: "+fullBathValue)

    var masVnrAreaValue = document.getElementById("uiMasVnrArea").value
    console.log("masVnrAreaValue: "+masVnrAreaValue)

    var bsmtUnfSFValue = document.getElementById("uiBsmtUnfSF").value
    console.log("bsmtUnfSFValue: "+bsmtUnfSFValue)

    // radio btn values
    var kitchenSelected = radioButtonSelected("kitchen");
    console.log("Type of kitchen Selected: "+kitchenSelected)

    // field values
    var lotFrontageValue = document.getElementById("uiLotFrontage").value
    console.log("lotFrontageValue: "+lotFrontageValue)

    var openPorchSFValue = document.getElementById("uiOpenPorchSF").value
    console.log("openPorchSFValue: "+openPorchSFValue)

    var woodDeckSFValue = document.getElementById("uiWoodDeckSF").value
    console.log("woodDeckSFValue: "+woodDeckSFValue)

    // drop down list
    var overallQualSelected = dropDownSelected("uiOverallQual");
    console.log("Type of Overall selected: "+overallQualSelected)

    // field values
    var fireplacesValue = document.getElementById("uiFireplaces").value
    console.log("fireplacesValue: "+fireplacesValue)

    var firstFlrSFValue = document.getElementById("ui1stFlrSF").value
    console.log("firstFlrSFValue: "+firstFlrSFValue)

    // drop down list
    var neighborhoodSelected = dropDownSelected("uiNeighborhood");
    console.log("Type of neighborhood Selected: "+neighborhoodSelected)

    // field values
    var yearBuiltValue = document.getElementById("uiYearBuilt").value
    console.log("yearBuiltValue: "+yearBuiltValue)

    var yearRemodAddValue = document.getElementById("uiYearRemodAdd").value
    console.log("yearRemodAddValue: "+yearRemodAddValue)

    var yrSoldValue = document.getElementById("uiYrSold").value
    console.log("yrSoldValue: "+yrSoldValue)

    // drop down list
    var bsmtQualSelected = dropDownSelected("uiBsmtQual");
    console.log("Type of bsmtQualSelected selected: "+bsmtQualSelected)

    var bsmtFinType1Selected = dropDownSelected("uiBsmtFinType1");
    console.log("Type of bsmtFinType1 Selected: "+bsmtFinType1Selected)


    // var neighborhoodSelected = dropDownSelected("uiNeighborhood");
    console.log("Overall selected from dict: "+ overalQual[overallQualSelected])

    user_data = {
        'OverallQual':[overalQual[overallQualSelected]],
        'GrLivArea':[parseInt(grLivedValue)],
        'GarageCars':[parseInt(garageCarsValue)],
        'TotalBsmtSF':[parseInt(totalBsmtSFValue)],
        'ExterQual':[commonGrade[exteriorSelected]],
        'BsmtFinSF1':[bsmtFinSF1Value],
        '2ndFlrSF':[parseInt(secondFlrSFValue)],
        'LotArea':[parseInt(lotAreaValue)],
        'FullBath':[parseInt(fullBathValue)],
        'KitchenQual':[commonGrade[kitchenSelected]],
        'BsmtQual':[bsmtQual[bsmtQualSelected]],
        'MasVnrArea':[parseFloat(masVnrAreaValue)],
        'BsmtUnfSF':[parseInt(bsmtUnfSFValue)],
        'LotFrontage':[parseFloat(lotFrontageValue)],
        'OpenPorchSF':[parseInt(openPorchSFValue)],
        'WoodDeckSF':[parseInt(woodDeckSFValue)],
        'Fireplaces':[parseInt(fireplacesValue)],
        'BsmtFinType1':[bsmtFinType1[bsmtFinType1Selected]],
        'Neighborhood':[neighbourhood[neighborhoodSelected]],
        '1stFlrSF':[parseInt(firstFlrSFValue)],
        'RoofStyle':[roofStyle[roofSelected]],
        'PavedDrive':[pavedDrive[pavedSelected]],
        'YrSold':[parseInt(yrSoldValue)],
        'YearBuilt':[parseInt(yearBuiltValue)],
        'YearRemodAdd':[parseInt(yearRemodAddValue)]
           }


    var json_data = JSON.stringify(user_data);

 
    var url = "https://Sonjon.pythonanywhere.com/v1/predict/regression"; 
 
    fetch(url, {

        // Declare what type of data we're sending
        headers: {
        'Content-Type': 'application/json'
        },

        // Specify the method
        method: 'POST',

        // A JSON payload
        body: JSON.stringify(json_data)
    }).then(function (response) { // At this point, Flask has printed our JSON
        return response.json();
    }).then(function (json) {

        console.log('POST response: ');

        // Should be 'OK' if everything was successful
        console.log(json);
        var predictPrice = document.getElementById("predictionPrice");
        predictPrice.innerHTML = "<h2>" + json.prediction + "</h2>";
    });  
    
}





function onPageLoad(){
  
    var url = "https://Sonjon.pythonanywhere.com/"; 

    $.get(url, function(response,status){
        console.log(status);
        console.log(response.title)
    });
}


window.onload = onPageLoad;
