import { useState } from "react"

// state는 컴포넌트 안에서 사용 및 관리 데이터 변수
// 함수형 컴포넌트 Counter 선언
function Counter() {
    // Array: 참조자료형 값 변경가능
    const [count, setCount] = useState(0);
    return ( <>
    <button onClick={() => setCount(count + 1)}> {count} </button>
    </>)
}

export default Counter;