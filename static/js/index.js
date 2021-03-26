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
 var btn=document.getElementById('btn'), contador=0;
  function change()
  { if (contador==0)
      {
      message = new Paho.MQTT.Message("ENCENDERLED1");
      message.destinationName = "orozcojuanpablo817@gmail.com/test1";
      client.send(message);
      contador=1;
      }
    else
      {
      message = new Paho.MQTT.Message("APAGARLED1");
      message.destinationName = "orozcojuanpablo817@gmail.com/test1";
      client.send(message);
      contador=0;
      }
  
  }
 var btn2=document.getElementById('btn2'), contador2=0;
  function change2()
  { if (contador2==0)
      {
      message = new Paho.MQTT.Message("ENCENDERLED2");
      message.destinationName = "orozcojuanpablo817@gmail.com/test2";
      client.send(message);
      contador2=1;
      }
    else
      {
      message = new Paho.MQTT.Message("APAGARLED2");
      message.destinationName = "orozcojuanpablo817@gmail.com/test2";
      client.send(message);
      contador2=0;
      }
  
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
	 //document.getElementById("sensor").innerHTML=message.payloadString;	 
	  //document.getElementById("sensor").innerHTML=message.payloadString;
	  //if(message.payloadString===' EncendidoLed1'){
		//  document.getElementById("imagen").src="http://www.clker.com/cliparts/D/M/r/s/n/P/led-red-off-md.png";
	  //} else if(message.payloadString===' ApagadoLed1'){
		//  document.getElementById("imagen").src="http://www.clker.com/cliparts/D/M/r/s/n/P/led-red-off-md.png";
	  //}
    	 
	  if(message.payloadString===' EncendidoLed1'){
		  document.getElementById("sensor").innerHTML="encendidoled1";
		  document.getElementById("btn").innerHTML="Encendido";
	  }else if(message.payloadString===' ApagadoLed1'){
		  document.getElementById("sensor").innerHTML="apagadoled2";
		  document.getElementById("btn").innerHTML="Apagado";
          }
	 if(message.payloadString===' EncendidoLed2'){       
		  document.getElementById("sensor2").innerHTML="encendidoled2";
		  document.getElementById("btn2").innerHTML="Encendido";
        }else if(message.payloadString===' ApagadoLed2'){       
		  document.getElementById("sensor2").innerHTML="apagadoled2";
		  document.getElementById("btn2").innerHTML="Apagado";
	 }
	 
  }


