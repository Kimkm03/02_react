// 제목이 있는 섹션(패널)을 구분하는 컴포넌트
// components/Panel.jsx
import { useUser } from "../contexts/UserContext";

function Panel({ title, children }) {
  const user = useUser();

  const panelTitle =
    title === "내 계좌"
      ? `${user.name}님의 계좌`
      : title;

  return (
    <section className="panel">
      <h2>{panelTitle} </h2>
      {children}
    </section>
  );
}

export default Panel;