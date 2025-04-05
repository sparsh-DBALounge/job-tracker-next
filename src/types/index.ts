export interface RootState {
  auth: {
    user: UserType;
  };
  config: {
    sidebarOpen: boolean;
  };
}

export interface UserType {
  id: number;
  username: string;
  email: string;
  avatarUrl: string;
}
