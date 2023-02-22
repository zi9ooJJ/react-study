import { useState, useEffect } from "react";
import axios from "axios";

export default function UserInfo() {
  // 1. axios로 사용자 정보 요청
  // 2. 불러온 사용자 정보를 user에 저장
  // 3. 이후 loading false가 되면 사용자 정보를 보여줌.
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // http 요청
    // localhost://3000
    axios
      .get("/api/user")
      .then((res) => {
        console.log("axios.get");
        setUser(res.data);
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
      })
      .finally(() => {
        console.log("finally");
        setLoading(false);
      });
    console.log("useEffect");
  }, []);

  // loading
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>사용자 정보 페이지</h1>
      <h1>이름:{user.userName}</h1>
      <h1>나이:{user.age}</h1>
    </div>
  );
}
