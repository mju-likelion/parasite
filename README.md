<img src="logo.png" width="150" height= "160" align="right" />

# Parasite - 멋쟁이 사자처럼 9기 지원 플랫폼 지원서 정렬 프로젝트

<hr>

## Abstract

많은 운영진분들이 함께 개발하고 계시는 지원서 크롤러 개발 바톤을 이어받아 저희도 간단한 프로젝트를 진행해보았습니다.
서류 마감일이 다가오면서 제출되는 지원서양의 급격한 증가와 함께 최신 지원서를 찾는데 불편을 겪고 계실것이라 생각되어 지원서를 제출순으로 정리해주는 새로운 사이트를 개발하게 되었습니다.

[사이트](https://likelion-parasite.ga/)에 접속하시어 기존 지원 플랫폼 사이트의 이메일과 비밀번호를 이용해 로그인하시면,  
 최초 로그인 이전까지는 지원 플랫폼 사이트와 동일한 순서로 뜨지만  
 최초 로그인 이후 제출자에 대해서는 가장 최신 제출자가 가장 위로 정렬되어 보여지게 됩니다.  
이미 존재하는 웹사이트를 크롤링하여 만든 것이라 속도가 조금 느립니다.  
급하게 만든 것이라 없는 기능도 있습니다 (예를 들면 로그인 시 시간이 조금 소요되는데 loading이 안뜬다던지 하는...) 필요하신 분들은 잘 사용해주시면 감사하겠습니다!

## Tech Stack

<img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"> - Typescript

<img src="https://raw.githubusercontent.com/github/explore/28b02bbc9ad9f7a503c43775aebeb515dc2da5fc/topics/nextjs/nextjs.png" width="20" height="20" class="d-block rounded-1" alt="nextjs logo"> - Next.js

<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png" width="20" height="20" class="d-block rounded-1" alt="docker logo"> - Docker

<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png" width="20" height="20" class="d-block rounded-1" alt="firebase logo"> - Firebase

<img src="https://camo.githubusercontent.com/4b95df4d6ca7a01afc25d27159804dc5a7d0df41d8131aaf50c9f84847dfda21/68747470733a2f2f73656c656e69756d2e6465762f696d616765732f73656c656e69756d5f6c6f676f5f7371756172655f677265656e2e706e67"  alt="Selenium" data-canonical-src="https://selenium.dev/images/selenium_logo_square_green.png" style="max-width:100%;" width="20" height="20"> - Selenium

## Features

- [x] 지원서 제출 정렬(제출 시간 기준)
- [x] 지원서 클릭시 외부 링크로 연결

## To Be Added

- [x] 로그인 로딩 UI

## How to use

1. 로그인 후 순서의 새로고침을 원하시면 우측 상단의 로그아웃하고 새로고침하기 를 눌러주시면 됩니다.
2. 로그인 시 새롭게 크롤링해오기 때문에 약 6초정도가 소요됩니다. loading이 별도로 뜨지 않아 먹통인것처럼 보일 수 있으니 백그라운드에서 크롤링 중이니 조금만 기다려주시면 됩니다.
3. 혹 👆 의 문제점 외에 다른 문제점을 찾으시면,  
   dev.noah0316@gmail.com, yuyaebean@gmail.com, 13circle97@gmail.com  
    으로 연락주시면 감사하겠습니다.

## Available Scripts

`docker-compose up -d`
