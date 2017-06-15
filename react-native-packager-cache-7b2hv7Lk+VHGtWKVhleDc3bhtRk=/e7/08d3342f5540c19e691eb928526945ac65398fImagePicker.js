Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.launchImageLibraryAsync = launchImageLibraryAsync;
exports.launchCameraAsync = launchCameraAsync;

var _reactNative = require('react-native');

var ExponentImagePicker = _reactNative.NativeModules.ExponentImagePicker;
function launchImageLibraryAsync(options) {
  return regeneratorRuntime.async(function launchImageLibraryAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!options || typeof options !== 'object') {
            options = {};
          }
          return _context.abrupt('return', ExponentImagePicker.launchImageLibraryAsync(options));

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
}

function launchCameraAsync(options) {
  return regeneratorRuntime.async(function launchCameraAsync$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!options || typeof options !== 'object') {
            options = {};
          }
          return _context2.abrupt('return', ExponentImagePicker.launchCameraAsync(options));

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, null, this);
}