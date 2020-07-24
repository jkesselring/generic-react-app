import React from 'react';

export default class Footer extends React.Component
{
  render()
  {
    return <footer className="App-footer"><h3>This is an overcomplicated footer element with static text in it.</h3><h4>{this.getColorScheme()}</h4></footer>;
  }

  getColorScheme()
  {
    if (this.isColorSchemeSupported())
    {
      return "Color Scheme Preference: " + window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
    }
    return "Prefers Color Not Supported 😭";
  }

  isColorSchemeSupported()
  {
    if(window.matchMedia)
      return window.matchMedia('(prefers-color-scheme)').media !== 'not all';
  }
}
