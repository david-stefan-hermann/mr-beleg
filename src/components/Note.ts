export class Note {
    constructor(public content: string, public position: { x: number, y: number, z: number }) {}
  
    createElement(): HTMLElement {
      const noteElement = document.createElement('a-text');
      noteElement.setAttribute('value', this.content);
      noteElement.setAttribute('position', `${this.position.x} ${this.position.y} ${this.position.z}`);
      noteElement.setAttribute('color', '#FFF');
      return noteElement;
    }
  }