import * as React from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native';

interface Side extends React.ReactElement {
    
}

interface Props {
    children: {
        top: Side,
        bottom: Side,
        center: Side,
        right: Side,
        left: Side
    },
    style: ViewStyle
}

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

export default function BorderLayout(props: Props): React.ReactElement {
    return (
        <View style={[styles.parent,props.style]}>
            {(props.children.top) ? props.children.top : <View/>}
            <View style={styles.center}>
                {(props.children.left) ? props.children.left : <View/>}
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    {props.children.center}
                </View>
                {(props.children.right) ? props.children.right : <View/>}
            </View>
            {(props.children.bottom) ? props.children.bottom : <View/>}
        </View>
    )
}
