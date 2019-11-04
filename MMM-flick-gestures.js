/*var myPythonScriptPath = '/home/pi/MagicMirror/modules/MMM-flick-gestures/monitor.py';
const {PythonShell} = require("python-shell");

let options = {
  mode: 'text',
  pythonPath: '/usr/bin/python',
  pythonOptions: ['-u'], // get print results in real-time
//  scriptPath: '',
  args: []
};

var pyshell = new PythonShell(myPythonScriptPath, options);
*/

Module.register("MMM-flick-gestures",{
	// Default module config.
	requiresVersion: '2.1.0',

	defaults: {
		text: "Hello World!"
	},

	// Override dom generator.
	getDom: function() {
		console.log('getDom()');
		Log.log('getDom()');
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	},
	start: function() {
		console.log('start()');
                Log.log('start()');
		this.mySpecialProperty = "So much wow!";
		Log.log(this.name + ' is started!');
                this.sendSocketNotification("INIT", this.config)
	},
socketNotificationReceived: function(notification, payload) {
		
	Log.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);
	this.sendNotification(notification);
}
});


/*
pyshell.on('message', function (message) {
    // relay event to modules
                Log.log(message);
    console.log(message);
});

pyshell.end(function (err) {
    if (err){
        throw err;
    };
                Log.log('flick finished');
    console.log('finished');
});
*/
