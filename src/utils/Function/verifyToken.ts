import { jwtDecode } from "jwt-decode";
import type { TAdmin } from "../types/globalTypes";

export const verifyToken = (token: string): TAdmin => {
  return jwtDecode(token);
};
