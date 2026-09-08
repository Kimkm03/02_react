// components/AccountCard.jsx
import { useState } from "react";
import StatusBadge from "./StatusBadge";
import { formatWonMasked, maskAccountNo } from "../utils/format";

function AccountCard({ accountNo, accountType, balance, status, showFullNo, showAmount, onDeposit }) {
  const [currentBalance, setCurrentBalance] = useState(balance);

  return (
    <div className="card">
      <div className="row">
        <span className="muted">{accountType}</span>
        <StatusBadge status={status} />
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
  );
}

export default AccountCard;