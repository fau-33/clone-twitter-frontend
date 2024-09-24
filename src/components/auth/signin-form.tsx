"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const SigninForm = () => {
  const router = useRouter();
  const [emailField, setEmailFiled] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleEnterButton = () => {
    router.replace('/home');
  }

  return(
    <>
      <Input 
        placeholder="Digite seu e-mail"
        value={emailField}
        onChange={t => setEmailFiled(t)}
        
      />
      

      <Input
        
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={t => setPasswordField(t)}
        password
      />

      
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button onClick={handleEnterButton}>Entrar</button>
    </>
  );
}