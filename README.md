# react-aqfa-bar

Beta Version

<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url] -->

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <!-- <a href="https://github.com/magnusmage/creatachain-explorer">
    <img src="public/logo.png" alt="Logo" width="90" height="100">
  </a> -->

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

## Getting Started

Install this library with your favorite package manager:

```sh
npm i react-aqfa-bar
```

or

```sh
yarn add react-aqfa-bar
```

Then, import and use it:

```sh
import { ProgressBar } from "react-aqfa-bar";

 <ProgressBar
          InitilValue={50}
          TotalValue={100}
          ContainerStyle={{ width: "500px" }}
        />
```

## Docs

we are working on it.

## Props

| Props            |                        Description                         | Default |  Type  |
| :--------------- | :--------------------------------------------------------: | :-----: | :----: |
| InitilValue      |           Add inital value for the progress bar.           |   10    | number |
| TotalValue       |           Add final value for the progress bar.            |   100   | number |
| initalText       |                     lable inital value                     |   --    | string |
| totalText        |                      lable inal value                      |   --    | string |
| InitiSymbol      |     Add any symbol after inital value (e.g. rs,$ etc.)     |   --    | string |
| FinalSymbol      |     Add any symbol after final value (e.g. rs,$ etc.)      |   --    | string |
| ContainerStyle   |      Apply styling to the container of progress bar.       |   --    | object |
| BarStyle         |         Apply styling to the Bar of progress bar.          |   --    | object |
| BarBgStyle       |    Apply styling to the bar background of progress bar.    |   --    | object |
| initalValueStyle | Apply styling to the inital value element of progress bar. |   --    | object |
| initalTextStyle  | Apply styling to the inital text element of progress bar.  |   --    | object |
| totalValueStyle  | Apply styling to the final value element of progress bar.  |   --    | object |
| totalTextStyle   |  Apply styling to the final text element of progress bar.  |   --    | object |

  <img src="https://cdn.discordapp.com/attachments/1125717730872524803/1195330501960015892/image.png?ex=65b39947&is=65a12447&hm=bbc271399cab85d3db4bf8da64cb64e552a2566a25d20602f91c64998268ba7d&" alt="progress bar with two color" width="100%" height="auto">

if you want different color of background behind the progress bar then apply the given below prop.

```sh

BarBgStyle = {{
background:`linear-gradient(to right, #fff 0%, #fff 80%, rgba(69, 76, 84, 0.30) 80%, rgba(69, 76, 84, 0.30) 100%)`
}}

```

- All done :smile:

<!-- [contributors-shield]: https://img.shields.io/static/v1?label=CONTRIBUTORS&message=2&color=blue
[contributors-url]: https://github.com/magnusmage/creatachain-admin/graphs/contributors
[forks-shield]: https://img.shields.io/static/v1?label=FORKS&message=0&color=blue
[forks-url]: https://github.com/magnusmage/creatachain-explorer/network/members
[stars-shield]: https://img.shields.io/static/v1?label=STARS&message=0&color=blue
[stars-url]: https://github.com/magnusmage/creatachain-admin/stargazers
[issues-shield]: https://img.shields.io/static/v1?label=ISSUES&message=0&color=blue
[issues-url]: https://github.com/magnusmage/creatachain-admin/issues
[license-shield]: https://img.shields.io/static/v1?label=LICENSE&message=MIT&color=blue
[license-url]: https://github.com/magnusmage/creatachain-admin/blob/master/LICENSE
[product-screenshot]: https://i.ibb.co/5skxBw2/coverimage.png -->

```
Copyright © 2024 — aqfa.tech
```
