import { object, string, ref } from "yup";

export const authSchema = object().shape({
  email: string()
    .email("El correo electrónico no es válido")
    .required("El correo electrónico es obligatorio"),
  password: string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es obligatoria"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Las contraseñas deben coincidir")
    .required("La confirmación de la contraseña es obligatoria"),
});
