import { test, expect } from '@playwright/test';

test.describe.parallel('API tests', () => {
  const baseURL = 'https://reqres.in/api';
  test('Assert Response Status', async ({ request }) => {
    const response = await request.get(`${baseURL}/users/2`);
      expect(response.status()).toBe(200);
      /**
       * Parse Response Body
       */
      const responseBody = JSON.parse(await response.text());
      console.log(responseBody);
  });
  
  test('Assert Invalid Endpoint', async ({ request }) => {
    const response = await request.get(`${baseURL}/users/invalid`);
      expect(response.status()).toBe(404);
  });

  test('Get User Detail', async ({ request }) => {
    const response = await request.get(`${baseURL}/users/2`);
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.data.id).toBe(2);
    expect(responseBody.data.email).toBe('janet.weaver@reqres.in');
    expect(responseBody.data.first_name).toBe('Janet');
    expect(responseBody.data.last_name).toBe('Weaver');
  });
});
