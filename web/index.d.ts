import * as React from 'react';
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
}
export default function BorderLayout(props: Props): React.ReactElement;
export {};
