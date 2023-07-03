// import SMS API
import SendSMS from 'react-native-sms';


export function sendSMS(messageText) {
    const mobileNumber = '9011';
    // const messageText = '';

    SendSMS.send(
        {
            body: messageText,
            recipients: [mobileNumber],
            successTypes: ['sent', 'queued'],
        },
        (completed, cancelled, error) => {
            if (completed) {
                console.log('SMS Sent Completed');
            } else if (cancelled) {
                console.log('SMS Sent Cancelled');
            } else if (error) {
                console.log('Some error occured');
            }
        },
    );
}
