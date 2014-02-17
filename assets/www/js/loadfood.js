

function populateDB(tx) {
	
     //tx.executeSql('DROP TABLE IF EXISTS FOODS');
    // strField = strField.replace(" ","_");
     //tx.executeSql('CREATE TABLE IF NOT EXISTS FOODS (id,`Desc()`)');
     tx.executeSql('CREATE TABLE IF NOT EXISTS FOODS (' + strField + ')');
}

function errorCB(err) {
   	console.log("Error processing SQLx: " + err.code);
}	

function successCB() {
    console.log("success!");
}