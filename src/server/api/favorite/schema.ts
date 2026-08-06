import { z, object, string, } from "zod";
import type { TypeOf } from "zod";

export const createFavoriteSchema = object({
  favorite: object({
    F1: string().nullable(),
    NFL: string().nullable(), 
    NBA: string().nullable(),
    MLB: string().nullable(),
    NHL: string().nullable(),
    MLS: string().nullable(),
    WNBA: string().nullable(),
    CFL: string().nullable(),
    UFL: string().nullable(),
    IFL: string().nullable(),
    NGL: string().nullable(),
    AAA: string().nullable(),
    AA: string().nullable(),
    HA: string().nullable(),
    SA: string().nullable(),
    AHL: string().nullable(),
    ECHL: string().nullable(),
    PWHL: string().nullable(),
    MLV: string().nullable(),
  }),
  client: object({
    userId: string(),
    email: string(),
    username: string(),
  }),
});

export type CreateFavoriteInput = TypeOf<typeof createFavoriteSchema>;