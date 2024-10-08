# Angular-17
    "ace-builds": "^1.36.2",

    angular.json(scripts)
              "node_modules/ace-builds/src-min-noconflict/ace.js",
              "node_modules/ace-builds/src-min-noconflict/ext-language_tools.js"      


                                              <app-code-formatter [code]="codes.code"></app-code-formatter>

<div class="editor-container">
    <div #editor id="editor"></div>  <!-- The editor element -->
  </div>


  .editor-container {
    width: 100%;
    height: 500px;
    margin: 20px auto;
    position: relative;
    border: 1px solid #ddd;
  }
  
  #editor {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    font-size: 16px; /* Increase font size for better readability */
  }


  import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as prettier from 'prettier';

declare const ace: any;

@Component({
  selector: 'app-code-formatter',
  standalone: true,
  imports: [],
  templateUrl: './code-formatter.component.html',
  styleUrl: './code-formatter.component.scss'
})

export class CodeFormatterComponent {
  @Input() code: string | any;

  @ViewChild('editor', { static: false }) editor!: ElementRef;

  ngAfterViewInit() {
    if (this.editor) {
      const code = this.code.replace(/\s+/g, ' '); // Remove multiple whitespace characters with a single space

      const aceEditor = ace.edit(this.editor.nativeElement, {
        theme: 'ace/theme/monokai',  // Choose a color-coded theme
        mode: 'ace/mode/javascript', // Enable syntax highlighting for JavaScript
        value: this.code, // Use the input code
        autoScrollEditorIntoView: true,
        // maxLines: 20,  // Adjust the editor's height
        minLines: 10,
        fontSize: 16  // Set font size
      });
  
      // Enable additional settings (no diff or split editor)
      aceEditor.setOptions({
        enableBasicAutocompletion: false,  // Enable autocompletion
        enableLiveAutocompletion: false,   // Enable live autocompletion
        enableSnippets: true,             // Enable code snippets
        showPrintMargin: false,           // Disable print margin (if it was visible)
        highlightActiveLine: true         // Highlight active line
      });
  
      // Align code
      aceEditor.session.setUseSoftTabs(true); // Enable soft tabs
      aceEditor.session.setTabSize(4); // Set tab size to 4 spaces
  
      // Ensure no diff or split mode is active
      aceEditor.session.setUseWorker(false);  // Disable workers for highlighting
    } else {
      console.error('Editor element not found');
    }
  }
}
