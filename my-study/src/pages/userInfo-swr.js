import axios from "axios";
import useSWR from "swr";

async function fetchUser() {
  return (await axios.get("/api/user")).data;
}

export default function UserInfo() {
  // async function useAuthUser() {
  //   const [user, setUser] = useState();
  //   const [error, setError] = useState();
  //   const [loading, setLoading] = useState();
  //   useEffect(() => {
  //     // ...
  //   });
  //   return { user, loading, error };
  // }
  const { data: user, isLoading } = useSWR("user", fetchUser);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>사용자 정보 페이지</h1>
      <h1>이름:{user.userName}</h1>
      <h1>나이:{user.age}</h1>
    </div>
  );
}
