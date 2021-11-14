import React from 'react';

const styles = {
  parent: {
      flex: 1,
      margin: 0,
      display: 'flex',
      flexDirection: 'column'
  },
  center: {
      flex:1,
      display: 'flex',
      flexDirection: 'row'
  }
};

const BorderLayout = props => {
  const top = React.Children.map(props.children, child => child.type.displayName === 'Top' ? child : null);
  const center = React.Children.map(props.children, child => child.type.displayName === 'Center' ? child : null);
  const bottom = React.Children.map(props.children, child => child.type.displayName === 'Bottom' ? child : null);
  const left = React.Children.map(props.children, child => child.type.displayName === 'Left' ? child : null);
  const right = React.Children.map(props.children, child => child.type.displayName === 'Right' ? child : null);

  let additionalStyles = {};
  if(props.additionalStyles){
      additionalStyles = {...props.additionalStyles}
  }

  return <div style={[styles.parent, {backgroundColor : props.backgroundColor ? props.backgroundColor : ""}, additionalStyles]}>
            {(top) ? top : <div/>}
            <div style={styles.center}>
                {(left) ? left : <div/>}
                <div style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    {center && center}
                </div>
                {(right) ? right : <div/>}
            </div>
            {(bottom) ? bottom : <div/>}
            </div>
}

const Top = ({ children }) => children;
Top.displayName = 'Top';
BorderLayout.Top = Top;

const Center = ({ children }) => children;
Center.displayName = 'Center';
BorderLayout.Center = Center;

const Bottom = ({ children }) => children;
Bottom.displayName = 'Bottom';
BorderLayout.Bottom = Bottom;

const Left = ({ children }) => children;
Left.displayName = 'Left';
BorderLayout.Left = Left;

const Right = ({ children }) => children;
Right.displayName = 'Right';
BorderLayout.Right = Right;

export default BorderLayout;
