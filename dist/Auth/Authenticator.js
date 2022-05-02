var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _react=_interopRequireDefault(require("react"));var _awsAmplify=require("aws-amplify");var _AmplifyTheme=_interopRequireDefault(require("../AmplifyTheme"));var _AmplifyMessageMap=_interopRequireDefault(require("../AmplifyMessageMap"));var _AmplifyUI=require("../AmplifyUI");var _Loading=_interopRequireDefault(require("./Loading"));var _SignIn=_interopRequireDefault(require("./SignIn"));var _ConfirmSignIn=_interopRequireDefault(require("./ConfirmSignIn"));var _VerifyContact=_interopRequireDefault(require("./VerifyContact"));var _SignUp=_interopRequireDefault(require("./SignUp"));var _ConfirmSignUp=_interopRequireDefault(require("./ConfirmSignUp"));var _ForgotPassword=_interopRequireDefault(require("./ForgotPassword"));var _RequireNewPassword=_interopRequireDefault(require("./RequireNewPassword"));var _Greetings=_interopRequireDefault(require("./Greetings"));var _this=this,_jsxFileName="/root/amplify-js/packages/aws-amplify-react-native/src/Auth/Authenticator.tsx";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var logger=new _awsAmplify.Logger('Authenticator');var EmptyContainer=function EmptyContainer(_ref){var children=_ref.children;return _react.default.createElement(_react.default.Fragment,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:32,columnNumber:50}},children);};var AuthDecorator=function(){function AuthDecorator(onStateChange){(0,_classCallCheck2.default)(this,AuthDecorator);this.onStateChange=onStateChange;}(0,_createClass2.default)(AuthDecorator,[{key:"signIn",value:function signIn(username,password){var that=this;return _awsAmplify.Auth.signIn(username,password).then(function(data){that.onStateChange('signedIn');return data;});}},{key:"signOut",value:function signOut(){var that=this;return _awsAmplify.Auth.signOut().then(function(){that.onStateChange('signedOut');});}}]);return AuthDecorator;}();var Authenticator=function(_React$Component){(0,_inherits2.default)(Authenticator,_React$Component);var _super=_createSuper(Authenticator);function Authenticator(props){var _this2;(0,_classCallCheck2.default)(this,Authenticator);_this2=_super.call(this,props);_this2._initialAuthState=_this2.props.authState||'signIn';_this2.state={authState:props.authState||'loading',authData:props.authData};_this2.handleStateChange=_this2.handleStateChange.bind((0,_assertThisInitialized2.default)(_this2));_this2.checkUser=_this2.checkUser.bind((0,_assertThisInitialized2.default)(_this2));_this2.onHubCapsule=_this2.onHubCapsule.bind((0,_assertThisInitialized2.default)(_this2));_this2.checkContact=_this2.checkContact.bind((0,_assertThisInitialized2.default)(_this2));_awsAmplify.Hub.listen('auth',_this2.onHubCapsule);return _this2;}(0,_createClass2.default)(Authenticator,[{key:"componentDidMount",value:function componentDidMount(){this._isMounted=true;this.checkUser();}},{key:"componentWillUnmount",value:function componentWillUnmount(){this._isMounted=false;}},{key:"onHubCapsule",value:function onHubCapsule(capsule){var _capsule$payload=capsule.payload,event=_capsule$payload.event,data=_capsule$payload.data;switch(event){case'cognitoHostedUI':case'signIn':this.checkContact(data);break;case'cognitoHostedUI_failure':case'parsingUrl_failure':case'signOut':case'customGreetingSignOut':return this.handleStateChange('signIn',null);}}},{key:"handleStateChange",value:function handleStateChange(state,data){if(state===undefined)return logger.info('Auth state cannot be undefined');logger.info('Inside handleStateChange method current authState:',this.state.authState);var nextAuthState=state==='signedOut'?this._initialAuthState:state;var nextAuthData=data!==undefined?data:this.state.authData;if(this._isMounted){this.setState({authState:nextAuthState,authData:nextAuthData,error:null});logger.log('Auth Data was set:',nextAuthData);logger.info("authState has been updated to "+nextAuthState);}if(this.props.onStateChange){this.props.onStateChange(state,data);}if(_awsAmplify.Analytics._config&&Object.entries(_awsAmplify.Analytics._config).length>0){switch(state){case'signedIn':_awsAmplify.Analytics.record('_userauth.sign_in');break;case'signedUp':_awsAmplify.Analytics.record('_userauth.sign_up');break;}}}},{key:"checkContact",value:function checkContact(user){var data;return _regenerator.default.async(function checkContact$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return _regenerator.default.awrap(_awsAmplify.Auth.verifiedContact(user));case 3:data=_context.sent;logger.debug('verified user attributes',data);if(!_awsAmplify.JS.isEmpty(data.verified)){this.handleStateChange('signedIn',user);}else{user=(0,_extends2.default)(user,data);this.handleStateChange('verifyContact',user);}_context.next=12;break;case 8:_context.prev=8;_context.t0=_context["catch"](0);logger.warn('Failed to verify contact',_context.t0);this.handleStateChange('signedIn',user);case 12:case"end":return _context.stop();}}},null,this,[[0,8]],Promise);}},{key:"checkUser",value:function checkUser(){var _this3=this;var authState=this.state.authState;var statesJumpToSignIn=['signedIn','signedOut','loading'];_awsAmplify.Auth.currentAuthenticatedUser().then(function(user){if(!_this3._isMounted)return;if(user){_this3.checkContact(user);}else{if(statesJumpToSignIn.includes(authState)){_this3.handleStateChange(_this3._initialAuthState,null);}}}).catch(function(err){if(!_this3._isMounted)return;logger.debug(err);if(statesJumpToSignIn.includes(authState)){_awsAmplify.Auth.signOut().then(function(){_this3.handleStateChange(_this3._initialAuthState,null);}).catch(function(err){return logger.warn('Failed to sign out',err);});}});}},{key:"render",value:function render(){var _this4=this;var _this$state=this.state,authState=_this$state.authState,authData=_this$state.authData;var theme=this.props.theme||_AmplifyTheme.default;var messageMap=this.props.errorMessage||_AmplifyMessageMap.default;var ContainerWrapper=this.props.container===undefined?_AmplifyUI.Container:this.props.container||EmptyContainer;var _this$props=this.props,hideDefault=_this$props.hideDefault,signUpConfig=_this$props.signUpConfig,_this$props$usernameA=_this$props.usernameAttributes,usernameAttributes=_this$props$usernameA===void 0?'username':_this$props$usernameA;var props_children=this.props.children||[];var default_children=[_react.default.createElement(_Loading.default,{__self:this,__source:{fileName:_jsxFileName,lineNumber:212,columnNumber:4}}),_react.default.createElement(_SignIn.default,{__self:this,__source:{fileName:_jsxFileName,lineNumber:213,columnNumber:4}}),_react.default.createElement(_ConfirmSignIn.default,{__self:this,__source:{fileName:_jsxFileName,lineNumber:214,columnNumber:4}}),_react.default.createElement(_VerifyContact.default,{__self:this,__source:{fileName:_jsxFileName,lineNumber:215,columnNumber:4}}),_react.default.createElement(_SignUp.default,{signUpConfig:signUpConfig,__self:this,__source:{fileName:_jsxFileName,lineNumber:216,columnNumber:4}}),_react.default.createElement(_ConfirmSignUp.default,{__self:this,__source:{fileName:_jsxFileName,lineNumber:217,columnNumber:4}}),_react.default.createElement(_ForgotPassword.default,{__self:this,__source:{fileName:_jsxFileName,lineNumber:218,columnNumber:4}}),_react.default.createElement(_RequireNewPassword.default,{__self:this,__source:{fileName:_jsxFileName,lineNumber:219,columnNumber:4}}),_react.default.createElement(_Greetings.default,{__self:this,__source:{fileName:_jsxFileName,lineNumber:220,columnNumber:4}})];var children=(hideDefault?[]:default_children).concat(props_children).map(function(child,index){return _react.default.cloneElement(child,{key:'auth_piece_'+index,theme:theme,messageMap:messageMap,authState:authState,authData:authData,onStateChange:_this4.handleStateChange,Auth:new AuthDecorator(_this4.handleStateChange),usernameAttributes:usernameAttributes});});return _react.default.createElement(ContainerWrapper,{theme:theme,__self:this,__source:{fileName:_jsxFileName,lineNumber:234,columnNumber:10}},children);}}]);return Authenticator;}(_react.default.Component);exports.default=Authenticator;