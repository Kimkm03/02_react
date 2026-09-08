import { useState, useEffect } from "react";
import TransactionRow from "./TransactionRow";
import { formatWonMasked } from "../utils/format";

// 거래 종류 필터 옵션
const TYPE_OPTIONS = ["전체", "입금", "출금"]
// 카테고리 필터 옵션
const CATEGORY_OPTIONS = ["전체", "식비", "교통", "쇼핑", "급여", "이체", "의료", "통신"]

function TransactionList({ transactions = [], showAmount  }){
    const [filter, setFilter] = useState("전체");
    const [categoryFilter, setCategoryFilter] = useState("전체")
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reloadKey, setReloadKey] = useState(0);

    useEffect(() => {
    setLoading(true);
    setError(null);

    try {
      // 현재는 props로 받은 로컬 데이터를 사용
      // 실제 API를 연결할 때 이 부분에서 fetch를 실행
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, [transactions, reloadKey]);
    
    const visible = transactions.filter((transaction) => {
    const matchesType =
      filter === "전체" || transaction.txType === filter;

    const matchesCategory =
      categoryFilter === "전체" ||
      transaction.category === categoryFilter;

      return matchesType && matchesCategory;
    });

    const visibleTotal = Math.abs(
        visible.reduce(
            (total, transaction) =>
            transaction.txType === "입금"
                ? total + transaction.amount
                : total - transaction.amount,
            0
        )
        );

  if (loading) {
    return <p className="muted">거래 내역을 불러오는 중...</p>;
  }

  if (error) {
    return (
      <>
        <p className="muted">거래 내역을 불러오지 못했습니다.</p>
        <button
          className="btn"
          onClick={() => setReloadKey((key) => key + 1)}
        >
          다시 시도
        </button>
      </>
    );
  }

    return(
        <>
           <div className="chips">
        {TYPE_OPTIONS.map((type) => (
          <button
            key={type}
            className={`chip ${filter === type ? "on" : ""}`}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="chips">
        {CATEGORY_OPTIONS.map((category) => (
          <button
            key={category}
            className={`chip ${
              categoryFilter === category ? "on" : ""
            }`}
            onClick={() => setCategoryFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="summary">
        {visible.length}건 · 합계 {formatWonMasked(visibleTotal, !showAmount)}
      </p>

      {visible.map((transaction) => (
        <TransactionRow
          key={transaction.id ?? transaction.txId}
          txType={transaction.txType}
          amount={transaction.amount}
          category={transaction.category}
          memo={transaction.memo}
          counterparty={transaction.counterparty}
          txDatetime={transaction.txDatetime}
          hideAmount={!showAmount}
        />
        ))}
    </>
    )
}

export default TransactionList;