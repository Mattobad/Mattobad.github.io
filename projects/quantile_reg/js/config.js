// manufacturer list
var manufacturer = ['ford', 'chevrolet', 'toyota', 'honda', 
'nissan', 'jeep', 'gmc',
'ram', 'dodge', 'bmw',
'volkswagen', 'hyundai', 'subaru',
'mercedes-benz', 'kia', 'lexus','other'];

// type list
var vehicleType = ['sedan','suv','pickup','truck','other'];

// drive list
var drive = ['4wd','fwd','rwd','other']

//cylinders list
var cylinders = ["12 cylinders","10 cylinders","8 cylinders",
"6 cylinders","5 cylinders","4 cylinders",
"3 cylinders","other"]

// fuel type
var fuel = ['gas','diesel','hybrid','electric','other']

// condition
var condition = ['new','like new','excellent','good','fair']

// loop the features
feature_select_list = {'select_manu': manufacturer,
'select_type':vehicleType,
'drive':drive,
'cylinders':cylinders,
'fuel':fuel,
'condition': condition}

// get url function
function getURL(){
    const scheme = "https://"
    const host = "pquex3lsgg.execute-api." 
    const region = "us-east-1."
    const provider = "amazonaws.com"

    const route = "/dev/"

    const server_url = scheme.concat(host,region,provider,route);
    return server_url;
}