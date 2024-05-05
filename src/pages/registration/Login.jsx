// import React, { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { auth, fireDB } from "../../firebase/FirebaseConfig";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { collection, onSnapshot, query, where } from "firebase/firestore";
// import toast from "react-hot-toast";
// import Loader from "../../components/loader/Loader";
// import Navbar from "../../components/navbar/Navbar";
// import myContext from "../../context/myContext";

// const Login = () => {
//     const context = useContext(myContext);
//     const { loading, setLoading } = context;
//     const navigate = useNavigate();

//     const [userLogin, setUserLogin] = useState({
//         emailPrefix: "",
//         password: ""
//     });

//     const userLoginFunction = async () => {
//         if (userLogin.emailPrefix === "" || userLogin.password === "") {
//             toast.error("All Fields are required");
//             return;
//         }

//         setLoading(true);
//         try {
//             const email = `${userLogin.emailPrefix}@gmail.com`;
//             const users = await signInWithEmailAndPassword(auth, email, userLogin.password);
//             if (!users.user.emailVerified) {
//                 setLoading(false);
//                 toast.error("Email not verified. Please verify your email.");
//                 return;
//             }

//             try {
//                 const q = query(
//                     collection(fireDB, "user"),
//                     where('uid', '==', users?.user?.uid)
//                 );
//                 const data = onSnapshot(q, (QuerySnapshot) => {
//                     let user;
//                     QuerySnapshot.forEach((doc) => user = doc.data());
//                     localStorage.setItem("users", JSON.stringify(user));
//                     setUserLogin({
//                         emailPrefix: "",
//                         password: ""
//                     });
//                     toast.success("Login Successfully");
//                     setLoading(false);
//                     if (user.role === "user") {
//                         navigate('/user-dashboard');
//                     } else {
//                         navigate('/admin-dashboard');
//                     }
//                 });
//                 return () => data;
//             } catch (error) {
//                 console.log(error);
//                 setLoading(false);
//             }
//         } catch (error) {
//             console.log(error);
//             setLoading(false);
//             toast.error("Login Failed");
//         }
//     };

//     return (
//         <div>
//             <Navbar />
//             <div className='flex justify-center items-center h-screen' style={{ backgroundImage: `url('/back.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//                 {loading && <Loader />}
//                 <div className="login_Form bg-blue-50 px-8 py-6 border border-blue-100 rounded-xl shadow-md">
//                     <div className="mb-5">
//                         <h2 className='text-center text-2xl font-bold text-blue-500 '>
//                             Login
//                         </h2>
//                     </div>
//                     <div className="mb-3 flex items-center">
//                         <input
//                             type="text"
//                             name="email"
//                             placeholder='Email Address'
//                             value={userLogin.emailPrefix}
//                             onChange={(e) => {
//                                 setUserLogin({
//                                     ...userLogin,
//                                     emailPrefix: e.target.value
//                                 })
//                             }}
//                             className='bg-blue-50 border border-blue-200 px-2 py-2 rounded-md outline-none placeholder-blue-200'
//                         />
//                         <span className="ml-1">@gmail.com</span>
//                     </div>
//                     <div className="mb-5">
//                         <input
//                             type="password"
//                             placeholder='Password'
//                             value={userLogin.password}
//                             onChange={(e) => {
//                                 setUserLogin({
//                                     ...userLogin,
//                                     password: e.target.value
//                                 })
//                             }}
//                             className='bg-blue-50 border border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-200'
//                         />
//                     </div>
//                     <div className="mb-5">
//                         <button
//                             type='button'
//                             onClick={userLoginFunction}
//                             className='bg-blue-500 hover:bg-blue-600 w-full text-white text-center py-2 font-bold rounded-md '
//                         >
//                             Login
//                         </button>
//                     </div>
//                     <div>
//                         <h2 className='text-black'>Don't Have an account <Link className=' text-blue-500 font-bold' to={'/signup'}>Signup</Link></h2>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";
import myContext from "../../context/myContext";

const Login = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;
    const navigate = useNavigate();

    const [userLogin, setUserLogin] = useState({
        emailPrefix: "",
        password: ""
    });

    const userLoginFunction = async () => {
        if (userLogin.emailPrefix === "" || userLogin.password === "") {
            toast.error("Please enter both email and password.");
            return;
        }

        setLoading(true);
        try {
            const email = `${userLogin.emailPrefix}@gmail.com`;
            const users = await signInWithEmailAndPassword(auth, email, userLogin.password);
            if (!users.user.emailVerified) {
                setLoading(false);
                toast.error("Email not verified. Please verify your email.");
                return;
            }

            try {
                const q = query(
                    collection(fireDB, "user"),
                    where('uid', '==', users?.user?.uid)
                );
                const data = onSnapshot(q, (QuerySnapshot) => {
                    let user;
                    QuerySnapshot.forEach((doc) => user = doc.data());
                    localStorage.setItem("users", JSON.stringify(user));
                    setUserLogin({
                        emailPrefix: "",
                        password: ""
                    });
                    toast.success("Login Successfully");
                    setLoading(false);
                    if (user.role === "user") {
                        navigate('/user-dashboard');
                    } else {
                        navigate('/admin-dashboard');
                    }
                });
                return () => data;
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            toast.error("Login Failed");
        }
    };

    const forgotPassword = async () => {
        if (userLogin.emailPrefix === "") {
            toast.error("Please enter your email address.");
            return;
        }

        try {
            const email = `${userLogin.emailPrefix}@gmail.com`;
            await sendPasswordResetEmail(auth, email);
            toast.success("Password reset email sent successfully. Please check your email.");
        } catch (error) {
            console.log(error);
            toast.error("Failed to send password reset email.");
        }
    };

    return (
        <div>
            <Navbar />
            <div className='flex justify-center items-center h-screen' style={{ backgroundImage: `url('/back.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                {loading && <Loader />}
                <div className="login_Form bg-blue-50 px-8 py-6 border border-blue-100 rounded-xl shadow-md">
                    <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold text-blue-500 '>
                            Login
                        </h2>
                    </div>
                    <div className="mb-3 flex items-center">
                        <input
                            type="text"
                            name="email"
                            placeholder='Email Address'
                            value={userLogin.emailPrefix}
                            onChange={(e) => {
                                setUserLogin({
                                    ...userLogin,
                                    emailPrefix: e.target.value
                                })
                            }}
                            className='bg-blue-50 border border-blue-200 px-2 py-2 rounded-md outline-none placeholder-blue-200'
                        />
                        <span className="ml-1">@gmail.com</span>
                    </div>
                    <div className="mb-5">
                        <input
                            type="password"
                            placeholder='Password'
                            value={userLogin.password}
                            onChange={(e) => {
                                setUserLogin({
                                    ...userLogin,
                                    password: e.target.value
                                })
                            }}
                            className='bg-blue-50 border border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-200'
                        />
                    </div>
                    <div className="mb-5 flex justify-between">
                        <button
                            type='button'
                            onClick={userLoginFunction}
                            className='bg-blue-500 hover:bg-blue-600 w-1/2 text-white text-center py-2 font-bold rounded-md '
                        >
                            Login
                        </button>
                        <button
                            type='button'
                            onClick={forgotPassword}
                            className='bg-blue-500 hover:bg-blue-600 w-1/2 text-white text-center py-2 font-bold rounded-md '
                        >
                            Forgot Password
                        </button>
                    </div>
                    <div>
                        <h2 className='text-black'>Don't Have an account <Link className=' text-blue-500 font-bold' to={'/signup'}>Signup</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
