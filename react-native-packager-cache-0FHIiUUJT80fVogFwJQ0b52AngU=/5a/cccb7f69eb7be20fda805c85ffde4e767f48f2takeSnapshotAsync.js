Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var RNViewShot = _reactNative.NativeModules.RNViewShot;

exports.default = function takeSnapshotAsync(view, options) {
  var node;
  return regeneratorRuntime.async(function takeSnapshotAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(typeof view !== 'number')) {
            _context.next = 5;
            break;
          }

          node = (0, _reactNative.findNodeHandle)(view);

          if (node) {
            _context.next = 4;
            break;
          }

          return _context.abrupt('return', Promise.reject(new Error('findNodeHandle failed to resolve view=' + String(view))));

        case 4:
          view = node;

        case 5:
          return _context.abrupt('return', RNViewShot.takeSnapshot(view, options));

        case 6:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
};