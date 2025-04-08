type PoolTransaction = {
  tx_id: string;
  contract_address: string;
  amount: number;
  from_address: string;
  to_address: string;
  timestamp: number;
  raw_transaction: unknown | null;
  id: number;
};

export type Pools = {
  id: number;
  promised_percentage: number;
  execution_days: number;
  expected_amount: number;
  current_amount: number | null;
  status: "active" | "inactive" | string;
  created_at: string;
  deposit_amount_summ: number;
  revenue_amount: number;
  deposit_transactions: PoolTransaction[];
};

export type AllPoolsResponse = {
  id: number;
  promised_percentage: number;
  execution_days: number;
  expected_amount: number;
  current_amount: number;
  status: "active" | "inactive" | "completed";
};
