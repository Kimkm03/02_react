// 필요한 부품들을 가져옴
import './App.css'
import Clock from './components/Clock';
import { maskAccountNo } from './utils/format';
import { formatWonMasked } from './utils/format';
// 02_html기초.html 안에 만들었던 계좌카드의 css를 가져와서 꾸미기

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

// 이 컴포넌트를 외부에서 import에서 쓸 수 있도록 선언
export default App
