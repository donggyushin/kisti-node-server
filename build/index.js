'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 3000;
var listening = function listening() {
    console.log('Example app listening on port ' + PORT);
};

_app2.default.listen(PORT, listening);