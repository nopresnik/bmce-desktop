export default interface APIResult<T> {
  success: boolean;
  data: T;
}
