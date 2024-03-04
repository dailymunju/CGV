# cgv 싱글페이지 무비 차트 제작

<a href="https://dailymunju.github.io/CGV/dist/" target="_blank">
<img src="public/images/logo.png" width="150px">
</a>

<br>
<br>

# 프로젝트 참고 또는 리뉴얼 사이트

1. <a href="https://www.cgv.co.kr/" target="_blank">CGV 공식사이트</a>

# 사용 기술  

- [X] React
- [X] module.scss 

## 프로젝트 주요 기능
1. React props 전달을 통한 데이터 화면출력
2. map으로 현재 탭 위치 CSS 효과 적용, 탭 데이터 변경
3. find를 이용해 해당 id와 일치하는 데이터를 찾아 화면변경
4. useEffect로 특정한 값이 변경될때마다 화면에 반영되도록 되도록 구현
5. 조건문으로 카테고리 탭 기능 구현

### 1) 무비차트 구성
* movieData.api에서 '무비차트','현재상영작','상영예정작' 상단 메뉴로 탭기능 구현
* 카테고리 첫번째 메뉴가 첫화면에 나오도록 구현
* 해당 영화 클릭 시 갤러리 이미지, 상세 정보 변경 되도록 구현

<img src="./images/../public/images/introPage01.gif">


### 2) 영화 포스터 갤러리 
* 영화 포스터 갤러리 기능
* 상단 영화 클릭 시 해당하는 영화의 이미지를 갤러리에 출력
* 하단 작은 이미지 클릭 시 큰 이미지로 변경 될 수 있도록 구현
  
<img src="./images/../public/images/introPage02.gif">


### 3) 영화 상세 정보 탭
* 상단 영화 메뉴 클릭 시 해당하는 상세 정보 탭 기능 구현
* 영화의 주요 정보, 출연진들의 필모그라피, 영화트레일러
  
<img src="./images/../public/images/introPage03.gif">
