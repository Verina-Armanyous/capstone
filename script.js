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
//     'client_email' : 'firebase-adminsdk-fnmbc@capstone-6b411.iam.gserviceaccount.com',
//     'private_key' : '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDmyTFCyVUeKFsv\n+ZdmPo5uVDtnPYHmcY1IBW0KBucrmC9GUz5VgLb3wA8tpnSywGJ751oZh/xRqJ3Q\nCcjVTRlWOg1NWbIXEEZ1ZDKg968vqpWQdqqYpZTf0fiP95kwm7SSFmtV1Aa9xE/A\n6RZRcLv0/QTJ4kH+kq7M5fcEe79PNXlSMpXY5Zqr1TJ9gvrTDTXZxAvJC7ncvKNs\nc4R74hG7v86tl7S/nlDtpzZ+Ik5J9yHDv5ac+6HTWiSRLGmHxOhr0Lqju/fg37pM\nu5MHMHlHqHYKZ04nbEA2EsXU3IEFYXMG+KYzO85OL3xpIHRsup5u8eprduHCMvia\n97jM7uw1AgMBAAECggEACn450OdOCS+9C6adwV6VQ8NtKwHDKvrdOVnTzhmnv5Xt\nClXFFwah6wxOtFzl3+263JbVhCUobf8MY9XaDYayoPbFPY/XNtC832AFpEd2reRj\n5fxbP9MBfJazpjoT+z+NG3pM+YtJHi4zkRoX8258gURSyCoTJZO+Ql8vVsMYnO2D\noki6WxdcsDdreKAKctIe0HdydRmaF+69Hn48sa4itZSCMkszWjIb+8xUT/p9rhZ4\nZi2+7JEYkfxKtFAjm9l9njOhE+gHP9nd9yiHAjU255GsZY2L4h6cogyQuS+7vsjN\neBG7V4kTC1vwjzbP5tQX5PeZYyeyLDS5qIH5EWSy+QKBgQD22e6dlYzwJ1dHuPMD\n7gVWSRhdHUoHTRgph8RMdjZXWyDK0ohKz1RHYZ8ZR8Dq5tFUuUkVK3OX3grgkts9\n2BHUF43QXDGdt1sn03OjEh0K7IuBdgCm8Dlh6hoSRPMhQfB3hBVbzWFVN6K+RFDb\nJ/qVKAPBHGCcEfubTLkbZL7aXQKBgQDvVtXsoynyvgtg6oj0x7p5r56xx/7Z4oqt\nHuGtQgSdYniWjE7eo6LrrbnLcISDXJr3XKBhJ/zpf1zS1jADzVS/3CIof8L0pQIV\n8Lj2netSR+egr/vpVUTNcaYdiTbPK3/o2433BH/ZYY2sXjZGzR3KmSDc2IUB+cRL\nm+YeI1OruQKBgQCHXh1nV1KRg9FuKHNDrWxJ1A3DSkOFW3arl6NDFvRX1UZXUzqg\nY6/g8RzRPTMC3g7fOjhkno5mMsKeQopuEKY+O6huIZCn35vibCeWvmEk03DxTqeu\n5D9jfYBMknkNvN5EfC9GR4tfswHQ+x+n/vWAhBAC/y/PhmEG2f0Mk6PBlQKBgQDN\nWL6gknl6OI4AsBmjkv2uS/ynYgWJobIDyPwtr/fPpN37pRRCNzmgZeSD5Nz86+ZV\nl1ZPJYT8PXdBud1mVbSCDHgOMVfumOiKNIgtp95wMRtNpdBIKQ2oCvtQWhr5csQC\n4OUT6/tZYjawjgCZjIEkA2/Lq8WqpUZC7NZqQzsVmQJ/Wd52GOWXx2kxb8tf1fKc\nA3HAI12JEkI6gknyoILJtrQz7nL0/yQnNwYLibovZfzW2hkds3vJFIv0pNkRFRHn\nU4co/cjlZStTYvCLN/kDzdwidBj0aM1f/OjpEx9Nr2A92Ai7zgPLOKDu2fZTPmXj\n9Sscm2U1j10OanP5ImA5Fw==\n-----END PRIVATE KEY-----\n',
//     'project_id' : 'capstone-6b411'
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

