import * as React from 'react';
import { ViewStyle } from 'react-native';
interface Side extends React.ReactElement {
}
interface Props {
    children: {
        top: Side;
        bottom: Side;
        center: Side;
        right: Side;
        left: Side;
    };
    style: ViewStyle;
}
export default function BorderLayout(props: Props): React.ReactElement;
export {};
