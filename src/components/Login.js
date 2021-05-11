import "./Login.css"
import {Button} from "@material-ui/core";
import { auth, provider } from "../firebase";
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";

const Login = () => {
    const [state, dispatch] = useStateValue()
    console.log(state)

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            }).catch(error => alert(error.message))
    }

    return (
        <div className={"login"}>
            <div className="login__logo">
                {/*<img src="" alt=""/>*/}
                {/*<img src="" alt=""/>*/}
                <h1>Another social media</h1>
                <br/>
                <h3>Big project that I'm making alone so it's not ready yet</h3>
            </div>

            <Button type={"submit"} onClick={signIn}>
                Sign in with Google
            </Button>
        </div>
    )
}

export default Login