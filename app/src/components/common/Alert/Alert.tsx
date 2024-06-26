import { AlertProps } from './types';

export const Alert = ({ title, message }: AlertProps) => (
  <div className="w-full space-y-2 rounded-lg bg-slate-50 p-4">
    <p className="text-sm font-semibold">{title}</p>
    <p className="text-base">{message}</p>
  </div>
);
