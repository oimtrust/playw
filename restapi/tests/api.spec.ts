import { test, expect } from '@playwright/test';

test.describe.parallel('API tests', () => {
  const baseURL = 'https://reqres.in/api';
  test('Assert Response Status', async ({ request }) => {
    const response = await request.get(`${baseURL}/users/2`);
      expect(response.status()).toBe(200);
  });
  
  test('Assert Invalid Endpoint', async ({ request }) => {
    const response = await request.get(`${baseURL}/users/invalid`);
      expect(response.status()).toBe(404);
  });
});
