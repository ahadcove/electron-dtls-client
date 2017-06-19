"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TLSTypes = require("../TLS/TLSTypes");
var TLSStruct_1 = require("../TLS/TLSStruct");
var Cookie = (function (_super) {
    __extends(Cookie, _super);
    function Cookie(value) {
        if (value === void 0) { value = []; }
        var _this = _super.call(this, Cookie.__spec) || this;
        _this.value = value;
        return _this;
    }
    return Cookie;
}(TLSStruct_1.TLSStruct));
Cookie.__spec = {
    value: new TLSTypes.Vector("uint8", 0, Math.pow(2, 8) - 1)
};
exports.Cookie = Cookie;
//# sourceMappingURL=Cookie.js.map