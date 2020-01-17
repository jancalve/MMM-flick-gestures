#!/usr/bin/env python

import signal
import flicklib
import time
import sys
#import curses
#from curses import wrapper

some_value = 5000

@flicklib.move()
def move(x, y, z):
    global xyztxt
    xyztxt = '{:5.3f} {:5.3f} {:5.3f}'.format(x,y,z)

@flicklib.flick()
def flick(start,finish):
    global flicktxt
    flicktxt = start + ' - ' + finish
    print(start + ' -  ' + finish)
    sys.stdout.flush()

@flicklib.airwheel()
def spinny(delta):
    global some_value
    global airwheeltxt
    some_value += delta
    if some_value < 0:
        some_value = 0
    if some_value > 10000:
        some_value = 10000
    airwheeltxt = str(some_value/100)
    print (airwheeltxt)
    sys.stdout.flush()

@flicklib.double_tap()
def doubletap(position):
    global doubletaptxt
    doubletaptxt = position
    print(doubletaptxt)
    sys.stdout.flush()

@flicklib.tap()
def tap(position):
    global taptxt
    taptxt = position
    print(taptxt)
    sys.stdout.flush()

@flicklib.touch()
def touch(position):
    global touchtxt
    touchtxt = position
    print(touchtxt)
    sys.stdout.flush()

#
# Main display using curses
#

#def main(stdscr):
global xyztxt
global flicktxt
global airwheeltxt
global touchtxt
global taptxt
global doubletaptxt

xyztxt = ''
flicktxt = ''
airwheeltxt = ''
touchtxt = ''
taptxt = ''
doubletaptxt = ''
 
while True:
    xyztxt = ''

    if len(flicktxt) > 0 and flickcount < 5:
        flickcount += 1
    else:
        flicktxt = ''
        flickcount = 0

    if len(airwheeltxt) > 0 and airwheelcount < 5:
        airwheelcount += 1
    else:
        airwheeltxt = ''
        airwheelcount = 0

    if len(touchtxt) > 0 and touchcount < 5:
        touchcount += 1
    else:
        touchtxt = ''
        touchcount = 0

    if len(taptxt) > 0 and tapcount < 5:
        tapcount += 1
    else:
        taptxt = ''
        tapcount = 0

    if len(doubletaptxt) > 0 and doubletapcount < 5:
        doubletapcount += 1
    else:
        doubletaptxt = ''
        doubletapcount = 0

    time.sleep(10)
