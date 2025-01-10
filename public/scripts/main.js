import { NoteService } from '../../src/services/NoteService';

const noteService = new NoteService();

document.addEventListener('DOMContentLoaded', () => {
  noteService.initialize();
});