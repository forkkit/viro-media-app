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
import {StyleSheet} from 'react-native';

import {
    ViroScene,
    ViroLight,
    Viro360Photo,
    ViroImageCard,
    ViroMaterials,
    ViroAnimations,
    ViroAnimatedComponent,
    ViroNode,
    ViroSpinner,
    ViroText,
    ViroSphere,
    ViroUtils,
} from 'react-viro';

let polarToCartesian = ViroUtils.polarToCartesian;

import PropTypes from 'prop-types';

var createReactClass = require('create-react-class');

var LoadingSpinner = createReactClass({
    propTypes: {
        showLoadingText:PropTypes.bool,
    },
    render: function() {
        var spinnerPosition = polarToCartesian([0, 0, 0]);
        spinnerPosition[2]=0;
        var textPosition = polarToCartesian([1, 10, -58]);
        textPosition[2]=0.35;
        return (
                <ViroNode {...this.props} >
                    <ViroNode position={polarToCartesian([0, 0, 0])}
                          transformBehaviors={["billboard"]}>
                        <ViroSpinner position={spinnerPosition}
                                     scale={[.7,.7,.1]}
                                     spinnerType='dark' />
                        <ViroText
                            position={textPosition}
                            fontFamily='HelveticaNeue-Medium'
                            fontSize={20}
                            color={'#FFFFFF'}
                            text="Loading..."
                        />
                    </ViroNode>
                </ViroNode>
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


module.exports = LoadingSpinner;
