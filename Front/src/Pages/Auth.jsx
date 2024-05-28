import { useState } from "react"
import { logo, signin } from "../assets"
import { useNavigate } from "react-router-dom"

const Auth = () => {
  const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', password: '', confirmpassword: '' })
  const [isLogin, setIsLogin] = useState(true)
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(formData)

    setFormData({ email: '', password: '' });
  }

  const handleSignup = (e) => {
    e.preventDefault();

    console.log(formData)

    setFormData({ firstname: '', lastname: '', email: '', password: '', confirmpassword: '' });
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      {isLogin ? (
        <div className="flex justify-center items-center bg-red-100 w-[calc(100dvw-350px)] h-[calc(100dvh-100px)] shadow-md rounded-xl">
          {/* Left side */}
          <div className="flex flex-col w-[40%] h-full relative overflow-hidden rounded-s-xl transition-all">
            <img src={signin} className="w-full h-full object-cover" alt="login_banner" />
            <div className="absolute w-full h-full flex flex-col justify-center items-center gap-6 p-2 bg-black/50">
              <p className="font-extrabold text-3xl text-white text-center">Bienvenue</p>
              <p className="text-base text-balance font-semibold text-white text-center">Pour rester connecté avec nous, inscrivez-vous avec vos infos personelles</p>
              <button className="flex justify-center items-center text-white h-8 w-[150px] text-[13px] p-1.5 px-2.5 border hover:border-2 hover:bg-white/30 border-white rounded-full transition-colors" onClick={() => setIsLogin(false)}>Inscrivez-vous</button>
            </div>
          </div>
          {/* Right side */}
          <div className="flex flex-col w-[60%] h-full bg-green-50 rounded-e-xl justify-center items-center transition-all">
            <div className="w-full h-full flex flex-col justify-center items-center gap-2">
              <div className="w-[170px] flex justify-center items-center mb-4">
                <img src={logo} alt="logo" className="w-full h-full object-contain" />
              </div>
              <p className="text-2xl font-extrabold">Restez connectés</p>
              <p className="font-light text-sm text-balance text-center text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
              <form className="w-full flex flex-col justify-center items-center mt-4" onSubmit={handleLogin}>
                {/* Email */}
                <div className="relative mb-2">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"/></svg>
                  </div>
                  <input type="email" name="email" value={formData.email} className="bg-gray-50 border w-[300px] border-gray-300 text-gray-900 text-[13px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 outline-none" placeholder="name@gmail.com" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                {/* Password */}
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24"><path fill="currentColor" d="M4 13q-1.25 0-2.125-.875T1 10t.875-2.125T4 7t2.125.875T7 10t-.875 2.125T4 13m-2 6v-2h20v2zm10-6q-1.25 0-2.125-.875T9 10t.875-2.125T12 7t2.125.875T15 10t-.875 2.125T12 13m8 0q-1.25 0-2.125-.875T17 10t.875-2.125T20 7t2.125.875T23 10t-.875 2.125T20 13"/></svg>
                  </div>
                  <input type="password" name="password" value={formData.password} className="bg-gray-50 border w-[300px] border-gray-300 text-gray-900 text-[13px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 outline-none" placeholder="***********" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                </div>
                <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5">Connexion</button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center bg-red-100 w-[calc(100dvw-350px)] h-[calc(100dvh-100px)] shadow-md rounded-xl">
          {/* Left side */}
          <div className="flex flex-col w-[60%] h-full bg-green-50 rounded-s-xl justify-center items-center transition-all p-4">
            <div className="w-full h-full flex flex-col justify-center items-center gap-2 p-2">
              <div className="w-[120px] flex justify-center items-center mb-2">
                <img src={logo} alt="logo" className="w-full h-full object-contain" />
              </div>
              <p className="text-2xl font-extrabold">Inscrivez-vous</p>
              <p className="font-light text-sm text-balance text-center text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
              <form className="max-w-[420px] flex flex-col justify-center items-center mt-4" onSubmit={handleSignup}>
                <div className="flex justify-center items-center md:flex-col gap-2 w-full">
                  {/* Lastname */}
                  <div className="relative mb-2 w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
                    </div>
                    <input type="text" name="lastname" value={formData.lastname} className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-[13px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2 outline-none" placeholder="Nom(s)" onChange={(e) => setFormData({ ...formData, lastname: e.target.value })} />
                  </div>
                  {/* Firstname */}
                  <div className="relative mb-2 w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15t3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5t1.013-2.488T12 6t2.488 1.013T15.5 9.5t-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"/></svg>
                    </div>
                    <input type="text" name="firstname" value={formData.firstname} className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-[13px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2 outline-none" placeholder="Prénom(s)" onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} />
                  </div>
                </div>

                {/* Email */}
                <div className="relative mb-2 w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"/></svg>
                  </div>
                  <input type="email" name="email" value={formData.email} className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-[13px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2 outline-none" placeholder="Adresse mail" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>

                <div className="flex justify-center items-center gap-2 w-full">
                  {/* Password */}
                  <div className="relative mb-6 w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24"><path fill="currentColor" d="M4 13q-1.25 0-2.125-.875T1 10t.875-2.125T4 7t2.125.875T7 10t-.875 2.125T4 13m-2 6v-2h20v2zm10-6q-1.25 0-2.125-.875T9 10t.875-2.125T12 7t2.125.875T15 10t-.875 2.125T12 13m8 0q-1.25 0-2.125-.875T17 10t.875-2.125T20 7t2.125.875T23 10t-.875 2.125T20 13"/></svg>
                    </div>
                    <input type="password" name="password" value={formData.password} className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-[13px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2 outline-none" placeholder="Mot de passe" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                  </div>
                  {/* Confirm password */}
                  <div className="relative mb-6 w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500" viewBox="0 0 24 24"><path fill="currentColor" d="M4 13q-1.25 0-2.125-.875T1 10t.875-2.125T4 7t2.125.875T7 10t-.875 2.125T4 13m-2 6v-2h20v2zm10-6q-1.25 0-2.125-.875T9 10t.875-2.125T12 7t2.125.875T15 10t-.875 2.125T12 13m8 0q-1.25 0-2.125-.875T17 10t.875-2.125T20 7t2.125.875T23 10t-.875 2.125T20 13"/></svg>
                    </div>
                    <input type="password" name="confirmpassword" value={formData.confirmpassword} className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-[13px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2 outline-none" placeholder="Confirmer le mot de passe" onChange={(e) => setFormData({ ...formData, confirmpassword: e.target.value })} />
                  </div>
                </div>
                <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5">Confirmer</button>
              </form>
            </div>
          </div>
          {/* Right side */}
          <div className="flex flex-col w-[40%] h-full relative overflow-hidden rounded-e-xl transition-all">
            <img src={signin} className="w-full h-full object-cover" alt="login_banner" />
            <div className="absolute w-full h-full flex flex-col justify-center items-center gap-6 p-2 bg-black/50">
              <p className="font-extrabold text-3xl text-white text-center">Déjà membre ?</p>
              <p className="text-base text-balance font-semibold text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper nulla dui, sit amet consectetur risus dictum id.</p>
              <button className="flex justify-center items-center text-white h-8 w-[150px] text-[13px] p-1.5 px-2.5 border hover:border-2 hover:bg-white/30 border-white rounded-full transition-colors" onClick={() => setIsLogin(true)}>Connectez-vous</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Auth