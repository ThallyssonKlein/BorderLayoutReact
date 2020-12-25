# BorderLayoutReact
I identified as a bottleneck in my web and mobile screen development process the positioning of elements on screen, I lost a lot of time with this. And as I hate to waste time, I remembered that at the time when I worked with Swing on Java (a long time ago) it was easy to build screens. So I created this package to simulate what BorderLayout would be inside the flexbox. Attention, this package is recommended for people who have used BorderLayout in Swing, but if you want to venture out, the instructions below.

## Instalation
Here is the installation instructions for the React Native version:
https://github.com/ThallyssonKlein/BorderLayoutReact/packages/223009

And here, the ReactJS version:
https://github.com/ThallyssonKlein/BorderLayoutReact/packages/222633

## Usage
React Native
```
<BorderLayout>
    {{
        top: <View>...content</View>,
        bottom: <View>...content</View>,
        center: <View>...content</View>,
        left: <View>...content</View>,
        right: <View>...content</View>
    }}
</BorderLayout>
```
React
```
<BorderLayout>
    {{
        top: <div>...content</div>,
        bottom: <div>...content</div>,
        center: <div>...content</div>,
        left: <div>...content</div>,
        right: <div>...content</div>
    }}
</BorderLayout>

```
**Ps:** All parameters are optional. For example, if you just want to place an element in the center of your container and nothing else, just type the parameter for the center.

Screen Divisions looks like this:
![alt](https://raw.githubusercontent.com/ThallyssonKlein/BorderLayoutReact/master/screenshot.png)

# Update

A new way to use:

```
<BorderLayout backgroundColor={Colors.primaryShade3}>
    <BorderLayout.Top>
        ....
    </BorderLayout.Top>
    <BorderLayout.Center>
    ....
    </BorderLayout.Center>
    <BorderLayout.Bottom>
        ....
    </BorderLayout.Bottom>
</BorderLayout> 
```