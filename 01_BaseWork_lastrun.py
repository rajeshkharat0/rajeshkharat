#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.1.4),
    on June 27, 2021, at 20:28
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.1.4'
expName = '01_BaseWork'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='F:\\UOH\\CNCS\\SEM 04\\Synopsis\\Experiment\\PAVLOVIA\\#1_BASE_Expt\\01_BaseWork_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=(1024, 768), fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "Introduction"
IntroductionClock = core.Clock()
intro_text = visual.TextStim(win=win, name='intro_text',
    text='HELLO!\n\nIn this experiment, we will test your Sense of Agency or your sense of ownership towards an action.\n\nOn the next page, will be a consent form',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
key_skipintro = keyboard.Keyboard()

# Initialize components for Routine "Consent"
ConsentClock = core.Clock()
consent_text = visual.TextStim(win=win, name='consent_text',
    text="Consent will be shown here.\n\nPress 'Y' to agree.",
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
Key_skipconsent = keyboard.Keyboard()

# Initialize components for Routine "fix_ball"
fix_ballClock = core.Clock()
fix_cross = visual.ImageStim(
    win=win,
    name='fix_cross', 
    image='fixationcross.png', mask=None,
    ori=0.0, pos=(0, 0), size=(1.75, 1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
center_ball = visual.ImageStim(
    win=win,
    name='center_ball', 
    image='onlyballcenter.png', mask=None,
    ori=0.0, pos=(0, 0), size=(1.75, 1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)

# Initialize components for Routine "Trials"
TrialsClock = core.Clock()
mpt_boxes_center_ball = visual.ImageStim(
    win=win,
    name='mpt_boxes_center_ball', 
    image='mptboxballcenter.png', mask=None,
    ori=0.0, pos=(0, 0), size=(1.75, 1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
key_shoot = keyboard.Keyboard()

# Initialize components for Routine "go_ball"
go_ballClock = core.Clock()
UDLR_balls_trial_AC = visual.ImageStim(
    win=win,
    name='UDLR_balls_trial_AC', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(1.75, 1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-1.0)

# Initialize components for Routine "Feedback"
FeedbackClock = core.Clock()
rating_soa = visual.ImageStim(
    win=win,
    name='rating_soa', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(1.75, 1),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)
key_soa_rate = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "Introduction"-------
continueRoutine = True
# update component parameters for each repeat
key_skipintro.keys = []
key_skipintro.rt = []
_key_skipintro_allKeys = []
# keep track of which components have finished
IntroductionComponents = [intro_text, key_skipintro]
for thisComponent in IntroductionComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
IntroductionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Introduction"-------
while continueRoutine:
    # get current time
    t = IntroductionClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=IntroductionClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *intro_text* updates
    if intro_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        intro_text.frameNStart = frameN  # exact frame index
        intro_text.tStart = t  # local t and not account for scr refresh
        intro_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(intro_text, 'tStartRefresh')  # time at next scr refresh
        intro_text.setAutoDraw(True)
    
    # *key_skipintro* updates
    waitOnFlip = False
    if key_skipintro.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_skipintro.frameNStart = frameN  # exact frame index
        key_skipintro.tStart = t  # local t and not account for scr refresh
        key_skipintro.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_skipintro, 'tStartRefresh')  # time at next scr refresh
        key_skipintro.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_skipintro.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_skipintro.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_skipintro.status == STARTED and not waitOnFlip:
        theseKeys = key_skipintro.getKeys(keyList=['space'], waitRelease=False)
        _key_skipintro_allKeys.extend(theseKeys)
        if len(_key_skipintro_allKeys):
            key_skipintro.keys = _key_skipintro_allKeys[-1].name  # just the last key pressed
            key_skipintro.rt = _key_skipintro_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in IntroductionComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Introduction"-------
for thisComponent in IntroductionComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('intro_text.started', intro_text.tStartRefresh)
thisExp.addData('intro_text.stopped', intro_text.tStopRefresh)
# the Routine "Introduction" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Consent"-------
continueRoutine = True
# update component parameters for each repeat
Key_skipconsent.keys = []
Key_skipconsent.rt = []
_Key_skipconsent_allKeys = []
# keep track of which components have finished
ConsentComponents = [consent_text, Key_skipconsent]
for thisComponent in ConsentComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
ConsentClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Consent"-------
while continueRoutine:
    # get current time
    t = ConsentClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=ConsentClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *consent_text* updates
    if consent_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        consent_text.frameNStart = frameN  # exact frame index
        consent_text.tStart = t  # local t and not account for scr refresh
        consent_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(consent_text, 'tStartRefresh')  # time at next scr refresh
        consent_text.setAutoDraw(True)
    
    # *Key_skipconsent* updates
    waitOnFlip = False
    if Key_skipconsent.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Key_skipconsent.frameNStart = frameN  # exact frame index
        Key_skipconsent.tStart = t  # local t and not account for scr refresh
        Key_skipconsent.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Key_skipconsent, 'tStartRefresh')  # time at next scr refresh
        Key_skipconsent.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(Key_skipconsent.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(Key_skipconsent.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if Key_skipconsent.status == STARTED and not waitOnFlip:
        theseKeys = Key_skipconsent.getKeys(keyList=['y'], waitRelease=False)
        _Key_skipconsent_allKeys.extend(theseKeys)
        if len(_Key_skipconsent_allKeys):
            Key_skipconsent.keys = _Key_skipconsent_allKeys[-1].name  # just the last key pressed
            Key_skipconsent.rt = _Key_skipconsent_allKeys[-1].rt
            # was this correct?
            if (Key_skipconsent.keys == str('')) or (Key_skipconsent.keys == ''):
                Key_skipconsent.corr = 1
            else:
                Key_skipconsent.corr = 0
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in ConsentComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Consent"-------
for thisComponent in ConsentComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('consent_text.started', consent_text.tStartRefresh)
thisExp.addData('consent_text.stopped', consent_text.tStopRefresh)
# check responses
if Key_skipconsent.keys in ['', [], None]:  # No response was made
    Key_skipconsent.keys = None
    # was no response the correct answer?!
    if str('').lower() == 'none':
       Key_skipconsent.corr = 1;  # correct non-response
    else:
       Key_skipconsent.corr = 0;  # failed to respond (incorrectly)
# store data for thisExp (ExperimentHandler)
thisExp.addData('Key_skipconsent.keys',Key_skipconsent.keys)
thisExp.addData('Key_skipconsent.corr', Key_skipconsent.corr)
if Key_skipconsent.keys != None:  # we had a response
    thisExp.addData('Key_skipconsent.rt', Key_skipconsent.rt)
thisExp.addData('Key_skipconsent.started', Key_skipconsent.tStartRefresh)
thisExp.addData('Key_skipconsent.stopped', Key_skipconsent.tStopRefresh)
thisExp.nextEntry()
# the Routine "Consent" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "fix_ball"-------
continueRoutine = True
routineTimer.add(2.000000)
# update component parameters for each repeat
# keep track of which components have finished
fix_ballComponents = [fix_cross, center_ball]
for thisComponent in fix_ballComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
fix_ballClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "fix_ball"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = fix_ballClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=fix_ballClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *fix_cross* updates
    if fix_cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        fix_cross.frameNStart = frameN  # exact frame index
        fix_cross.tStart = t  # local t and not account for scr refresh
        fix_cross.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(fix_cross, 'tStartRefresh')  # time at next scr refresh
        fix_cross.setAutoDraw(True)
    if fix_cross.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > fix_cross.tStartRefresh + 1.0-frameTolerance:
            # keep track of stop time/frame for later
            fix_cross.tStop = t  # not accounting for scr refresh
            fix_cross.frameNStop = frameN  # exact frame index
            win.timeOnFlip(fix_cross, 'tStopRefresh')  # time at next scr refresh
            fix_cross.setAutoDraw(False)
    
    # *center_ball* updates
    if center_ball.status == NOT_STARTED and tThisFlip >= 1.0-frameTolerance:
        # keep track of start time/frame for later
        center_ball.frameNStart = frameN  # exact frame index
        center_ball.tStart = t  # local t and not account for scr refresh
        center_ball.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(center_ball, 'tStartRefresh')  # time at next scr refresh
        center_ball.setAutoDraw(True)
    if center_ball.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > center_ball.tStartRefresh + 1.0-frameTolerance:
            # keep track of stop time/frame for later
            center_ball.tStop = t  # not accounting for scr refresh
            center_ball.frameNStop = frameN  # exact frame index
            win.timeOnFlip(center_ball, 'tStopRefresh')  # time at next scr refresh
            center_ball.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in fix_ballComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "fix_ball"-------
for thisComponent in fix_ballComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('fix_cross.started', fix_cross.tStartRefresh)
thisExp.addData('fix_cross.stopped', fix_cross.tStopRefresh)
thisExp.addData('center_ball.started', center_ball.tStartRefresh)
thisExp.addData('center_ball.stopped', center_ball.tStopRefresh)

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=20.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Trials"-------
    continueRoutine = True
    # update component parameters for each repeat
    key_shoot.keys = []
    key_shoot.rt = []
    _key_shoot_allKeys = []
    # keep track of which components have finished
    TrialsComponents = [mpt_boxes_center_ball, key_shoot]
    for thisComponent in TrialsComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    TrialsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Trials"-------
    while continueRoutine:
        # get current time
        t = TrialsClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=TrialsClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *mpt_boxes_center_ball* updates
        if mpt_boxes_center_ball.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            mpt_boxes_center_ball.frameNStart = frameN  # exact frame index
            mpt_boxes_center_ball.tStart = t  # local t and not account for scr refresh
            mpt_boxes_center_ball.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mpt_boxes_center_ball, 'tStartRefresh')  # time at next scr refresh
            mpt_boxes_center_ball.setAutoDraw(True)
        
        # *key_shoot* updates
        waitOnFlip = False
        if key_shoot.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_shoot.frameNStart = frameN  # exact frame index
            key_shoot.tStart = t  # local t and not account for scr refresh
            key_shoot.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_shoot, 'tStartRefresh')  # time at next scr refresh
            key_shoot.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_shoot.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_shoot.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_shoot.status == STARTED and not waitOnFlip:
            theseKeys = key_shoot.getKeys(keyList=['left', 'right', 'up', 'down'], waitRelease=False)
            _key_shoot_allKeys.extend(theseKeys)
            if len(_key_shoot_allKeys):
                key_shoot.keys = _key_shoot_allKeys[-1].name  # just the last key pressed
                key_shoot.rt = _key_shoot_allKeys[-1].rt
                # was this correct?
                if (key_shoot.keys == str('')) or (key_shoot.keys == ''):
                    key_shoot.corr = 1
                else:
                    key_shoot.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in TrialsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Trials"-------
    for thisComponent in TrialsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('mpt_boxes_center_ball.started', mpt_boxes_center_ball.tStartRefresh)
    trials.addData('mpt_boxes_center_ball.stopped', mpt_boxes_center_ball.tStopRefresh)
    # check responses
    if key_shoot.keys in ['', [], None]:  # No response was made
        key_shoot.keys = None
        # was no response the correct answer?!
        if str('').lower() == 'none':
           key_shoot.corr = 1;  # correct non-response
        else:
           key_shoot.corr = 0;  # failed to respond (incorrectly)
    # store data for trials (TrialHandler)
    trials.addData('key_shoot.keys',key_shoot.keys)
    trials.addData('key_shoot.corr', key_shoot.corr)
    if key_shoot.keys != None:  # we had a response
        trials.addData('key_shoot.rt', key_shoot.rt)
    trials.addData('key_shoot.started', key_shoot.tStartRefresh)
    trials.addData('key_shoot.stopped', key_shoot.tStopRefresh)
    # the Routine "Trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "go_ball"-------
    continueRoutine = True
    routineTimer.add(0.400000)
    # update component parameters for each repeat
    if key_shoot.keys == 'left':
        Stimuli = "inleft.png"
    elif key_shoot.keys == 'right':
        Stimuli = "inright.png"
    elif key_shoot.keys == 'up':
        Stimuli = "inup.png"
    elif key_shoot.keys == 'down':
        Stimuli = "indown.png"
    UDLR_balls_trial_AC.setImage(Stimuli)
    # keep track of which components have finished
    go_ballComponents = [UDLR_balls_trial_AC]
    for thisComponent in go_ballComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    go_ballClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "go_ball"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = go_ballClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=go_ballClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *UDLR_balls_trial_AC* updates
        if UDLR_balls_trial_AC.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            UDLR_balls_trial_AC.frameNStart = frameN  # exact frame index
            UDLR_balls_trial_AC.tStart = t  # local t and not account for scr refresh
            UDLR_balls_trial_AC.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(UDLR_balls_trial_AC, 'tStartRefresh')  # time at next scr refresh
            UDLR_balls_trial_AC.setAutoDraw(True)
        if UDLR_balls_trial_AC.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > UDLR_balls_trial_AC.tStartRefresh + 0.4-frameTolerance:
                # keep track of stop time/frame for later
                UDLR_balls_trial_AC.tStop = t  # not accounting for scr refresh
                UDLR_balls_trial_AC.frameNStop = frameN  # exact frame index
                win.timeOnFlip(UDLR_balls_trial_AC, 'tStopRefresh')  # time at next scr refresh
                UDLR_balls_trial_AC.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in go_ballComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "go_ball"-------
    for thisComponent in go_ballComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('Stimuli',Stimuli)
    print(Stimuli)
    trials.addData('UDLR_balls_trial_AC.started', UDLR_balls_trial_AC.tStartRefresh)
    trials.addData('UDLR_balls_trial_AC.stopped', UDLR_balls_trial_AC.tStopRefresh)
    thisExp.nextEntry()
    
# completed 20.0 repeats of 'trials'


# ------Prepare to start Routine "Feedback"-------
continueRoutine = True
routineTimer.add(4.000000)
# update component parameters for each repeat
rating_soa.setImage('SoArating.png')
key_soa_rate.keys = []
key_soa_rate.rt = []
_key_soa_rate_allKeys = []
# keep track of which components have finished
FeedbackComponents = [rating_soa, key_soa_rate]
for thisComponent in FeedbackComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
FeedbackClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Feedback"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = FeedbackClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=FeedbackClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *rating_soa* updates
    if rating_soa.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        rating_soa.frameNStart = frameN  # exact frame index
        rating_soa.tStart = t  # local t and not account for scr refresh
        rating_soa.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(rating_soa, 'tStartRefresh')  # time at next scr refresh
        rating_soa.setAutoDraw(True)
    if rating_soa.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > rating_soa.tStartRefresh + 4.0-frameTolerance:
            # keep track of stop time/frame for later
            rating_soa.tStop = t  # not accounting for scr refresh
            rating_soa.frameNStop = frameN  # exact frame index
            win.timeOnFlip(rating_soa, 'tStopRefresh')  # time at next scr refresh
            rating_soa.setAutoDraw(False)
    
    # *key_soa_rate* updates
    waitOnFlip = False
    if key_soa_rate.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_soa_rate.frameNStart = frameN  # exact frame index
        key_soa_rate.tStart = t  # local t and not account for scr refresh
        key_soa_rate.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_soa_rate, 'tStartRefresh')  # time at next scr refresh
        key_soa_rate.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_soa_rate.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_soa_rate.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_soa_rate.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > key_soa_rate.tStartRefresh + 4.0-frameTolerance:
            # keep track of stop time/frame for later
            key_soa_rate.tStop = t  # not accounting for scr refresh
            key_soa_rate.frameNStop = frameN  # exact frame index
            win.timeOnFlip(key_soa_rate, 'tStopRefresh')  # time at next scr refresh
            key_soa_rate.status = FINISHED
    if key_soa_rate.status == STARTED and not waitOnFlip:
        theseKeys = key_soa_rate.getKeys(keyList=['1', '2', '3', '4', '5'], waitRelease=False)
        _key_soa_rate_allKeys.extend(theseKeys)
        if len(_key_soa_rate_allKeys):
            key_soa_rate.keys = _key_soa_rate_allKeys[-1].name  # just the last key pressed
            key_soa_rate.rt = _key_soa_rate_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in FeedbackComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Feedback"-------
for thisComponent in FeedbackComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('rating_soa.started', rating_soa.tStartRefresh)
thisExp.addData('rating_soa.stopped', rating_soa.tStopRefresh)
# check responses
if key_soa_rate.keys in ['', [], None]:  # No response was made
    key_soa_rate.keys = None
thisExp.addData('key_soa_rate.keys',key_soa_rate.keys)
if key_soa_rate.keys != None:  # we had a response
    thisExp.addData('key_soa_rate.rt', key_soa_rate.rt)
thisExp.addData('key_soa_rate.started', key_soa_rate.tStartRefresh)
thisExp.addData('key_soa_rate.stopped', key_soa_rate.tStopRefresh)
thisExp.nextEntry()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
