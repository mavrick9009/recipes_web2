"use strict";
var User = (function () {
    function User(userInfo) {
        if (typeof userInfo == "undefined" || userInfo == null) {
            userInfo = { id: null, first_name: null, last_name: null, email: null, token: null };
        }
        this.id = userInfo.id || null;
        this.first_name = userInfo.first_name || null;
        this.last_name = userInfo.last_name || null;
        this.email = userInfo.email || null;
        this.token = userInfo.token || null;
    }
    User.prototype.exists = function () {
        if (this.id) {
            return true;
        }
        return false;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map