import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import { fetchUser } from './utils'
import { useEffect } from "react";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();

    if(!user) navigate('/auth')

  }, [navigate])

  return (
    <div className="flex w-[100dvw] h-screen">
      <Routes>
        <Route path="/*" exact element={<Home />}  />
        <Route path="/auth" exact element={<Auth />} />
      </Routes>
    </div>
  )
}