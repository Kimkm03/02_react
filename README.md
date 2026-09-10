
# Won Banking Mini

## 1. 소개

Won Banking Mini는 React와 Vite를 사용해 제작한 간단한 인터넷 뱅킹 대시보드입니다. 계좌 목록과 잔액, 거래 내역, 실시간 시계, 환율 정보를 확인할 수 있으며 계좌번호와 금액 표시 여부를 변경하거나 계좌 이체를 실행할 수 있습니다.

배포 주소: [배포 주소를 입력하세요](https://example.com)

## 2. 화면

### 메인 화면 & 이체 화면

![Won Banking Mini 메인 화면](./screenshots/react-main.png)

### 계좌 및 거래 내역

![계좌 및 거래 내역 화면](./screenshots/transactions.gif)

## 주요 기능

- 계좌 목록 및 잔액 조회
- 계좌번호 마스킹 및 전체 표시 전환
- 금액 숨김 및 표시 전환
- 계좌별 1만원 입금
- 계좌 이체
- 입금 및 이체 거래내역 추가
- 한국 시간 기준 실시간 시계 표시
- 거래내역 유형 및 카테고리 필터링
- 환율 정보 조회
- 사용자 정보 및 계좌 상태 공유
- Vitest와 Testing Library를 이용한 컴포넌트 테스트


## 3. 실행 방법

```bash
git clone 저장소주소
cd won-banking-mini
npm install
npm run dev
```

개발 서버 실행 후 터미널에 표시되는 주소로 접속합니다.

테스트 실행:

```bash
npm test
```

## 4. 폴더 구조

```text
won-banking-mini/
├── public/                 # 정적 파일과 아이콘
├── src/
│   ├── api/
│   │   └── `exchange.js`     # 환율 및 거래 데이터 요청 함수
│   ├── components/         # 화면을 구성하는 React 컴포넌트
│   │   ├── AccountCard.jsx # 계좌 정보 카드
│   │   ├── Clock.jsx       # 현재 시간 표시
│   │   ├── ExchangeRate.jsx# 환율 표시
│   │   ├── Header.jsx      # 헤더
│   │   ├── Panel.jsx       # 콘텐츠 패널
│   │   ├── StatusBadge.jsx # 계좌 상태 표시
│   │   ├── TransactionList.jsx
│   │   ├── TransactionRow.jsx
│   │   └── TransferForm.jsx# 이체 폼
│   ├── contexts/
│   │   └── `UserContext.jsx` # 사용자 정보 전역 관리
│   ├── data/
│   │   └── mockData.js     # 테스트용 계좌 및 거래 데이터
│   ├── hooks/
│   │   └── `useFetch.js`     # 데이터 요청을 위한 커스텀 훅
│   ├── utils/
│   │   └── format.js       # 금액 및 계좌번호 formatting 함수
│   ├── `App.jsx`             # 애플리케이션 메인 컴포넌트
│   ├── App.css             # 앱 스타일
│   ├── index.css           # 전역 스타일
│   ├── main.jsx            # React 앱 시작점
│   └── setupTests.js       # 테스트 환경 설정
├── index.html              # HTML 진입점
├── `package.json`            # 의존성 및 실행 명령
└── vite.config.js          # Vite 설정
```

## 5. 사용한 React 개념

### 컴포넌트

Header, AccountCard, Panel, Clock, ExchangeRate 등 기능별로 컴포넌트를 분리해 화면을 구성했습니다.

### Props

부모 컴포넌트에서 자식 컴포넌트로 계좌번호, 잔액, 계좌 상태, 이벤트 함수 등의 데이터를 전달했습니다.

### State

계좌 목록, 거래 내역, 계좌번호 표시 여부, 금액 표시 여부 등을 state로 관리했습니다.

### useState

`useState`를 사용해 계좌 잔액과 거래 내역을 변경하고, 사용자의 버튼 입력에 따라 화면을 갱신했습니다.

### useEffect

`Clock` 컴포넌트에서 일정한 시간 간격으로 현재 시간을 갱신하고, 컴포넌트가 제거될 때 타이머를 정리했습니다. 또한 `useFetch`에서 외부 데이터를 비동기로 요청할 때 사용했습니다.

### useContext

`UserContext`를 사용해 사용자 이름, 등급, 계좌 상태 등의 정보를 여러 컴포넌트에서 공유했습니다.

### 커스텀 훅

`useFetch` 커스텀 훅을 만들어 데이터 요청, 로딩 상태, 에러 상태, 다시 요청하는 기능을 재사용할 수 있도록 구성했습니다.

## 6. 테스트

테스트 실행:

```bash
npm test
```

다음 기능을 검사합니다.

- 계좌번호가 정상적으로 마스킹되는지 확인
- 금액이 천 단위 콤마와 원 단위로 formatting되는지 확인
- 현재 시간이 화면에 표시되는지 확인
- 1초가 지나면 시계가 갱신되는지 확인
- Clock 컴포넌트가 제거될 때 `setInterval`이 정리되는지 확인

## 7. 사용 기술

- React
- Vite
- JavaScript
- Vitest
- React Testing Library
- Jest DOM
- CSS
