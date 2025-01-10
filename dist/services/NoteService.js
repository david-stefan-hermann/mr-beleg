"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteService = void 0;
const Note_1 = require("../components/Note");
class NoteService {
    constructor() {
        this.notes = [];
    }
    initialize() {
        // Example note
        const note = new Note_1.Note('Hello AR!', { x: 0, y: 1, z: -3 });
        this.addNoteToScene(note);
    }
    addNoteToScene(note) {
        const scene = document.querySelector('a-scene');
        if (scene) {
            const noteElement = note.createElement();
            scene.appendChild(noteElement);
            this.notes.push(note);
        }
    }
}
exports.NoteService = NoteService;
