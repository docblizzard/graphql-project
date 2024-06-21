import authService from "@/services/authService";

describe('authService', () => {
  it(' when loginUser is successful is returns a 200 status and a token', async () => {
    const mockResponse = { token: 'mockedToken' };
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(mockResponse),
    });

    const result = await authService.loginUser({
      username: 'doc',
      pwd: 'doc',
    });

    expect(result).toEqual('mockedToken');
  });

});