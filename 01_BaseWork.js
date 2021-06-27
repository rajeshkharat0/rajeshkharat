/******************** 
 * 01_Basework Test *
 ********************/

import { PsychoJS } from './lib/core-2021.1.4.js';
import * as core from './lib/core-2021.1.4.js';
import { TrialHandler } from './lib/data-2021.1.4.js';
import { Scheduler } from './lib/util-2021.1.4.js';
import * as visual from './lib/visual-2021.1.4.js';
import * as sound from './lib/sound-2021.1.4.js';
import * as util from './lib/util-2021.1.4.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = '01_BaseWork';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(IntroductionRoutineBegin());
flowScheduler.add(IntroductionRoutineEachFrame());
flowScheduler.add(IntroductionRoutineEnd());
flowScheduler.add(ConsentRoutineBegin());
flowScheduler.add(ConsentRoutineEachFrame());
flowScheduler.add(ConsentRoutineEnd());
flowScheduler.add(fix_ballRoutineBegin());
flowScheduler.add(fix_ballRoutineEachFrame());
flowScheduler.add(fix_ballRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(FeedbackRoutineBegin());
flowScheduler.add(FeedbackRoutineEachFrame());
flowScheduler.add(FeedbackRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'mptboxballcenter.png', 'path': 'mptboxballcenter.png'},
    {'name': 'SoArating.png', 'path': 'SoArating.png'},
    {'name': 'fixationcross.png', 'path': 'fixationcross.png'},
    {'name': 'onlyballcenter.png', 'path': 'onlyballcenter.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var IntroductionClock;
var intro_text;
var key_skipintro;
var ConsentClock;
var consent_text;
var Key_skipconsent;
var fix_ballClock;
var fix_cross;
var center_ball;
var TrialsClock;
var mpt_boxes_center_ball;
var key_shoot;
var go_ballClock;
var UDLR_balls_trial_AC;
var FeedbackClock;
var rating_soa;
var key_soa_rate;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Introduction"
  IntroductionClock = new util.Clock();
  intro_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'intro_text',
    text: 'HELLO!\n\nIn this experiment, we will test your Sense of Agency or your sense of ownership towards an action.\n\nOn the next page, will be a consent form',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_skipintro = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Consent"
  ConsentClock = new util.Clock();
  consent_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'consent_text',
    text: "Consent will be shown here.\n\nPress 'Y' to agree.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Key_skipconsent = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fix_ball"
  fix_ballClock = new util.Clock();
  fix_cross = new visual.ImageStim({
    win : psychoJS.window,
    name : 'fix_cross', units : undefined, 
    image : 'fixationcross.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.75, 1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  center_ball = new visual.ImageStim({
    win : psychoJS.window,
    name : 'center_ball', units : undefined, 
    image : 'onlyballcenter.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.75, 1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "Trials"
  TrialsClock = new util.Clock();
  mpt_boxes_center_ball = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mpt_boxes_center_ball', units : undefined, 
    image : 'mptboxballcenter.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.75, 1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_shoot = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "go_ball"
  go_ballClock = new util.Clock();
  UDLR_balls_trial_AC = new visual.ImageStim({
    win : psychoJS.window,
    name : 'UDLR_balls_trial_AC', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.75, 1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "Feedback"
  FeedbackClock = new util.Clock();
  rating_soa = new visual.ImageStim({
    win : psychoJS.window,
    name : 'rating_soa', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1.75, 1],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_soa_rate = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_skipintro_allKeys;
var IntroductionComponents;
function IntroductionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Introduction'-------
    t = 0;
    IntroductionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_skipintro.keys = undefined;
    key_skipintro.rt = undefined;
    _key_skipintro_allKeys = [];
    // keep track of which components have finished
    IntroductionComponents = [];
    IntroductionComponents.push(intro_text);
    IntroductionComponents.push(key_skipintro);
    
    for (const thisComponent of IntroductionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function IntroductionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Introduction'-------
    // get current time
    t = IntroductionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *intro_text* updates
    if (t >= 0.0 && intro_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      intro_text.tStart = t;  // (not accounting for frame time here)
      intro_text.frameNStart = frameN;  // exact frame index
      
      intro_text.setAutoDraw(true);
    }

    
    // *key_skipintro* updates
    if (t >= 0.0 && key_skipintro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_skipintro.tStart = t;  // (not accounting for frame time here)
      key_skipintro.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_skipintro.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_skipintro.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_skipintro.clearEvents(); });
    }

    if (key_skipintro.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_skipintro.getKeys({keyList: ['space'], waitRelease: false});
      _key_skipintro_allKeys = _key_skipintro_allKeys.concat(theseKeys);
      if (_key_skipintro_allKeys.length > 0) {
        key_skipintro.keys = _key_skipintro_allKeys[_key_skipintro_allKeys.length - 1].name;  // just the last key pressed
        key_skipintro.rt = _key_skipintro_allKeys[_key_skipintro_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of IntroductionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function IntroductionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Introduction'-------
    for (const thisComponent of IntroductionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_skipintro.stop();
    // the Routine "Introduction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _Key_skipconsent_allKeys;
var ConsentComponents;
function ConsentRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Consent'-------
    t = 0;
    ConsentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    Key_skipconsent.keys = undefined;
    Key_skipconsent.rt = undefined;
    _Key_skipconsent_allKeys = [];
    // keep track of which components have finished
    ConsentComponents = [];
    ConsentComponents.push(consent_text);
    ConsentComponents.push(Key_skipconsent);
    
    for (const thisComponent of ConsentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ConsentRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Consent'-------
    // get current time
    t = ConsentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_text* updates
    if (t >= 0.0 && consent_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_text.tStart = t;  // (not accounting for frame time here)
      consent_text.frameNStart = frameN;  // exact frame index
      
      consent_text.setAutoDraw(true);
    }

    
    // *Key_skipconsent* updates
    if (t >= 0.0 && Key_skipconsent.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Key_skipconsent.tStart = t;  // (not accounting for frame time here)
      Key_skipconsent.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Key_skipconsent.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Key_skipconsent.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Key_skipconsent.clearEvents(); });
    }

    if (Key_skipconsent.status === PsychoJS.Status.STARTED) {
      let theseKeys = Key_skipconsent.getKeys({keyList: ['y'], waitRelease: false});
      _Key_skipconsent_allKeys = _Key_skipconsent_allKeys.concat(theseKeys);
      if (_Key_skipconsent_allKeys.length > 0) {
        Key_skipconsent.keys = _Key_skipconsent_allKeys[_Key_skipconsent_allKeys.length - 1].name;  // just the last key pressed
        Key_skipconsent.rt = _Key_skipconsent_allKeys[_Key_skipconsent_allKeys.length - 1].rt;
        // was this correct?
        if (Key_skipconsent.keys == '') {
            Key_skipconsent.corr = 1;
        } else {
            Key_skipconsent.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ConsentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ConsentRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Consent'-------
    for (const thisComponent of ConsentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (Key_skipconsent.keys === undefined) {
      if (['None','none',undefined].includes('')) {
         Key_skipconsent.corr = 1;  // correct non-response
      } else {
         Key_skipconsent.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('Key_skipconsent.keys', Key_skipconsent.keys);
    psychoJS.experiment.addData('Key_skipconsent.corr', Key_skipconsent.corr);
    if (typeof Key_skipconsent.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Key_skipconsent.rt', Key_skipconsent.rt);
        routineTimer.reset();
        }
    
    Key_skipconsent.stop();
    // the Routine "Consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fix_ballComponents;
function fix_ballRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fix_ball'-------
    t = 0;
    fix_ballClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fix_ballComponents = [];
    fix_ballComponents.push(fix_cross);
    fix_ballComponents.push(center_ball);
    
    for (const thisComponent of fix_ballComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function fix_ballRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fix_ball'-------
    // get current time
    t = fix_ballClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fix_cross* updates
    if (t >= 0.0 && fix_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fix_cross.tStart = t;  // (not accounting for frame time here)
      fix_cross.frameNStart = frameN;  // exact frame index
      
      fix_cross.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fix_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fix_cross.setAutoDraw(false);
    }
    
    // *center_ball* updates
    if (t >= 1.0 && center_ball.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      center_ball.tStart = t;  // (not accounting for frame time here)
      center_ball.frameNStart = frameN;  // exact frame index
      
      center_ball.setAutoDraw(true);
    }

    frameRemains = 1.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (center_ball.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      center_ball.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fix_ballComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fix_ballRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fix_ball'-------
    for (const thisComponent of fix_ballComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 20, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(TrialsRoutineBegin(snapshot));
    trialsLoopScheduler.add(TrialsRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(TrialsRoutineEnd(snapshot));
    trialsLoopScheduler.add(go_ballRoutineBegin(snapshot));
    trialsLoopScheduler.add(go_ballRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(go_ballRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var _key_shoot_allKeys;
var TrialsComponents;
function TrialsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Trials'-------
    t = 0;
    TrialsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_shoot.keys = undefined;
    key_shoot.rt = undefined;
    _key_shoot_allKeys = [];
    // keep track of which components have finished
    TrialsComponents = [];
    TrialsComponents.push(mpt_boxes_center_ball);
    TrialsComponents.push(key_shoot);
    
    for (const thisComponent of TrialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function TrialsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Trials'-------
    // get current time
    t = TrialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *mpt_boxes_center_ball* updates
    if (t >= 0.0 && mpt_boxes_center_ball.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mpt_boxes_center_ball.tStart = t;  // (not accounting for frame time here)
      mpt_boxes_center_ball.frameNStart = frameN;  // exact frame index
      
      mpt_boxes_center_ball.setAutoDraw(true);
    }

    
    // *key_shoot* updates
    if (t >= 0.0 && key_shoot.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_shoot.tStart = t;  // (not accounting for frame time here)
      key_shoot.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_shoot.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_shoot.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_shoot.clearEvents(); });
    }

    if (key_shoot.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_shoot.getKeys({keyList: ['left', 'right', 'up', 'down'], waitRelease: false});
      _key_shoot_allKeys = _key_shoot_allKeys.concat(theseKeys);
      if (_key_shoot_allKeys.length > 0) {
        key_shoot.keys = _key_shoot_allKeys[_key_shoot_allKeys.length - 1].name;  // just the last key pressed
        key_shoot.rt = _key_shoot_allKeys[_key_shoot_allKeys.length - 1].rt;
        // was this correct?
        if (key_shoot.keys == '') {
            key_shoot.corr = 1;
        } else {
            key_shoot.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of TrialsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TrialsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Trials'-------
    for (const thisComponent of TrialsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_shoot.keys === undefined) {
      if (['None','none',undefined].includes('')) {
         key_shoot.corr = 1;  // correct non-response
      } else {
         key_shoot.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_shoot.keys', key_shoot.keys);
    psychoJS.experiment.addData('key_shoot.corr', key_shoot.corr);
    if (typeof key_shoot.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_shoot.rt', key_shoot.rt);
        routineTimer.reset();
        }
    
    key_shoot.stop();
    // the Routine "Trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var Stimuli;
var go_ballComponents;
function go_ballRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'go_ball'-------
    t = 0;
    go_ballClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.400000);
    // update component parameters for each repeat
    if ((key_shoot.keys === "left")) {
        Stimuli = "inleft.png";
    } else {
        if ((key_shoot.keys === "right")) {
            Stimuli = "inright.png";
        } else {
            if ((key_shoot.keys === "up")) {
                Stimuli = "inup.png";
            } else {
                if ((key_shoot.keys === "down")) {
                    Stimuli = "indown.png";
                }
            }
        }
    }
    
    UDLR_balls_trial_AC.setImage(Stimuli);
    // keep track of which components have finished
    go_ballComponents = [];
    go_ballComponents.push(UDLR_balls_trial_AC);
    
    for (const thisComponent of go_ballComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function go_ballRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'go_ball'-------
    // get current time
    t = go_ballClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *UDLR_balls_trial_AC* updates
    if (t >= 0.0 && UDLR_balls_trial_AC.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      UDLR_balls_trial_AC.tStart = t;  // (not accounting for frame time here)
      UDLR_balls_trial_AC.frameNStart = frameN;  // exact frame index
      
      UDLR_balls_trial_AC.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (UDLR_balls_trial_AC.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      UDLR_balls_trial_AC.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of go_ballComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function go_ballRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'go_ball'-------
    for (const thisComponent of go_ballComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    thisExp.addData("Stimuli", Stimuli);
    console.log(Stimuli);
    
    return Scheduler.Event.NEXT;
  };
}


var _key_soa_rate_allKeys;
var FeedbackComponents;
function FeedbackRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Feedback'-------
    t = 0;
    FeedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    rating_soa.setImage('SoArating.png');
    key_soa_rate.keys = undefined;
    key_soa_rate.rt = undefined;
    _key_soa_rate_allKeys = [];
    // keep track of which components have finished
    FeedbackComponents = [];
    FeedbackComponents.push(rating_soa);
    FeedbackComponents.push(key_soa_rate);
    
    for (const thisComponent of FeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function FeedbackRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Feedback'-------
    // get current time
    t = FeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rating_soa* updates
    if (t >= 0.0 && rating_soa.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rating_soa.tStart = t;  // (not accounting for frame time here)
      rating_soa.frameNStart = frameN;  // exact frame index
      
      rating_soa.setAutoDraw(true);
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (rating_soa.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      rating_soa.setAutoDraw(false);
    }
    
    // *key_soa_rate* updates
    if (t >= 0.0 && key_soa_rate.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_soa_rate.tStart = t;  // (not accounting for frame time here)
      key_soa_rate.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_soa_rate.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_soa_rate.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_soa_rate.clearEvents(); });
    }

    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_soa_rate.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_soa_rate.status = PsychoJS.Status.FINISHED;
  }

    if (key_soa_rate.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_soa_rate.getKeys({keyList: ['1', '2', '3', '4', '5'], waitRelease: false});
      _key_soa_rate_allKeys = _key_soa_rate_allKeys.concat(theseKeys);
      if (_key_soa_rate_allKeys.length > 0) {
        key_soa_rate.keys = _key_soa_rate_allKeys[_key_soa_rate_allKeys.length - 1].name;  // just the last key pressed
        key_soa_rate.rt = _key_soa_rate_allKeys[_key_soa_rate_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FeedbackRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Feedback'-------
    for (const thisComponent of FeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_soa_rate.keys', key_soa_rate.keys);
    if (typeof key_soa_rate.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_soa_rate.rt', key_soa_rate.rt);
        routineTimer.reset();
        }
    
    key_soa_rate.stop();
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
