// Copyright (c) 2023 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.
import './index.css'

import {backpackTextureComponent} from './components'
AFRAME.registerComponent('backpack-texture', backpackTextureComponent)

import {gestureSelectorComponent} from './gesture-selector'
AFRAME.registerComponent('gesture-selector', gestureSelectorComponent)

import {highlightComponent} from './highlight'
AFRAME.registerComponent('highlight', highlightComponent)