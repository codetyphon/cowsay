"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactCliRenderer = require("react-cli-renderer");

var _reactCliRenderer2 = _interopRequireDefault(_reactCliRenderer);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

var _mqtt = require("mqtt");

var _mqtt2 = _interopRequireDefault(_mqtt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyReactCLIApp = function (_React$Component) {
  _inherits(MyReactCLIApp, _React$Component);

  function MyReactCLIApp() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyReactCLIApp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyReactCLIApp.__proto__ || Object.getPrototypeOf(MyReactCLIApp)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      say: 'loading'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyReactCLIApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var that = this;
      var client = _mqtt2.default.connect('mqtt://mqtt.eclipse.org');

      client.on('connect', function () {
        client.subscribe('cowsay', function (err) {
          if (!err) {
            client.publish('cowsay', 'Hello mqtt');
          }
        });
      });

      client.on('message', function (topic, message) {
        that.setState({ say: message.toString() });
        // client.end()
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactCliRenderer.Section,
        { border: { horizontal: "-", vertical: "|" }, align: "center" },
        _react2.default.createElement(
          _reactCliRenderer.Section,
          { align: "left" },
          _chalk2.default.black("----------"),
          _chalk2.default.yellow("" + this.state.say),
          _react2.default.createElement("br", null),
          _chalk2.default.black("----------------"),
          _chalk2.default.yellow("\\"),
          _chalk2.default.black("--"),
          _chalk2.default.yellow("^__^"),
          _react2.default.createElement("br", null),
          _chalk2.default.black("-----------------"),
          _chalk2.default.yellow("\\  (oo)\\_______"),
          _react2.default.createElement("br", null),
          _chalk2.default.black("-------------------"),
          _chalk2.default.yellow("(__)\\"),
          _chalk2.default.black("-------"),
          _chalk2.default.yellow(")\\/\\"),
          _react2.default.createElement("br", null),
          _chalk2.default.black("-----------------------"),
          _chalk2.default.yellow("||----w |"),
          _react2.default.createElement("br", null),
          _chalk2.default.black("-----------------------"),
          _chalk2.default.yellow("||"),
          _chalk2.default.black("-----"),
          _chalk2.default.yellow("||"),
          _react2.default.createElement("br", null)
        )
      );
    }
  }]);

  return MyReactCLIApp;
}(_react2.default.Component);

(0, _reactCliRenderer2.default)(_react2.default.createElement(MyReactCLIApp, null));