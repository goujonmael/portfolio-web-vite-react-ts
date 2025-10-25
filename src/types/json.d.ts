declare module "*.json" {
  // prefer unknown instead of `any` to comply with eslint rules
  const value: unknown;
  export default value;
}
