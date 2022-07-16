import React from "react"
import { useAuth } from "../context/AuthProvider"
import { useNavigate } from "react-router-dom"
import GoogleButton from 'react-google-button'
import { Header } from './Header';
import { Balance } from './Balance';
import { IncomeExpense } from './IncomeExpense';
import { ExpenseList } from './ExpenseList';
import { HomeAddExpense } from './HomeAddExpense';

export default function Login() {
  const { login } = useAuth()
  const history = useNavigate()

  async function handleSubmit() {
    try {
      await login()
      history.push("/expense")
    } catch {
      console.log("Failed to log in")
    }
  }
  return (<>
    <GoogleButton style = {{ fontFamily:'sans-serif' }} onClick={handleSubmit} />
    <Header/>
    <Balance/>
    <IncomeExpense/>
    <ExpenseList/>
    <HomeAddExpense/>
  </>
  );
}