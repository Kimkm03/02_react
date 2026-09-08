// 필요한 부품들을 가져옴
import './App.css'
import { useState } from 'react';
import Clock from './components/Clock';
import Header from './components/Header';
// import Counter from './components/Counter';
import Panel from './components/Panel';
import AccountCard from './components/AccountCard';
import TransactionList from './components/TransactionList'
import ExchangeRate from './components/ExchangeRate';
import { formatWonMasked } from './utils/format';
// 02_html기초.html 안에 만들었던 계좌카드의 css를 가져와서 꾸미기

// 실제로 사용될 화면 그림
function App() {
  // 화면이 렌더링 되기 위해 필요한 값(data)
  const initialaccounts = [
  {
    accountId: 1, // 중복을 구분하기 위한 구분자역할
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

  // 고객 전체 정보를 state로 관리
  const [accounts, setAccounts] = useState(initialaccounts);

  // flag 변수: 특정 로직을 끄거나 켜거나 제어하는 변수
  // flag 변수는 default 값을 false로 만들고 사용
  // let showFullNo = true;
  const [showFullNo, setShowFullNo] = useState(false);
  //     ↑현재 값      ↑바꾸는 함수              ↑처음값

  // showAmount 여부에 따라 금액이 보이거나 숨기기
  const [showAmount, setShowAmount] = useState(false);

  // accounts의 특정 위치의 balance를 변경하는 함수
  // accountId 고유key로 특정 고객의 balance 변경
  // 입력받은 accountId가 일치하는 고객의 계좌 dict
  // map 함수로 특정 dict의 모든 값-value에 접근
  // balance라는 key에만 10000을 더함
  function handleDeposit(accountId){
    setAccounts(
      accounts.map((a) => 
        a.accountId === accountId ? {...a, balance: a.balance + 10000} : a)
    )
  }

  // 합계를 매번 다시 계산하는 변수
  const totalbalance = accounts.reduce(
    (total, account) => total + account.balance,
    0
  );

  // for문 예시
  // const accountCards = [];

  // for (let i = 0; i < accounts.length; i++) {
  //       accountCards.push(
  //         <AccountCard accountNo={ accounts[i].accountNo } 
  //         accountType={ accounts[i].accountType}
  //         balance={ accounts[i].balance }
  //         status={ accounts[i].status }
  //         showFullNo={ showFullNo }
  //         showAmount={ showAmount }
  //         />
  //       )
  //     }

  // JSX가 소문자 태그는 HTML, 대문자 태그는 컴포넌트로 인식
  // return ( ) 바깥에서는 JavaScript, 안에서는 jsx 문법
  // return 뒤에 렌더링 될 부분
  return (
    <>
    {/* jsx 문법을 읽는 곳 */}
    {/* 사용 */}
    <Header ownerName={ accounts[0].ownerName}></Header>
    <div className='toolbar'>
      <button className='btn btn-ghost' onClick={() => setShowFullNo(!showFullNo)}>
        {/* 논리연산자를 사용해서 같은 화면을 조건부 렌더링해보세요 */}
        {/* showFullNo ? "계좌번호 숨기기" : "계좌번호 보기" */}
        {showFullNo && "계좌번호 숨기기"}
        {!showFullNo && "계좌번호 보기"}
      </button>

      <button className='btn btn-ghost' onClick={() => setShowAmount(!showAmount)}>
        {showAmount ? "금액 숨기기" : "금액 보기"}
      </button>
    </div>
    <div className='clock'>
      <Clock />
    </div>

    {/* 총 자산 */}
    <div className='total'>
      <Panel>
        <div className="row">
          <span className="muted">총 자산</span>
        </div>
      <strong className="balance">
        {formatWonMasked(totalbalance, !showAmount)}
        </strong>
      </Panel>
    </div>

    
    <Panel title="내 계좌">
      {accounts.map((account) => (
        <AccountCard key={account.accountId} 
                    showFullNo={showFullNo}
                    showAmount={showAmount}
                    onDeposit={() => handleDeposit(account.accountId)} 
                    accountNo={account.accountNo}
                    accountType={account.accountType} 
                    balance={account.balance}
                    status={account.status}  
                     />
        ))}
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

    {/* map()과 key, spread연산자 사용  */}
    <Panel title="최근 거래">
      <TransactionList
        transactions={transactions}
        showAmount={showAmount}
      />

      {/* {transactions.map((tx) => (
        <TransactionRow key={tx.txId} {...tx} />
      ))} */}

    </Panel>

    <Panel title="오늘의 환율">
      <ExchangeRate />
    </Panel>
    </>
  )
}

// 이 컴포넌트를 외부에서 import에서 쓸 수 있도록 선언
export default App
