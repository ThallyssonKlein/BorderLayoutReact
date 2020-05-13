

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactNative = require('react-native');

var styles = reactNative.StyleSheet.create({
    parent: {
        flex: 1,
        margin: 0,
        display: 'flex',
        flexDirection: 'column'
    },
    center: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row'
    }
});
function BorderLayout(props) {
    return (React.createElement(reactNative.View, { style: styles.parent },
        props.children.top,
        React.createElement(reactNative.View, { style: styles.center },
            props.children.left,
            React.createElement(reactNative.View, { style: { flex: 1 } }, props.children.center),
            props.children.right),
        props.children.bottom));
}

exports.default = BorderLayout;
//# sourceMappingURL=index.js.map
