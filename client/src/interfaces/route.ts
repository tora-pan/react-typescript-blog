export default interface iRoute {
  path: string;
  name: string;
  auth: boolean;
  exact: boolean;
  component: any;
  props?: any;
}
