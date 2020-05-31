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
            {props.children.top}
            <View style={styles.center}>
                {props.children.left}
                <View style={{flex: 1}}>
                    {props.children.center}
                </View>
                {props.children.right}
            </View>
            {props.children.bottom}
        </View>
    )
}
