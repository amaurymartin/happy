// When changing value of declared env, use expo r -c to reser expo cache

declare module 'react-native-dotenv' {
  export const API_SCHEME: string;
  export const API_DOMAIN: string;
  export const API_PORT: string;
}
