// 필요한 부품들을 가져옴
import './App.css'
import { useState } from 'react';
import Clock from './components/Clock';
import Header from './components/Header';
// import Counter from './components/Counter';
import Panel from './components/Panel';
import AccountCard from './components/AccountCard';
import TransactionRow from './components/TransactionRow'
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
    status: "지급정지",
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

const transactions = [
  {
    id: 1,
    txType: "입금",
    amount: 500000,
    category: "급여",
    memo: "월급",
    counterparty: "회사",
    txDatetime: "2026-09-01T10:30:00",
  },
  {
    id: 2,
    txType: "출금",
    amount: 35000,
    category: "식비",
    memo: "점심 식사",
    counterparty: "맛있는 식당",
    txDatetime: "2026-09-02T14:30:00",
  },
  {
    id: 3,
    txType: "출금",
    amount: 12000,
    category: "교통",
    memo: "교통카드 충전",
    counterparty: "교통카드",
    txDatetime: "2026-09-03T17:00:00",
  },
];

  const [showFullNo, setShowFullNo] = useState(false);
  //     ↑현재 값      ↑바꾸는 함수              ↑처음값

  // showAmount 여부에 따라 금액이 보이거나 숨기기
  const [showAmount, setShowAmount] = useState(false);
  const accountCards = [];

  for (let i = 0; i < accounts.length; i++) {
        accountCards.push(
          <AccountCard accountNo={ accounts[i].accountNo } 
          accountType={ accounts[i].accountType}
          balance={ accounts[i].balance }
          status={ accounts[i].status }
          showFullNo={ showFullNo }
          showAmount={ showAmount }
          />
        )
      }

  // flag 변수: 특정 로직을 끄거나 켜거나 제어하는 변수
  // flag 변수는 default 값을 false로 만들고 사용
  // let showFullNo = true;

  // JSX가 소문자 태그는 HTML, 대문자 태그는 컴포넌트로 인식
  // return ( ) 바깥에서는 JavaScript, 안에서는 jsx 문법
  // return 뒤에 렌더링 될 부분
  return (
    <>
    {/* jsx 문법을 읽는 곳 */}
    {/* 사용 */}
    <Header ownerName={ accounts[0].ownerName}></Header>
    <div className='toolbar'>
      <button className='btn' onClick={() => setShowFullNo(!showFullNo)}>
        {showFullNo ? "계좌번호 숨기기" : "계좌번호 보기"}
      </button>

      <button className='btn' onClick={() => setShowAmount(!showAmount)}>
        {showAmount ? "금액 숨기기" : "금액 보기"}
      </button>
    </div>
    <Clock />
    
    <Panel title="내 계좌">
      { accountCards }
      {/* <AccountCard accountNo={ accounts[0].accountNo } 
        accountType={ accounts[0].accountType}
        balance={ accounts[0].balance }
        status={ accounts[0].status }
        showFullNo={ showFullNo }
        />
      <AccountCard accountNo={ accounts[1].accountNo } 
        accountType={ accounts[1].accountType}
        balance={ accounts[1].balance }
        status={ accounts[1].status }
        showFullNo={ showFullNo }
        /> */}
    </Panel>

    <Panel title="최근 거래">
      {transactions.map((transaction) => (
        <TransactionRow
          key={transaction.id}
          txType={transaction.txType}
          amount={transaction.amount}
          category={transaction.category}
          memo={transaction.memo}
          counterparty={transaction.counterparty}
          txDatetime={transaction.txDatetime}
          hideAmount={!showAmount}
        />
      ))}
    </Panel>
    </>
  )
}

// 이 컴포넌트를 외부에서 import에서 쓸 수 있도록 선언
export default App
