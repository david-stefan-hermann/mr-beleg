import { Note } from '../components/Note';

export class NoteService {
  private notes: Note[] = [];

  initialize() {
    // Example note
    const note = new Note('Hello AR!', { x: 0, y: 1, z: -3 });
    this.addNoteToScene(note);
  }

  addNoteToScene(note: Note) {
    const scene = document.querySelector('a-scene');
    if (scene) {
      const noteElement = note.createElement();
      scene.appendChild(noteElement);
      this.notes.push(note);
    }
  }
}