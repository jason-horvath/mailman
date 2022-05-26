# Mailman
This is a simple API for sending email with Node and Express.


## Making a Request
In order to succussfully making a request the the `api/email/send/` POST endpoint, there must be a `transport_key` submitted in the request body which is the AES excrypted value of the `EMAIL_SEND_PASS` and `EMAIL_SEND_SEC` values in the `.env`.

#### Example Request Body
```JSON
{
    "subject": "Mailman test email",
    "heading": "This is a test heading from mailman repo",
    "message": "Hello there, this is the test message",
    "transport_key": "YOUR_ENCRYPTED_KEY_HERE"
}
```
