import { Purchase } from "./purchase.model";
export class Property {
  PropertyID: number;
  PropertyCode: string;
  Address: string;
  City: string;
  State: string;
  ZipCode: string;
  County: string;
  FullAddress: string;
  DealType: string;
  Purchase: Purchase;
}
