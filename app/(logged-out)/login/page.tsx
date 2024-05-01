"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formSchema } from "@/schemas/formSchema";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = () => {
    console.log("login validation");
  };
  return (
    <>
      <PersonStandingIcon size={50} />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your support</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form 
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                        Email: 
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="test@test.com" 
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                        Este email usalo para iniciar Sesión
                    </FormDescription>

                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                        Password: 
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="123345" 
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                        Contraseña para iniciar Sesión
                    </FormDescription>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="bg-pink-700 cursor-pointer text-white hover:bg-pink-500" type="submit">LOGIN</Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="justify-between">
          <small>No tienes una cuenta</small>

          <Button asChild variant="outline" size="sm">
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default LoginPage;
