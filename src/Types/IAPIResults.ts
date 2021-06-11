export default interface APIResults<T> {
  success: boolean;
  data: [T];
}
