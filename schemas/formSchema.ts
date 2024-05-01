import * as z from 'zod';

export const formSchema = z.object({

    email: z.string().email({message: 'debe ser un mail'}),
    password: z.string().min(3,{message: 'debe contener minimo 3 caracteres'})

})