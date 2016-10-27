/**
 * Copyright (c) 2015-present, Viro Media, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
'use strict';

import React, { Component } from 'react';
import { polarToCartesian } from 'polarToCartesian';

import {
    StyleSheet,
    ViroScene,
    ViroOmniLight,
    Viro360Photo,
    ViroImageCard,
    Materials,
    ViroNode,
    ViroAnimations,
    ViroAnimatedComponent,
} from 'react-viro';
var PortalElement = require('../custom_controls/PortalElement');
var LoadingSpinner = require('../custom_controls/LoadingSpinner');


var MAINCARD_REF = 'maincard';

var ElevenFloorCommonSouthScene = React.createClass({
  getInitialState() {
    return {
    };
  },
  render: function() {
    var ElevenFloorCommonScene = require('../scenes/ElevenFloorCommonScene');
    return (
        <ViroScene style={styles.container} onTap={this._onTapBack}>
          <ViroOmniLight position={[0, 0, 0]} color="#ffffff"
                     attenuationStartDistance={40} attenuationEndDistance={50}
                     spotInnerAngle={0} spotOuterAngle={20} />

            <LoadingSpinner visible={!this.state.showSceneItems} position={polarToCartesian([-5, 190, 0])} />

            <ViroNode visible={this.state.showSceneItems} position={this.props.position} rotation={this.props.rotation} scale={this.props.scale}>
                <ViroAnimatedComponent animation="fadeIn" runOnMount={false} loop={false} ref={MAINCARD_REF}>
                    <ViroNode opacity={0.0} position={this.props.position} rotation={this.props.rotation} scale={this.props.scale}>
                        <Viro360Photo source={require('../img/wework_11th_commons_south.jpg')} onLoadEnd={this._onLoadEnd} />
                        <PortalElement  backPortal={true}  iconOffset={0.72} sceneLength={1}  sceneText="Main Commons"
                                        position={polarToCartesian([-5, -130, 0])} jumpToScene={ElevenFloorCommonScene} sceneNavigator={this.props.sceneNavigator}/>
                    </ViroNode>
                </ViroAnimatedComponent>
            </ViroNode>
        </ViroScene>
    );
  },
    _onLoadEnd(){
        if (this.state.showSceneItems != true) {
            this.setState({
                showSceneItems: true,
            });
            this.refs[MAINCARD_REF].startAnimation();
        }
    },
  _onTapBack() {
    this.props.sceneNavigator.pop();
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = ElevenFloorCommonSouthScene;