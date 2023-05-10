# Flash-Chat
Flash chat is a peer to peer Video and audio chatting communication webRTC based application.
WebRTC is an open-source protocol and API that enables real-time communication between web browsers and mobile applications.
It allows direct peer-to-peer connections for audio, video, and data streaming. Signaling is used to negotiate session parameters, 
while ICE facilitates network traversal. Media capture, session negotiation, and secure transmission are key components of WebRTC. 
Developers can leverage these features to build efficient and secure video chatting applications.

UDP is typically used for the actual transport of video and audio streams in WebRTC. UDP is a lightweight, 
connectionless protocol that offers low-latency and real-time delivery. 
It is well-suited for real-time applications like video chat because it prioritizes speed over reliability.
UDP allows WebRTC to transmit media streams quickly between peers, which is crucial for maintaining a smooth and real-time video chat experience.

On the other hand, TCP is used for signaling and control within the WebRTC framework. 
Signaling messages, which handle session negotiation and establishment, are typically transmitted over TCP.
TCP is a reliable, connection-oriented protocol that guarantees the delivery of data packets. 
Its reliability ensures that signaling messages are not lost or corrupted during transmission, 
which is critical for establishing and maintaining a successful WebRTC connection.

To run the app:You must install the dependencies for react and react router dom.
First you need to create a server.then use 
npx create-react-app ./client for creating client.

The download all the dependencies from below:

FInally run server and client at a time. 
To run server side code,in terminal write nodemon server.js
To run client,write npm start 
 Now your code is ready to run in the browser.
