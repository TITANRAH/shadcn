import * as z from "zod";

export const formSignUpSchema = z
  .object({
    email: z.string().email({ message: "debe ser un mail" }),
    accountType: z.enum(["personal", "company"]),
    companyName: z.string().optional(),
    numberOfEmployees: z.coerce.number().optional(),
    dob: z.date().refine((date) => {
      const today = new Date();
      const eighteedYearsAgo = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
      );

      return date <= eighteedYearsAgo;
    }, "Debes ser mayor de 18 años"),
    password: z
      .string()
      .min(8, "Mínimo 8 caracteres")
      .refine((password) => {
        // debe contar con un carater especial y  una mayuscula
        return /^(?=.*[!@#$%^&*])(?=.*[A-Z]).*$/.test(password);
      }, "Mínimo 1 caracter especial y una mayúscula"),

    passwordConfirm: z.string(),
  })
  .superRefine((data, ctx) => {
    // ctx es context
    if(data.password !== data.passwordConfirm){
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['passwordConfirm'],
        message: 'Passwords distintos'
      })
    }
    if (data.accountType === "company" && !data.companyName) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["companyName"],
        message: "El nombre de compañia es requerido",
      });
    }
    if (
      data.accountType === "company" &&
      (!data.numberOfEmployees || data.numberOfEmployees < 1)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["numberOfEmployees"],
        message: "El número de compañías es requerido",
      });
    }
  });
