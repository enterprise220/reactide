import React from 'react';
import TextEditor from './TextEditor.jsx'
import FileTree from './FileTree.jsx'

const {remote, ipcRenderer, dialog} = require('electron');


export default class App extends React.Component {
  constructor() {
    super();
  }

  openSim() {
    ipcRenderer.send('openSimulator')
  }

  render() {
    return (
      <ride-workspace className="scrollbars-visible-always">

        <ride-panel-container className="header"></ride-panel-container>

        <ride-pane-container>
          <ride-pane-axis className="horizontal">

            <ride-pane style={{ flexGrow: 0, flexBasis: '200px' }}>
              <FileTree />
            </ride-pane>

            <ride-pane>
              <TextEditor />
            </ride-pane>

            <ride-pane-resize-handle className="horizontal"></ride-pane-resize-handle>

            <ride-pane style={{ flexGrow: 0, flexBasis: '300px' }}>
              <ul className="list-inline tab-bar inset-panel">
                <li className="tab active">
                  <div className="title">Property Inspector</div>
                  <div className="close-icon"></div>
                </li>
              </ul>

              <div className="item-views">
                <div className="styleguide pane-item">
                  <header className="styleguide-header">
                    <h1>Header</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    <button className='btn' onClick={this.openSim}>Simulator</button>
                  </header>
                  <main className="styleguide-sections">
                    <section className="bordered">
                      <h1 className="section-heading">Controls Library</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                      <h3>Button Groups &amp; Selectors</h3>
                      <div className="control">
                        <div className="control-rendered">
                          <div className='block'>
                            <div className="control-wrap">
                              <div className="label">Sample</div>
                              <div className="controls">
                                <div className='btn-group'>
                                  <button className='btn'>One</button>
                                  <button className='btn selected'>Two</button>
                                  <button className='btn'>Three</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h3>Selectors</h3>
                      <div className="control">
                        <div className="control-rendered">
                          <div className='block'>
                            <div className="control-wrap">
                              <div className="label">Range</div>
                              <div className="controls"><input className='input-range' type='range' /></div>
                            </div>
                          </div>
                          <div className='block'>
                            <div className="control-wrap">
                              <div className="label">Number</div>
                              <div className="controls"><input className='input-number' type='number' min='1' max='10' placeholder='1-10' /></div>
                            </div>
                          </div>
                          <div className='block'>
                            <div className="control-wrap">
                              <div className="label">Color</div>
                              <div className="controls"><input className='input-color' type='color' value='#FF85FF' /></div>
                            </div>
                          </div>
                          <div className='block'>
                            <div className="control-wrap">
                              <div className="label">Selector</div>
                              <div className="controls"><select className='input-select'><option>Option 1</option><option>Option 2</option><option>Option 3</option></select></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h3>Booleans</h3>
                      <div className="control">
                        <div className="control-rendered">
                          <div className='block'>
                            <div className="control-wrap">
                              <div className="label">Checkbox</div>
                              <div className="controls"><input className='input-checkbox' type='checkbox' checked /></div>
                            </div>
                          </div>
                          <div className='block'>
                            <div className="control-wrap">
                              <div className="label">Toggle</div>
                              <div className="controls"><input className='input-toggle' type='checkbox' checked /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h3>Inputs Alternate</h3>
                      <div className="control">
                        <div className="control-rendered">
                          <div className='block'>
                            <div className="control-wrap">
                              <div className="label">Text Input</div>
                              <div className="controls">
                                <input className='input-text' type='text' placeholder='Text' />
                              </div>
                            </div>
                          </div>
                          <div className='block'>
                            <div className="control-wrap">
                              <div className="label">Search Input</div>
                              <div className="controls">
                                <input className='input-search' type='search' placeholder='Search' />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h3>Wide Inputs</h3>
                      <div className="control">
                        <div className="control-rendered">
                          <input className='input-text' type='text' placeholder='Text' />
                          <input className='input-search' type='search' placeholder='Search' />
                          <textarea className='input-textarea' placeholder='Text Area'></textarea>
                        </div>
                      </div>
                    </section>
                  </main>
                </div>
              </div>

            </ride-pane>

          </ride-pane-axis>
        </ride-pane-container>

      </ride-workspace>
    );
  }
}
