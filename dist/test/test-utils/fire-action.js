function fireAction(reducer, currentState, type, payload) {
    if (payload === void 0) { payload = {}; }
    return reducer(currentState, {
        type: type,
        payload: payload,
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = fireAction;
//# sourceMappingURL=fire-action.js.map