import { makeVar } from '@apollo/client';

interface Lead {
  id: string;
  name: string;
  mobileNo: string;
}

// Reactive vars
export const leadFormVar = makeVar<Lead>({
  id: '',
  name: '',
  mobileNo: '',
});

export const leadsVar = makeVar<Lead[]>([]);