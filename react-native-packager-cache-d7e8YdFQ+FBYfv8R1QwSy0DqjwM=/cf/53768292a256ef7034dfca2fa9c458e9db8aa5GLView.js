'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class,
    _temp2,
    _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/node_modules/expo/src/GLView.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Constants = require('./Constants');

var Constants = babelHelpers.interopRequireWildcard(_Constants);
var GLView = (_temp2 = _class = function (_React$Component) {
  babelHelpers.inherits(GLView, _React$Component);

  function GLView() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, GLView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = GLView.__proto__ || Object.getPrototypeOf(GLView)).call.apply(_ref, [this].concat(args))), _this), _this._onSurfaceCreate = function (_ref2) {
      var exglCtxId = _ref2.nativeEvent.exglCtxId;

      var gl = getGl(exglCtxId);
      if (_this.props.onContextCreate) {
        _this.props.onContextCreate(gl);
      }
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(GLView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onContextCreate = _props.onContextCreate,
          msaaSamples = _props.msaaSamples,
          viewProps = babelHelpers.objectWithoutProperties(_props, ['onContextCreate', 'msaaSamples']);

      return _react2.default.createElement(
        _reactNative.View,
        babelHelpers.extends({}, viewProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }),
        _react2.default.createElement(GLView.NativeView, {
          style: { flex: 1, backgroundColor: 'transparent' },
          onSurfaceCreate: this._onSurfaceCreate,
          msaaSamples: _reactNative.Platform.OS === 'ios' ? msaaSamples : undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        })
      );
    }
  }]);
  return GLView;
}(_react2.default.Component), _class.propTypes = babelHelpers.extends({
  onContextCreate: _react.PropTypes.func,

  msaaSamples: _react.PropTypes.number

}, _reactNative.ViewPropTypes), _class.defaultProps = {
  msaaSamples: 4
}, _class.NativeView = (0, _reactNative.requireNativeComponent)('ExponentGLView', GLView, {
  nativeOnly: { onSurfaceCreate: true }
}), _temp2);
exports.default = GLView;


global.WebGLRenderingContext = function WebGLRenderingContext() {
  babelHelpers.classCallCheck(this, WebGLRenderingContext);
};

var idToObject = {};

global.WebGLObject = function () {
  function WebGLObject(id) {
    babelHelpers.classCallCheck(this, WebGLObject);

    if (idToObject[id]) {
      throw new Error('WebGL object with underlying EXGLObjectId \'' + id + '\' already exists!');
    }
    this.id = id;
  }

  babelHelpers.createClass(WebGLObject, [{
    key: 'toString',
    value: function toString() {
      return '[WebGLObject ' + this.id + ']';
    }
  }]);
  return WebGLObject;
}();

var wrapObject = function wrapObject(type, id) {
  var found = idToObject[id];
  if (found) {
    return found;
  }
  return idToObject[id] = new type(id);
};

global.WebGLBuffer = function (_WebGLObject) {
  babelHelpers.inherits(WebGLBuffer, _WebGLObject);

  function WebGLBuffer() {
    babelHelpers.classCallCheck(this, WebGLBuffer);
    return babelHelpers.possibleConstructorReturn(this, (WebGLBuffer.__proto__ || Object.getPrototypeOf(WebGLBuffer)).apply(this, arguments));
  }

  return WebGLBuffer;
}(WebGLObject);

global.WebGLFramebuffer = function (_WebGLObject2) {
  babelHelpers.inherits(WebGLFramebuffer, _WebGLObject2);

  function WebGLFramebuffer() {
    babelHelpers.classCallCheck(this, WebGLFramebuffer);
    return babelHelpers.possibleConstructorReturn(this, (WebGLFramebuffer.__proto__ || Object.getPrototypeOf(WebGLFramebuffer)).apply(this, arguments));
  }

  return WebGLFramebuffer;
}(WebGLObject);

global.WebGLProgram = function (_WebGLObject3) {
  babelHelpers.inherits(WebGLProgram, _WebGLObject3);

  function WebGLProgram() {
    babelHelpers.classCallCheck(this, WebGLProgram);
    return babelHelpers.possibleConstructorReturn(this, (WebGLProgram.__proto__ || Object.getPrototypeOf(WebGLProgram)).apply(this, arguments));
  }

  return WebGLProgram;
}(WebGLObject);

global.WebGLRenderbuffer = function (_WebGLObject4) {
  babelHelpers.inherits(WebGLRenderbuffer, _WebGLObject4);

  function WebGLRenderbuffer() {
    babelHelpers.classCallCheck(this, WebGLRenderbuffer);
    return babelHelpers.possibleConstructorReturn(this, (WebGLRenderbuffer.__proto__ || Object.getPrototypeOf(WebGLRenderbuffer)).apply(this, arguments));
  }

  return WebGLRenderbuffer;
}(WebGLObject);

global.WebGLShader = function (_WebGLObject5) {
  babelHelpers.inherits(WebGLShader, _WebGLObject5);

  function WebGLShader() {
    babelHelpers.classCallCheck(this, WebGLShader);
    return babelHelpers.possibleConstructorReturn(this, (WebGLShader.__proto__ || Object.getPrototypeOf(WebGLShader)).apply(this, arguments));
  }

  return WebGLShader;
}(WebGLObject);

global.WebGLTexture = function (_WebGLObject6) {
  babelHelpers.inherits(WebGLTexture, _WebGLObject6);

  function WebGLTexture() {
    babelHelpers.classCallCheck(this, WebGLTexture);
    return babelHelpers.possibleConstructorReturn(this, (WebGLTexture.__proto__ || Object.getPrototypeOf(WebGLTexture)).apply(this, arguments));
  }

  return WebGLTexture;
}(WebGLObject);

global.WebGLUniformLocation = function WebGLUniformLocation(id) {
  babelHelpers.classCallCheck(this, WebGLUniformLocation);

  this.id = id;
};

global.WebGLActiveInfo = function WebGLActiveInfo(obj) {
  babelHelpers.classCallCheck(this, WebGLActiveInfo);

  babelHelpers.extends(this, obj);
};

global.WebGLShaderPrecisionFormat = function WebGLShaderPrecisionFormat(obj) {
  babelHelpers.classCallCheck(this, WebGLShaderPrecisionFormat);

  babelHelpers.extends(this, obj);
};

var wrapMethods = function wrapMethods(gl) {
  var _getParameterTypes;

  var wrap = function wrap(methodNames, wrapper) {
    return (Array.isArray(methodNames) ? methodNames : [methodNames]).forEach(function (methodName) {
      return gl[methodName] = wrapper(gl[methodName]);
    });
  };

  var getParameterTypes = (_getParameterTypes = {}, babelHelpers.defineProperty(_getParameterTypes, gl.ARRAY_BUFFER_BINDING, WebGLBuffer), babelHelpers.defineProperty(_getParameterTypes, gl.ELEMENT_ARRAY_BUFFER_BINDING, WebGLBuffer), babelHelpers.defineProperty(_getParameterTypes, gl.CURRENT_PROGRAM, WebGLProgram), babelHelpers.defineProperty(_getParameterTypes, gl.FRAMEBUFFER_BINDING, WebGLFramebuffer), babelHelpers.defineProperty(_getParameterTypes, gl.RENDERBUFFER_BINDING, WebGLRenderbuffer), babelHelpers.defineProperty(_getParameterTypes, gl.TEXTURE_BINDING_2D, WebGLTexture), babelHelpers.defineProperty(_getParameterTypes, gl.TEXTURE_BINDING_CUBE_MAP, WebGLTexture), _getParameterTypes);
  wrap('getParameter', function (orig) {
    return function (pname) {
      var ret = orig.call(gl, pname);
      if (pname === gl.VERSION) {
        ret = 'WebGL 1.0 (Expo-' + _reactNative.Platform.OS + '-' + Constants.expoVersion + ') (' + ret + ')';
      }
      var type = getParameterTypes[pname];
      return type ? wrapObject(type, ret) : ret;
    };
  });

  wrap('bindBuffer', function (orig) {
    return function (target, buffer) {
      return orig.call(gl, target, buffer && buffer.id);
    };
  });
  wrap('createBuffer', function (orig) {
    return function () {
      return wrapObject(WebGLBuffer, orig.call(gl));
    };
  });
  wrap('deleteBuffer', function (orig) {
    return function (buffer) {
      return orig.call(gl, buffer && buffer.id);
    };
  });
  wrap('isBuffer', function (orig) {
    return function (buffer) {
      return buffer instanceof WebGLBuffer && orig.call(gl, buffer.id);
    };
  });

  wrap('bindFramebuffer', function (orig) {
    return function (target, framebuffer) {
      return orig.call(gl, target, framebuffer && framebuffer.id);
    };
  });
  wrap('createFramebuffer', function (orig) {
    return function () {
      return wrapObject(WebGLFramebuffer, orig.call(gl));
    };
  });
  wrap('deleteFramebuffer', function (orig) {
    return function (framebuffer) {
      return orig.call(gl, framebuffer && framebuffer.id);
    };
  });
  wrap('framebufferRenderbuffer', function (orig) {
    return function (target, attachment, rbtarget, rb) {
      return orig.call(gl, target, attachment, rbtarget, rb && rb.id);
    };
  });
  wrap('framebufferTexture2D', function (orig) {
    return function (target, attachment, textarget, tex, level) {
      return orig.call(gl, target, attachment, textarget, tex && tex.id, level);
    };
  });
  wrap('isFramebuffer', function (orig) {
    return function (framebuffer) {
      return framebuffer instanceof WebGLFramebuffer && orig.call(gl, framebuffer.id);
    };
  });

  wrap('bindRenderbuffer', function (orig) {
    return function (target, renderbuffer) {
      return orig.call(gl, target, renderbuffer && renderbuffer.id);
    };
  });
  wrap('createRenderbuffer', function (orig) {
    return function () {
      return wrapObject(WebGLRenderbuffer, orig.call(gl));
    };
  });
  wrap('deleteRenderbuffer', function (orig) {
    return function (renderbuffer) {
      return orig.call(gl, renderbuffer && renderbuffer.id);
    };
  });
  wrap('isRenderbuffer', function (orig) {
    return function (renderbuffer) {
      return renderbuffer instanceof WebGLRenderbuffer && orig.call(gl, renderbuffer.id);
    };
  });

  wrap('bindTexture', function (orig) {
    return function (target, texture) {
      return orig.call(gl, target, texture && texture.id);
    };
  });
  wrap('createTexture', function (orig) {
    return function () {
      return wrapObject(WebGLTexture, orig.call(gl));
    };
  });
  wrap('deleteTexture', function (orig) {
    return function (texture) {
      return orig.call(gl, texture && texture.id);
    };
  });
  wrap('isTexture', function (orig) {
    return function (texture) {
      return texture instanceof WebGLTexture && orig.call(gl, texture.id);
    };
  });

  wrap('attachShader', function (orig) {
    return function (program, shader) {
      return orig.call(gl, program && program.id, shader && shader.id);
    };
  });
  wrap('bindAttribLocation', function (orig) {
    return function (program, index, name) {
      return orig.call(gl, program && program.id, index, name);
    };
  });
  wrap('compileShader', function (orig) {
    return function (shader) {
      return orig.call(gl, shader && shader.id);
    };
  });
  wrap('createProgram', function (orig) {
    return function () {
      return wrapObject(WebGLProgram, orig.call(gl));
    };
  });
  wrap('createShader', function (orig) {
    return function (type) {
      return wrapObject(WebGLShader, orig.call(gl, type));
    };
  });
  wrap('deleteProgram', function (orig) {
    return function (program) {
      return orig.call(gl, program && program.id);
    };
  });
  wrap('deleteShader', function (orig) {
    return function (shader) {
      return orig.call(gl, shader && shader.id);
    };
  });
  wrap('detachShader', function (orig) {
    return function (program, shader) {
      return orig.call(gl, program && program.id, shader && shader.id);
    };
  });
  wrap('getAttachedShaders', function (orig) {
    return function (program) {
      return orig.call(gl, program && program.id).map(function (id) {
        return wrapObject(WebGLShader, id);
      });
    };
  });
  wrap('getProgramParameter', function (orig) {
    return function (program, pname) {
      return orig.call(gl, program && program.id, pname);
    };
  });
  wrap('getProgramInfoLog', function (orig) {
    return function (program) {
      return orig.call(gl, program && program.id);
    };
  });
  wrap('getShaderParameter', function (orig) {
    return function (shader, pname) {
      return orig.call(gl, shader && shader.id, pname);
    };
  });
  wrap('getShaderPrecisionFormat', function (orig) {
    return function (shadertype, precisiontype) {
      return new WebGLShaderPrecisionFormat(orig.call(gl, shadertype, precisiontype));
    };
  });
  wrap('getShaderInfoLog', function (orig) {
    return function (shader) {
      return orig.call(gl, shader && shader.id);
    };
  });
  wrap('getShaderSource', function (orig) {
    return function (shader) {
      return orig.call(gl, shader && shader.id);
    };
  });
  wrap('linkProgram', function (orig) {
    return function (program) {
      return orig.call(gl, program && program.id);
    };
  });
  wrap('shaderSource', function (orig) {
    return function (shader, source) {
      return orig.call(gl, shader && shader.id, source);
    };
  });
  wrap('useProgram', function (orig) {
    return function (program) {
      return orig.call(gl, program && program.id);
    };
  });
  wrap('validateProgram', function (orig) {
    return function (program) {
      return orig.call(gl, program && program.id);
    };
  });
  wrap('isShader', function (orig) {
    return function (shader) {
      return shader instanceof WebGLShader && orig.call(gl, shader.id);
    };
  });
  wrap('isProgram', function (orig) {
    return function (program) {
      return program instanceof WebGLProgram && orig.call(gl, program.id);
    };
  });

  wrap('getActiveAttrib', function (orig) {
    return function (program, index) {
      return new WebGLActiveInfo(orig.call(gl, program && program.id, index));
    };
  });
  wrap('getActiveUniform', function (orig) {
    return function (program, index) {
      return new WebGLActiveInfo(orig.call(gl, program && program.id, index));
    };
  });
  wrap('getAttribLocation', function (orig) {
    return function (program, name) {
      return orig.call(gl, program && program.id, name);
    };
  });
  wrap('getUniform', function (orig) {
    return function (program, location) {
      return orig.call(gl, program && program.id, location && location.id);
    };
  });
  wrap('getUniformLocation', function (orig) {
    return function (program, name) {
      return new WebGLUniformLocation(orig.call(gl, program && program.id, name));
    };
  });
  wrap(['uniform1f', 'uniform1i'], function (orig) {
    return function (loc, x) {
      return orig.call(gl, loc && loc.id, x);
    };
  });
  wrap(['uniform2f', 'uniform2i'], function (orig) {
    return function (loc, x, y) {
      return orig.call(gl, loc && loc.id, x, y);
    };
  });
  wrap(['uniform3f', 'uniform3i'], function (orig) {
    return function (loc, x, y, z) {
      return orig.call(gl, loc && loc.id, x, y, z);
    };
  });
  wrap(['uniform4f', 'uniform4i'], function (orig) {
    return function (loc, x, y, z, w) {
      return orig.call(gl, loc && loc.id, x, y, z, w);
    };
  });
  wrap(['uniform1fv', 'uniform2fv', 'uniform3fv', 'uniform4fv'], function (orig) {
    return function (loc, val) {
      return orig.call(gl, loc && loc.id, new Float32Array(val));
    };
  });
  wrap(['uniform1iv', 'uniform2iv', 'uniform3iv', 'uniform4iv'], function (orig) {
    return function (loc, val) {
      return orig.call(gl, loc && loc.id, new Int32Array(val));
    };
  });
  wrap(['uniformMatrix2fv', 'uniformMatrix3fv', 'uniformMatrix4fv'], function (orig) {
    return function (loc, transpose, val) {
      return orig.call(gl, loc && loc.id, transpose, new Float32Array(val));
    };
  });
  wrap(['vertexAttrib1fv', 'vertexAttrib2fv', 'vertexAttrib3fv', 'vertexAttrib4fv'], function (orig) {
    return function (index, val) {
      return orig.call(gl, index, new Float32Array(val));
    };
  });
};

var getGl = function getGl(exglCtxId) {
  var gl = global.__EXGLContexts[exglCtxId];
  gl.__exglCtxId = exglCtxId;
  delete global.__EXGLContexts[exglCtxId];
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(gl, global.WebGLRenderingContext.prototype);
  } else {
    gl.__proto__ = global.WebGLRenderingContext.prototype;
  }

  wrapMethods(gl);

  gl.canvas = null;

  var viewport = gl.getParameter(gl.VIEWPORT);
  gl.drawingBufferWidth = viewport[2];
  gl.drawingBufferHeight = viewport[3];

  var enableLogging = false;
  Object.defineProperty(gl, 'enableLogging', {
    configurable: true,
    get: function get() {
      return enableLogging;
    },
    set: function set(enable) {
      if (enable === enableLogging) {
        return;
      }
      if (enable) {
        Object.keys(gl).forEach(function (key) {
          if (typeof gl[key] === 'function') {
            var original = gl[key];
            gl[key] = function () {
              for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              console.log('EXGL: ' + key + '(' + args.join(', ') + ')');
              var r = original.apply(gl, args);
              console.log('EXGL:    = ' + r);
              return r;
            };
            gl[key].original = original;
          }
        });
      } else {
        Object.keys(gl).forEach(function (key) {
          if (typeof gl[key] === 'function' && gl[key].original) {
            gl[key] = gl[key].original;
          }
        });
      }
      enableLogging = enable;
    }
  });

  return gl;
};