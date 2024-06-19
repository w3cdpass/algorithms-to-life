import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function CodeViewer({ code }) {
  return (
    <div className="CodeViewer">
      <h3>Source Code</h3>
      <Tabs>
        <TabList>
          {Object.keys(code).map(language => (
            <Tab key={language}>{language}</Tab>
          ))}
        </TabList>

        {Object.keys(code).map(language => (
          <TabPanel key={language}>
            <pre>
              <code>{code[language]}</code>
            </pre>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}

export default CodeViewer;
