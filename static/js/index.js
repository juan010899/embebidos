//https://www.eclipse.org/paho/clients/js/

/*function LED1_On() {
	//alert("led on");
	console.log("led on");
	//document.getElementById("sensor").innerHTML="led on";
        message = new Paho.MQTT.Message("ENCENDER");
        message.destinationName = "orozcojuanpablo817@gmail.com/tema1";
        client.send(message);
}
function LED1_Off(){	
	//alert("led off");
	console.log("led off");
	//document.getElementById("sensor").innerHTML="led off";
	message = new Paho.MQTT.Message("APAGAR");
        message.destinationName = "orozcojuanpablo817@gmail.com/tema1";
        client.send(message);
}
*/





// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "orozcojuanpablo817@gmail.com",
    password: "Aplicado55",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("orozcojuanpablo817@gmail.com/tema1");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "orozcojuanpablo817@gmail.com/tema1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
 function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  document.getElementById("sensor").innerHTML=message.payloadString;
	  if(message.payloadString===' Encendido'){
		  document.getElementById("imagen").src="http://www.clker.com/cliparts/M/h/R/9/8/H/red-led-on-md.png";
	  } else if(message.payloadString===' Apagado'){
		  document.getElementById("imagen").src="http://www.clker.com/cliparts/D/M/r/s/n/P/led-red-off-md.png";
	  }
	  if(message.payloadString===' Encendido'){
		  document.getElementById("btn").innerHTML="Apagar";
	  }else if(message.payloadString===' Apagado'){
		  document.getElementById("btn").innerHTML="Encender";
	  }
	  
  }
  
