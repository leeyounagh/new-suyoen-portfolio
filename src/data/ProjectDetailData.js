const projectDetailData = [
  {
    id: 0,
    title: "value share",
    function:
      "어드민 페이지 CRUD, 로그인, 회원가입, 상품 페이지, 상품 상세페이지, 무한 스크롤, 장바구니 페이지, 회원, 비회원 주문 프로세스, 마이페이지, 회원 탈퇴, 이메일 수정",
    personalAchievement1Title: "전체 페이지 공통 컴포넌트 리덕스 persist 적용",
    personalAchievement1:
      "모든 페이지에 적용되는 navbar컴포넌트에서, 리덕스를 사용하여 페이지 이동시 해당페이지의 정보를 받아 렌더링 했으나, 페이지 리로드시 상태값이 날라가는 이슈 발생// redux persist 이용하여 로컬스트리지에 값을 저장함으로써 이슈 해결",
    personalAchievement2Title:
      "로그인기능 구현시 AxiosInstance를 활용하여 헤더토큰 세팅",
    personalAchievement2:
      "axios default header로 토큰 세팅시 토큰이 필요없는 통신에서도 header가 세팅되는 이슈 발생// AxiosInstance를 사용하여 컴포넌트화 완료및 토큰이 필요한 통신에서만 호출하게됨",
    personalAchievement3Title:
      "상품페이지 무한스크롤 적용및 이미지 레이지 로딩 적용",
    personalAchievement3:
      "데이터량이 5000개 초과되어 성능상 문제발생 && 이미지 용량이 커서 늦게 로딩되는 이슈발생// 무한스크롤, 이미지 레이지 로딩으로 문제 해결",
    personalAchievement4Title: "장바구니 아이템 로컬스트리지 저장 로직 구현",
    personalAchievement4:
      "페이지 리로드시 장바구니 아이템이 사라지는 이슈 발생// 로컬스트리지에 아이템 저장하는 공통 util함수 구현함으로써 문제 해결",
    personalAchievement5Title:
      "고차 함수를 이용하여 회원전용 페이지, 어드민 계정 전용 페이지 구분 로직 구현",
    personalAchievement5:
      "회원임에도 불구하고 어드민페이지 접속가능하거나, 비회원임에도 불구하고 마이페이지 접근 가능한 이슈 발생//고차함수를 통하여 어드민계정일 경우 마이페이지 접속제한, 회원계정일경우 어드민페이지 접근 불가하게끔 처리완료",
  },
  {
    id: 1,
    title: "samsamFarm",
    function:
      "mbti별 꽃추천 페이지, 로그인, 회원가입, 메인페이지 유저 농장 방명록, 마이페이지 액츄에이터 제어, 유저 커뮤니티",
    personalAchievement1Title:
      "로그인기능 구현시 AxiosInstance를 활용하여 헤더토큰 세팅",
    personalAchievement1:
      "쇼핑몰 프로젝트때 axios default header로 토큰 세팅시 토큰이 필요없는 통신에서도 header가 세팅되는 이슈가 발생하였고 동일한 이슈 방지하기위하여 axiosInstance 컴포넌트 세팅",
    personalAchievement2Title:
      "회원가입 유효성 검사 react hookform 이용하여 구현",
    personalAchievement2:
      "유효성 검사시 코드 가독성 저하 및 팀원간 일관성 있는 코드를 작성하고자 react hookform 적용",
    personalAchievement3Title:
      "디바이스 데이터 1분간격 그래프 로직 구현시 쓰로틀링 처리 구현",
    personalAchievement3:
      "그래프 구현시 매번 데이터를 불러오는것은 성능상 문제 발생함을 인지// 쓰로틀링 처리로 1분간격으로 데이터 get요청 로직 적용",
    personalAchievement4Title:
      "메인페이지 유저 작물의 grade에 따른 작물렌더링 공통 컴포넌트 작용",
    personalAchievement4:
      "유저의 작물 단계는 4단계이나 이를 하드코딩으로 구현하기엔 가독성 측면에서 좋지 못함 인지// 공통 함수 구현하여 해결",
    personalAchievement5Title:
      "커뮤니티 페이지 이중배열 로직의 문제점인지하여 직접 백엔드로직 페이징처리 하여 프론트 페이징 처리 구현 ",
    personalAchievement5:
      "커뮤니티 페이지의 캐러셀은 총 16개의 최신 게시물을 받아와 각페이지당 4개의 데이터를 잘라야하는 불편함이 있었고, 이를 이중배열로 구현 하였으나, 가독성측면에서 좋지못함을 판단// 직접 백엔드 커뮤니티 로직 수정및 페이징 처리 하여 이를 해결 ",
  },
  {
    id: 2,
    title: "Hello Jeju",
    function:
      "다양한 제주도 정보를 제공, google map api를 이용한 제주도 맛집, 숙박업소등의 정보 제공,  커뮤니티 페이지에서 유저간의 소통, 마이트레블에서 본인이 찜한 스팟들을 한눈에 볼수 있으며 계획을 세우고, 계획 삭제 가능",
    personalAchievement1Title:
      "기존 자바스크립트, redux로 구현된 로직 전부 타입스크립트, 리덕스 툴킷으로 마이그레이션 진행",
    personalAchievement1:
      "리덕스 로직의 가독성 저하로 리덕스 툴킷 마이그레이션 진행함 // 백엔드 로직 또한 직접 구현하다보니, 값이 null값이나 undifiend로 데이터가 update되는 이슈가 발생// 타입스크립트 마이그레이션으로 타입을 명확하게 지정함으로써 문제해결 ",
    personalAchievement2Title:
      "기존 google map api 로직에서 700줄이 넘는 코드를 100줄로 줄이는 로직 구현",
    personalAchievement2:
      "기존 로직을 타입스크립트로 마이그레이션 하며, 가독성이 저하되는 google map api 로직의 문제점 인지// 이를 해결하기위하여 공통 함수 구현및 컴포넌트 분리로 100줄로 줄이는데 성공",
    personalAchievement3Title: "light house 성능점수 60점 상승 기여",
    personalAchievement3:
      "기존 자바스크립트 로직에서 페이지 로드가 느림을 인지// light house로 성능측정시 38점으로 측정// seo대책, 이미지 리사이징, 불필요한 자바스크립트 코드 줄임으로써 성능점수 개선",
    personalAchievement4Title: "데이터 검색 로직에서 디바운스 처리 구현",
    personalAchievement4:
      "travel spot의 검색 로직에서 한글자 타이핑 할때마다 데이터 get요청 하는것의 문제 인지// 이를 해결하기위하여 디바운스 처리 도입하여 타이핑이 완료된후 get요청 할수 있게끔 개선",
    personalAchievement5Title:
      "비디오 클립 기능에서 불필요한 addEventListener의 사용으로 불필요한 메모리 사용을 감지하여 리팩토링 진행",
    personalAchievement5:
      "비디오 클립기능에서 js의 addeventListner로 dom요소에 접근하고 값을 변경하는 로직의 비효율성을 감지// useRef를 사용하여 코드 50줄 감소, addeventListner의 불필요한 메모리 사용 줄임",
  },
];

export default projectDetailData;
