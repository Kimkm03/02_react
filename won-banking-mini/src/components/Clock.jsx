// 1. import 구문

// 2. function 작성

// 3. 함수형 컴포넌트
// 컴포넌트명은 파스칼케이스로 사용
function Clock() {
  const now = new Date();
  return <span className="clock">{now.toLocaleTimeString("ko-KR")}</span>;
}

export default Clock