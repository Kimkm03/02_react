// 1. import 구문
import { useState, useEffect } from "react";

// 2. function 작성

// 3. 함수형 컴포넌트
// 컴포넌트명은 파스칼케이스로 사용
function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);   // 정리 함수
  }, []);

  return <span className="muted">{now.toLocaleTimeString("ko-KR")}</span>;
}

export default Clock