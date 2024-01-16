# react-aqfa-bar

Beta Version

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://www.npmjs.com/package/react-aqfa-bar">
    <img src="https://cdn.discordapp.com/attachments/1125717730872524803/1195336117373894676/image.png?ex=65b39e82&is=65a12982&hm=870f645a22d7f3ebc12763d8cac3bae472091ccb66264250ee57ff57ca859a47&" alt="Logo" width="100%" height="auto">
  </a>

  <h3 align="center">React Aqfa Progress Chart Bar</h3>

  <p align="center">
  Introducing react-aqfa-bar, a powerful library that simplifies the creation of progress bars and various chart bars in React applications. With easy-to-use components, it provides a seamless way to visualize data and progress in a visually appealing manner.
    <br />
    <br />
    <!-- <a href="https://creatachain.com">Download Demo</a> -->
    <!-- ·
    <a href="https://github.com/magnusmage/creatachain-admin/issues">Report Bug</a>
    ·
    <a href="https://github.com/magnusmage/creatachain-admin/issues">Request Feature</a> -->
  </p>
</p>

### Demo

<a href="https://codesandbox.io/embed/8zfk8j?view=Editor+%2B+Preview&module=%2Fsrc%2FApp.js" target="_blank">Demo Link</a>

## Getting Started

Install this library with your favorite package manager:

```sh
npm i react-aqfa-bar
```

or

```sh
yarn add react-aqfa-bar
```

  <img src="https://cdn.discordapp.com/attachments/1125717730872524803/1195331811421724753/image.png?ex=65b39a80&is=65a12580&hm=e7db28ede3344eaa6ee727c388dbbdd32233a4edcde17197d36dce984d83af0a&" alt="progress bar with two color" width="100%" height="auto">

Then, import and use it:

### example 1

```sh
import { ProgressBar } from "react-aqfa-bar";

 <ProgressBar
          initialValue={50}
          totalValue={100}
          ContainerStyle={{ width: "500px" }}
        />
```

### example 2

You can customize it according to your needs.

  <img src="https://cdn.discordapp.com/attachments/1125717730872524803/1195334012101734470/image.png?ex=65b39c8c&is=65a1278c&hm=f2b34baa6a7f01eb532e6b3d9f16fc6a11b4e909546f89a6a2b1f2bf078b8057&" alt="progress bar with two color" width="100%" height="auto">

```sh
import { ProgressBar } from "react-aqfa-bar";

<ProgressBar
        initialValue={66}
        totalValue={100}
        containerStyle={{ width: "500px" }}
        initialText="Initial"
        totalText="Total"
      />
```

## Docs

we are working on it.

## Props

| Props          |                              Description                              | Default |  Type  |
| :------------- | :-------------------------------------------------------------------: | :-----: | :----: |
| initialValue   |                Add initial value for the progress bar.                |   10    | number |
| totalValue     |                 Add final value for the progress bar.                 |   100   | number |
| initialText    |                       Lable the initial value.                        |   --    | string |
| hideInitial    |            hide the initial value under the initial text.             |  true   | boolen |
| hideTotal      |             hide the Final value under the initial text.              |  true   | boolen |
| totalText      |                        Lable the final value.                         |   --    | string |
| initialSymbol  |          Add any symbol after initial value (e.g. rs,$ etc.)          |   --    | string |
| finalSymbol    |           Add any symbol after final value (e.g. rs,$ etc.)           |   --    | string |
| containerStyle |            Apply styling to the container of progress bar.            |   --    | object |
| barStyle       |               Apply styling to the Bar of progress bar.               |   --    | object |
| barBgStyle     |         Apply styling to the bar background of progress bar.          |   --    | object |
| textStyle      | Apply styling to the initial and final text element of progress bar.  |   --    | object |
| valueStyle     | Apply styling to the initial and final value element of progress bar. |   --    | object |

## Progress bar threshold

  <img src="https://cdn.discordapp.com/attachments/1125717730872524803/1195332383696756797/image.png?ex=65b39b08&is=65a12608&hm=6d4b451a74b9e659e7535683a4b043e02eeaa15cad04d022366287764e9441d6&" alt="progress bar with two color" width="100%" height="auto">

if you want different color of background behind the progress bar then apply the given below prop.

```sh

BarBgStyle = {{
background:`linear-gradient(to right, #fff 0%, #fff 80%, rgba(69, 76, 84, 0.30) 80%, rgba(69, 76, 84, 0.30) 100%)`
}}

```

### example 3

You can customize it according to your needs.

  <img src="https://cdn.discordapp.com/attachments/1125717730872524803/1196436283917094942/image.png?ex=65b79f1e&is=65a52a1e&hm=cc711604205e898aaa9838c59326def87489d43bf49bb6e2de5b296f26c028fc&" alt="progress bar with two color" width="100%" height="auto">

```sh
import { ProgressBar } from "react-aqfa-bar";

     <ProgressBar leftCapText="Soft Cap" rightCapText="Hard Cap" />

```

## Props

| Props        |                    Description                    | Default |  Type  |
| :----------- | :-----------------------------------------------: | :-----: | :----: |
| leftCapText  | rightCapText shows the first threshold with text. |   --    | string |
| rightCapText | rightCapText shows the final threshold with text. |   --    | string |
| leftCap      |        leftCap shows the first threshold.         |   20    | number |
| rightCap     |        rightCap shows the final threshold.        |   80    | number |

- All done :smile:

[contributors-shield]: https://img.shields.io/static/v1?label=CONTRIBUTORS&message=2&color=blue
[contributors-url]: https://github.com/faiqfarooq/react-aqfa-bar/graphs/contributors
[forks-shield]: https://img.shields.io/static/v1?label=FORKS&message=0&color=blue
[forks-url]: https://github.com/faiqfarooq/react-aqfa-bar/network/members
[stars-shield]: https://img.shields.io/static/v1?label=STARS&message=0&color=blue
[stars-url]: https://github.com/faiqfarooq/react-aqfa-bar/stargazers
[issues-shield]: https://img.shields.io/static/v1?label=ISSUES&message=0&color=blue
[issues-url]: https://github.com/faiqfarooq/react-aqfa-bar/issues
[license-shield]: https://img.shields.io/static/v1?label=LICENSE&message=MIT&color=blue
[license-url]: https://github.com/faiqfarooq/react-aqfa-bar/blob/master/LICENSE
[product-screenshot]: https://i.ibb.co/5skxBw2/coverimage.png

```
Copyright © 2024 — aqfa.tech
```
