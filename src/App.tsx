import type { FC } from 'react';
import 'antd/dist/reset.css';
import './App.css';

const App: FC = () => (
  <div className="layout">
    <div className="sidebar">sidebar</div>
    <div className="main">
      <div className="header">header</div>
      <div className="content">content</div>
      <div className="footer">Made by Code &lt;3</div>
    </div>
  </div>
);

export default App;
