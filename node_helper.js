var NodeHelper = require('node_helper');

var myPythonScriptPath = '/home/pi/MagicMirror/modules/MMM-flick-gestures/monitor.py';
const {PythonShell} = require("python-shell");

let options = {
    mode: 'text',
    pythonPath: '/usr/bin/python',
    pythonOptions: ['-u'], // get print results in real-time
//  scriptPath: '',
    args: []
};

/////////////////

module.exports = NodeHelper.create({

   start: function () {
       this.config = {}
       this.gestureSequence = ""
       this.commandTimer = null
       this.shell = null
   },

   stop: function () {
       this.log("[GESTURE] Finishing...")
       if (this.shell) {
           this.shell.end()
       }
   },

   socketNotificationReceived: function (noti, payload) {

       this.job(payload)

    
   },

   log: function (obj) {
       // if (this.config.verbose) {
       console.log(obj)
       //  }
   },

   job: function (config) {
	var me = this;
       console.log('I got a job!');
       var pyshell = new PythonShell(myPythonScriptPath, options);
       pyshell.on('message', function (message) {
           // relay event to modules
           // console.log(message);
        if (message === 'west -  east') {
            // console.log('Sending page dec.');
            me.sendSocketNotification("PAGE_DECREMENT");
	    }
        else if (message === 'east -  west') {
            //console.log('Sending page inc.');
            me.sendSocketNotification("PAGE_INCREMENT");

        }
       });

       pyshell.end(function (err) {
           if (err) {
               throw err;
           }
           console.log('finished');
       });

   }
})