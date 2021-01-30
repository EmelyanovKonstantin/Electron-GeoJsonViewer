<!-- PROJECT LOGO -->
<h1 align="center">
  <img src="img/electron.jpg" height="200" alt="ArminC AutoExec"></a>
</h1>
<p align="center">
  <h3 align="center">Electron-GeoJsonViewer</h3>

  <p align="center">
    Win x64 Desktop Application
</p>


---
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
     <li>
      <a href="#built-with">Built With</a>
     </li>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Build</a></li>
      </ul>
    </li>
  </ol>
</details>

## Built With
* [Electron](https://www.electronjs.org) <img src="img/electron.jpg" alt="Logo" width="" height="10">
* [Leaflet](https://leafletjs.com) <img src="https://leafletjs.com/docs/images/logo.png" alt="Logo" width="" height="10">
* [OSM](https://www.openstreetmap.org) <img src="https://www.openstreetmap.org/assets/osm_logo-d4979005d8a03d67bbf051b4e7e6ef1b26c6a34a5cd1b65908e2947c360ca391.svg" alt="Logo" width="" height="10">

<!-- ABOUT THE PROJECT -->
## About The Project
* Win x64 Desktop Application<br>
* Created for training purposes.<br>
* App features:<br>
  * OpenStreetMap Viewer<br>
  * Add GeoJson:<br>
<img src="img/img.png" alt="Logo" width="" height="400"><br><br>
  
<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/EmelyanovKonstantin/Electron-GeoJsonViewer.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   
<!-- BUILD EXAMPLES -->
### Build
1. ```sh
   npm run package
   ```
   or
   ```sh
   npm run package -- --platform=<platform> arch=<architecture>
   ```
   or
   ```sh
   npm run make
   ```