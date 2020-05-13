import * as React from 'react'

interface Side extends React.ReactElement {
    
}

interface Props {
    children: {
        top: Side,
        bottom: Side,
        center: Side,
        right: Side,
        left: Side
    }
}

const styles = {
    parent: {
        height: '100vh',
        margin: 0,
        display: 'flex',
        flexDirection: 'column'
    } as React.CSSProperties,
    center: {
        flex:1,
        display: 'flex',
        flexDirection: 'row'
    } as React.CSSProperties
}

export default function BorderLayout(props: Props): React.ReactElement {
    return (
        <div style={styles.parent}>
            {props.children.top}
            <div style={styles.center}>
                {props.children.left}
                <div style={{flex: 1}}>
                    {props.children.center}
                </div>
                {props.children.right}
            </div>
            {props.children.bottom}
        </div>
    )
}
