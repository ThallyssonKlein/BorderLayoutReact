import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
});
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

  return <View style={[styles.parent, {backgroundColor : props.backgroundColor ? props.backgroundColor : ""}, additionalStyles]}>
            {(top) ? top : <View/>}
            <View style={styles.center}>
                {(left) ? left : <View/>}
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    {center && center}
                </View>
                {(right) ? right : <View/>}
            </View>
            {(bottom) ? bottom : <View/>}
            </View>
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
