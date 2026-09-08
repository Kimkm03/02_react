import { useState, useEffect } from "react";

function ExchangeRate() {
  const [rate, setRate] = useState(null); // 나중에 바뀌는 값
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // data를 API로 호출해서 가져오는 JS의 비동기 메서드(함수)
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => {
        if (!res.ok) throw new Error("응답 오류 " + res.status);
        return res.json();
      })
      .then((data) => setRate(data.rates.KRW))
      .catch((e) => {
          setError(e.message); console.error("환율 조회 오류: ", e);
        })
      .finally(() => {
        setLoading(false); console.log("환율 조회 완료");
    });
  }, [reloadKey]);

  if (loading) return <p className="muted">환율을 불러오는 중...</p>;
  if (error) return (<>
    <p className="muted">환율을 못 불러왔습니다</p>;
    <button onClick={() => setReloadKey((key) => key + 1)}>다시 시도 {reloadKey} </button>
  </>);
  return <strong>1달러 = {Math.round(rate).toLocaleString("ko-KR")}원</strong>;
}

export default ExchangeRate;