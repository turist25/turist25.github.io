$.ajax({
  type: “POST”,
  url: “https://mandrillapp.com/api/1.0/messages/send.json”,
  data: {
    ‘key’: ‘AIzaSyBQS_pqU-o-KspKBAth5hHAvwN97Jsk04A’,
    ‘message’: {
      ‘from_email’: ‘if25.u16@gmail.com’,
      ‘to’: [
          {
            ‘email’: ‘if25.u16@gmail.com’,
            ‘name’: ‘RECIPIENT NAME (OPTIONAL)’,
            ‘type’: ‘to’
          },
          {
            ‘email’: ‘if25.u16@gmail.com’,
            ‘name’: ‘ANOTHER RECIPIENT NAME (OPTIONAL)’,
            ‘type’: ‘to’
          }
        ],
      ‘autotext’: ‘true’,
      ‘subject’: ‘YOUR SUBJECT HERE!’,
      ‘html’: ‘if25.u16@gmail.com’
    }
  }
 }).done(function(response) {
   console.log(response); // if you're into that sorta thing
 });