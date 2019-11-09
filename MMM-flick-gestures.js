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
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		return wrapper;
	},
	start: function() {
        this.sendSocketNotification("INIT", this.config)
	},
socketNotificationReceived: function(notification, payload) {
		
	Log.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);
	this.sendNotification(notification);
}
});