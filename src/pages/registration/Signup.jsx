import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import Navbar from "../../components/navbar/Navbar";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const Signup = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userSignup, setUserSignup] = useState({
        name: "",
        emailPrefix: "",
        password: "",
        role: "user"
    });

    /**========================================================================
     *                          User Signup Function 
    *========================================================================**/

    const userSignupFunction = async () => {
        // validation 
        if (userSignup.name === "" || userSignup.emailPrefix === "" || userSignup.password === "") {
            toast.error("All Fields are required")
        }

        setLoading(true);
        try {
            const email = `${userSignup.emailPrefix}@gmail.com`;
            const users = await createUserWithEmailAndPassword(auth, email, userSignup.password);

            // send email verification
            await sendEmailVerification(auth.currentUser);

            // create user object
            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }

            // create user Reference
            const userReference = collection(fireDB, "user");

            // Add User Detail
            await addDoc(userReference, user);

            setUserSignup({
                name: "",
                emailPrefix: "",
                password: ""
            });

            toast.success("Signup Successfully. Please verify your email before logging in.");

            setLoading(false);
            navigate('/login');
        } catch (error) {
            console.log(error);
            setLoading(false);
        }

    }
    return (
        <div>
            <Navbar />
            <div className='flex justify-center items-center h-screen'>
                {loading && <Loader />}
                {/* Signup Form  */}
                <div className="signup_form bg-blue-50 px-8 py-6 border border-blue-100 rounded-xl shadow-md">
                    {/* Top Heading  */}
                    <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold text-blue-500 '>
                            Signup
                        </h2>
                    </div>

                    {/* Input One (Full Name) */}
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder='Full Name'
                            value={userSignup.name}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    name: e.target.value
                                })
                            }}
                            className='bg-blue-50 border border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-200'
                        />
                    </div>

                    {/* Input Two (Email Prefix) */}
                    <div className="mb-3 flex items-center">
                        <input
                            type="text"
                            placeholder='Email Address'
                            value={userSignup.emailPrefix}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    emailPrefix: e.target.value
                                })
                            }}
                            className='bg-blue-50 border border-blue-200 px-2 py-2 rounded-md outline-none placeholder-blue-200'
                        />
                        <span className="ml-1">@gmail.com</span>
                    </div>

                    {/* Input Three (Password) */}
                    <div className="mb-5">
                        <input
                            type="password"
                            placeholder='Password'
                            value={userSignup.password}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    password: e.target.value
                                })
                            }}
                            className='bg-blue-50 border border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-200'
                        />
                    </div>

                    {/* Signup Button  */}
                    <div className="mb-5">
                        <button
                            type='button'
                            onClick={userSignupFunction}
                            className='bg-blue-500 hover:bg-blue-600 w-full text-white text-center py-2 font-bold rounded-md '
                        >
                            Signup
                        </button>
                    </div>

                    {/* Login Link  */}
                    <div>
                        <h2 className='text-black'>Have an account <Link className=' text-blue-500 font-bold' to={'/login'}>Login</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;