import { auth, signOut } from "../../firebase";
import { useNavigate } from "react-router-dom";
type LogoutProps = {
  setIsAuth: (bool: boolean) => void;
};
export const Logout: React.FC<LogoutProps> = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    // ログアウト
    signOut(auth)
      .then(() => {
        localStorage.clear();
        setIsAuth(false);
        console.log("ログアウト成功");
        navigate("/");
      })
      .catch((error) => {
        console.log("ログアウト失敗:", error);
      });
  };
  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};
