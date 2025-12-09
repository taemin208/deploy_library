import { Link } from "react-router-dom";

export default function Sidebar() {
  const sidebarStyle = {
    display: "flex",
    flexDirection: "column",
    width: "180px",
    padding: "20px",
    gap: "15px",
    backgroundColor: "black",
    color: "white",
    borderRight: "1px solid #ddd",
    height: "100vh",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    padding: "8px 0",
  };

  // 🔐 관리자 로그인 여부 확인
  const accessToken = localStorage.getItem("accessToken");

  return (
    <div style={sidebarStyle}>
      <Link to="/" style={linkStyle}>
        도서목록
      </Link>

      {/* ⭐ accessToken 존재할 때만 도서 추가 버튼 보여주기 */}
      {accessToken && (
        <Link to="/add-book" style={linkStyle}>
          도서 추가
        </Link>
      )}
    </div>
  );
}
