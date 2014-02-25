 document.addEventListener("deviceready", onDeviceReady, false);
 
 function onDeviceReady() {
 	var db = openDatabase("test", "1.0", "Test DB", 50000000);
 	db.transaction(queryIS, errorCB);
 	function queryIS (tx){
 		 tx.executeSql('SELECT * FROM FOODS',[],querySuccess,errorCB);
 	}
 	function errorCB(err) {
 		alert(err.code);
 		console.log("Error processing SQL: " + err.code);
 	}	
 	function querySuccess(tx,results) {
 		var len = results.rows.length;
 		qtyRows = len;
 		console.log("DEMO table: " + len + " rows found.");
 		//Only we show first 10 records. For full show change with qtyRows
 		for (var i=0; i<10; i++){
 			console.log(" ID = " + results.rows.item(i) );
 			var id = results.rows.item(i)['ID'];
 			var Desc = results.rows.item(i)['Desc'];
 			var c = results.rows.item(i)['Cholestrl_(mg)'];
 			$("#listTest").append("<p>id -" + results.rows.item(i)['Water_(g)'] + " - " + Desc + " - " + c</p>");
 		}	    			
 	}
 }