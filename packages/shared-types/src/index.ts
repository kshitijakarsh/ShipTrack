export interface GitHubDeviceCodeResponse {
  device_code: string;
  user_code: string;
  verification_uri: string;
  expires_in: number;
  interval: number;
}

export interface GitHubTokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
}

export interface UserProfile {
  login: string;
  id: number;
  name: string | null;
  email: string | null;
}

export interface AuthConfig {
  github?: {
    access_token: string;
    username?: string;
  };
}
