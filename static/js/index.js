var btn=document.getElementById('btn');
  function change()
  { 
      message = new Paho.MQTT.Message("verhistorial");
      message.destinationName = "orozcojuanpablo817@gmail.com/test1";
      client.send(message);
    
      }
   
      
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
	
    client.subscribe("orozcojuanpablo817@gmail.com/test"); 
    client.subscribe("orozcojuanpablo817@gmail.com/test1"); 
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "orozcojuanpablo817@gmail.com/test1";
    message.destinationName = "orozcojuanpablo817@gmail.com/test2";	  
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
   // if(message.payloadString==="1"){
     // document.getElementById("sensor").innerHTML="1";
    //}
      //if(message.payloadString==="1"){
      //document.getElementById("sensor").innerHTML="1";  
    //}
  
	if(message.detinationName=="orozcojuanpablo817@gmail.com/test1"){
		document.getElementById("sensor").innerHTML=message.payloadString;	 
    }if(message.payloadString==="1"){
      document.getElementById("sensor").innerHTML="1";
    }
    if(message.payloadString==="0"){
      document.getElementById("sensor").innerHTML="0";
    }
	 }
 
	 //document.getElementById("sensor").innerHTML=message.payloadString;	 
	  //document.getElementById("sensor").innerHTML=message.payloadString;
	  //if(message.payloadString===' EncendidoLed1'){
		//  document.getElementById("imagen").src="http://www.clker.com/cliparts/D/M/r/s/n/P/led-red-off-md.png";
	  //} else if(message.payloadString===' ApagadoLed1'){
		//  document.getElementById("imagen").src="http://www.clker.com/cliparts/D/M/r/s/n/P/led-red-off-md.png";
	  //}
    	 
	 //if(message.payloadString===' EncendidoLed1'){
	//	 document.getElementById("sensor").innerHTML="encendidoled1";
	//	 document.getElementById("btn").innerHTML="Apagar";
     //}else if(message.payloadString===' ApagadoLed1'){
	//	 document.getElementById("sensor").innerHTML="apagadoled1";
	//	 document.getElementById("btn").innerHTML="Encender";
     //}
	 
  //}


