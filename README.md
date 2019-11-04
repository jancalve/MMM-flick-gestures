# MMM-Flick-Gestures

This module enables you to use the Flick Tracking and Gesture board with your Magic Mirror.<br>
See: https://www.seeedstudio.com/Flick-Large-Standalone-3D-Tracking-and-Gesture-Breakout-p-2952.html

This module will emit 2 events - PAGE_DECREMENT when swiped left and PAGE_INCREMENT when swiped right.  

# Tested with
- Flick Large – Standalone 3D Tracking and Gesture Breakout
- MMM-Pages - Excellent module for interfacing with a multi-page Magic Mirror.

# Not tested with - but should work
- Flick Zero
- Flick HAT

# Not tested - but might work
- Any board using MGC3130 3D Tracking and Gesture Controller 


# Demo
Coming..

## Using the module...

To use this module, add it to the modules array in the 'config/config.js' file:
```
modules: [
    {
        module: 'MMM-flick-gestures'
    },
]
```

## Requirements

Flicklib python library installed 
MGC3130 controller board

## Installation
```

pip install flicklib
cd ~/MagicMirror/modules
git clone https://github.com/jancalve/MMM-flick-gestures
cd MMM-flick-gestures
npm install
```

## Known issues

This module expects to be installed in /home/pi/MagicMirror/modules/MMM-flick-gestures <br>
If your path is different, you'll have to update myPythonScriptPath in node_helper.js to reflect
your MagicMirror path.<br>
(If anyone has any idea how to make this more user-friendly, do make a pull request!)

## Future improvements
Support north/south/airwheel/tap gestures<br>
Configurable gesture to event mapping<br>


## Acknowledgements...
This module is essentially a NodeJS wrapper of the Flick Board demo scripts written in python. <br>
See https://github.com/PiSupply/Flick/blob/master/bin/flick-demo <br>