 // /src/api/exchange.js

import { transactions } from "../data/mockData.js";

// 환율 API. 
const API_URL = "https://open.er-api.com/v6/latest/USD";

export function fetchTransactions() {
  return transactions;
}

export async function fetchUsdKrw() {

  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("응답 오류 " + res.status);
  const data = await res.json();
  return data.rates.KRW;
}

