export interface UserI{
  login : string;
  password: string;
}

export interface UserRegisterI extends UserI{
  role: string
}
