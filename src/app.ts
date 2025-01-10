import { NoteService } from './services/NoteService';

if (typeof document !== 'undefined') {
  const noteService = new NoteService();
  noteService.initialize();
}