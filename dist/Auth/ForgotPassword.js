var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _awsAmplify=require("aws-amplify");var _AmplifyUI=require("../AmplifyUI");var _AuthPiece2=_interopRequireDefault(require("./AuthPiece"));var _AmplifyTestIDs=_interopRequireDefault(require("../AmplifyTestIDs"));var _Utils=require("../Utils");var _jsxFileName="C:\\ws\\revu\\revu-amplify-js\\packages\\aws-amplify-react-native\\src\\Auth\\ForgotPassword.tsx";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var logger=new _awsAmplify.Logger('ForgotPassword');var ForgotPassword=function(_AuthPiece){(0,_inherits2.default)(ForgotPassword,_AuthPiece);var _super=_createSuper(ForgotPassword);function ForgotPassword(props){var _this;(0,_classCallCheck2.default)(this,ForgotPassword);_this=_super.call(this,props);_this._validAuthStates=['forgotPassword'];_this.state={delivery:null};_this.send=_this.send.bind((0,_assertThisInitialized2.default)(_this));_this.submit=_this.submit.bind((0,_assertThisInitialized2.default)(_this));return _this;}(0,_createClass2.default)(ForgotPassword,[{key:"send",value:function send(){var _this2=this;var username=this.getUsernameFromInput();if(!username){this.error('Username cannot be empty');return;}_awsAmplify.Auth.forgotPassword(username).then(function(data){logger.debug(data);_this2.setState({delivery:data.CodeDeliveryDetails});}).catch(function(err){return _this2.error(err);});}},{key:"submit",value:function submit(){var _this3=this;var _this$state=this.state,code=_this$state.code,password=_this$state.password;var username=this.getUsernameFromInput();_awsAmplify.Auth.forgotPasswordSubmit(username,code,password).then(function(data){logger.debug(data);_this3.changeState('signIn');}).catch(function(err){return _this3.error(err);});}},{key:"forgotBody",value:function forgotBody(theme){return _react.default.createElement(_reactNative.View,{style:theme.sectionBody,__self:this,__source:{fileName:_jsxFileName,lineNumber:92,columnNumber:4}},this.renderUsernameField(theme),_react.default.createElement(_AmplifyUI.AmplifyButton,(0,_extends2.default)({text:_awsAmplify.I18n.get('Send').toUpperCase(),theme:theme,onPress:this.send,disabled:!this.getUsernameFromInput()},(0,_Utils.setTestId)(_AmplifyTestIDs.default.AUTH.SEND_BUTTON),{__self:this,__source:{fileName:_jsxFileName,lineNumber:94,columnNumber:5}})));}},{key:"submitBody",value:function submitBody(theme){var _this4=this;return _react.default.createElement(_reactNative.View,{style:theme.sectionBody,__self:this,__source:{fileName:_jsxFileName,lineNumber:107,columnNumber:4}},_react.default.createElement(_AmplifyUI.FormField,(0,_extends2.default)({theme:theme,onChangeText:function onChangeText(text){return _this4.setState({code:text});},label:_awsAmplify.I18n.get('Confirmation Code'),placeholder:_awsAmplify.I18n.get('Enter your confirmation code'),required:true},(0,_Utils.setTestId)(_AmplifyTestIDs.default.AUTH.CONFIRMATION_CODE_INPUT),{__self:this,__source:{fileName:_jsxFileName,lineNumber:108,columnNumber:5}})),_react.default.createElement(_AmplifyUI.FormField,(0,_extends2.default)({theme:theme,onChangeText:function onChangeText(text){return _this4.setState({password:text});},label:_awsAmplify.I18n.get('Password'),placeholder:_awsAmplify.I18n.get('Enter your new password'),secureTextEntry:true,required:true},(0,_Utils.setTestId)(_AmplifyTestIDs.default.AUTH.PASSWORD_INPUT),{__self:this,__source:{fileName:_jsxFileName,lineNumber:116,columnNumber:5}})),_react.default.createElement(_AmplifyUI.AmplifyButton,(0,_extends2.default)({text:_awsAmplify.I18n.get('Submit'),theme:theme,onPress:this.submit,disabled:!(this.state.code&&this.state.password)},(0,_Utils.setTestId)(_AmplifyTestIDs.default.AUTH.SUBMIT_BUTTON),{__self:this,__source:{fileName:_jsxFileName,lineNumber:125,columnNumber:5}})));}},{key:"showComponent",value:function showComponent(theme){var _this5=this;return _react.default.createElement(_AmplifyUI.Wrapper,{__self:this,__source:{fileName:_jsxFileName,lineNumber:138,columnNumber:4}},_react.default.createElement(_reactNative.View,{style:theme.section,__self:this,__source:{fileName:_jsxFileName,lineNumber:139,columnNumber:5}},_react.default.createElement(_reactNative.View,{__self:this,__source:{fileName:_jsxFileName,lineNumber:140,columnNumber:6}},_react.default.createElement(_AmplifyUI.Header,{theme:theme,testID:_AmplifyTestIDs.default.AUTH.FORGOT_PASSWORD_TEXT,__self:this,__source:{fileName:_jsxFileName,lineNumber:141,columnNumber:7}},_awsAmplify.I18n.get('Reset your password')),_react.default.createElement(_reactNative.View,{style:theme.sectionBody,__self:this,__source:{fileName:_jsxFileName,lineNumber:144,columnNumber:7}},!this.state.delivery&&this.forgotBody(theme),this.state.delivery&&this.submitBody(theme)),_react.default.createElement(_reactNative.View,{style:theme.sectionFooter,__self:this,__source:{fileName:_jsxFileName,lineNumber:148,columnNumber:7}},_react.default.createElement(_AmplifyUI.LinkCell,{theme:theme,onPress:function onPress(){return _this5.changeState('signIn');},testID:_AmplifyTestIDs.default.AUTH.BACK_TO_SIGN_IN_BUTTON,__self:this,__source:{fileName:_jsxFileName,lineNumber:149,columnNumber:8}},_awsAmplify.I18n.get('Back to Sign In'))),_react.default.createElement(_AmplifyUI.ErrorRow,{theme:theme,__self:this,__source:{fileName:_jsxFileName,lineNumber:157,columnNumber:7}},this.state.error)),_react.default.createElement(_AmplifyUI.SignedOutMessage,(0,_extends2.default)({},this.props,{__self:this,__source:{fileName:_jsxFileName,lineNumber:159,columnNumber:6}}))));}}],[{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(props,state){var username=props.authData;if(username&&!state.username){return{username:username};}return null;}}]);return ForgotPassword;}(_AuthPiece2.default);exports.default=ForgotPassword;