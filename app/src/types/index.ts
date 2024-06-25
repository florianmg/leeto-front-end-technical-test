export type BeneficiariesTypes = 'user' | 'companion' | 'child';
export type GiftState = 'active' | 'archived';
export type GiftBenificiary = {
  id: number;
  type: BeneficiariesTypes;
  firstName: string;
  consumption: {
    allowedAmount: number;
    consumedAmount: number;
  };
};
export type Gift = {
  id: number;
  description: string;
  name: string;
  openingDate: string;
  closingDate: string;
  state: GiftState;
  allowedAmount: number;
  consumedAmount: number;
  beneficiaries: GiftBenificiary[];
};
