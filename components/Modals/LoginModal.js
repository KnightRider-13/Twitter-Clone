import { auth } from "@/firebase";
import { closeLoginModal, openLoginModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function LoginModal() {
  const isOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn(){
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function handleGuestSignIn(){
    await signInWithEmailAndPassword(auth, "guest22446688@gmail.com", "22446688")
  }

  return (
    <>
      <button
        className="bg-transparent border border-white text-white w-[160px] rounded-full h-[40px] hover:bg-[#CBD2D7]"
        onClick={() => dispatch(openLoginModal())}
      >
        Log In
      </button>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLoginModal())}
        className="flex justify-center items-center"
      >
        <div
          className="flex justify-center w-[90%] h-[600px] bg-black text-white 
        md:w-[560px] md:h-[600px] border border-gray-700 rounded-lg"
        >
          <div className="w-[90%] mt-8 flex flex-col">
            <h1 className="mt-4 font-bold text-4xl">Sign in to your account</h1>
            <input
              className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8"
              type={"email"}
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
            <input
              className="h-10 rounded-md bg-transparent border border-gray-700 p-6 mt-8"
              type={"password"}
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleSignIn} className="bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md">
              Sign In
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>
            <button onClick={handleGuestSignIn} className="bg-white text-black w-full font-bold text-lg p-2 rounded-md mt-4">
              Sign In as Guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
