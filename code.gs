  //attachment link - spreadsheet column value [https://drive.google.com/open?id=id1,https://drive.google.com/open?id=id2]
  var attachment_list = [];
  var attachments_ = [];
  var attached_file = attachment_link.toString().split(","); //split the comma separated link 
  //replace the link, and get only the id using foreach to every data in array
  attached_file.forEach(function(result) {
    var replace_link = result.toString().replace("https://drive.google.com/open?id=", "");
    attachment_list.push(replace_link); //push the id to another array
  });
  var files = attachment_list.toString().split(/(?:,| )+/); //split the array using regex, result would be -> ["id1", "id2"]
  //loop every data in files array to get the file id
  for (var item in files){
    var file = DriveApp.getFileById(files[item]);
    attachments_.push(file); //push the final file id/s for the attachments 
  }
  //send mail with attachments
  MailApp.sendEmail({
      to: "yourmail",
      name:"name",
      subject: "subject",
      attachments: attachments
      });
