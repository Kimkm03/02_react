// 필요한 부품들을 가져옴
import './App.css'
// 02_html기초.html 안에 만들었던 계좌카드의 css를 가져와서 꾸미기
// 2. 함수
// 계좌 잔액을 "1,523,000원" 형태의 문자열로 바꿔주는 함수
function formatWon(amount) {
  return amount.toLocaleString("ko-KR") + "원"
}

// 계좌번호 앞부분을 가리고 마지막 한 자리만 보여주는 함수
// 예) "1002-345-678901" -> "1002-345-6****1"
function maskAccountNo(no) {
  return no.slice(0, -5) + "****" + no.slice(-1)
}

// hide 가 true 면 실제 금액 대신 "••••••원" 을 보여줍니다.
function formatWonMasked(amount, hide) {
  return hide ? "••••••원" : formatWon(amount)
}

// 컴포넌트명은 파스칼케이스로 사용
function Clock() {
  const now = new Date();
  return <span>{now.toLocaleTimeString("ko-KR")}</span>;
}

// 실제로 사용될 화면 그림
function App() {
  // 화면이 렌더링 되기 위해 필요한 값(data)
  const accounts = [
  {
    accountId: 1,
    accountNo: "1002-345-678901",
    accountType: "입출금",
    balance: 1523000,
    status: "정상",
    ownerName: "김경모",
  },
  {
    accountId: 2,
    accountNo: "1002-345-112233",
    accountType: "적금",
    balance: 1200000,
    status: "정상",
    ownerName: "김경모",
  },
  {
    accountId: 3,
    accountNo: "1002-345-998877",
    accountType: "적금",
    balance: 397000,
    status: "휴면",
    ownerName: "김경모",
  },
]

  // flag 변수: 특정 로직을 끄거나 켜거나 제어하는 변수
  // flag 변수는 default 값을 false로 만들고 사용
  let showFullNo = true;

  // JSX가 소문자 태그는 HTML, 대문자 태그는 컴포넌트로 인식
  // return ( ) 바깥에서는 JavaScript, 안에서는 jsx 문법
  // return 뒤에 렌더링 될 부분
  return (
    <>
    <Clock />
    {/* jsx 문법을 읽는 곳 */}
    <div className='card'>
      <p>{accounts[0].ownerName}님의 {accounts[0].accountType}</p> 
      <p>{maskAccountNo(accounts[0].accountNo)} </p>
      <p>{formatWonMasked(accounts[0].balance, showFullNo)}</p>
    </div>
    </>
  )
}

export default App
