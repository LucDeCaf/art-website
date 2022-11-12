"use client";

import { ChangeEventHandler, useEffect, useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => console.log(formData), [formData]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.id]: e.target.value }));
  };

  return (
    <main className="p-4 w-full h-[calc(100vh-9rem)] flex items-center justify-center">
      <form className="flex flex-col w-full bg-slate-500 rounded-md p-4">
        <h1 className="text-4xl font-bold mb-2">Login to your account</h1>
        <label htmlFor="email">Email</label>
        <input
          className="rounded-md mb-4 h-8"
          id="email"
          type="text"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          className="rounded-md mb-4 h-8"
          id="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
      </form>
    </main>
  );
}
