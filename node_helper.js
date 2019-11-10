var NodeHelper = require('node_helper');
var exec = require("child_process").exec;

var myPythonScriptPath = '/home/pi/MagicMirror/modules/MMM-flick-gestures/monitor.py';
const {PythonShell} = require("python-shell");

let options = {
    mode: 'text',
    pythonPath: '/usr/bin/python',
    pythonOptions: ['-u'], // get print results in real-time
    args: []
};

/////////////////

module.exports = NodeHelper.create({

   start: function () {
        console.log("[GESTURE] Starting...")
       this.config = {}
       this.gestureSequence = ""
       this.commandTimer = null
       this.shell = null
   },

   stop: function () {
       console.log("[GESTURE] Stopping...")
       if (this.shell) {
           this.shell.end()
       }
   },

   socketNotificationReceived: function (noti, payload) {
       this.process(payload)
   },

   powerOff: function() {
    console.log('Power off HDMI');
    exec("vcgencmd display_power 0",  function (error, stdout, stderr) {
        if(error!=null)
        {
            console.log("vcgencmd display_power 0 failed "+JSON.stringify(error));
        }
    });
   },
   powerOn: function() {
       var me = this;
        console.log('Power on HDMI');
       exec("vcgencmd display_power 1",  function (error, stdout, stderr) {
        if(error!=null)
        {
            console.log("vcgencmd display_power 1 failed "+JSON.stringify(error));
        }        
    });
   },

   process: function (config) {
	var me = this;
       var pyshell = new PythonShell(myPythonScriptPath, options);
       pyshell.on('message', function (message) {
           // relay event to modules
           //console.log(message);
           
        if (message === 'west -  east') {
            me.sendSocketNotification("PAGE_DECREMENT");
	    }
        else if (message === 'east -  west') {
            me.sendSocketNotification("PAGE_INCREMENT");
       }
       else if (message === 'south -  north') {
            me.powerOn()
        }
        else if (message === 'north -  south') {
            me.powerOff()
       }
       });

       pyshell.end(function (err) {
           if (err) {
               throw err;
           }
           console.log('pyShell finished with err ' + err);
       });

   }
})