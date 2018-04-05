import React from 'react';
import TabContainer from './TabContainer.jsx';
import { ipcRenderer } from 'electron';

export default class TextEditor extends React.Component {
  constructor(props) {
    super();
    this.state = {
      editor: null
    }
    ipcRenderer.on('saveFile', (err, arg) => {
      console.log(this.props);
      console.log(this.state.editor);
    })
  }
  componentDidMount() {
    let amdRequire = global.require('monaco-editor/min/vs/loader.js').require;
    var path = require('path');
    var fs = require('fs');
    var file = fs.readFileSync(this.props.tab.path, { encoding: 'utf8' });
    function uriFromPath(_path) {
      var pathName = path.resolve(_path).replace(/\\/g, '/');
      if (pathName.length > 0 && pathName.charAt(0) !== '/') {
        pathName = '/' + pathName;
      }
      return encodeURI('file://' + pathName);
    }
    amdRequire.config({
      baseUrl: uriFromPath(path.resolve(__dirname, '../node_modules/monaco-editor/min'))
    });
    // workaround monaco-css not understanding the environment
    self.module = undefined;
    // workaround monaco-typescript not understanding the environment
    self.process.browser = true;
    const id = this.props.id;
    var editor;
    amdRequire(['vs/editor/editor.main'], () => {
      editor = monaco.editor.create(document.getElementById('e' + id), {
        value: file,
        language: 'javascript'
      });
      this.setState({ editor }, () =>{console.log('state set')})
    });
  }
  render() {
    return (
      <div className="item-views" style={{ display: (this.props.id === this.props.activeTab ? 'block' : 'none') }}>
        <div className="styleguide pane-item">
          <div
            className="editor-container"
            id={'e' + this.props.id}
            style={{ height: '100%', width: '100%' }}
          ></div>
        </div>
      </div>
    );
  }
}