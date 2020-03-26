import { FieldState } from "./field.js";

export function render(state) {
  return renderTable(state.board);
}

function renderTable(board) {
  return `<table>${board.map(renderRow).join("")}</table>`;  
}

function renderRow(row) {
  return `<tr>${row.map(renderField).join("")}</tr>`;
}

function renderField(field) {
  if (field.state === FieldState.REVEALED) {
    return `
      <td>${field.isMine ? `💣` : field.neighborCount}</td>
    `;
  } else {
    return `
      <td>
        <button>${field.state === FieldState.FLAGGED ? `🏳‍🌈` : ``}</button>
      </td>
    `;
  }
}