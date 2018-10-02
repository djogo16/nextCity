import React, { Component } from 'react';
import Layout from "../src/Components/Layout/Layout";
import DragElement from "../src/Components/MainContent/DraggedElements/DraggedElements";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <DragElement/>
        </Layout>
      </div>
    );
  }
}

export default App;
