var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _awsAmplify=require("aws-amplify");var _AmplifyTheme=_interopRequireDefault(require("../AmplifyTheme"));var _AmplifyMessageMap=_interopRequireDefault(require("../AmplifyMessageMap"));var _AmplifyUI=require("../AmplifyUI");var _AmplifyTestIDs=_interopRequireDefault(require("../AmplifyTestIDs"));var _Utils=require("../Utils");var _jsxFileName="C:\\ws\\revu\\aws-amplify-react-native\\src\\Auth\\AuthPiece.tsx";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var logger=new _awsAmplify.Logger('AuthPiece');var labelMap={email:'Email',phone_number:'Phone Number',username:'Username'};var AuthPiece=function(_React$Component){(0,_inherits2.default)(AuthPiece,_React$Component);var _super=_createSuper(AuthPiece);function AuthPiece(props){var _this;(0,_classCallCheck2.default)(this,AuthPiece);_this=_super.call(this,props);_this._isHidden=true;_this._validAuthStates=[];_this.changeState=_this.changeState.bind((0,_assertThisInitialized2.default)(_this));_this.error=_this.error.bind((0,_assertThisInitialized2.default)(_this));_this.getUsernameFromInput=_this.getUsernameFromInput.bind((0,_assertThisInitialized2.default)(_this));_this.renderUsernameField=_this.renderUsernameField.bind((0,_assertThisInitialized2.default)(_this));return _this;}(0,_createClass2.default)(AuthPiece,[{key:"getUsernameFromInput",value:function getUsernameFromInput(){var _this$props$usernameA=this.props.usernameAttributes,usernameAttributes=_this$props$usernameA===void 0?'username':_this$props$usernameA;switch(usernameAttributes){case'email':return this.state.email;case'phone_number':return this.state.phone_number;default:return this.state.username;}}},{key:"renderUsernameField",value:function renderUsernameField(theme){var _this2=this;var value=this.getUsernameFromInput();var _this$props$usernameA2=this.props.usernameAttributes,usernameAttributes=_this$props$usernameA2===void 0?[]:_this$props$usernameA2;if(usernameAttributes==='email'){return _react.default.createElement(_AmplifyUI.FormField,(0,_extends2.default)({theme:theme,onChangeText:function onChangeText(text){return _this2.setState({email:text});},label:_awsAmplify.I18n.get('Email'),placeholder:_awsAmplify.I18n.get('Enter your email'),required:true},(0,_Utils.setTestId)(_AmplifyTestIDs.default.AUTH.EMAIL_INPUT),{value:value,__self:this,__source:{fileName:_jsxFileName,lineNumber:87,columnNumber:5}}));}else if(usernameAttributes==='phone_number'){return _react.default.createElement(_AmplifyUI.PhoneField,(0,_extends2.default)({theme:theme,key:'phone_number',onChangeText:function onChangeText(text){return _this2.setState({phone_number:text});},label:_awsAmplify.I18n.get('Phone Number'),placeholder:_awsAmplify.I18n.get('Enter your phone number'),keyboardType:"phone-pad",required:true},(0,_Utils.setTestId)(_AmplifyTestIDs.default.AUTH.PHONE_INPUT),{value:value,__self:this,__source:{fileName:_jsxFileName,lineNumber:99,columnNumber:5}}));}else{return _react.default.createElement(_AmplifyUI.FormField,(0,_extends2.default)({theme:theme,onChangeText:function onChangeText(text){return _this2.setState({username:text});},label:_awsAmplify.I18n.get(this.getUsernameLabel()),placeholder:_awsAmplify.I18n.get('Enter your username'),required:true},(0,_Utils.setTestId)(_AmplifyTestIDs.default.AUTH.USERNAME_INPUT),{value:value,__self:this,__source:{fileName:_jsxFileName,lineNumber:113,columnNumber:5}}));}}},{key:"getUsernameLabel",value:function getUsernameLabel(){var _this$props$usernameA3=this.props.usernameAttributes,usernameAttributes=_this$props$usernameA3===void 0?'username':_this$props$usernameA3;return labelMap[usernameAttributes]||usernameAttributes;}},{key:"changeState",value:function changeState(state,data){if(this.props.onStateChange){this.props.onStateChange(state,data);}}},{key:"checkContact",value:function checkContact(user){var _this3=this;_awsAmplify.Auth.verifiedContact(user).then(function(data){logger.debug('verified user attributes',data);if(!_awsAmplify.JS.isEmpty(data.verified)){_this3.changeState('signedIn',user);}else{user=(0,_extends2.default)(user,data);_this3.changeState('verifyContact',user);}});}},{key:"error",value:function error(err){logger.debug(err);var msg='';if(typeof err==='string'){msg=err;}else if(err.message){msg=err.message;}else{msg=JSON.stringify(err);}var map=this.props.errorMessage||this.props.messageMap||_AmplifyMessageMap.default;msg=typeof map==='string'?map:map(msg);this.setState({error:msg});_reactNative.Keyboard.dismiss();}},{key:"render",value:function render(){if(!this._validAuthStates.includes(this.props.authState)){this._isHidden=true;return null;}if(this._isHidden){var track=this.props.track;if(track)track();}this._isHidden=false;return this.showComponent(this.props.theme||_AmplifyTheme.default);}},{key:"showComponent",value:function showComponent(theme){throw"You must implement showComponent(theme) and don't forget to set this._validAuthStates.";}}]);return AuthPiece;}(_react.default.Component);exports.default=AuthPiece;