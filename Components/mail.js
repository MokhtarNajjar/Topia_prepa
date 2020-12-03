import EmailSender from 'react-native-smtp';
 
// Configuration
EmailSender.config({
  host: 'smtp.gmail.com',
  port: '465', // Optional. Default to 465
  username: 'najjarmokhtar1996@gmail.com',
  password: 'mokhya3ich',
  isAuth: 'true', // Optional. Default to `true`
  tls: 'false' // Optional. Default to `true`
});
  
// Now send the mail
EmailSender.send(
  {
    from: 'najjarmokhtar1996@gmail.com',
    to: 'najjarmokhtar19@gmail.com',
    subject: 'The subject',
    body: '<h3> Cool Body </h3>',    
  },
);