type Benificiaries = 'user' | 'companion' | 'child';

export type BenificiariesIconsMap = {
  [key in Benificiaries]: string;
};

export type BenificiariesIconProps = {
  type: Benificiaries;
};
