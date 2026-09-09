// 계좌 상태에 따라 배지 색 변경
import { useUser } from "../contexts/UserContext";

const colors = {
    "정상" : "#00FF00",
    "휴면" : "#858685",
    "지급정지" : "#FF0000",
    "해지" : "#1f1f1f"
}

// inline(코드 사이에 css 입힐 경우) : style={{ key : value }}
function StatusBadge(){
    const user = useUser();
    const { status } = user;
    
    return (
        <span className="badge" style={{ backgroundColor : colors[status] }}>
            {status}
        </span>
    )
}

export default StatusBadge;