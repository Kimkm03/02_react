// components/AccountCard.jsx
import StatusBadge from "./StatusBadge";
import { formatWonMasked, maskAccountNo } from "../utils/format";
import { useUser, UserProvider } from "../contexts/UserContext";

function AccountCard({ accountNo, accountType, balance, status, showFullNo, showAmount, onDeposit }) {
  // const [currentBalance, setCurrentBalance] = useState(balance);
  const user = useUser();

  return (
    <UserProvider user={{ ...user, status }}>
      <div className="card">
        <div className="row">
          <span className="muted">{accountType}</span>
            <StatusBadge />
        </div>
        <p className="muted">
          {showFullNo ? accountNo : maskAccountNo(accountNo, showFullNo)}
          </p>
        <strong className="balance">
          {formatWonMasked(balance, !showAmount)}
          </strong>
          {/* 1만원 입급 추가 */}
          <button className="btn" onClick={onDeposit}>1만원 입금</button>
      </div>
    </UserProvider>
  );
}

export default AccountCard;