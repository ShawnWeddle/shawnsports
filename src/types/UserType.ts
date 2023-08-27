export type UserType = {
  token: string;
  userId: string;
  email: string;
  username: string;
};

export type ClientType = Omit<UserType, "token">;