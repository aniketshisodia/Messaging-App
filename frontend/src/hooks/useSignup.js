import { useState } from "react"
import toast from "react-hot-toast";

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !password || !username || !confirmPassword || !gender) {
        toast.error('Please fill all the fields');
        return false;
    }

    if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        return false;
    }

    if (password.length < 6) {
        toast.error('Passwords do not match');
        return false;
    }
    return true;
}

const useSignup = () => {

    const [loading, setLoading] = useState(false);

    const signup = async (fullName, username, password, confirmPassword, gender) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
        if (!success) {
            return;
        }

        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
            });
            const data = await res.json();
            console.log(data);
        }
        catch (err) {
            toast.error(err.message);
        }
        finally {
            setLoading(false);
        }
    }
    return { loading, signup };
}

export default useSignup;
