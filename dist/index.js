"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("@geckos.io/server"));
const io = server_1.default();
io.onConnection((channel) => {
    channel.on('message', (data) => {
        console.log('data ----->', data);
        channel.emit('test', Object.assign(Object.assign({}, data), { serverDate: new Date().toISOString() }));
    });
});
io.listen();
//# sourceMappingURL=index.js.map