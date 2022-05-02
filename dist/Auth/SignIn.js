var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _awsAmplify=require("aws-amplify");var _AuthPiece2=_interopRequireDefault(require("./AuthPiece"));var _AmplifyUI=require("../AmplifyUI");var _AmplifyTestIDs=_interopRequireDefault(require("../AmplifyTestIDs"));var _Utils=require("../Utils");var _jsxFileName="C:\\ws\\revu\\revu-amplify-js\\packages\\aws-amplify-react-native\\src\\Auth\\SignIn.tsx";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var logger=new _awsAmplify.Logger('SignIn');var SignIn=function(_AuthPiece){(0,_inherits2.default)(SignIn,_AuthPiece);var _super=_createSuper(SignIn);function SignIn(props){var _this;(0,_classCallCheck2.default)(this,SignIn);_this=_super.call(this,props);_this._validAuthStates=['signIn','signedOut','signedUp'];_this.state={username:null,password:null,error:null,hasPendingSignIn:false};_this.checkContact=_this.checkContact.bind((0,_assertThisInitialized2.default)(_this));_this.signIn=_this.signIn.bind((0,_assertThisInitialized2.default)(_this));return _this;}(0,_createClass2.default)(SignIn,[{key:"signIn",value:function signIn(){var _this2=this;var _this$state,password,hasPendingSignIn,username;return _regenerator.default.async(function signIn$(_context){while(1){switch(_context.prev=_context.next){case 0:_this$state=this.state,password=_this$state.password,hasPendingSignIn=_this$state.hasPendingSignIn;if(!hasPendingSignIn){_context.next=4;break;}logger.debug('Previous sign in attempt active');return _context.abrupt("return");case 4:this.setState({hasPendingSignIn:true});username=this.getUsernameFromInput()||'';logger.debug('Sign In for '+username);_context.next=9;return _regenerator.default.awrap(_awsAmplify.Auth.signIn(username,password).then(function(user){logger.debug(user);if(user.challengeName==='SMS_MFA'){_this2.changeState('confirmSignIn',user);}else if(user.challengeName==='NEW_PASSWORD_REQUIRED'){logger.debug('require new password',user.challengeParam);_this2.changeState('requireNewPassword',user);}else{_this2.checkContact(user);}}).catch(function(err){if(err.code==='PasswordResetRequiredException'){logger.debug('the user requires a new password');_this2.changeState('forgotPassword',username);}else{_this2.error(err);}}));case 9:this.setState({hasPendingSignIn:false});case 10:case"end":return _context.stop();}}},null,this,null,Promise);}},{key:"showComponent",value:function showComponent(theme){var _this3=this;var _this$state2=this.state,hasPendingSignIn=_this$state2.hasPendingSignIn,password=_this$state2.password;return _react.default.createElement(_AmplifyUI.Wrapper,{__self:this,__source:{fileName:_jsxFileName,lineNumber:93,columnNumber:4}},_react.default.createElement(_reactNative.View,{style:theme.section,__self:this,__source:{fileName:_jsxFileName,lineNumber:94,columnNumber:5}},_react.default.createElement(_reactNative.View,{__self:this,__source:{fileName:_jsxFileName,lineNumber:95,columnNumber:6}},_react.default.createElement(_AmplifyUI.Header,{theme:theme,testID:_AmplifyTestIDs.default.AUTH.SIGN_IN_TO_YOUR_ACCOUNT_TEXT,__self:this,__source:{fileName:_jsxFileName,lineNumber:96,columnNumber:7}},_awsAmplify.I18n.get('Sign in to your account')),_react.default.createElement(_reactNative.View,{style:theme.sectionBody,__self:this,__source:{fileName:_jsxFileName,lineNumber:102,columnNumber:7}},this.renderUsernameField(theme),_react.default.createElement(_AmplifyUI.FormField,(0,_extends2.default)({theme:theme,onChangeText:function onChangeText(text){return _this3.setState({password:text});},label:_awsAmplify.I18n.get('Password'),placeholder:_awsAmplify.I18n.get('Enter your password'),secureTextEntry:true,required:true},(0,_Utils.setTestId)(_AmplifyTestIDs.default.AUTH.PASSWORD_INPUT),{__self:this,__source:{fileName:_jsxFileName,lineNumber:104,columnNumber:8}})),_react.default.createElement(_AmplifyUI.AmplifyButton,(0,_extends2.default)({text:_awsAmplify.I18n.get('Sign In').toUpperCase(),theme:theme,onPress:this.signIn,disabled:!!(!this.getUsernameFromInput()&&password)||hasPendingSignIn},(0,_Utils.setTestId)(_AmplifyTestIDs.default.AUTH.SIGN_IN_BUTTON),{__self:this,__source:{fileName:_jsxFileName,lineNumber:113,columnNumber:8}}))),_react.default.createElement(_reactNative.View,{style:theme.sectionFooter,__self:this,__source:{fileName:_jsxFileName,lineNumber:124,columnNumber:7}},_react.default.createElement(_AmplifyUI.LinkCell,{theme:theme,onPress:function onPress(){return _this3.changeState('forgotPassword');},testID:_AmplifyTestIDs.default.AUTH.FORGOT_PASSWORD_BUTTON,__self:this,__source:{fileName:_jsxFileName,lineNumber:125,columnNumber:8}},_awsAmplify.I18n.get('Forgot Password')),_react.default.createElement(_AmplifyUI.LinkCell,{theme:theme,onPress:function onPress(){return _this3.changeState('signUp');},testID:_AmplifyTestIDs.default.AUTH.SIGN_UP_BUTTON,__self:this,__source:{fileName:_jsxFileName,lineNumber:132,columnNumber:8}},_awsAmplify.I18n.get('Sign Up'))),_react.default.createElement(_AmplifyUI.ErrorRow,{theme:theme,__self:this,__source:{fileName:_jsxFileName,lineNumber:140,columnNumber:7}},this.state.error)),_react.default.createElement(_AmplifyUI.SignedOutMessage,(0,_extends2.default)({},this.props,{__self:this,__source:{fileName:_jsxFileName,lineNumber:142,columnNumber:6}}))));}}]);return SignIn;}(_AuthPiece2.default);exports.default=SignIn;