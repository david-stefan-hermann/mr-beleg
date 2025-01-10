"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NoteService_1 = require("./services/NoteService");
if (typeof document !== 'undefined') {
    const noteService = new NoteService_1.NoteService();
    noteService.initialize();
}
