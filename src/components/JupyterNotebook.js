// src/components/JupyterNotebook.js
import React from 'react';
import { Notebook } from 'nbviewer-react';

const JupyterNotebook = ({ notebookUrl }) => {
  return (
    <div>
      <Notebook path={notebookUrl} />
    </div>
  );
};

export default JupyterNotebook;
