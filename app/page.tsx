"use client";

import { User } from "@/types/User";
import { useEffect, useState } from "react";
import { serialize } from "v8";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setUsers(json);
      })
      .catch(() => {
        console.log("error 404");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl ">Lista de usuários</h1>
      {loading && "loading.."}
      {!loading && users.length > 0 && (
        <ul>
          {users.map((item) => (
            <li key={item.id}>
              {item.name} ({item.address.city})
            </li>
          ))}
        </ul>
      )}
      {!loading && users.length === 0 && "não há usuarios para exibir"}
    </div>
  );
};

export default Page;
