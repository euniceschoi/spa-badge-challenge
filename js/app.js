$.ready(function(){


  var theTemplateScript = $("#student-template").getHTML();
  var theTemplate = Handlebars.compile(theTemplateScript);


  var request = $.ajax({
    type: "GET",
    url: "http://localhost:3000/students",
    dataType: "json"
  }).then(function(response){
    console.log("IT WORKSSSSSSSS")
    console.log(response)

    var context=JSON.parse(response)
    console.log(context)

    var content = {"student":context}
    console.log(content)

    var theCompiledHtml = theTemplate(content);

    $('#list-of-students').setHTML(theCompiledHtml);

  }).catch(function(error){
    console.log("IT DIDN'T WORKKKKKKKK")
    console.log(error)
  });
})
