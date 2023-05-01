import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";

const Login = () => {
  return (
    <div className="lg:w-3/12 w-10/12  mx-auto mt-12">
        <h1 className="text-center text-3xl font-bold mb-4">Please Login</h1>
      <form className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email1"
        value="Your email"
      />
    </div>
    <TextInput
      id="email1"
      type="email"
      placeholder="Your Email"
      required={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password1"
        value="Your password"
      />
    </div>
    <TextInput
      id="password1"
      type="password"
      placeholder="Your Password"
      required={true}
    />
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="remember" />
    <Label htmlFor="remember">
      Remember me
    </Label>
  </div>
  <Button type="submit">
    Submit
  </Button>
</form>
    </div>
  );
};

export default Login;
