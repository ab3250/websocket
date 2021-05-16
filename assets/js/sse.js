document.addEventListener('DOMContentLoaded', loadWindow, false)

// function loadWindow () {
//   Array.from(document.getElementsByTagName('button')).forEach(function (value, i, col) {
//     col[i].onclick = function (e) { mode(e.target.id) }
//   })}


 // window.addEventListener('load', loadWindow, false)
ws = new WebSocket("ws://localhost:9090")
console.log("initialized websocket")
ws.onmessage = function(evt) {
     console.log(evt.data);
}
ws.onopen = function() {
	console.log("connected");
}
ws.onclose = function() {
	console.log("closed websocket");
}

  function mode (btnID) {
      ws.send(btnID)
  }
 
  
  
  function loadWindow () {
    Array.from(document.getElementsByTagName('button')).forEach(function (value, i, col) {
      col[i].onclick = function (e) { mode(e.target.id) }
    })

   
//const source = new EventSource('http://localhost:9000')
 
//source.addEventListener('open', function () { connectionOpen(true); }, false)
//source.addEventListener('error', function (e) { connectionOpen(false);}, false)
//source.addEventListener('message',  function (e) {console.log(e)}, false)

//source.addEventListener('connections', updateConnections, false)
//source.addEventListener('requests', updateRequests, false);
//source.addEventListener('uptime', updateUptime, false);
//source.addEventListener('time', function (e) {  }, false);

//function connectionOpen(open) {
   //  alert (open)
    // connStatus.innerHTML = open ? 'Active connection to server' : 'Connection dropped - trying to reopen';
//}
// source.onmessage = function(event) {
//   const newElement = document.createElement("li");
//   const eventList = document.getElementById("payload");
//   newElement.innerHTML = "message: " + event.data;
//   eventList.appendChild(newElement);
// }  
}
  







//////
//   const stream = new EventSource('http://localhost:8080/connect');

//   // Handler for when the stream is opened (either the first time or after a reconnect).
//   stream.addEventListener('open', function(event) {
//     connectionOpen(true)
//     console.log('Stream is open');
//   }, false);

//    // Handler for new messages.
//    stream.addEventListener('message', event => {
//     alert(event.target)}, false)

//   // Handler for a dropped connection or the server closing the connection.
//   stream.addEventListener('error', function(event) {
//     alert(event.data)
//     //document.getElementById("payload").innerHTML+=stream.readyState+ "<br />";
//     switch (event.target.readyState) {
//         case EventSource.CONNECTING:
//             console.log('Reconnecting...');  
//             break;
//         case EventSource.CLOSED:
//             console.log('Connection failed, will not reconnect');
//             break;
//     }
//   }, false);


//  // Handler for foo.
//  stream.addEventListener('foo', event => {
//   alert(event.data)
// }, false);

