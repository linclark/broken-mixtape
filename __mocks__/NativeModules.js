'use strict';

var NativeModules = {
  ActionSheetManager: {
    showActionSheetWithOptions: jest.genMockFunction(),
    showShareActionSheetWithOptions: jest.genMockFunction()
  },
  AdSupport: {
    getAdvertisingId: jest.genMockFunction(),
    getAdvertisingTrackingEnabled: jest.genMockFunction()
  },
  AlertManager: {
    alertWithArgs: jest.genMockFunction()
  },
  AnimationsDebugModule: {
    startRecordingFps: jest.genMockFunction(),
    stopRecordingFps: jest.genMockFunction()
  },
  AppState: {
    initialAppState: 'active',
    getCurrentAppState: jest.genMockFunction()
  },
  AsyncLocalStorage: {
    getItem: jest.genMockFunction(),
    setItem: jest.genMockFunction(),
    removeItem: jest.genMockFunction(),
    clear: jest.genMockFunction(),
    multiGet: jest.genMockFunction(),
    multiSet : jest.genMockFunction(),
    multiRemove: jest.genMockFunction(),
    multiMerge: jest.genMockFunction(),
    getAllKeys: jest.genMockFunction()
  },
  AsyncRocksDBStorage: {
    getItem: jest.genMockFunction(),
    setItem: jest.genMockFunction(),
    removeItem: jest.genMockFunction(),
    clear: jest.genMockFunction(),
    multiGet: jest.genMockFunction(),
    multiSet : jest.genMockFunction(),
    multiRemove: jest.genMockFunction(),
    multiMerge: jest.genMockFunction(),
    getAllKeys: jest.genMockFunction()
  },
  BuildInfo: {
    appVersion: '0',
    buildVersion: '0'
  },
  CameraRollManager: {
    saveImageWithTag: jest.genMockFunction(),
    getPhotos: jest.genMockFunction()
  },
  DataManager: {
    queryData: jest.genMockFunction()
  },
  DebugComponentOwnershipModule: {
    receiveOwnershipHierarchy: jest.genMockFunction()
  },
  ExceptionsManager: {
    reportFatalException: jest.genMockFunction(),
    reportSoftException: jest.genMockFunction(),
    updateExceptionMessage: jest.genMockFunction()
  },
  FacebookSDK: {
    login: jest.genMockFunction(),
    logout: jest.genMockFunction(),
    queryGraphPath: jest.genMockFunction().mockImpl(
      (path, method, params, callback) => callback()
    )
  },
  GraphPhotoUpload: {
    upload: jest.genMockFunction()
  },
  I18n: {
    translationsDictionary: JSON.stringify({
      'Good bye, {name}!|Bye message': '¡Adiós {name}!'
    })
  },
  ImagePickerIOS : {
    canRecordVideos: jest.genMockFunction(),
    canUseCamera: jest.genMockFunction(),
    openCameraDialog: jest.genMockFunction(),
    openSelectDialog: jest.genMockFunction()
  },
  LinkingManager: {
    initialURL: '',
    openURL: jest.genMockFunction(),
    canOpenURL: jest.genMockFunction()
  },
  LocationObserver: {
    getCurrentPosition: jest.genMockFunction(),
    startObserving: jest.genMockFunction(),
    stopObserving: jest.genMockFunction()
  },
  NavigatorManager: {
    requestSchedulingJavaScriptNavigation: jest.genMockFunction()
  },
  NetInfo: {
    getCurrentReachability: jest.genMockFunction(),
    isConnectionMetered: jest.genMockFunction()
  },
  Networking: {
    sendRequest: jest.genMockFunction(),
    cancelRequest: jest.genMockFunction()
  },
  ProgressViewManager: {
    ComponentHeight: 20
  },
  PushNotificationManager: {
    initialNotification: {},
    presentLocalNotification: jest.genMockFunction(),
    scheduleLocalNotification: jest.genMockFunction(),
    setApplicationIconBadgeNumber: jest.genMockFunction(),
    getApplicationIconBadgeNumber: jest.genMockFunction(),
    requestPermissions: jest.genMockFunction(),
    abandonPermissions: jest.genMockFunction(),
    checkPermissions: jest.genMockFunction()
  },
  ScrollViewManager: {
    calculateChildFrames: jest.genMockFunction()
  },
  SegmentedControlManager: {
    ComponentHeight: 20
  },
  SettingsManager: {
    settings: {},
    setValues: jest.genMockFunction()
  },
  SourceCode: {
    scriptURL: null
  },
  StatusBarManager : {
    setStyle: jest.genMockFunction(),
    setHidden: jest.genMockFunction(),
    setNetworkActivityIndicatorVisible: jest.genMockFunction()
  },
  Timing: {
    createTimer: jest.genMockFunction(),
    deleteTimer: jest.genMockFunction()
  },
  UIManager: {
    RCTActivityIndicatorView: {
      NativeProps: {
        animating: 'BOOL',
        color: 'UIColor',
        hidesWhenStopped: 'BOOL',
        size: 'UIActivityIndicatorViewStyle'
      }
    },
    RCTDatePicker: {
      Constants: {
        ComponentHeight: 216,
        ComponentWidth: 375
      },
      NativeProps: {
        date: 'NSDate',
        maximumDate: 'NSDate',
        minimumDate: 'NSDate',
        minuteInterval: 'NSInteger',
        mode: 'UIDatePickerMode',
        timeZoneOffsetInMinutes: 'NSTimeZone'
      }
    },
    RCTImageView: {
      NativeProps: {
        capInsets: 'UIEdgeInsets',
        defaultImageSrc: 'UIImage',
        onError: 'BOOL',
        onLoad: 'BOOL',
        onLoadEnd: 'BOOL',
        onLoadStart: 'BOOL',
        onProgress: 'BOOL',
        resizeMode: 'UIViewContentMode',
        src: 'NSString',
        tintColor: 'UIColor'
      }
    },
    RCTMap: {
      NativeProps: {
        annotations: 'RCTPointAnnotationArray',
        legalLabelInsets: 'UIEdgeInsets',
        mapType: 'MKMapType',
        maxDelta: 'CGFloat',
        minDelta: 'CGFloat',
        pitchEnabled: 'BOOL',
        region: 'MKCoordinateRegion',
        rotateEnabled: 'BOOL',
        scrollEnabled: 'BOOL',
        showsUserLocation: 'BOOL',
        zoomEnabled: 'BOOL'
      }
    },
    RCTModalHostView: {
      NativeProps: {
        animated: 'BOOL'
      }
    },
    RCTNavItem: {
      NativeProps: {
        backButtonIcon: 'UIImage',
        backButtonTitle: 'NSString',
        barTintColor: 'UIColor',
        leftButtonIcon: 'UIImage',
        leftButtonTitle: 'NSString',
        navigationBarHidden: 'BOOL',
        rightButtonIcon: 'UIImage',
        rightButtonTitle: 'NSString',
        shadowHidden: 'BOOL',
        tintColor: 'UIColor',
        title: 'NSString',
        titleTextColor: 'UIColor',
        translucent: 'BOOL'
      }
    },
    RCTNavigator: {
      NativeProps: {
        requestedTopOfStack: 'NSInteger'
      }
    },
    RCTPicker: {
      NativeProps: {
        items: 'NSDictionaryArray',
        selectedIndex: 'NSInteger'
      },
      Constants: {
        ComponentHeight: 216,
        ComponentWidth: 375
      }
    },
    RCTProgressView: {
      NativeProps: {
        progress: 'float',
        progressImage: 'UIImage',
        progressTintColor: 'UIColor',
        progressViewStyle: 'UIProgressViewStyle',
        trackImage: 'UIImage',
        trackTintColor: 'UIColor'
      },
      Constants: {
        ComponentHeight: 2
      }
    },
    RCTRawText: {
      NativeProps: {
        text: 'NSString'
      }
    },
    RCTScrollView: {
      NativeProps: {
        alwaysBounceHorizontal: 'BOOL',
        alwaysBounceVertical: 'BOOL',
        automaticallyAdjustContentInsets: 'BOOL',
        bounces: 'BOOL',
        bouncesZoom: 'BOOL',
        canCancelContentTouches: 'BOOL',
        centerContent: 'BOOL',
        contentInset: 'UIEdgeInsets',
        contentOffset: 'CGPoint',
        decelerationRate: 'CGFloat',
        directionalLockEnabled: 'BOOL',
        keyboardDismissMode: 'UIScrollViewKeyboardDismissMode',
        maximumZoomScale: 'CGFloat',
        minimumZoomScale: 'CGFloat',
        pagingEnabled: 'BOOL',
        scrollEnabled: 'BOOL',
        scrollEventThrottle: 'NSTimeInterval',
        scrollIndicatorInsets: 'UIEdgeInsets',
        scrollsToTop: 'BOOL',
        showsHorizontalScrollIndicator: 'BOOL',
        showsVerticalScrollIndicator: 'BOOL',
        stickyHeaderIndices: 'NSIndexSet',
        zoomScale: 'CGFloat'
      },
      Constants: {
        DecelerationRate: {
          fast: '0.99',
          normal: '0.998'
        }
      },
      Commands: {}
    },
    RCTSegmentedControl: {
      NativeProps: {
        enabled: 'BOOL',
        momentary: 'BOOL',
        selectedIndex: 'NSInteger',
        tintColor: 'UIColor',
        values: 'NSStringArray'
      },
      Constants: {
        ComponentHeight: 28
      }
    },
    RCTSlider: {
      NativeProps: {
        maximumTrackTintColor: 'UIColor',
        maximumValue: 'float',
        minimumTrackTintColor: 'UIColor',
        minimumValue: 'float',
        value: 'float'
      }
    },
    RCTSwitch:{
      NativeProps: {
        disabled: 'BOOL',
        onTintColor: 'UIColor',
        thumbTintColor: 'UIColor',
        tintColor: 'UIColor',
        value: 'BOOL'
      }
    },
    RCTTabBar: {
      NativeProps: {
        barTintColor: 'UIColor',
        tintColor: 'UIColor',
        translucent: 'BOOL'
      }
    },
    RCTTabBarItem: {
      NativeProps: {
        badge: 'NSString',
        icon: 'id',
        selected: 'BOOL',
        selectedIcon: 'UIImage',
        title: 'NSString'
      }
    },
    RCTText: {
      NativeProps: {
        allowFontScaling: 'BOOL',
        color: 'UIColor',
        fontFamily: 'NSString',
        fontSize: 'CGFloat',
        fontStyle: 'NSString',
        fontWeight: 'NSString',
        isHighlighted: 'BOOL',
        letterSpacing: 'CGFloat',
        lineHeight: 'CGFloat',
        numberOfLines: 'NSUInteger',
        shadowOffset: 'CGSize',
        textAlign: 'NSTextAlignment',
        textDecorationColor: 'UIColor',
        textDecorationLine: 'RCTTextDecorationLineType',
        textDecorationStyle: 'NSUnderlineStyle',
        writingDirection: 'NSWritingDirection'
      }
    },
    RCTTextField: {
      NativeProps: {
        autoCapitalize: 'UITextAutocapitalizationType',
        autoCorrect: 'BOOL',
        caretHidden: 'BOOL',
        clearButtonMode: 'UITextFieldViewMode',
        clearTextOnFocus: 'BOOL',
        color: 'UIColor',
        editable: 'BOOL',
        enablesReturnKeyAutomatically: 'BOOL',
        fontFamily: 'NSString',
        fontSize: 'CGFloat',
        fontStyle: 'NSString',
        fontWeight: 'NSString',
        keyboardType: 'UIKeyboardType',
        maxLength: 'NSNumber',
        mostRecentEventCount: 'NSInteger',
        password: 'BOOL',
        placeholder: 'NSString',
        placeholderTextColor: 'UIColor',
        returnKeyType: 'UIReturnKeyType',
        secureTextEntry: 'BOOL',
        selectTextOnFocus: 'BOOL',
        text: 'NSString',
        textAlign: 'NSTextAlignment'
      }
    },
    RCTTextView: {
      NativeProps: {
        autoCapitalize: 'UITextAutocapitalizationType',
        autoCorrect: 'BOOL',
        clearTextOnFocus: 'BOOL',
        color: 'UIColor',
        editable: 'BOOL',
        enablesReturnKeyAutomatically: 'BOOL',
        fontFamily: 'NSString',
        fontSize: 'CGFloat',
        fontStyle: 'NSString',
        fontWeight: 'NSString',
        keyboardType: 'UIKeyboardType',
        maxLength: 'NSNumber',
        mostRecentEventCount: 'NSInteger',
        placeholder: 'NSString',
        placeholderTextColor: 'UIColor',
        returnKeyType: 'UIReturnKeyType',
        selectTextOnFocus: 'BOOL',
        text: 'NSString'
      }
    },
    RCTView: {
      NativeProps: {
        accessibilityLabel: 'NSString',
        accessibilityTraits: 'UIAccessibilityTraits',
        accessible: 'BOOL',
        alignItems: 'css_align_t',
        alignSelf: 'css_align_t',
        backfaceVisibility: 'css_backface_visibility_t',
        backgroundColor: 'UIColor',
        borderBottomColor: 'UIColor',
        borderBottomLeftRadius: 'CGFloat',
        borderBottomRightRadius: 'CGFloat',
        borderBottomWidth: 'CGFloat',
        borderColor: 'CGColor',
        borderLeftColor: 'UIColor',
        borderLeftWidth: 'CGFloat',
        borderRadius: 'CGFloat',
        borderRightColor: 'UIColor',
        borderRightWidth: 'CGFloat',
        borderTopColor: 'UIColor',
        borderTopLeftRadius: 'CGFloat',
        borderTopRightRadius: 'CGFloat',
        borderTopWidth: 'CGFloat',
        borderWidth: 'CGFloat',
        bottom: 'CGFloat',
        flex: 'CGFloat',
        flexDirection: 'css_flex_direction_t',
        flexWrap: 'css_wrap_type_t',
        height: 'CGFloat',
        justifyContent: 'css_justify_t',
        left: 'CGFloat',
        margin: 'CGFloat',
        marginBottom: 'CGFloat',
        marginHorizontal: 'CGFloat',
        marginLeft: 'CGFloat',
        marginRight: 'CGFloat',
        marginTop: 'CGFloat',
        marginVertical: 'CGFloat',
        onAccessibilityTap: 'BOOL',
        onLayout: 'BOOL',
        onMagicTap: 'BOOL',
        opacity: 'CGFloat',
        overflow: 'css_clip_t',
        padding: 'CGFloat',
        paddingBottom: 'CGFloat',
        paddingHorizontal: 'CGFloat',
        paddingLeft: 'CGFloat',
        paddingRight: 'CGFloat',
        paddingTop: 'CGFloat',
        paddingVertical: 'CGFloat',
        pointerEvents: 'RCTPointerEvents',
        position: 'css_position_type_t',
        removeClippedSubviews: 'BOOL',
        right: 'CGFloat',
        shadowColor: 'CGColor',
        shadowOffset: 'CGSize',
        shadowOpacity: 'float',
        shadowRadius: 'CGFloat',
        shouldRasterizeIOS: 'BOOL',
        testID: 'NSString',
        top: 'CGFloat',
        transformMatrix: 'CATransform3D',
        width: 'CGFloat'
      }
    },
    RCTWebView: {
      NativeProps: {
        automaticallyAdjustContentInsets: 'BOOL',
        bounces: 'BOOL',
        contentInset: 'UIEdgeInsets',
        html: 'NSString',
        injectedJavaScript: 'NSString',
        scalesPageToFit: 'BOOL',
        scrollEnabled: 'BOOL',
        url: 'NSURL'
      },
      Constants: {
        JSNavigationScheme: 'react-js-navigation',
        NavigationType: {
          BackForward: 2,
          FormResubmitted: 4,
          FormSubmitted: 1,
          LinkClicked: 0,
          Other: 5,
          Reload: 3
        }
      }
    },
    Dimensions: {
      window: {
        width: 375,
        height: 667,
        scale: 2
      },
      modalFullscreenView: {
        width: 750,
        height: 1334
      }
    },
    customBubblingEventTypes: {
      topBlur: {
        phasedRegistrationNames: {
          bubbled: 'onBlur',
          captured: 'onBlurCapture'
        }
      },
      topChange: {
        phasedRegistrationNames: {
          bubbled: 'onChange',
          captured: 'onChangeCapture'
        }
      },
      topEndEditing: {
        phasedRegistrationNames: {
          bubbled: 'onEndEditing',
          captured: 'onEndEditingCapture'
        }
      },
      topFocus: {
        phasedRegistrationNames: {
          bubbled: 'onFocus',
          captured: 'onFocusCapture'
        }
      },
      topNavLeftButtonTap: {
        phasedRegistrationNames: {
          bubbled: 'onNavLeftButtonTap',
          captured: 'onNavLeftButtonTapCapture'
        }
      },
      topNavRightButtonTap: {
        phasedRegistrationNames: {
          bubbled: 'onNavRightButtonTap',
          captured: 'onNavRightButtonTapCapture'
        }
      },
      topNavigationComplete: {
        phasedRegistrationNames: {
          bubbled: 'onNavigationComplete',
          captured: 'onNavigationCompleteCapture'
        }
      },
      topPress: {
        phasedRegistrationNames: {
          bubbled: 'onPress',
          captured: 'onPressCapture'
        }
      },
      topSubmitEditing: {
        phasedRegistrationNames: {
          bubbled: 'onSubmitEditing',
          captured: 'onSubmitEditingCapture'
        }
      },
      topTouchCancel: {
        phasedRegistrationNames: {
          bubbled: 'onTouchCancel',
          captured: 'onTouchCancelCapture'
        }
      },
      topTouchEnd: {
        phasedRegistrationNames: {
          bubbled: 'onTouchEnd',
          captured: 'onTouchEndCapture'
        }
      },
      topTouchMove: {
        phasedRegistrationNames: {
          bubbled: 'onTouchMove',
          captured: 'onTouchMoveCapture'
        }
      },
      topTouchStart: {
        phasedRegistrationNames: {
          bubbled: 'onTouchStart',
          captured: 'onTouchStartCapture'
        }
      }
    },
    customDirectEventTypes: {
      topAccessibilityTap: {
        registrationName: 'onAccessibilityTap'
      },
      topError: {
        registrationName: 'onError'
      },
      topLayout: {
        registrationName: 'onLayout'
      },
      topLoad: {
        registrationName: 'onLoad'
      },
      topLoadEnd: {
        registrationName: 'onLoadEnd'
      },
      topLoadStart: {
        registrationName: 'onLoadStart'
      },
      topLoadingError: {
        registrationName: 'onLoadingError'
      },
      topLoadingFinish: {
        registrationName: 'onLoadingFinish'
      },
      topLoadingStart: {
        registrationName: 'onLoadingStart'
      },
      topMagicTap: {
        registrationName: 'onMagicTap'
      },
      topMomentumScrollBegin: {
        registrationName: 'onMomentumScrollBegin'
      },
      topMomentumScrollEnd: {
        registrationName: 'onMomentumScrollEnd'
      },
      topNavigationProgress: {
        registrationName: 'onNavigationProgress'
      },
      topProgress: {
        registrationName: 'onProgress'
      },
      topScroll: {
        registrationName: 'onScroll'
      },
      topScrollAnimationEnd: {
        registrationName: 'onScrollAnimationEnd'
      },
      topScrollBeginDrag: {
        registrationName: 'onScrollBeginDrag'
      },
      topScrollEndDrag: {
        registrationName: 'onScrollEndDrag'
      }
    },
    AndroidTextInput: {
      Commands: {
        focusTextInput: 'focus',
        blurTextInput: 'blur'
      },
      Constants: {
        TextAlign: {},
        TextAlignVertical: {}
      }
    },
    UIText: {
      AutocapitalizationType: {}
    },
    AccessibilityEventTypes: {
      typeWindowStateChanged: 'changed'
    },
    findSubviewIn: jest.genMockFunction(),
    setJSResponder: jest.genMockFunction(),
    clearJSResponder: jest.genMockFunction(),
    measure: jest.genMockFunction(),
    measureLayout: jest.genMockFunction(),
    measureLayoutRelativeToParent: jest.genMockFunction(),
    updateView: jest.genMockFunction(),
    createView: jest.genMockFunction(),
    focus: jest.genMockFunction(),
    dispatchViewManagerCommand: jest.genMockFunction(),
    sendAccessibilityEvent: jest.genMockFunction(),
    manageChildren: jest.genMockFunction(),
    replaceExistingNonRootView: jest.genMockFunction(),
    configureNextLayoutAnimation: jest.genMockFunction(),
    scrollWithoutAnimationTo: jest.genMockFunction(),
    scrollTo: jest.genMockFunction(),
    zoomToRect: jest.genMockFunction(),
    removeRootView: jest.genMockFunction(),
    removeSubviewsFromContainerWithID: jest.genMockFunction()
  },
  Vibration: {
    vibrate: jest.genMockFunction()
  },
  WebSocketManager: {
    connect: jest.genMockFunction(),
    close: jest.genMockFunction(),
    send: jest.genMockFunction()
  },
  WebViewManager: {
    NavigationType: {
      LinkClicked: 'LinkClicked',
      FormSubmitted: 'FormSubmitted',
      BackForward: 'BackForward',
      Reload: 'Reload',
      FormResubmitted: 'FormResubmitted',
      Other: 'Other'
    },
    JSNavigationScheme: {},
    goForward: jest.genMockFunction(),
    goBack: jest.genMockFunction(),
    reload: jest.genMockFunction()
  }
};

module.exports = NativeModules;
