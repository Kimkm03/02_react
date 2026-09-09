import { useState, useEffect } from "react"

// state는 컴포넌트 안에서 사용 및 관리 데이터 변수
// 함수형 컴포넌트 Counter 선언
function Counter() {
    // Array: 참조자료형 값 변경가능
    const [count, setCount] = useState(0);

    const [name, setName] = useState(''); // 추가

    // ❌ 안티패턴: 문제점 1: 파생 상태를 굳이 별도의 state로 만듦
    const [nameError, setNameError] = useState('');

    const handleInputChange = (e) => {
        // e (Event Object): 이벤트 객체입니다. 
        // 키보드 입력이나 클릭 등 이벤트가 발생했을 때, 브라우저가 해당 이벤트와 관련된 정보를 담아 전달해 줍니다.
        // e.target: 이벤트가 발생한 바로 그 HTML 요소(DOM 엘리먼트)를 가리킵니다. 
        // 이 코드에서는 텍스트를 입력하고 있는 <input> 태그 자체가 됩니다.
        // e.target.value: 해당 입력 요소(input)가 현재 가지고 있는 텍스트 값입니다.
        setName(e.target.value);
        };

        // 처음 엘리먼트가 만들어질 때만 실행됨
        useEffect(() => {
        console.log('👌 처음 렌더딩 될 때만 실행');
        }, []);

        // // 렌더링마다 매번 실행됨 -렌더링 이후
        // useEffect(() => {
        // console.log('렌더링 🎨');
        // });

        // // 마운팅 + count가 변화할때마다 실행됨
        // useEffect(() => {
        // console.log('💯 count 변화');
        // }, [count]);

        // // 마운팅 + name이 변경될때마다 실행됨
        // useEffect(() => {
        // console.log('⭐ name이 변화');
        // }, [name]);

    // const handleInputChange = (e) => {
    //         setName(e.target.value);
    //     };

        // ❌ 안티패턴: 문제점 2: name이 바뀔 때마다 useEffect를 통해 에러 상태를 업데이트함
        // useEffect(() => {
        //     if (name.length > 5) {
        //         setNameError('❌ 이름은 5글자 이내로 입력해주세요.');
        //         console.log(nameError)
        //     } else {
        //         setNameError('');
        //     }
        // }, [name]);

    return ( <>
        <button onClick={() => setCount(count + 1)}> {count} </button>
            <span>count: {count} </span>

            {/* 추가 */}
            <input type="text" value={name} onChange={handleInputChange}/>
            <span>name: {name} /  {nameError} </span>
    </>)
}

export default Counter;