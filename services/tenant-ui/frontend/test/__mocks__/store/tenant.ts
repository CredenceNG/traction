import { vi } from 'vitest';

const store: { [key: string]: any } = {
  clearTenant: vi.fn(),
  tenant: {
    value: {
      tenant_name: 'test',
    },
  },
  endorserInfo: {
    value: null,
  },
  getEndorserInfo: vi.fn().mockResolvedValue({
    endorser_did: 'SVfHGCEEvEFmpBPcxgNqRR',
    endorser_name: 'endorser',
  }),
  getIssuanceStatus: vi.fn().mockResolvedValue('success'),
  getSelf: vi.fn().mockResolvedValue('success'),
  getTenantConfig: vi.fn().mockResolvedValue('success'),
};

export { store };
