export const TOKEN_KEY: string = "@fortes-desafio";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
  };

export const login = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}
