// // this function createes a firebase menu
// function onOpen() {
//   SpreadsheetApp.getUi().createMenu('🔥 Firebase Menu').addItem('Export to firestore', 'main').addToUi();
// }


// function main(){
//   // get the name of the current spreadsheet
//   var sheet = SpreadsheetApp.getActiveSheet();
//   var sheetName = sheet.getName();
//   var d = sheet.getDataRange().getValues();
  
//   var config = {
//     'client_email' : '', // change here 
//     'private_key' : '', // add private key
//     'project_id' : '' // add project id
//   };


//   // get the first row 
//   var properties = getProperties(sheet);

//   // get records 
//   var records = getRecords(sheet);

//   // configure service account email, key, projectId
//   var firestore = FirestoreApp.getFirestore(config.client_email, config.private_key, config.project_id);

//   exportToFirestore(firestore, sheetName, properties, records);
// }

// function getProperties(sheet) {
//   return sheet.getRange(1,1, 1,14).getValues()[0].filter(String) //first row, first col, number of rows, number of cols 
//   //returns two dimensional array
// }

// function getRecords(sheet){
//   var records = sheet.getRange(2,1,2,8).getValues();

//   // filter entries from empty values 
//   var filtered = []
//   for (let i = 0; i < records.length; i++) {
//     filtered.push(records[i].filter(e => e != "skip")); // fill empty enteries with "skip"
//   }
//   return filtered;
// }

// function exportToFirestore(firestore, collectionName, properties, records) {
//   var start = [2, 5, 8,11]
//   var end = [4, 7, 10, 13]
//   for (let i = 0; i < records.length; i++) {
//     var data = {}
//     for (let j = 0; j < records[i].length; j++) {
//       // curr key:val records[i][j]
//       var answerOptions = [];
//       if (j < 2) {
//         data[properties[j]] = records[i][j]
//       }
//       else if (start.includes(j)){
//         var currOption = {}
//         currOption[properties[j]] = records[i][j]

//       }
//       else if (end.includes(j)){
//         currOption[properties[j]] = records[i][j]
//         answerOptions.push(currOption)
//       }
//       else{
//         currOption[properties[j]] = records[i][j]
//       }
//     }
//     data["answerOptions"] = answerOptions
//     firestore.createDocument(collectionName, data);
//   }

// }

