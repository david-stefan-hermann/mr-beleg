"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
class Note {
    constructor(content, position) {
        this.content = content;
        this.position = position;
    }
    createElement() {
        const noteElement = document.createElement('a-text');
        noteElement.setAttribute('value', this.content);
        noteElement.setAttribute('position', `${this.position.x} ${this.position.y} ${this.position.z}`);
        return noteElement;
    }
}
exports.Note = Note;
