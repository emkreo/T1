import * as React from 'react';

import './modeSwitch.css';


// const ReactHint = ReactHintFactory(React)
class modeSwitch extends React.Component {
  // onRenderContent = (target, content) => {
  //   const {catId} = target.dataset
  //   const width = 240
  //   const url = `https://images.pexels.com/photos/${catId}/pexels-photo-${catId}.jpeg?w=${width}`
  //
  //   return <div className="custom-hint__content">
  //     <img src={url} width={width} />
  //     <button ref={(ref) => ref && ref.focus()}
  //             onClick={() => this.instance.toggleHint()}>Ok</button>
  //   </div>
  // }

  render() {
    return <div className="mode-switch">
      {/*<ReactHint autoPosition events delay= />*/}
      {/*<ReactHint persist*/}
      {/*           attribute="data-custom"*/}
      {/*           className="custom-hint"*/}
      {/*           events={{click: true}}*/}
      {/*           onRenderContent={this.onRenderContent}*/}
      {/*           ref={(ref) => this.instance = ref} />*/}

      <button data-rh="Default">Default</button>
      <button data-rh="Top" data-rh-at="top">Top</button>
    </div>
  }
}